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

// 14) 선택한 픽업 시간이 이 분(分)만큼 지나도 수령하지 않으면
//     예약이 '취소됨'으로 바뀌고 전화번호가 삭제됩니다.
export const CANCEL_GRACE_MIN = 60;
