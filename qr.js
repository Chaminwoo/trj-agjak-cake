// ============================================================
//  QR 코드 생성기 (외부 라이브러리 없이 동작)
//  바이트 모드 / 오류정정 레벨 M / 버전 1~10 자동 선택
//  qrMatrix(text) -> boolean[][]  (true = 검은 칸)
//  drawQR(canvas, text, opts)     -> 캔버스에 그리기
// ============================================================

/* ---------- GF(256) ---------- */
const EXP = new Uint8Array(512), LOG = new Uint8Array(256);
(function () {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP[i] = x; LOG[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;
  }
  for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
})();
const gmul = (a, b) => (a === 0 || b === 0) ? 0 : EXP[LOG[a] + LOG[b]];

function rsGenPoly(deg) {
  let p = [1];
  for (let i = 0; i < deg; i++) {
    const np = new Array(p.length + 1).fill(0);
    for (let j = 0; j < p.length; j++) {
      np[j] ^= gmul(p[j], 1);
      np[j + 1] ^= gmul(p[j], EXP[i]);
    }
    p = np;
  }
  return p;
}

function rsEncode(data, ecLen) {
  const gen = rsGenPoly(ecLen);
  const res = new Uint8Array(ecLen);
  for (let i = 0; i < data.length; i++) {
    const factor = data[i] ^ res[0];
    res.copyWithin(0, 1); res[ecLen - 1] = 0;
    if (factor !== 0) for (let j = 0; j < ecLen; j++) res[j] ^= gmul(gen[j + 1], factor);
  }
  return res;
}

/* ---------- 버전 테이블 (오류정정 M) ---------- */
// [총 코드워드, 블록당 EC 코드워드, [ [블록수, 데이터코드워드], ... ]]
const VER = {
  1:  [26,  10, [[1, 16]]],
  2:  [44,  16, [[1, 28]]],
  3:  [70,  26, [[1, 44]]],
  4:  [100, 18, [[2, 32]]],
  5:  [134, 24, [[2, 43]]],
  6:  [172, 16, [[4, 27]]],
  7:  [196, 18, [[4, 31]]],
  8:  [242, 22, [[2, 38], [2, 39]]],
  9:  [292, 22, [[3, 36], [2, 37]]],
  10: [346, 26, [[4, 43], [1, 44]]],
};
const ALIGN = {
  1: [], 2: [6, 18], 3: [6, 22], 4: [6, 26], 5: [6, 30],
  6: [6, 34], 7: [6, 22, 38], 8: [6, 24, 42], 9: [6, 26, 46], 10: [6, 28, 50],
};

function utf8Bytes(str) {
  const out = [];
  for (const ch of str) {
    let c = ch.codePointAt(0);
    if (c < 0x80) out.push(c);
    else if (c < 0x800) out.push(0xc0 | (c >> 6), 0x80 | (c & 63));
    else if (c < 0x10000) out.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
    else out.push(0xf0 | (c >> 18), 0x80 | ((c >> 12) & 63), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
  }
  return out;
}

function pickVersion(byteLen) {
  for (let v = 1; v <= 10; v++) {
    const [total, ec, groups] = VER[v];
    const dataCw = total - ec * groups.reduce((s, g) => s + g[0], 0);
    const cci = v < 10 ? 8 : 16;
    const needBits = 4 + cci + byteLen * 8;
    if (needBits <= dataCw * 8) return v;
  }
  throw new Error('데이터가 너무 깁니다 (QR 버전 10 초과)');
}

/* ---------- 비트 스트림 → 최종 코드워드 ---------- */
function buildCodewords(text) {
  const bytes = utf8Bytes(text);
  const v = pickVersion(bytes.length);
  const [total, ecLen, groups] = VER[v];
  const nBlocks = groups.reduce((s, g) => s + g[0], 0);
  const dataCw = total - ecLen * nBlocks;

  const bits = [];
  const push = (val, len) => { for (let i = len - 1; i >= 0; i--) bits.push((val >> i) & 1); };
  push(0b0100, 4);                       // 바이트 모드
  push(bytes.length, v < 10 ? 8 : 16);   // 문자 수
  for (const b of bytes) push(b, 8);
  // 종단자
  for (let i = 0; i < 4 && bits.length < dataCw * 8; i++) bits.push(0);
  while (bits.length % 8 !== 0) bits.push(0);
  // 패딩
  const pads = [0xec, 0x11];
  let pi = 0;
  while (bits.length < dataCw * 8) { push(pads[pi++ % 2], 8); }

  const cw = new Uint8Array(dataCw);
  for (let i = 0; i < dataCw; i++) {
    let b = 0;
    for (let j = 0; j < 8; j++) b = (b << 1) | bits[i * 8 + j];
    cw[i] = b;
  }

  // 블록 분할
  const dataBlocks = [], ecBlocks = [];
  let off = 0;
  for (const [cnt, len] of groups) {
    for (let i = 0; i < cnt; i++) {
      const d = cw.slice(off, off + len); off += len;
      dataBlocks.push(d);
      ecBlocks.push(rsEncode(d, ecLen));
    }
  }
  // 인터리브
  const out = [];
  const maxData = Math.max(...dataBlocks.map(b => b.length));
  for (let i = 0; i < maxData; i++)
    for (const b of dataBlocks) if (i < b.length) out.push(b[i]);
  for (let i = 0; i < ecLen; i++)
    for (const b of ecBlocks) out.push(b[i]);

  return { v, codewords: out };
}

/* ---------- 매트릭스 ---------- */
function newMatrix(size) {
  const m = [], r = [];
  for (let i = 0; i < size; i++) {
    m.push(new Array(size).fill(null));   // null = 미설정
    r.push(new Array(size).fill(false));  // true = 기능 패턴(마스크 제외)
  }
  return { m, r };
}

function placeFinder(m, r, size, row, col) {
  for (let i = -1; i <= 7; i++) {
    for (let j = -1; j <= 7; j++) {
      const y = row + i, x = col + j;
      if (y < 0 || y >= size || x < 0 || x >= size) continue;
      const inner = (i >= 0 && i <= 6 && (j === 0 || j === 6)) ||
                    (j >= 0 && j <= 6 && (i === 0 || i === 6)) ||
                    (i >= 2 && i <= 4 && j >= 2 && j <= 4);
      m[y][x] = inner; r[y][x] = true;
    }
  }
}

function placeAlign(m, r, v) {
  const cs = ALIGN[v];
  for (const cy of cs) for (const cx of cs) {
    // 파인더와 겹치는 위치 제외
    if (r[cy][cx]) continue;
    for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) {
      const on = Math.max(Math.abs(i), Math.abs(j)) !== 1;
      m[cy + i][cx + j] = on; r[cy + i][cx + j] = true;
    }
  }
}

function bch(data, poly, polyLen) {
  let d = data << (polyLen - 1);
  const bitLen = n => { let l = 0; while (n) { l++; n >>>= 1; } return l; };
  while (bitLen(d) >= polyLen) d ^= poly << (bitLen(d) - polyLen);
  return d;
}

function formatBits(mask) {
  const data = (0b00 << 3) | mask;            // 레벨 M = 00
  const v = ((data << 10) | bch(data, 0b10100110111, 11)) ^ 0b101010000010010;
  return v;
}
function versionBits(v) {
  return (v << 12) | bch(v, 0b1111100100101, 13);
}

function buildMatrix(text) {
  const { v, codewords } = buildCodewords(text);
  const size = v * 4 + 17;
  const { m, r } = newMatrix(size);

  placeFinder(m, r, size, 0, 0);
  placeFinder(m, r, size, 0, size - 7);
  placeFinder(m, r, size, size - 7, 0);
  placeAlign(m, r, v);

  // 타이밍 패턴
  for (let i = 8; i < size - 8; i++) {
    if (!r[6][i]) { m[6][i] = i % 2 === 0; r[6][i] = true; }
    if (!r[i][6]) { m[i][6] = i % 2 === 0; r[i][6] = true; }
  }
  // 고정 검은 모듈
  m[size - 8][8] = true; r[size - 8][8] = true;

  // 포맷 정보 영역 예약
  for (let i = 0; i <= 8; i++) {
    if (!r[8][i]) { r[8][i] = true; m[8][i] = false; }
    if (!r[i][8]) { r[i][8] = true; m[i][8] = false; }
  }
  for (let i = 0; i < 8; i++) {
    if (!r[8][size - 1 - i]) { r[8][size - 1 - i] = true; m[8][size - 1 - i] = false; }
    if (!r[size - 1 - i][8]) { r[size - 1 - i][8] = true; m[size - 1 - i][8] = false; }
  }
  // 버전 정보 영역 예약 (v>=7)
  if (v >= 7) {
    for (let i = 0; i < 6; i++) for (let j = 0; j < 3; j++) {
      r[size - 11 + j][i] = true; m[size - 11 + j][i] = false;
      r[i][size - 11 + j] = true; m[i][size - 11 + j] = false;
    }
  }

  // 데이터 배치 (지그재그)
  const bitsArr = [];
  for (const b of codewords) for (let i = 7; i >= 0; i--) bitsArr.push((b >> i) & 1);
  let bi = 0, up = true;
  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--;               // 세로 타이밍 열 건너뛰기
    for (let n = 0; n < size; n++) {
      const row = up ? size - 1 - n : n;
      for (let k = 0; k < 2; k++) {
        const c = col - k;
        if (r[row][c]) continue;
        m[row][c] = bi < bitsArr.length ? bitsArr[bi] === 1 : false;
        bi++;
      }
    }
    up = !up;
  }

  // 마스크 선택
  const maskFn = [
    (i, j) => (i + j) % 2 === 0,
    (i, j) => i % 2 === 0,
    (i, j) => j % 3 === 0,
    (i, j) => (i + j) % 3 === 0,
    (i, j) => (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0,
    (i, j) => ((i * j) % 2) + ((i * j) % 3) === 0,
    (i, j) => (((i * j) % 2) + ((i * j) % 3)) % 2 === 0,
    (i, j) => (((i + j) % 2) + ((i * j) % 3)) % 2 === 0,
  ];

  let best = null, bestScore = Infinity;
  for (let mask = 0; mask < 8; mask++) {
    const t = m.map((row, i) => row.map((val, j) => r[i][j] ? val : (maskFn[mask](i, j) ? !val : val)));
    applyFormat(t, size, mask);
    if (v >= 7) applyVersion(t, size, v);
    const s = penalty(t, size);
    if (s < bestScore) { bestScore = s; best = t; }
  }
  return best;
}

function applyFormat(t, size, mask) {
  const f = formatBits(mask);
  const bit = i => ((f >> i) & 1) === 1;
  // 좌상단
  for (let i = 0; i <= 5; i++) t[8][i] = bit(14 - i);
  t[8][7] = bit(8); t[8][8] = bit(7); t[7][8] = bit(6);
  for (let i = 9; i <= 14; i++) t[14 - i][8] = bit(14 - i);
  // 우측 / 하단
  for (let i = 0; i <= 7; i++) t[size - 1 - i][8] = bit(14 - i);
  for (let i = 8; i <= 14; i++) t[8][size - 15 + i] = bit(14 - i);
  t[size - 8][8] = true;
}

function applyVersion(t, size, v) {
  const bits = versionBits(v);
  for (let i = 0; i < 18; i++) {
    const on = ((bits >> i) & 1) === 1;
    const a = Math.floor(i / 3), b = i % 3;
    t[size - 11 + b][a] = on;
    t[a][size - 11 + b] = on;
  }
}

function penalty(t, size) {
  let score = 0;
  // 규칙 1: 같은 색 연속 5칸 이상
  for (let i = 0; i < size; i++) {
    for (const dir of [0, 1]) {
      let run = 1, prev = dir ? t[0][i] : t[i][0];
      for (let j = 1; j < size; j++) {
        const cur = dir ? t[j][i] : t[i][j];
        if (cur === prev) run++;
        else { if (run >= 5) score += 3 + (run - 5); run = 1; prev = cur; }
      }
      if (run >= 5) score += 3 + (run - 5);
    }
  }
  // 규칙 2: 2x2 동색 블록
  for (let i = 0; i < size - 1; i++) for (let j = 0; j < size - 1; j++) {
    const a = t[i][j];
    if (a === t[i][j + 1] && a === t[i + 1][j] && a === t[i + 1][j + 1]) score += 3;
  }
  // 규칙 3: 1:1:3:1:1 패턴 + 4칸 여백
  const p1 = [true, false, true, true, true, false, true, false, false, false, false];
  const p2 = [false, false, false, false, true, false, true, true, true, false, true];
  const match = (arr, pat) => pat.every((v, k) => arr[k] === v);
  for (let i = 0; i < size; i++) for (let j = 0; j <= size - 11; j++) {
    const row = [], col = [];
    for (let k = 0; k < 11; k++) { row.push(t[i][j + k]); col.push(t[j + k][i]); }
    if (match(row, p1) || match(row, p2)) score += 40;
    if (match(col, p1) || match(col, p2)) score += 40;
  }
  // 규칙 4: 흑백 비율
  let dark = 0;
  for (let i = 0; i < size; i++) for (let j = 0; j < size; j++) if (t[i][j]) dark++;
  const pct = (dark * 100) / (size * size);
  score += Math.floor(Math.abs(pct - 50) / 5) * 10;
  return score;
}

/* ---------- 공개 API ---------- */
export function qrMatrix(text) { return buildMatrix(text); }

export function drawQR(canvas, text, opts = {}) {
  const { size = 260, margin = 4, dark = '#111111', light = '#FFFFFF' } = opts;
  const m = buildMatrix(text);
  const n = m.length;
  const scale = Math.max(1, Math.floor(size / (n + margin * 2)));
  const px = (n + margin * 2) * scale;
  const dpr = (typeof window !== 'undefined' && window.devicePixelRatio) || 1;
  canvas.width = px * dpr; canvas.height = px * dpr;
  canvas.style.width = px + 'px'; canvas.style.height = px + 'px';
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = light; ctx.fillRect(0, 0, px, px);
  ctx.fillStyle = dark;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    if (m[i][j]) ctx.fillRect((j + margin) * scale, (i + margin) * scale, scale, scale);
  }
  return canvas;
}
