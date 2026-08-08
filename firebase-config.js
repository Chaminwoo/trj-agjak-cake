// ============================================================
//  Firebase 설정 파일  (여기 한 곳만 수정하면 됩니다)
//  자세한 방법은 SETUP.md 를 참고하세요.
// ============================================================

export const firebaseConfig = {
  apiKey: "AIzaSyCeLDIlAqbittLwMpr0HjZuC5cdfzsxZO4",
  authDomain: "trj-ticketing.firebaseapp.com",
  projectId: "trj-ticketing",
  storageBucket: "trj-ticketing.firebasestorage.app",
  messagingSenderId: "760790862630",
  appId: "1:760790862630:web:7f41c18781ee7705e20fe7",
  measurementId: "G-CK8GBBX333",
};
// 1-1) 고객용 사이트 주소 (QR 코드가 가리킬 주소)
//     실제 배포한 웹주소를 끝에 슬래시(/)까지 넣어 적어주세요.
//     주소가 바뀌면 여기만 고치고 관리자 화면에서 QR을 다시 저장·인쇄하면 됩니다.
export const CUSTOMER_SITE_URL = "https://trj-agjak.chaalsdn0217.workers.dev/";

// 1-2) 매장(점포) 목록  ★ 매장을 늘릴 때 여기만 추가하면 됩니다
//     키(gangnam)가 데이터 저장 위치이자 주소에 쓰이는 값입니다.
//       · 번호표 저장 위치 : tickets / {점포키} / {날짜} / {번호표}
//       · 손님 주소        : https://주소/{점포키}   (예: /gangnam)
//       · adminIds        : 이 아이디로 로그인하면 해당 점포 데이터만 보입니다
export const STORES = {
  gangnam: {
    name: "강남직영점",
    adminIds: ["staff"],
  },
  // 예시) 매장을 늘릴 때는 아래처럼 한 덩어리를 복사해서 추가하세요.
  // hongdae: { name: "홍대점", adminIds: ["hongdae"] },
};

// 주소에 점포가 없을 때 사용할 기본 점포
export const DEFAULT_STORE = "gangnam";

// 관리자 아이디로 점포를 찾습니다. (없으면 기본 점포)
export function storeOfAdminId(id) {
  const key = String(id || "")
    .trim()
    .toLowerCase();
  for (const [store, cfg] of Object.entries(STORES))
    if ((cfg.adminIds || []).some((x) => String(x).toLowerCase() === key))
      return store;
  return DEFAULT_STORE;
}

// 2) 매장 이름 (화면 상단에 표시됩니다)
export const STORE_NAME = "TRJ";

// 3) 수령(픽업) 가능 시작 시간 — 실제로 자동 수령 처리가 되는 시각입니다.
//    기본 13.5 = 오후 1시 30분. (혹시 케이크가 미리 준비될 경우를 대비해
//    여유를 둔 값이며, 손님 화면에는 이 값과 상관없이 항상 "오후 2시"로 표시됩니다.
//    표시 문구를 바꾸려면 i18n.js 의 noteNew / noteWaiting / footer 를 수정하세요.)
//    소수점도 가능합니다. (13.5 = 1시 30분, 14.25 = 2시 15분 등)
export const PICKUP_HOUR = 13.5;

// 4) 관리자 로그인
//    비밀번호는 이 파일이 아니라 Firebase Authentication 에서 관리합니다.
//    (Firebase 콘솔 → Authentication → 이메일/비밀번호 사용 설정 후 계정 생성)
//    비밀번호를 파일에 적어두면 사이트를 여는 누구나 볼 수 있어 위험합니다.
//
//    화면에는 "아이디"만 입력하면 되도록, 아래 도메인을 뒤에 붙여
//    내부적으로 이메일 형식(아이디+도메인)을 만들어 로그인합니다.
//    Firebase 콘솔에서 계정을 만들 때도 "아이디+이 도메인"을 이메일로 넣어주세요.
//    예) 아이디를 "staff"로 정했다면 → Firebase 콘솔 이메일칸에 staff@trj-agjak.local
export const ADMIN_ID_DOMAIN = "@trj-agjak.local";

// 5) 문서 ID 를 만들 때 섞는 값 (아무 문자열이나 길게).
//    번호표 문서 ID 에 전화번호가 그대로 드러나지 않도록 하는 용도입니다.
//    한 번 정한 뒤에는 바꾸지 마세요. (바꾸면 기존 번호표를 못 찾습니다)
export const ID_SALT = "trj-agjak-2026-a7f3c1";

// 6) 개인정보 보유 기간(일). 이 기간이 지난 번호표는
//    관리자 페이지 접속 시 이름·전화번호가 자동으로 가려집니다.
export const RETENTION_DAYS = 30;

// 7) 케이크 종류 (순서대로 화면에 표시됩니다)
export const FRUITS = ["peach", "mango", "lemon", "melon"];

// 8) 종류별 하루 최대 수량 — 이 수량이 차면 자동으로 마감됩니다.
export const FRUIT_LIMITS = {
  peach: 52,
  mango: 52,
  lemon: 28,
  melon: 28,
};

// 9) 케이크 1개당 가격 / 종류당 최대 선택 개수
export const CAKE_PRICE = 12000;
export const MAX_PER_TYPE = 2;

// 10) 포장(가방) 종류와 가격
//    countable:true   → 터치할 때마다 개수가 늘어납니다.
//    perCakes: 4      → 케이크 4개당 1개씩 선택 가능 (8개 사면 2개까지)
//    requiresCooler   → 보냉팩을 1개 이상 담아야 선택할 수 있습니다.
export const BAGS = [
  { k: "free", price: 0, countable: true },
  { k: "shopping", price: 100, countable: true },
  { k: "cooler", price: 1000, countable: true },
  { k: "icepack", price: 500, countable: true },
  { k: "fruitbox", price: 3000, countable: true, perCakes: 4 },
];

// 11) 보냉팩 1개에 담을 수 있는 케이크 개수 (안내 문구 계산용)
export const COOLER_CAPACITY = 2;

// 12) 보냉팩 1개에 기본으로 동봉되는 아이스팩 개수 (안내 문구용)
export const ICEPACK_INCLUDED = 2;

// 13) 픽업 시간 선택 범위 (24시간 기준) 와 간격(분)
//     기본: 오후 2시 ~ 오후 7시, 30분 간격
export const PICKUP_SLOT_START = 14;
export const PICKUP_SLOT_END = 19;
export const PICKUP_SLOT_STEP_MIN = 30;

// 13-1) 이 시각 이후에는 새 예약을 받지 않습니다. (기존 번호표 조회는 계속 가능)
//      기본 19 = 오후 7시. 소수점도 가능합니다. (19.5 = 7시 30분)
export const RESERVE_CUTOFF_HOUR = 19;

// 13-2) 미수령 예약을 일괄 정리해 현장 판매로 돌리는 시각 (안내 문구용)
export const ONSITE_SALE_HOUR = 20;

// 13-3) 그날 예약자 전화번호를 일괄 파기하는 시각 (24시간 기준, 기본 22 = 밤 10시)
//      관리자 페이지가 열려 있거나 이 시각 이후에 접속하면 자동으로 실행되고,
//      마감 관리 화면의 '전화번호 일괄 파기' 버튼으로 즉시 실행할 수도 있습니다.
export const PURGE_HOUR = 22;

// 14) 선택한 픽업 시간이 이 분(分)만큼 지나도 수령하지 않으면
//     예약이 '취소됨'으로 바뀌고, 그 수량은 다시 예약 가능해집니다.
//     (전화번호는 PURGE_HOUR 에 그날 것을 한꺼번에 파기합니다)
export const CANCEL_GRACE_MIN = 60;
