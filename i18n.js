// ============================================================
//  다국어 문구 (한국어 / English / 日本語 / 中文)
//  휴대폰 언어 설정에 따라 자동으로 선택됩니다.
// ============================================================

export const MESSAGES = {
  ko: {
    htmlLang: "ko",
    pageTitle: "번호표",
    codeTitleNew: "사용하실 암호를 입력해 주세요",
    userCodeLabel: "사용자 지정 암호",
    userCodePlaceholder: "영어 혹은 숫자 조합 4~10자리 (예: ABB001)",
    userCodeInvalid: (min, max) =>
      `영문 대문자와 숫자로 ${min}~${max}자리를 입력해 주세요.`,
    userCodeTaken: "이미 다른 손님이 사용 중입니다. 다른 암호를 입력해 주세요.",
    userCodeHelp:
      "처음이시면 원하시는 암호를 정해 주세요. <br>이미 예약하셨다면 같은 암호로 번호표를 확인하실 수 있습니다.",
    btnReserve: "예약하기",
    confirm: "확인",
    infoTitle: "정보를 입력해 주세요",

    typeLabel: "종류 (여러 개 선택 가능)",
    typeRequired: "종류를 선택해 주세요.",
    peach: "복숭아",
    mango: "망고",
    lemon: "레몬",
    melon: "메론",
    cakePriceNote: (p, max) =>
      `케이크는 개당 ${p} 이며,<br>종류당 최대 ${max}개까지 선택하실 수 있습니다.`,
    estTotal: "예상 결제 금액",
    next: "다음",

    pickupTimeLabel: "픽업 시간 선택",
    pickupTimeChoose: "시간 선택",
    pickupTimeRequired: "픽업 시간을 선택해 주세요.",
    pickupTimeNote: (m) =>
      `선택하신 시간에서 ${m}분이 지나면<br>예약이 자동으로 취소됩니다.`,

    bagLabel: "포장 선택",
    bagReset: "선택 초기화",
    bagFree: "무상봉투",
    bagShopping: "쇼핑백",
    bagCooler: "보냉팩",
    bagIcepack: "아이스팩 추가",
    bagFruitbox: "과일상자",
    bagNone: "선택 안 함",
    freeText: "무료",
    priceFmt: (n) => `${n.toLocaleString("ko-KR")}원`,
    bagNoteFruitbox: (per) =>
      `과일상자는 케이크 ${per}개당 1개씩<br>선택하실 수 있습니다.`,
    bagNoteIcepack: (n) =>
      `보냉팩 1개당 아이스팩 ${n}개가 기본 동봉되며,<br>부족하시면 추가로 담으실 수 있습니다. (개당 500원)`,
    bagNoteCooler: (cap) =>
      `보냉팩 1개에는 케이크가 최대 ${cap}개까지 들어갑니다. <br>가방 추가를 추천드려요.`,

    codeLabel: "오늘의 입장코드",
    codePlaceholder: "4자리 숫자",
    codeRequired: "오늘의 입장코드를 입력해 주세요.",
    codeWrong: "입장코드가 올바르지 않습니다. 매장 직원에게 문의해 주세요.",

    issue: "번호표 받기",
    back: "이전",
    reset: "처음으로",
    cancel: "취소",
    fieldCode: "암호",
    fieldType: "종류",
    fieldBag: "포장",
    fieldPickup: "픽업 시간",
    fieldTime: "발급 시간",
    stateNew: "발급 완료",
    stateWaiting: "수령 대기",
    stateReceived: "수령 완료",
    stateAlready: "이미 수령하셨습니다",
    stateCancelled: "예약이 취소되었습니다",
    noteNew: (h) =>
      `오후 2시부터 픽업 가능합니다.<br>이 번호표는 강남직영점에서만 사용 가능합니다.`,
    noteWaiting: (h) => `오후 2시부터 수령하실 수 있습니다.`,
    noteReceived: "수령 처리되었습니다. 감사합니다.",
    noteAlready: (t) =>
      `이미 수령이 완료된 번호표입니다.${t ? ` (수령 ${t})` : ""}`,
    noteCancelled: "픽업 시간이 지나 예약이 자동으로 취소되었습니다.",
    footer: (h) => `케이크를 받으신 뒤 '픽업 완료'를 눌러 주세요.`,

    pickupDone: "픽업 완료",
    pickupNotYet: "오후 2시부터 픽업 완료 처리가 가능합니다.",
    pickupConfirmTitle: "픽업을 완료할까요?",
    pickupConfirmMsg:
      "케이크를 받으신 뒤에 눌러 주세요. 완료 후에는 되돌릴 수 없습니다.",

    errorGeneric: "오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
    errorIssue: "발급 중 오류가 발생했습니다. 다시 시도해 주세요.",
    closedTitle: "금일은 모두 마감되었습니다.",
    closedBody: "매일 오전 8시에 예약 가능하니 다음에 찾아주세요.",
    invalidStoreTitle: "실제 매장에서 QR을 찍으셨나요?",
    invalidStoreBody: "직원에게 QR코드를 확인받으세요!",
    typeClosedError: "선택하신 종류는 마감되었습니다. 다시 선택해 주세요.",
    soldOutBadge: "마감",

    // ---- 공지 문구 ----
    hourFmt: (h) => {
      const hh = Math.floor(h),
        mm = Math.round((h - hh) * 60);
      const ap = hh < 12 ? "오전" : "오후";
      const h12 = hh % 12 === 0 ? 12 : hh % 12;
      return `${ap} ${h12}시${mm ? ` ${mm}분` : ""}`;
    },
    noticeMaxPerPerson: (total, per) =>
      `1인당 총 ${total}개까지 구매하실 수 있습니다. (품목별 ${per}개씩)`,
    noticeShowScreen: "픽업 시 이 예약 화면을 직원에게 보여 주세요.",
    noticeSoldOut: "금일 수량은 마감되었습니다.",
    fruitCount: (name, n) => `${name} ${n}개`,
    noticeRemainList: (h, list) => `${h} 이후 남은 케이크 : ${list}`,
    noticeRemainCaution:
      "현장 개수는 차이가 있을 수 있습니다. 매장 직원에게 문의하세요.",
    bagNoteFruitboxIcepack:
      "과일상자에는 아이스팩을 동봉할 수 없습니다. 아이스팩은 함께 고르신 다른 포장에만 담아 드립니다.",
    noticeCutoff: (h) =>
      `${h} 이후에는 예약이 마감되어 현장 구매만 가능합니다.`,
    noticeOnsite: (h) => `${h} 이후 취소된 예약분은 매장에서 현장 판매합니다.`,
    lookupOnly:
      "이미 발급받으신 번호표는 암호를 입력하면 확인하실 수 있습니다.",
  },

  en: {
    htmlLang: "en",
    pageTitle: "Ticket",
    codeTitleNew: "Enter your code",
    userCodeLabel: "Your code",
    userCodePlaceholder: "e.g. ABB990",
    userCodeInvalid: (min, max) =>
      `Please use ${min}-${max} characters, capital letters and numbers only.`,
    userCodeTaken:
      "This code is already in use by another guest. Please choose a different one.",
    userCodeHelp:
      "First time? Choose any code you like. Already reserved? Enter the same code to see your ticket.",
    btnReserve: "Reserve",
    confirm: "Continue",
    infoTitle: "Enter your details",
    typeLabel: "Choose one or more",
    typeRequired: "Please select at least one.",
    peach: "Peach",
    mango: "Mango",
    lemon: "Lemon",
    melon: "Melon",
    cakePriceNote: (p, max) =>
      `Each cake is ${p}.<br>Up to ${max} per flavour.`,
    estTotal: "Estimated total",
    next: "Next",

    pickupTimeLabel: "Choose a pickup time",
    pickupTimeChoose: "Select time",
    pickupTimeRequired: "Please choose a pickup time.",
    pickupTimeNote: (m) =>
      `Your reservation is cancelled automatically<br>${m} minutes after the time you choose.`,

    bagLabel: "Packaging",
    bagReset: "Clear",
    bagFree: "Paper bag",
    bagShopping: "Shopping bag",
    bagCooler: "Cooler pack",
    bagIcepack: "Extra ice pack",
    bagFruitbox: "Fruit box",
    bagNone: "None",
    freeText: "Free",
    priceFmt: (n) => `KRW ${n.toLocaleString("en-US")}`,
    bagNoteFruitbox: (per) => `One fruit box is available<br>per ${per} cakes.`,
    bagNoteIcepack: (n) =>
      `${n} ice packs are included with each cooler pack.<br>You may add more if you need them.`,
    bagNoteCooler: (cap) =>
      `One cooler pack holds up to ${cap} cakes.<br>We recommend adding one more.`,

    codeLabel: "Today's entry code",
    codePlaceholder: "4 digits",
    codeRequired: "Please enter today's entry code.",
    codeWrong: "That entry code is not correct. Please ask our staff.",

    issue: "Get ticket",
    back: "Back",
    reset: "Start over",
    cancel: "Cancel",
    fieldCode: "Code",
    fieldType: "Item",
    fieldBag: "Packaging",
    fieldPickup: "Pickup time",
    fieldTime: "Issued at",
    stateNew: "Ticket issued",
    stateWaiting: "Not yet ready",
    stateReceived: "Picked up",
    stateAlready: "Already picked up",
    stateCancelled: "Reservation cancelled",
    noteNew: (h) =>
      `Pickup is available from 2:00 PM.<br>This ticket is valid only at the Gangnam store.`,
    noteWaiting: (h) => `Pickup is available from 2:00 PM.`,
    noteReceived: "Your pickup is complete. Thank you!",
    noteAlready: (t) =>
      `This ticket has already been picked up.${t ? ` (${t})` : ""}`,
    noteCancelled:
      "Your reservation was cancelled automatically because the pickup time passed.",
    footer: (h) => `Please tap 'Pickup complete' after receiving your cake.`,

    pickupDone: "Pickup complete",
    pickupNotYet: "Pickup can be completed from 2:00 PM.",
    pickupConfirmTitle: "Complete pickup?",
    pickupConfirmMsg:
      "Please tap this only after receiving your cake. This cannot be undone.",

    errorGeneric: "Something went wrong. Please try again.",
    errorIssue: "Could not issue the ticket. Please try again.",
    closedTitle: "Fully booked for today.",
    closedBody: "Reservations open daily at 8:00 AM. Please visit us again.",
    invalidStoreTitle: "Did you scan this QR code in store?",
    invalidStoreBody: "Please ask our staff to check the QR code.",
    typeClosedError: "That item is no longer available. Please choose again.",
    soldOutBadge: "Sold out",

    // ---- Notices ----
    hourFmt: (h) => {
      const hh = Math.floor(h),
        mm = Math.round((h - hh) * 60);
      const ap = hh < 12 ? "AM" : "PM";
      const h12 = hh % 12 === 0 ? 12 : hh % 12;
      return `${h12}:${String(mm).padStart(2, "0")} ${ap}`;
    },
    noticeMaxPerPerson: (total, per) =>
      `Up to ${total} cakes per person (${per} of each flavour).`,
    noticeShowScreen: "Please show this screen to our staff at pickup.",
    noticeSoldOut: "Today's stock is sold out.",
    fruitCount: (name, n) => `${name} ${n}`,
    noticeRemainList: (h, list) => `Cakes left after ${h} : ${list}`,
    noticeRemainCaution:
      "In-store stock may differ. Please ask our staff.",
    bagNoteFruitboxIcepack:
      "Ice packs cannot be placed in a fruit box. They will be added only to the other bag you chose.",
    noticeCutoff: (h) =>
      `Reservations close at ${h}. After that, in-store purchase only.`,
    noticeOnsite: (h) => `Reservations cancelled after ${h} are sold in store.`,
    lookupOnly: "If you already have a ticket, enter your code to view it.",
  },

  ja: {
    htmlLang: "ja",
    pageTitle: "整理券",
    codeTitleNew: "暗証番号をご入力ください",
    userCodeLabel: "暗証番号",
    userCodePlaceholder: "例) ABB990",
    userCodeInvalid: (min, max) =>
      `英大文字と数字で${min}〜${max}文字を入力してください。`,
    userCodeTaken:
      "この暗証番号はすでに他のお客様が使用中です。別の番号をご入力ください。",
    userCodeHelp:
      "初めての方はご希望の暗証番号をお決めください。ご予約済みの方は同じ暗証番号で整理券を確認できます。",
    btnReserve: "予約する",
    confirm: "確認",
    infoTitle: "情報を入力してください",
    typeLabel: "種類（複数選択可）",
    typeRequired: "種類を選択してください。",
    peach: "ピーチ",
    mango: "マンゴー",
    lemon: "レモン",
    melon: "メロン",
    cakePriceNote: (p, max) =>
      `ケーキは1個 ${p} です。<br>種類ごとに最大${max}個まで選べます。`,
    estTotal: "お支払い予定金額",
    next: "次へ",

    pickupTimeLabel: "受取時間の選択",
    pickupTimeChoose: "時間を選ぶ",
    pickupTimeRequired: "受取時間を選択してください。",
    pickupTimeNote: (m) =>
      `選択した時間から${m}分が過ぎると<br>予約は自動的に取り消されます。`,

    bagLabel: "包装の選択",
    bagReset: "選択をリセット",
    bagFree: "無料袋",
    bagShopping: "ショッピングバッグ",
    bagCooler: "保冷パック",
    bagIcepack: "保冷剤の追加",
    bagFruitbox: "フルーツボックス",
    bagNone: "選択なし",
    freeText: "無料",
    priceFmt: (n) => `${n.toLocaleString("ja-JP")}ウォン`,
    bagNoteFruitbox: (per) =>
      `フルーツボックスはケーキ${per}個ごとに<br>1つ選択できます。`,
    bagNoteIcepack: (n) =>
      `保冷パック1つにつき保冷剤${n}個が付属します。<br>足りない場合は追加できます。`,
    bagNoteCooler: (cap) =>
      `保冷パック1つにケーキは最大${cap}個まで入ります。<br>もう1つの追加をおすすめします。`,

    codeLabel: "本日の入場コード",
    codePlaceholder: "4桁の数字",
    codeRequired: "本日の入場コードを入力してください。",
    codeWrong: "入場コードが正しくありません。スタッフにお尋ねください。",

    issue: "整理券を受け取る",
    back: "戻る",
    reset: "最初から",
    cancel: "キャンセル",
    fieldCode: "暗証番号",
    fieldType: "種類",
    fieldBag: "包装",
    fieldPickup: "受取時間",
    fieldTime: "発行時刻",
    stateNew: "発行完了",
    stateWaiting: "受取待ち",
    stateReceived: "受取完了",
    stateAlready: "すでに受け取り済みです",
    stateCancelled: "予約が取り消されました",
    noteNew: (h) =>
      `午後2時から受け取りいただけます。<br>この整理券は江南店でのみご利用いただけます。`,
    noteWaiting: (h) => `午後2時から受け取りいただけます。`,
    noteReceived: "受取が完了しました。ありがとうございました。",
    noteAlready: (t) =>
      `この整理券はすでに受取済みです。${t ? `（${t}）` : ""}`,
    noteCancelled: "受取時間を過ぎたため、予約は自動的に取り消されました。",
    footer: (h) => `ケーキを受け取ったら「受取完了」を押してください。`,

    pickupDone: "受取完了",
    pickupNotYet: "午後2時から受取完了の操作ができます。",
    pickupConfirmTitle: "受取を完了しますか？",
    pickupConfirmMsg:
      "ケーキを受け取ってから押してください。完了後は元に戻せません。",

    errorGeneric:
      "エラーが発生しました。しばらくしてからもう一度お試しください。",
    errorIssue: "発行中にエラーが発生しました。もう一度お試しください。",
    closedTitle: "本日は受付を終了いたしました。",
    closedBody:
      "毎朝8時からご予約いただけます。またのお越しをお待ちしております。",
    invalidStoreTitle: "実際の店舗でQRコードを読み取りましたか？",
    invalidStoreBody: "スタッフにQRコードをご確認いただいてください。",
    typeClosedError: "選択した種類は受付終了しました。もう一度お選びください。",
    soldOutBadge: "終了",

    // ---- お知らせ ----
    hourFmt: (h) => {
      const hh = Math.floor(h),
        mm = Math.round((h - hh) * 60);
      const ap = hh < 12 ? "午前" : "午後";
      const h12 = hh % 12 === 0 ? 12 : hh % 12;
      return `${ap}${h12}時${mm ? `${mm}分` : ""}`;
    },
    noticeMaxPerPerson: (total, per) =>
      `お一人様あたり合計${total}個まで（種類ごとに${per}個ずつ）ご購入いただけます。`,
    noticeShowScreen:
      "お受け取りの際、この予約画面をスタッフにお見せください。",
    noticeSoldOut: "本日の数量は終了いたしました。",
    fruitCount: (name, n) => `${name} ${n}個`,
    noticeRemainList: (h, list) => `${h}以降の残りのケーキ : ${list}`,
    noticeRemainCaution:
      "店頭の在庫とは異なる場合があります。スタッフにお問い合わせください。",
    bagNoteFruitboxIcepack:
      "フルーツボックスには保冷剤を同梱できません。ご一緒に選ばれた他の袋にのみお入れします。",
    noticeCutoff: (h) => `${h}以降は予約を締め切り、店頭販売のみとなります。`,
    noticeOnsite: (h) => `${h}以降のキャンセル分は店頭で販売いたします。`,
    lookupOnly: "すでに発行された整理券は、暗証番号を入力すると確認できます。",
  },

  zh: {
    htmlLang: "zh",
    pageTitle: "号码牌",
    codeTitleNew: "请输入您的专属密码",
    userCodeLabel: "专属密码",
    userCodePlaceholder: "例) ABB990",
    userCodeInvalid: (min, max) =>
      `请输入 ${min}~${max} 位大写英文字母和数字。`,
    userCodeTaken: "该密码已被其他顾客使用，请更换其他密码。",
    userCodeHelp:
      "首次请设置您想要的密码；已预约的顾客输入相同密码即可查看号码牌。",
    btnReserve: "预约",
    confirm: "确认",
    infoTitle: "请填写信息",
    typeLabel: "种类（可多选）",
    typeRequired: "请至少选择一种。",
    peach: "水蜜桃",
    mango: "芒果",
    lemon: "柠檬",
    melon: "甜瓜",
    cakePriceNote: (p, max) => `每个蛋糕 ${p}。<br>每种口味最多可选${max}个。`,
    estTotal: "预计付款金额",
    next: "下一步",

    pickupTimeLabel: "选择取货时间",
    pickupTimeChoose: "选择时间",
    pickupTimeRequired: "请选择取货时间。",
    pickupTimeNote: (m) => `超过所选时间${m}分钟后，<br>预约将自动取消。`,

    bagLabel: "包装选择",
    bagReset: "重置选择",
    bagFree: "免费袋",
    bagShopping: "购物袋",
    bagCooler: "保冷袋",
    bagIcepack: "加购冰袋",
    bagFruitbox: "水果盒",
    bagNone: "未选择",
    freeText: "免费",
    priceFmt: (n) => `${n.toLocaleString("zh-CN")}韩元`,
    bagNoteFruitbox: (per) => `每${per}个蛋糕可选择1个水果盒。`,
    bagNoteIcepack: (n) => `每个保冷袋随附${n}个冰袋，<br>不够时可以另外加购。`,
    bagNoteCooler: (cap) =>
      `一个保冷袋最多可装${cap}个蛋糕，<br>建议再加一个。`,

    codeLabel: "今日入场码",
    codePlaceholder: "4位数字",
    codeRequired: "请输入今日入场码。",
    codeWrong: "入场码不正确，请询问店员。",

    issue: "领取号码牌",
    back: "返回",
    reset: "重新开始",
    cancel: "取消",
    fieldCode: "密码",
    fieldType: "种类",
    fieldBag: "包装",
    fieldPickup: "取货时间",
    fieldTime: "领取时间",
    stateNew: "领取成功",
    stateWaiting: "等待取货",
    stateReceived: "已取货",
    stateAlready: "您已取货",
    stateCancelled: "预约已取消",
    noteNew: (h) => `下午2点起可以取货。<br>此号码牌仅可在江南店使用。`,
    noteWaiting: (h) => `下午2点起可以取货。`,
    noteReceived: "取货已完成，谢谢惠顾。",
    noteAlready: (t) => `该号码牌已完成取货。${t ? `（${t}）` : ""}`,
    noteCancelled: "已超过取货时间，预约已自动取消。",
    footer: (h) => `取到蛋糕后请点击"取货完成"。`,

    pickupDone: "取货完成",
    pickupNotYet: "下午2点起可以进行取货完成操作。",
    pickupConfirmTitle: "确认完成取货？",
    pickupConfirmMsg: "请在拿到蛋糕后再点击。完成后无法撤销。",

    errorGeneric: "发生错误，请稍后再试。",
    errorIssue: "领取失败，请重试。",
    closedTitle: "今日已全部结束。",
    closedBody: "每天上午8点开放预约，欢迎下次光临。",
    invalidStoreTitle: "您是在门店扫描此二维码的吗？",
    invalidStoreBody: "请联系店员确认二维码。",
    typeClosedError: "您选择的种类已停止领取，请重新选择。",
    soldOutBadge: "已结束",

    // ---- 公告 ----
    hourFmt: (h) => {
      const hh = Math.floor(h),
        mm = Math.round((h - hh) * 60);
      const ap = hh < 12 ? "上午" : "下午";
      const h12 = hh % 12 === 0 ? 12 : hh % 12;
      return `${ap}${h12}点${mm ? `${mm}分` : ""}`;
    },
    noticeMaxPerPerson: (total, per) =>
      `每人最多可购买 ${total} 个（每种口味 ${per} 个）。`,
    noticeShowScreen: "取货时请向店员出示此预约页面。",
    noticeSoldOut: "今日数量已售罄。",
    fruitCount: (name, n) => `${name} ${n}个`,
    noticeRemainList: (h, list) => `${h}之后剩余蛋糕 : ${list}`,
    noticeRemainCaution: "现场数量可能有差异，请咨询门店店员。",
    bagNoteFruitboxIcepack:
      "水果盒内无法放置冰袋。冰袋仅会放入您另外选择的包装中。",
    noticeCutoff: (h) => `${h}之后停止预约，仅可现场购买。`,
    noticeOnsite: (h) => `${h}之后取消的预约将在门店现场销售。`,
    lookupOnly: "已领取号码牌的顾客，输入密码即可查看。",
  },
};

// 휴대폰 언어 자동 감지 (지원하지 않는 언어는 영어)
export function detectLang() {
  const list =
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || "en"];
  for (const raw of list) {
    const l = String(raw).toLowerCase();
    if (l.startsWith("ko")) return "ko";
    if (l.startsWith("ja")) return "ja";
    if (l.startsWith("zh")) return "zh";
    if (l.startsWith("en")) return "en";
  }
  return "en";
}

export function getMessages(lang) {
  return MESSAGES[lang] || MESSAGES.en;
}

// 로케일별 시간 표기
export const LOCALE = { ko: "ko-KR", en: "en-US", ja: "ja-JP", zh: "zh-CN" };
