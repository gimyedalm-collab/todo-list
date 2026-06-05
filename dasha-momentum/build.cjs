const pptxgen = require('pptxgenjs');
const p = new pptxgen();
p.defineLayout({ name: 'W', width: 13.33, height: 7.5 });
p.layout = 'W';

// ===== Palette =====
const DARK = '17131C',
  DARK2 = '241D2B',
  DARK3 = '2E2536';
const ROSE = 'E84B7C',
  ROSE_D = 'B83560';
const GOLD = 'C8A24B',
  VIOLET = '7B5BD6';
const INK = '2A2630',
  BODY = '55505C',
  MUTE = '8C8794';
const SOFT = 'F5F1F4',
  LINE = 'E7E0E6',
  WHITE = 'FFFFFF';
const HF = 'Malgun Gothic',
  BF = 'Malgun Gothic';
const W = 13.33,
  H = 7.5,
  MX = 0.7;
let pageNo = 0;

function footer(s, dark) {
  const col = dark ? '6A6472' : MUTE;
  s.addText('D MOMENTUM × DASHA TARAN', {
    x: MX,
    y: 7.06,
    w: 6,
    h: 0.3,
    fontFace: BF,
    fontSize: 9,
    color: col,
    charSpacing: 2,
  });
  s.addText(String(pageNo).padStart(2, '0'), {
    x: W - MX - 1,
    y: 7.06,
    w: 1,
    h: 0.3,
    fontFace: BF,
    fontSize: 9,
    color: col,
    align: 'right',
    charSpacing: 1,
  });
}
function kicker(s, t, color) {
  s.addShape(p.ShapeType.rect, {
    x: MX,
    y: 0.72,
    w: 0.16,
    h: 0.16,
    fill: { color: color || ROSE },
  });
  s.addText(t.toUpperCase(), {
    x: MX + 0.28,
    y: 0.6,
    w: 9,
    h: 0.4,
    fontFace: HF,
    fontSize: 12,
    bold: true,
    color: color || ROSE,
    charSpacing: 3,
  });
}
function title(s, t, color) {
  s.addText(t, {
    x: MX,
    y: 1.02,
    w: W - 2 * MX,
    h: 0.85,
    fontFace: HF,
    fontSize: 30,
    bold: true,
    color: color || INK,
  });
}
function content(opts) {
  pageNo++;
  const s = p.addSlide();
  s.background = { color: WHITE };
  if (opts !== false) footer(s, false);
  return s;
}
function divider(num, en, kr, sub) {
  pageNo++;
  const s = p.addSlide();
  s.background = { color: DARK };
  s.addShape(p.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 0.2,
    h: H,
    fill: { color: ROSE },
  });
  s.addShape(p.ShapeType.ellipse, {
    x: 9.3,
    y: -1.6,
    w: 5.6,
    h: 5.6,
    fill: { color: DARK2 },
  });
  s.addText(num, {
    x: MX + 0.1,
    y: 1.7,
    w: 4,
    h: 2.4,
    fontFace: HF,
    fontSize: 150,
    bold: true,
    color: DARK3,
  });
  s.addText(en.toUpperCase(), {
    x: MX + 0.3,
    y: 3.05,
    w: 11,
    h: 0.5,
    fontFace: HF,
    fontSize: 15,
    bold: true,
    color: GOLD,
    charSpacing: 5,
  });
  s.addText(kr, {
    x: MX + 0.3,
    y: 3.55,
    w: 11,
    h: 1.0,
    fontFace: HF,
    fontSize: 46,
    bold: true,
    color: WHITE,
  });
  if (sub)
    s.addText(sub, {
      x: MX + 0.3,
      y: 4.75,
      w: 10.5,
      h: 0.5,
      fontFace: BF,
      fontSize: 16,
      color: 'CFC8D4',
    });
  footer(s, true);
  return s;
}

/* ===== 1 · TITLE ===== */
pageNo++;
let s = p.addSlide();
s.background = { color: DARK };
s.addShape(p.ShapeType.rect, {
  x: 0,
  y: 0,
  w: 0.2,
  h: H,
  fill: { color: ROSE },
});
s.addShape(p.ShapeType.ellipse, {
  x: 9.0,
  y: 3.2,
  w: 6.2,
  h: 6.2,
  fill: { color: DARK2 },
});
s.addShape(p.ShapeType.ellipse, {
  x: 10.6,
  y: 4.9,
  w: 3.0,
  h: 3.0,
  fill: { color: ROSE_D },
});
s.addText('MARKETING STRATEGY · MONETIZATION · SALES', {
  x: MX,
  y: 1.55,
  w: 11.5,
  h: 0.4,
  fontFace: HF,
  fontSize: 13,
  bold: true,
  color: GOLD,
  charSpacing: 3,
});
s.addText('다샤 타란', {
  x: MX,
  y: 2.1,
  w: 11.5,
  h: 1.3,
  fontFace: HF,
  fontSize: 66,
  bold: true,
  color: WHITE,
});
s.addText(
  [
    { text: '× ', options: { color: ROSE, bold: true } },
    { text: 'D MOMENTUM', options: { color: WHITE } },
  ],
  { x: MX, y: 3.5, w: 11.5, h: 0.9, fontFace: HF, fontSize: 40, bold: true },
);
s.addText('새 둥지, 새 챕터 — 포지셔닝 · 수익화 · 영업 통합 제안', {
  x: MX,
  y: 4.62,
  w: 11,
  h: 0.5,
  fontFace: BF,
  fontSize: 18,
  color: 'CFC8D4',
});
s.addText('D MOMENTUM  ·  2026.06  ·  내부 전략 미팅용', {
  x: MX,
  y: 6.7,
  w: 11,
  h: 0.4,
  fontFace: BF,
  fontSize: 12,
  color: MUTE,
  charSpacing: 2,
});

/* ===== 2 · 현황 진단 ===== */
s = content();
kicker(s, '현황 진단');
title(s, '우리가 쥐고 있는 패');
const stats = [
  { n: '약 2,200만', l: '플랫폼 합산 도달', c: ROSE },
  { n: '13.9M', l: 'TikTok · 최대 자산', c: INK },
  { n: '6.2M', l: 'Instagram (+서브 2.6M)', c: INK },
  { n: '$0.8–1.17M', l: '추정 연수익', c: GOLD },
];
let cw = 2.85,
  gap = 0.22;
stats.forEach((d, i) => {
  const x = MX + i * (cw + gap),
    y = 2.1;
  s.addShape(p.ShapeType.roundRect, {
    x,
    y,
    w: cw,
    h: 1.85,
    rectRadius: 0.1,
    fill: { color: SOFT },
    line: { color: LINE, width: 1 },
  });
  s.addShape(p.ShapeType.rect, { x, y, w: cw, h: 0.09, fill: { color: d.c } });
  s.addText(d.n, {
    x: x + 0.05,
    y: y + 0.38,
    w: cw - 0.1,
    h: 0.7,
    fontFace: HF,
    fontSize: 29,
    bold: true,
    color: d.c,
    align: 'center',
  });
  s.addText(d.l, {
    x: x + 0.05,
    y: y + 1.18,
    w: cw - 0.1,
    h: 0.5,
    fontFace: BF,
    fontSize: 13,
    color: MUTE,
    align: 'center',
  });
});
s.addShape(p.ShapeType.roundRect, {
  x: MX,
  y: 4.5,
  w: W - 2 * MX,
  h: 1.95,
  rectRadius: 0.1,
  fill: { color: DARK },
});
s.addText(
  [
    {
      text: '법적 상황   ',
      options: { bold: true, color: ROSE, fontSize: 15 },
    },
    {
      text: '전속계약 효력정지 가처분 인용 — 본안 전까지 자유 활동 가능',
      options: { color: WHITE, fontSize: 15 },
    },
  ],
  { x: MX + 0.4, y: 4.78, w: W - 2 * MX - 0.8, h: 0.5, fontFace: BF },
);
s.addText(
  '· 7년간 정산서 미제공이 핵심 사유   · 前 대표 상대 횡령·배임 고소 진행 중   · 약 9천만원 미정산 주장',
  {
    x: MX + 0.4,
    y: 5.35,
    w: W - 2 * MX - 0.8,
    h: 0.5,
    fontFace: BF,
    fontSize: 13,
    color: 'CFC8D4',
  },
);
s.addText(
  '→ 이 사건은 "수동적 인형 → 주체적 인물" 전환의 명분이 된다 (단, 소송 자체의 마케팅 소재화는 금지)',
  {
    x: MX + 0.4,
    y: 5.85,
    w: W - 2 * MX - 0.8,
    h: 0.5,
    fontFace: BF,
    fontSize: 13,
    italic: true,
    color: GOLD,
  },
);

/* ===== 3 · 핵심 인사이트 ===== */
s = content();
kicker(s, '핵심 인사이트');
title(s, '자산이 어디에 있는가');
const ins = [
  {
    n: '01',
    h: '팬덤은 글로벌이다',
    b: "TikTok·IG 모두 러시아/CIS·중동·동남아·남미 중심. 한국인 팬이 아님. '국내 연예인'으로 다루면 자산의 90%를 버린다.",
  },
  {
    n: '02',
    h: '엔진은 TikTok이다',
    b: '13.9M 단일 최대 채널. 신규 유입의 본진. 다른 채널을 여기에 종속시켜 설계해야 한다.',
  },
  {
    n: '03',
    h: "약점은 '서사 부재'다",
    b: '비주얼 의존형은 교체 가능하고 수익이 협찬에만 묶인다. 인격·서사·사업이 없으면 가치가 우상향하지 못한다.',
  },
];
ins.forEach((d, i) => {
  const y = 2.15 + i * 1.5;
  s.addShape(p.ShapeType.ellipse, {
    x: MX,
    y,
    w: 1.0,
    h: 1.0,
    fill: { color: i === 2 ? ROSE : DARK },
  });
  s.addText(d.n, {
    x: MX,
    y: y + 0.27,
    w: 1.0,
    h: 0.5,
    fontFace: HF,
    fontSize: 21,
    bold: true,
    color: WHITE,
    align: 'center',
  });
  s.addText(d.h, {
    x: MX + 1.35,
    y: y - 0.02,
    w: 10.6,
    h: 0.5,
    fontFace: HF,
    fontSize: 20,
    bold: true,
    color: INK,
  });
  s.addText(d.b, {
    x: MX + 1.35,
    y: y + 0.5,
    w: 10.7,
    h: 0.8,
    fontFace: BF,
    fontSize: 14,
    color: BODY,
  });
});

/* ===== 4 · DIVIDER 01 ===== */
divider(
  '01',
  'Strategy',
  '포지셔닝 · 시장 · 채널',
  '누구로 다시 세우고, 어디서, 어떻게 도달할 것인가',
);

/* ===== 5 · 포지셔닝 ===== */
s = content();
kicker(s, '포지셔닝');
title(s, '누구로 다시 세울 것인가');
const colW = 5.7,
  colH = 2.55,
  by = 2.05;
s.addShape(p.ShapeType.roundRect, {
  x: MX,
  y: by,
  w: colW,
  h: colH,
  rectRadius: 0.1,
  fill: { color: SOFT },
  line: { color: LINE, width: 1 },
});
s.addText('BEFORE', {
  x: MX + 0.35,
  y: by + 0.25,
  w: colW - 0.7,
  h: 0.4,
  fontFace: HF,
  fontSize: 13,
  bold: true,
  color: MUTE,
  charSpacing: 3,
});
[
  '수동적 비주얼 모델',
  "박제된 '인형' 이미지",
  '수익 = 협찬 단가에 종속',
].forEach((t, i) =>
  s.addText('·  ' + t, {
    x: MX + 0.35,
    y: by + 0.78 + i * 0.5,
    w: colW - 0.7,
    h: 0.45,
    fontFace: BF,
    fontSize: 15,
    color: BODY,
  }),
);
s.addShape(p.ShapeType.rightArrow, {
  x: MX + colW + 0.12,
  y: by + 1.05,
  w: 0.66,
  h: 0.5,
  fill: { color: ROSE },
});
const ax = MX + colW + 0.9;
s.addShape(p.ShapeType.roundRect, {
  x: ax,
  y: by,
  w: colW,
  h: colH,
  rectRadius: 0.1,
  fill: { color: DARK },
});
s.addText('AFTER', {
  x: ax + 0.35,
  y: by + 0.25,
  w: colW - 0.7,
  h: 0.4,
  fontFace: HF,
  fontSize: 13,
  bold: true,
  color: ROSE,
  charSpacing: 3,
});
[
  '자기 브랜드를 운영하는 파운더-크리에이터',
  "'7년 만에 독립한' 주체적 서사",
  '오너 브랜드 · IP로 수익 다각화',
].forEach((t, i) =>
  s.addText('·  ' + t, {
    x: ax + 0.35,
    y: by + 0.78 + i * 0.5,
    w: colW - 0.7,
    h: 0.45,
    fontFace: BF,
    fontSize: 15,
    color: WHITE,
  }),
);
s.addShape(p.ShapeType.roundRect, {
  x: MX,
  y: 5.0,
  w: W - 2 * MX,
  h: 1.5,
  rectRadius: 0.1,
  fill: { color: WHITE },
  line: { color: GOLD, width: 2 },
});
s.addText(
  [
    { text: '큰 베팅   ', options: { bold: true, color: GOLD, fontSize: 18 } },
    {
      text: '"Reinvention(재탄생)" 내러티브를 마케팅 축으로',
      options: { bold: true, color: INK, fontSize: 18 },
    },
  ],
  { x: MX + 0.4, y: 5.22, w: W - 2 * MX - 0.8, h: 0.5, fontFace: HF },
);
s.addText(
  "법적 독립이 '인형 → 주체' 전환에 완벽한 명분을 준다. 톤: 새 시작 · 진짜 나 · 직접 만든다 (소송 직접 언급 X)",
  {
    x: MX + 0.4,
    y: 5.78,
    w: W - 2 * MX - 0.8,
    h: 0.5,
    fontFace: BF,
    fontSize: 13,
    color: BODY,
  },
);

/* ===== 6 · 국내 vs 해외 ===== */
s = content();
kicker(s, '시장 전략');
title(s, '글로벌 우선, 한국은 베이스캠프');
const zw = 5.7,
  zy = 2.05,
  zh = 3.0;
s.addShape(p.ShapeType.roundRect, {
  x: MX,
  y: zy,
  w: zw,
  h: zh,
  rectRadius: 0.1,
  fill: { color: DARK },
});
s.addText('GLOBAL · 본진', {
  x: MX + 0.4,
  y: zy + 0.3,
  w: zw - 0.8,
  h: 0.5,
  fontFace: HF,
  fontSize: 19,
  bold: true,
  color: ROSE,
});
s.addText('도달 · 규모 · 수익의 메인 무대', {
  x: MX + 0.4,
  y: zy + 0.85,
  w: zw - 0.8,
  h: 0.4,
  fontFace: BF,
  fontSize: 14,
  color: GOLD,
});
[
  '영어 기반 글로벌 콘텐츠가 1순위',
  '글로벌 협찬 · 커머스 전환',
  '팔로워 2,200만의 실제 거주지를 공략',
].forEach((t, i) =>
  s.addText('·  ' + t, {
    x: MX + 0.4,
    y: zy + 1.4 + i * 0.48,
    w: zw - 0.8,
    h: 0.45,
    fontFace: BF,
    fontSize: 14,
    color: WHITE,
  }),
);
const kx = MX + zw + 0.9;
s.addShape(p.ShapeType.roundRect, {
  x: kx,
  y: zy,
  w: zw,
  h: zh,
  rectRadius: 0.1,
  fill: { color: SOFT },
  line: { color: LINE, width: 1 },
});
s.addText('KOREA · 베이스캠프', {
  x: kx + 0.4,
  y: zy + 0.3,
  w: zw - 0.8,
  h: 0.5,
  fontFace: HF,
  fontSize: 19,
  bold: true,
  color: INK,
});
s.addText('콘텐츠 허브이자 차별화 스토리', {
  x: kx + 0.4,
  y: zy + 0.85,
  w: zw - 0.8,
  h: 0.4,
  fontFace: BF,
  fontSize: 14,
  color: ROSE,
});
[
  "'한국 사는 글로벌 셀럽' 포지션",
  'K-뷰티/패션의 글로벌 앰배서더 수요 흡수',
  "국내 단독활동 = 수익 아닌 '화제성·소재'",
].forEach((t, i) =>
  s.addText('·  ' + t, {
    x: kx + 0.4,
    y: zy + 1.4 + i * 0.48,
    w: zw - 0.8,
    h: 0.45,
    fontFace: BF,
    fontSize: 14,
    color: BODY,
  }),
);
s.addText(
  '결론 — 한국을 무대로 쓰되 청중은 전 세계. 국내 단독 시장만 노리면 ROI가 무너진다.',
  {
    x: MX,
    y: 5.4,
    w: W - 2 * MX,
    h: 0.6,
    fontFace: HF,
    fontSize: 16,
    bold: true,
    italic: true,
    color: ROSE,
    align: 'center',
  },
);

/* ===== 7 · 플랫폼 역할 분담 ===== */
s = content();
kicker(s, '채널 전략');
title(s, '플랫폼 역할 분담 — 퍼널로 나눠라');
const plat = [
  {
    t: 'TikTok',
    tag: '도달 · 엔진',
    c: ROSE,
    role: '신규 유입 · 바이럴 (주력)',
    items: [
      '짧은 비주얼/트렌드/GRWM',
      '하루 1–2개 고빈도',
      'K-루틴을 글로벌 톤으로',
    ],
    kpi: 'KPI · 조회 · 신규팔로워 · 세이브',
  },
  {
    t: 'Instagram',
    tag: '브랜드 · 커머스',
    c: GOLD,
    role: '단가 근거 · 포트폴리오 · 전환',
    items: [
      '고퀄 화보로 프리미엄 유지',
      'Reels로 도달 보완',
      '쇼핑태그 커머스',
    ],
    kpi: 'KPI · 인게이지(현 8%대) · 저장 · 문의',
  },
  {
    t: 'YouTube',
    tag: '인격 · 해자',
    c: VIOLET,
    role: '사람으로 만들고 돈으로 바꾼다',
    items: [
      '브이로그 · 한국 정착기 · Q&A',
      "'인형'에 서사 부여",
      '광고 · 장편PPL · 브랜드 런칭',
    ],
    kpi: 'KPI · 시청시간 · 구독전환 · 충성도',
  },
];
const pw = 3.9,
  pgap = 0.31,
  py = 2.05,
  ph = 4.05;
plat.forEach((d, i) => {
  const x = MX + i * (pw + pgap);
  s.addShape(p.ShapeType.roundRect, {
    x,
    y: py,
    w: pw,
    h: ph,
    rectRadius: 0.1,
    fill: { color: WHITE },
    line: { color: LINE, width: 1 },
  });
  s.addShape(p.ShapeType.roundRect, {
    x,
    y: py,
    w: pw,
    h: 0.92,
    rectRadius: 0.1,
    fill: { color: d.c },
  });
  s.addShape(p.ShapeType.rect, {
    x,
    y: py + 0.52,
    w: pw,
    h: 0.4,
    fill: { color: d.c },
  });
  s.addText(d.t, {
    x: x + 0.3,
    y: py + 0.1,
    w: pw - 0.6,
    h: 0.5,
    fontFace: HF,
    fontSize: 23,
    bold: true,
    color: WHITE,
  });
  s.addText(d.tag, {
    x: x + 0.3,
    y: py + 0.56,
    w: pw - 0.6,
    h: 0.35,
    fontFace: HF,
    fontSize: 13,
    bold: true,
    color: WHITE,
    charSpacing: 2,
  });
  s.addText(d.role, {
    x: x + 0.3,
    y: py + 1.12,
    w: pw - 0.6,
    h: 0.6,
    fontFace: HF,
    fontSize: 14,
    bold: true,
    color: INK,
  });
  d.items.forEach((t, j) =>
    s.addText('·  ' + t, {
      x: x + 0.3,
      y: py + 1.8 + j * 0.5,
      w: pw - 0.55,
      h: 0.45,
      fontFace: BF,
      fontSize: 13,
      color: BODY,
    }),
  );
  s.addText(d.kpi, {
    x: x + 0.3,
    y: py + 3.48,
    w: pw - 0.6,
    h: 0.45,
    fontFace: BF,
    fontSize: 11.5,
    bold: true,
    color: d.c,
  });
});
s.addText(
  '틱톡으로 끌어와(도달) → 인스타로 신뢰·구매 자산화 → 유튜브로 사람으로 만들고 돈으로 바꾼다',
  {
    x: MX,
    y: 6.35,
    w: W - 2 * MX,
    h: 0.45,
    fontFace: HF,
    fontSize: 14,
    bold: true,
    italic: true,
    color: INK,
    align: 'center',
  },
);

/* ===== 8 · DIVIDER 02 ===== */
divider(
  '02',
  'Monetization',
  '수익화 구조',
  '협찬을 받을 것인가, 그리고 무엇으로 돈을 벌 것인가',
);

/* ===== 9 · 수익 모델 5스트림 ===== */
s = content();
kicker(s, '수익 모델', GOLD);
title(s, '5개 수익원 — 협찬 의존에서 포트폴리오로');
const streams = [
  {
    h: '① 협찬·광고 (Sponsored)',
    b: '단발 포스팅·캠페인. 핵심 현금 엔진.',
    now: '現 핵심',
    c: ROSE,
  },
  {
    h: '② 전속 앰배서더 (Ambassador)',
    b: '분기/연간 장기계약. 고단가·안정적.',
    now: '성장축',
    c: GOLD,
  },
  {
    h: '③ 커머스·어필리에이트',
    b: '쇼핑태그·공동구매·판매 커미션.',
    now: '확장',
    c: VIOLET,
  },
  {
    h: '④ 오너 브랜드 (PB/협업)',
    b: '자체 뷰티·패션 라인. 최고 마진·자산화.',
    now: '핵심 전환',
    c: ROSE,
  },
  {
    h: '⑤ 콘텐츠·IP',
    b: '유튜브 광고·화보집·굿즈·팬 멤버십.',
    now: '장기',
    c: INK,
  },
];
const sx = MX,
  sy = 2.0,
  sbw = 6.05,
  sbh = 1.28;
streams.forEach((d, i) => {
  if (i < 4) {
    const x = sx + (i % 2) * (sbw + 0.35),
      y = sy + Math.floor(i / 2) * (sbh + 0.25);
    s.addShape(p.ShapeType.roundRect, {
      x,
      y,
      w: sbw,
      h: sbh,
      rectRadius: 0.08,
      fill: { color: SOFT },
      line: { color: LINE, width: 1 },
    });
    s.addShape(p.ShapeType.rect, {
      x,
      y,
      w: 0.1,
      h: sbh,
      fill: { color: d.c },
    });
    s.addText(d.h, {
      x: x + 0.32,
      y: y + 0.16,
      w: sbw - 1.7,
      h: 0.45,
      fontFace: HF,
      fontSize: 15.5,
      bold: true,
      color: INK,
    });
    s.addText(d.b, {
      x: x + 0.32,
      y: y + 0.64,
      w: sbw - 1.7,
      h: 0.55,
      fontFace: BF,
      fontSize: 12.5,
      color: BODY,
    });
    s.addText(d.now, {
      x: x + sbw - 1.45,
      y: y + 0.2,
      w: 1.3,
      h: 0.35,
      fontFace: HF,
      fontSize: 11,
      bold: true,
      color: d.c,
      align: 'right',
    });
  }
});
const y5 = sy + 2 * (sbh + 0.25);
s.addShape(p.ShapeType.roundRect, {
  x: sx,
  y: y5,
  w: 2 * sbw + 0.35,
  h: sbh,
  rectRadius: 0.08,
  fill: { color: SOFT },
  line: { color: LINE, width: 1 },
});
s.addShape(p.ShapeType.rect, {
  x: sx,
  y: y5,
  w: 0.1,
  h: sbh,
  fill: { color: streams[4].c },
});
s.addText(streams[4].h, {
  x: sx + 0.32,
  y: y5 + 0.16,
  w: 9,
  h: 0.45,
  fontFace: HF,
  fontSize: 15.5,
  bold: true,
  color: INK,
});
s.addText(streams[4].b, {
  x: sx + 0.32,
  y: y5 + 0.64,
  w: 9,
  h: 0.5,
  fontFace: BF,
  fontSize: 12.5,
  color: BODY,
});
s.addText(streams[4].now, {
  x: sx + 2 * sbw - 1.1,
  y: y5 + 0.46,
  w: 1.3,
  h: 0.35,
  fontFace: HF,
  fontSize: 11,
  bold: true,
  color: GOLD,
  align: 'right',
});

/* ===== 10 · 목표 수익 믹스 ===== */
s = content();
kicker(s, '수익 믹스 목표', GOLD);
title(s, "12개월 안에 '단일 의존'을 깬다");
function mixBar(label, segs, y) {
  s.addText(label, {
    x: MX,
    y: y - 0.02,
    w: 2.2,
    h: 0.5,
    fontFace: HF,
    fontSize: 14,
    bold: true,
    color: INK,
  });
  let bx = MX + 2.4;
  const totalW = 9.0;
  segs.forEach((seg) => {
    const w = (totalW * seg.v) / 100;
    s.addShape(p.ShapeType.rect, {
      x: bx,
      y,
      w,
      h: 0.7,
      fill: { color: seg.c },
    });
    if (seg.v >= 12)
      s.addText(seg.v + '%', {
        x: bx,
        y: y + 0.16,
        w,
        h: 0.4,
        fontFace: HF,
        fontSize: 12,
        bold: true,
        color: WHITE,
        align: 'center',
      });
    bx += w;
  });
}
mixBar(
  '현재',
  [
    { v: 90, c: ROSE },
    { v: 10, c: MUTE },
  ],
  2.2,
);
mixBar(
  '12개월 목표',
  [
    { v: 45, c: ROSE },
    { v: 20, c: GOLD },
    { v: 20, c: VIOLET },
    { v: 15, c: INK },
  ],
  3.4,
);
const leg = [
  { c: ROSE, t: '협찬·앰배서더 45%' },
  { c: GOLD, t: '오너 브랜드 20%' },
  { c: VIOLET, t: '커머스·어필리에이트 20%' },
  { c: INK, t: '유튜브·IP 15%' },
];
leg.forEach((d, i) => {
  const x = MX + 2.4 + (i % 2) * 4.6,
    y = 4.6 + Math.floor(i / 2) * 0.5;
  s.addShape(p.ShapeType.rect, {
    x,
    y: y + 0.05,
    w: 0.28,
    h: 0.28,
    fill: { color: d.c },
  });
  s.addText(d.t, {
    x: x + 0.4,
    y,
    w: 4.2,
    h: 0.4,
    fontFace: BF,
    fontSize: 13.5,
    color: INK,
  });
});
s.addShape(p.ShapeType.roundRect, {
  x: MX,
  y: 5.85,
  w: W - 2 * MX,
  h: 0.85,
  rectRadius: 0.08,
  fill: { color: SOFT },
  line: { color: LINE, width: 1 },
});
s.addText(
  "핵심 — 협찬을 줄이는 게 아니라 '협찬 외 수익'을 키워 의존도를 90%→45%로 낮춘다. 이게 D모멘텀이 '사업 파트너'가 되는 지점.",
  {
    x: MX + 0.4,
    y: 6.05,
    w: W - 2 * MX - 0.8,
    h: 0.5,
    fontFace: BF,
    fontSize: 13.5,
    italic: true,
    color: INK,
  },
);

/* ===== 11 · 협찬을 받을 것인가 ===== */
s = content();
kicker(s, '의사결정 · 협찬', GOLD);
title(s, '협찬을 받을 것인가? — 받되, 선별한다');
s.addShape(p.ShapeType.roundRect, {
  x: MX,
  y: 2.0,
  w: W - 2 * MX,
  h: 0.95,
  rectRadius: 0.1,
  fill: { color: DARK },
});
s.addText(
  [
    { text: '결론   ', options: { bold: true, color: ROSE, fontSize: 17 } },
    {
      text: 'YES. 협찬은 핵심 현금 엔진이다. 단, 무분별 수주는 포지셔닝을 죽인다 — 3개 필터로 거른다.',
      options: { color: WHITE, fontSize: 16 },
    },
  ],
  { x: MX + 0.4, y: 2.27, w: W - 2 * MX - 0.8, h: 0.5, fontFace: BF },
);
const filt = [
  {
    h: '카테고리 적합성',
    b: '뷰티·패션·럭셔리·라이프스타일만. 저가 양산형 협찬은 거절 — 단가보다 이미지가 비싸다.',
  },
  {
    h: '독점·계층 관리',
    b: '핵심 카테고리는 경쟁 브랜드 동시 진행 X. 단발보다 장기 앰배서더를 우선 협상.',
  },
  {
    h: '가격 하한선',
    b: '레이트카드 이하는 거절. 단가 방어가 곧 포지셔닝 방어 — 한 번 깎이면 시장가가 내려간다.',
  },
];
const fw = 3.9,
  fy = 3.2,
  fh = 3.0;
filt.forEach((d, i) => {
  const x = MX + i * (fw + 0.31);
  s.addShape(p.ShapeType.roundRect, {
    x,
    y: fy,
    w: fw,
    h: fh,
    rectRadius: 0.1,
    fill: { color: SOFT },
    line: { color: LINE, width: 1 },
  });
  s.addShape(p.ShapeType.ellipse, {
    x: x + 0.32,
    y: fy + 0.34,
    w: 0.7,
    h: 0.7,
    fill: { color: ROSE },
  });
  s.addText(String(i + 1), {
    x: x + 0.32,
    y: fy + 0.45,
    w: 0.7,
    h: 0.5,
    fontFace: HF,
    fontSize: 19,
    bold: true,
    color: WHITE,
    align: 'center',
  });
  s.addText('FILTER ' + (i + 1), {
    x: x + 1.2,
    y: fy + 0.52,
    w: fw - 1.4,
    h: 0.4,
    fontFace: HF,
    fontSize: 12,
    bold: true,
    color: GOLD,
    charSpacing: 2,
  });
  s.addText(d.h, {
    x: x + 0.32,
    y: fy + 1.25,
    w: fw - 0.6,
    h: 0.5,
    fontFace: HF,
    fontSize: 18,
    bold: true,
    color: INK,
  });
  s.addText(d.b, {
    x: x + 0.32,
    y: fy + 1.85,
    w: fw - 0.6,
    h: 1.0,
    fontFace: BF,
    fontSize: 13,
    color: BODY,
  });
});

/* ===== 12 · 패키지 & 레이트카드 ===== */
s = content();
kicker(s, '오퍼 · 레이트카드', GOLD);
title(s, '판매 패키지 — 단발에서 장기로 끌어올린다');
const rows = [
  {
    p: '단발 포스트',
    d: 'IG/TikTok 1건',
    price: '$8K – 30K',
    note: '엔트리 · 신규 브랜드 테스트',
    hl: false,
  },
  {
    p: '캠페인 패키지',
    d: '멀티채널 3–5건 + 스토리',
    price: '$40K – 120K',
    note: '표준 제안 · 권장 진입점',
    hl: false,
  },
  {
    p: '유튜브 통합 PPL',
    d: '장편 1편 + 클립 파생',
    price: '$15K – 40K',
    note: '서사형 · 전환 강함',
    hl: false,
  },
  {
    p: '전속 앰배서더',
    d: '분기/연간 독점',
    price: '$150K – 500K+',
    note: '최우선 목표 · 안정 매출',
    hl: true,
  },
];
const ry = 2.1,
  rh = 0.92,
  rw = W - 2 * MX;
s.addShape(p.ShapeType.rect, {
  x: MX,
  y: ry,
  w: rw,
  h: 0.55,
  fill: { color: DARK },
});
[
  ['패키지', 0.3, 2.6],
  ['구성', 3.0, 3.6],
  ['기준 단가 (협상 전)', 6.6, 2.9],
  ['포지션', 9.55, 2.1],
].forEach((c) =>
  s.addText(c[0], {
    x: MX + c[1],
    y: ry + 0.1,
    w: c[2],
    h: 0.35,
    fontFace: HF,
    fontSize: 12.5,
    bold: true,
    color: GOLD,
    charSpacing: 1,
  }),
);
rows.forEach((d, i) => {
  const y = ry + 0.55 + i * rh;
  s.addShape(p.ShapeType.rect, {
    x: MX,
    y,
    w: rw,
    h: rh,
    fill: { color: d.hl ? 'FBEFF3' : i % 2 ? WHITE : SOFT },
    line: { color: LINE, width: 1 },
  });
  if (d.hl)
    s.addShape(p.ShapeType.rect, {
      x: MX,
      y,
      w: 0.1,
      h: rh,
      fill: { color: ROSE },
    });
  s.addText(d.p, {
    x: MX + 0.3,
    y: y + 0.22,
    w: 2.6,
    h: 0.5,
    fontFace: HF,
    fontSize: 15,
    bold: true,
    color: INK,
  });
  s.addText(d.d, {
    x: MX + 3.0,
    y: y + 0.25,
    w: 3.6,
    h: 0.5,
    fontFace: BF,
    fontSize: 13,
    color: BODY,
  });
  s.addText(d.price, {
    x: MX + 6.7,
    y: y + 0.2,
    w: 2.9,
    h: 0.5,
    fontFace: HF,
    fontSize: 16,
    bold: true,
    color: d.hl ? ROSE : INK,
  });
  s.addText(d.note, {
    x: MX + 9.55,
    y: y + 0.25,
    w: 2.1,
    h: 0.5,
    fontFace: BF,
    fontSize: 12.5,
    color: d.hl ? ROSE_D : MUTE,
  });
});
s.addText(
  '※ 글로벌 메가 인플루언서(10M+ TikTok) 벤치마크 레인지. 오디언스 검증·시즌·독점조건에 따라 ±. 실집행 단가는 미디어킷 확정 후 결정.',
  {
    x: MX,
    y: 6.45,
    w: rw,
    h: 0.4,
    fontFace: BF,
    fontSize: 11,
    italic: true,
    color: MUTE,
  },
);

/* ===== 13 · DIVIDER 03 ===== */
divider(
  '03',
  'Sales / BD',
  '영업 · 비즈니스 개발',
  '어떻게 딜을 따올 것인가 — 받는 영업과 거는 영업',
);

/* ===== 14 · 영업 플레이북 ===== */
s = content();
kicker(s, '영업 플레이북', VIOLET);
title(s, '딜을 따오는 4단계 시스템');
const sales = [
  {
    n: '01',
    h: '무기 만들기 · 미디어킷',
    b: '검증된 오디언스 데이터(지역·연령·성별) + 케이스 + 레이트카드. 영업 1번 무기. 없으면 단가를 못 받는다.',
  },
  {
    n: '02',
    h: '받는 영업 · 인바운드',
    b: '기제작 홈페이지에 부킹/문의 폼 연결 → 자동 응대·단가표 안내. 들어오는 문의를 돈으로 바꾸는 깔때기.',
  },
  {
    n: '03',
    h: '거는 영업 · 아웃바운드',
    b: '타깃 브랜드 마케팅팀 직접 컨택 + 글로벌 인플루언서 에이전시 네트워크 등록. 분기 타깃 리스트로 관리.',
  },
  {
    n: '04',
    h: '케이스로 재판매',
    b: "플래그십 캠페인 1–2개를 잘 해서 '매출 기여·도달' 결과를 만들고, 그 숫자를 다음 영업의 무기로 재사용.",
  },
];
sales.forEach((d, i) => {
  const x = MX + (i % 2) * 6.05,
    y = 2.05 + Math.floor(i / 2) * 2.15;
  s.addShape(p.ShapeType.roundRect, {
    x,
    y,
    w: 5.7,
    h: 1.9,
    rectRadius: 0.1,
    fill: { color: SOFT },
    line: { color: LINE, width: 1 },
  });
  s.addText(d.n, {
    x: x + 0.3,
    y: y + 0.25,
    w: 1.1,
    h: 0.8,
    fontFace: HF,
    fontSize: 34,
    bold: true,
    color: VIOLET,
  });
  s.addText(d.h, {
    x: x + 1.4,
    y: y + 0.28,
    w: 4.1,
    h: 0.5,
    fontFace: HF,
    fontSize: 17,
    bold: true,
    color: INK,
  });
  s.addText(d.b, {
    x: x + 1.4,
    y: y + 0.8,
    w: 4.15,
    h: 1.0,
    fontFace: BF,
    fontSize: 12.5,
    color: BODY,
  });
});

/* ===== 15 · 타깃 어카운트 & 웻지 ===== */
s = content();
kicker(s, '영업 타깃', VIOLET);
title(s, '가장 따뜻한 리드부터 — K-뷰티 웻지');
s.addShape(p.ShapeType.roundRect, {
  x: MX,
  y: 2.0,
  w: W - 2 * MX,
  h: 1.0,
  rectRadius: 0.1,
  fill: { color: DARK },
});
s.addText(
  [
    {
      text: 'WEDGE   ',
      options: { bold: true, color: ROSE, fontSize: 15, charSpacing: 2 },
    },
    {
      text: "K-뷰티·K-패션의 글로벌 진출 니즈 = '한국 사는 글로벌 얼굴'이 정확히 그 해답. 여기부터 뚫는다.",
      options: { color: WHITE, fontSize: 15 },
    },
  ],
  { x: MX + 0.4, y: 2.3, w: W - 2 * MX - 0.8, h: 0.6, fontFace: BF },
);
const tgt = [
  {
    h: 'K-뷰티 글로벌 진출 브랜드',
    b: '올리브영 입점·수출형 브랜드. 글로벌 도달이 절실 → 최우선 1순위 리드.',
    c: ROSE,
  },
  {
    h: '글로벌 뷰티·코스메틱',
    b: '본사/아시아 마케팅팀 컨택. 럭셔리·매스 모두 인형 비주얼과 적합.',
    c: GOLD,
  },
  {
    h: '패션·럭셔리·액세서리',
    b: '컨템포러리 브랜드, 주얼리/아이웨어. 화보형 캠페인 최적.',
    c: VIOLET,
  },
  {
    h: '한국 거주 외국인 타깃 서비스',
    b: "통신·금융·여행. '한국 사는 글로벌 셀럽' 서사와 직결.",
    c: INK,
  },
];
tgt.forEach((d, i) => {
  const x = MX + (i % 2) * 6.05,
    y = 3.25 + Math.floor(i / 2) * 1.65;
  s.addShape(p.ShapeType.roundRect, {
    x,
    y,
    w: 5.7,
    h: 1.45,
    rectRadius: 0.08,
    fill: { color: SOFT },
    line: { color: LINE, width: 1 },
  });
  s.addShape(p.ShapeType.rect, { x, y, w: 0.1, h: 1.45, fill: { color: d.c } });
  s.addText(d.h, {
    x: x + 0.32,
    y: y + 0.2,
    w: 5.2,
    h: 0.45,
    fontFace: HF,
    fontSize: 15.5,
    bold: true,
    color: INK,
  });
  s.addText(d.b, {
    x: x + 0.32,
    y: y + 0.68,
    w: 5.2,
    h: 0.7,
    fontFace: BF,
    fontSize: 12.5,
    color: BODY,
  });
});

/* ===== 16 · 90일 로드맵 ===== */
s = content();
kicker(s, '실행');
title(s, '90일 실행 로드맵');
const road = [
  {
    d: '0–30일',
    h: '셋업 · 무기 장착',
    items: [
      '채널 톤&매너 리뉴얼(재탄생)',
      '미디어킷 + 레이트카드 제작',
      '홈페이지 부킹 폼 연결',
    ],
  },
  {
    d: '31–60일',
    h: '엔진 가동 · 영업 개시',
    items: [
      'TikTok 고빈도 + 정착기 시리즈',
      'K-뷰티 타깃 아웃바운드 착수',
      '플래그십 캠페인 1건 수주',
    ],
  },
  {
    d: '61–90일',
    h: '수익 다각화',
    items: [
      '오너 브랜드/PB 컨셉 확정',
      '커머스(쇼핑태그) 테스트',
      '캠페인 결과 → 케이스로 재판매',
    ],
  },
];
const rdy = 2.1,
  rdh = 3.6;
road.forEach((d, i) => {
  const x = MX + i * (3.9 + 0.31);
  s.addShape(p.ShapeType.roundRect, {
    x,
    y: rdy,
    w: 3.9,
    h: rdh,
    rectRadius: 0.1,
    fill: { color: SOFT },
    line: { color: LINE, width: 1 },
  });
  s.addShape(p.ShapeType.roundRect, {
    x,
    y: rdy,
    w: 3.9,
    h: 0.85,
    rectRadius: 0.1,
    fill: { color: DARK },
  });
  s.addShape(p.ShapeType.rect, {
    x,
    y: rdy + 0.45,
    w: 3.9,
    h: 0.4,
    fill: { color: DARK },
  });
  s.addText(d.d, {
    x: x + 0.3,
    y: rdy + 0.18,
    w: 3.3,
    h: 0.5,
    fontFace: HF,
    fontSize: 18,
    bold: true,
    color: ROSE,
  });
  s.addText(d.h, {
    x: x + 0.3,
    y: rdy + 1.05,
    w: 3.3,
    h: 0.5,
    fontFace: HF,
    fontSize: 17,
    bold: true,
    color: INK,
  });
  d.items.forEach((t, j) =>
    s.addText('·  ' + t, {
      x: x + 0.3,
      y: rdy + 1.72 + j * 0.62,
      w: 3.35,
      h: 0.55,
      fontFace: BF,
      fontSize: 13,
      color: BODY,
    }),
  );
});
s.addText('각 단계 종료 시 지표 리뷰로 다음 단계 가설을 갱신한다.', {
  x: MX,
  y: 6.05,
  w: W - 2 * MX,
  h: 0.4,
  fontFace: BF,
  fontSize: 13,
  italic: true,
  color: MUTE,
  align: 'center',
});

/* ===== 17 · 결정사항 ===== */
pageNo++;
s = p.addSlide();
s.background = { color: DARK };
s.addShape(p.ShapeType.rect, {
  x: 0,
  y: 0,
  w: 0.2,
  h: H,
  fill: { color: ROSE },
});
s.addShape(p.ShapeType.rect, {
  x: MX,
  y: 0.72,
  w: 0.16,
  h: 0.16,
  fill: { color: GOLD },
});
s.addText('미팅에서 결정할 것', {
  x: MX + 0.28,
  y: 0.6,
  w: 9,
  h: 0.4,
  fontFace: HF,
  fontSize: 12,
  bold: true,
  color: GOLD,
  charSpacing: 3,
});
s.addText('오늘 합의해야 할 5가지', {
  x: MX,
  y: 1.05,
  w: 11,
  h: 0.9,
  fontFace: HF,
  fontSize: 30,
  bold: true,
  color: WHITE,
});
const dec = [
  {
    n: '01',
    h: '언어·시장 1순위',
    b: '영어(글로벌) 메인 + 한국 서브 — 동의하는가?',
  },
  {
    n: '02',
    h: '포지셔닝 한 문장',
    b: "'재탄생 서사' vs 기존 '비주얼 퀸' 유지",
  },
  { n: '03', h: '협찬 정책', b: '선별 협찬 + 레이트카드 하한선 채택 여부' },
  { n: '04', h: '오너 브랜드', b: '협찬만 vs PB·협업까지 수익 다각화' },
  { n: '05', h: '영업 주체·체계', b: '미디어킷·아웃바운드 누가, 언제부터' },
];
dec.forEach((d, i) => {
  const full = i === 4;
  const x = MX + (i % 2) * 6.05,
    y = 2.15 + Math.floor(i / 2) * 1.45;
  s.addShape(p.ShapeType.roundRect, {
    x,
    y,
    w: full ? 11.4 : 5.7,
    h: 1.25,
    rectRadius: 0.08,
    fill: { color: DARK2 },
  });
  s.addText(d.n, {
    x: x + 0.3,
    y: y + 0.28,
    w: 1.1,
    h: 0.8,
    fontFace: HF,
    fontSize: 32,
    bold: true,
    color: ROSE,
  });
  s.addText(d.h, {
    x: x + 1.35,
    y: y + 0.2,
    w: full ? 9.5 : 4.1,
    h: 0.45,
    fontFace: HF,
    fontSize: 17,
    bold: true,
    color: WHITE,
  });
  s.addText(d.b, {
    x: x + 1.35,
    y: y + 0.68,
    w: full ? 9.5 : 4.2,
    h: 0.45,
    fontFace: BF,
    fontSize: 13,
    color: 'CFC8D4',
  });
});
s.addText('D MOMENTUM  ·  다샤 타란 마케팅 전략', {
  x: MX,
  y: 7.06,
  w: 11,
  h: 0.35,
  fontFace: BF,
  fontSize: 9,
  color: '6A6472',
  charSpacing: 2,
});

p.writeFile({
  fileName:
    'C:/Users/BNK-1/Desktop/todo-list/dasha-momentum/다샤타란_D모멘텀_마케팅전략.pptx',
}).then((f) => console.log('SAVED:', f, '| slides:', pageNo));
