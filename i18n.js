// ============================================================
//  다국어 문구 (한국어 / English / 日本語 / 中文)
//  휴대폰 언어 설정에 따라 자동으로 선택됩니다.
// ============================================================

export const MESSAGES = {
  ko: {
    htmlLang: "ko",
    pageTitle: "번호표",
    phoneTitle: "전화번호를 입력해 주세요",
    phoneLabel: "휴대폰 번호",
    phonePlaceholder: "010-1234-5678",
    phoneInvalid: "올바른 전화번호를 입력해 주세요.",
    confirm: "확인",
    infoTitle: "정보를 입력해 주세요",
    consentLabel: "[필수] 개인정보 수집·이용에 동의합니다.",
    consentView: "전문 보기",
    consentHide: "접기",
    consentBody: (days) =>
      `· 수집 항목 : 휴대폰 번호<br>` +
      `· 이용 목적 : 케이크 예약 번호표 발급 및 수령 확인<br>` +
      `· 보유 기간 : 예약 당일 영업 종료 후 일괄 파기 (미방문 기록은 ${days}일 후 파기)<br>` +
      `· 동의를 거부하실 수 있으나, 거부하시면 번호표 발급이 불가합니다.`,
    consentRequired: "개인정보 수집·이용에 동의해 주세요.",
    privacyLink: "개인정보 처리방침",

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
      `보냉팩 1개당 아이스팩 ${n}개가 기본 동봉되며,<br>부족하시면 추가로 담으실 수 있습니다.`,
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
    pickupDoneNote: (h) => `입력하신 전화번호는 ${h} 이후 일괄 파기됩니다.`,
    pickupNotYet: "오후 2시부터 픽업 완료 처리가 가능합니다.",
    pickupConfirmTitle: "픽업을 완료할까요?",
    pickupConfirmMsg:
      "케이크를 받으신 뒤에 눌러 주세요. 완료 후에는 되돌릴 수 없습니다.",

    errorGeneric: "오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
    errorIssue: "발급 중 오류가 발생했습니다. 다시 시도해 주세요.",
    closedTitle: "금일은 모두 마감되었습니다.",
    closedBody: "매일 오전 8시에 예약 가능하니 다음에 찾아주세요.",
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
    noticePhoneReal: "실제 연락이 가능한 번호로 입력해 주세요.",
    noticeMaxPerPerson: (total, per) =>
      `1인당 총 ${total}개까지 구매하실 수 있습니다. (품목별 ${per}개씩)`,
    noticeShowScreen: "픽업 시 이 예약 화면을 직원에게 보여 주세요.",
    noticeSoldOut: "금일 케이크는 모두 마감되었습니다.",
    noticeCutoff: (h) =>
      `${h} 이후에는 예약이 마감되어 현장 구매만 가능합니다.`,
    noticeOnsite: (h) =>
      `${h} 이후 취소된 예약분은 매장에서 현장 판매합니다.`,
    lookupOnly: "이미 발급받으신 번호표는 번호를 입력하면 확인하실 수 있습니다.",
  },

  en: {
    htmlLang: "en",
    pageTitle: "Ticket",
    phoneTitle: "Enter your phone number",
    phoneLabel: "Phone number",
    phonePlaceholder: "010-1234-5678",
    phoneInvalid: "Please enter a valid phone number.",
    confirm: "Continue",
    infoTitle: "Enter your details",
    consentLabel:
      "[Required] I agree to the collection and use of my personal data.",
    consentView: "View full text",
    consentHide: "Hide",
    consentBody: (days) =>
      `· Data collected : mobile phone number<br>` +
      `· Purpose : issuing and verifying your cake reservation ticket<br>` +
      `· Retention : erased together after closing on the day of your reservation (unvisited records after ${days} days)<br>` +
      `· You may refuse, but a ticket cannot be issued without consent.`,
    consentRequired:
      "Please agree to the collection and use of your personal data.",
    privacyLink: "Privacy Policy",

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
    bagNoteFruitbox: (per) =>
      `One fruit box is available<br>per ${per} cakes.`,
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
    pickupDoneNote: (h) =>
      `Your phone number is erased in a single batch after ${h}.`,
    pickupNotYet: "Pickup can be completed from 2:00 PM.",
    pickupConfirmTitle: "Complete pickup?",
    pickupConfirmMsg:
      "Please tap this only after receiving your cake. This cannot be undone.",

    errorGeneric: "Something went wrong. Please try again.",
    errorIssue: "Could not issue the ticket. Please try again.",
    closedTitle: "Fully booked for today.",
    closedBody: "Reservations open daily at 8:00 AM. Please visit us again.",
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
    noticePhoneReal: "Please enter a number we can actually reach you at.",
    noticeMaxPerPerson: (total, per) =>
      `Up to ${total} cakes per person (${per} of each flavour).`,
    noticeShowScreen: "Please show this screen to our staff at pickup.",
    noticeSoldOut: "All cakes for today are sold out.",
    noticeCutoff: (h) =>
      `Reservations close at ${h}. After that, in-store purchase only.`,
    noticeOnsite: (h) =>
      `Reservations cancelled after ${h} are sold in store.`,
    lookupOnly:
      "If you already have a ticket, enter your number to view it.",
  },

  ja: {
    htmlLang: "ja",
    pageTitle: "整理券",
    phoneTitle: "電話番号を入力してください",
    phoneLabel: "電話番号",
    phonePlaceholder: "090-1234-5678",
    phoneInvalid: "正しい電話番号を入力してください。",
    confirm: "確認",
    infoTitle: "情報を入力してください",
    consentLabel: "[必須] 個人情報の収集・利用に同意します。",
    consentView: "全文を見る",
    consentHide: "閉じる",
    consentBody: (days) =>
      `· 収集項目 : 携帯電話番号<br>` +
      `· 利用目的 : ケーキ予約の整理券発行および受取確認<br>` +
      `· 保有期間 : 予約当日の営業終了後に一括破棄（未来店の記録は${days}日後に破棄）<br>` +
      `· 同意を拒否できますが、その場合は整理券を発行できません。`,
    consentRequired: "個人情報の収集・利用にご同意ください。",
    privacyLink: "プライバシーポリシー",

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
    pickupDoneNote: (h) => `ご入力の電話番号は${h}以降に一括で破棄されます。`,
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
    noticePhoneReal: "実際に連絡がつく番号をご入力ください。",
    noticeMaxPerPerson: (total, per) =>
      `お一人様あたり合計${total}個まで（種類ごとに${per}個ずつ）ご購入いただけます。`,
    noticeShowScreen: "お受け取りの際、この予約画面をスタッフにお見せください。",
    noticeSoldOut: "本日のケーキはすべて完売いたしました。",
    noticeCutoff: (h) =>
      `${h}以降は予約を締め切り、店頭販売のみとなります。`,
    noticeOnsite: (h) => `${h}以降のキャンセル分は店頭で販売いたします。`,
    lookupOnly:
      "すでに発行された整理券は、番号を入力すると確認できます。",
  },

  zh: {
    htmlLang: "zh",
    pageTitle: "号码牌",
    phoneTitle: "请输入手机号码",
    phoneLabel: "手机号码",
    phonePlaceholder: "010-1234-5678",
    phoneInvalid: "请输入正确的手机号码。",
    confirm: "确认",
    infoTitle: "请填写信息",
    consentLabel: "[必填] 我同意收集和使用个人信息。",
    consentView: "查看全文",
    consentHide: "收起",
    consentBody: (days) =>
      `· 收集项目 : 手机号码<br>` +
      `· 使用目的 : 蛋糕预约号码牌发放及取货确认<br>` +
      `· 保留期限 : 预约当日营业结束后统一销毁（未到店的记录${days}天后销毁）<br>` +
      `· 您可以拒绝同意，但拒绝后将无法领取号码牌。`,
    consentRequired: "请同意收集和使用个人信息。",
    privacyLink: "隐私政策",

    typeLabel: "种类（可多选）",
    typeRequired: "请至少选择一种。",
    peach: "水蜜桃",
    mango: "芒果",
    lemon: "柠檬",
    melon: "甜瓜",
    cakePriceNote: (p, max) =>
      `每个蛋糕 ${p}。<br>每种口味最多可选${max}个。`,
    estTotal: "预计付款金额",
    next: "下一步",

    pickupTimeLabel: "选择取货时间",
    pickupTimeChoose: "选择时间",
    pickupTimeRequired: "请选择取货时间。",
    pickupTimeNote: (m) =>
      `超过所选时间${m}分钟后，<br>预约将自动取消。`,

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
    bagNoteIcepack: (n) =>
      `每个保冷袋随附${n}个冰袋，<br>不够时可以另外加购。`,
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
    fieldType: "种类",
    fieldBag: "包装",
    fieldPickup: "取货时间",
    fieldTime: "领取时间",
    stateNew: "领取成功",
    stateWaiting: "等待取货",
    stateReceived: "已取货",
    stateAlready: "您已取货",
    stateCancelled: "预约已取消",
    noteNew: (h) =>
      `下午2点起可以取货。<br>此号码牌仅可在江南店使用。`,
    noteWaiting: (h) => `下午2点起可以取货。`,
    noteReceived: "取货已完成，谢谢惠顾。",
    noteAlready: (t) => `该号码牌已完成取货。${t ? `（${t}）` : ""}`,
    noteCancelled: "已超过取货时间，预约已自动取消。",
    footer: (h) => `取到蛋糕后请点击"取货完成"。`,

    pickupDone: "取货完成",
    pickupDoneNote: (h) => `您填写的手机号码将在${h}之后统一销毁。`,
    pickupNotYet: "下午2点起可以进行取货完成操作。",
    pickupConfirmTitle: "确认完成取货？",
    pickupConfirmMsg:
      "请在拿到蛋糕后再点击。完成后无法撤销。",

    errorGeneric: "发生错误，请稍后再试。",
    errorIssue: "领取失败，请重试。",
    closedTitle: "今日已全部结束。",
    closedBody: "每天上午8点开放预约，欢迎下次光临。",
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
    noticePhoneReal: "请填写可以实际联系到您的号码。",
    noticeMaxPerPerson: (total, per) =>
      `每人最多可购买 ${total} 个（每种口味 ${per} 个）。`,
    noticeShowScreen: "取货时请向店员出示此预约页面。",
    noticeSoldOut: "今日蛋糕已全部售罄。",
    noticeCutoff: (h) => `${h}之后停止预约，仅可现场购买。`,
    noticeOnsite: (h) => `${h}之后取消的预约将在门店现场销售。`,
    lookupOnly: "已领取号码牌的顾客，输入手机号即可查看。",
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
