const pptxgen = require('pptxgenjs');
const p = new pptxgen();
p.defineLayout({ name: 'W', width: 13.33, height: 7.5 });
p.layout = 'W';

// ---- Palette (premium beauty / celebrity) ----
const DARK = '17131C'; // near-black plum
const DARK2 = '241D2B'; // card on dark
const ROSE = 'E84B7C'; // accent
const GOLD = 'C8A24B'; // premium secondary
const INK = '2A2630'; // body dark text
const MUTE = '8C8794'; // muted
const SOFT = 'F5F1F4'; // light blush card
const WHITE = 'FFFFFF';
const HF = 'Malgun Gothic'; // header font (Korean-safe)
const BF = 'Malgun Gothic'; // body font

const W = 13.33,
  H = 7.5,
  MX = 0.7;

function bgDark(s) {
  s.background = { color: DARK };
}
function kicker(s, t, x, y, color) {
  s.addText(t.toUpperCase(), {
    x,
    y,
    w: 8,
    h: 0.3,
    fontFace: HF,
    fontSize: 11,
    bold: true,
    color: color || ROSE,
    charSpacing: 3,
    align: 'left',
  });
}
function title(s, t, x, y, color) {
  s.addText(t, {
    x,
    y,
    w: W - 2 * x,
    h: 0.9,
    fontFace: HF,
    fontSize: 32,
    bold: true,
    color: color || INK,
    align: 'left',
  });
}

/* 1 — TITLE */
let s = p.addSlide();
bgDark(s);
s.addShape(p.ShapeType.rect, {
  x: 0,
  y: 0,
  w: 0.18,
  h: H,
  fill: { color: ROSE },
});
s.addText('MARKETING STRATEGY & POSITIONING', {
  x: MX,
  y: 1.7,
  w: 11,
  h: 0.4,
  fontFace: HF,
  fontSize: 13,
  bold: true,
  color: GOLD,
  charSpacing: 4,
});
s.addText('다샤 타란', {
  x: MX,
  y: 2.25,
  w: 11.5,
  h: 1.3,
  fontFace: HF,
  fontSize: 64,
  bold: true,
  color: WHITE,
});
s.addText(
  [
    { text: '× ', options: { color: ROSE, bold: true } },
    { text: 'D MOMENTUM', options: { color: WHITE } },
  ],
  { x: MX, y: 3.55, w: 11.5, h: 0.9, fontFace: HF, fontSize: 40, bold: true },
);
s.addText('새 둥지 · 새 챕터  —  포지셔닝과 채널 전략 제안', {
  x: MX,
  y: 4.7,
  w: 11,
  h: 0.5,
  fontFace: BF,
  fontSize: 18,
  color: 'CFC8D4',
});
s.addText('D MOMENTUM  ·  2026.06  ·  내부 전략 미팅용', {
  x: MX,
  y: 6.6,
  w: 11,
  h: 0.4,
  fontFace: BF,
  fontSize: 12,
  color: MUTE,
  charSpacing: 2,
});

/* 2 — 현황 진단 (stat callouts) */
s = p.addSlide();
s.background = { color: WHITE };
kicker(s, '현황 진단', MX, 0.6);
title(s, '우리가 쥐고 있는 패', MX, 0.95);
const stats = [
  { n: '약 2,200만', l: '플랫폼 합산 도달', c: ROSE },
  { n: '13.9M', l: 'TikTok · 최대 자산', c: INK },
  { n: '6.2M', l: 'Instagram(+서브 2.6M)', c: INK },
  { n: '$0.8–1.17M', l: '추정 연수익', c: GOLD },
];
let cw = 2.85,
  gap = 0.22,
  sx = MX,
  sy = 2.15;
stats.forEach((d, i) => {
  const x = sx + i * (cw + gap);
  s.addShape(p.ShapeType.roundRect, {
    x,
    y: sy,
    w: cw,
    h: 1.9,
    rectRadius: 0.1,
    fill: { color: SOFT },
    line: { color: 'E7E0E6', width: 1 },
  });
  s.addText(d.n, {
    x: x + 0.05,
    y: sy + 0.35,
    w: cw - 0.1,
    h: 0.7,
    fontFace: HF,
    fontSize: 30,
    bold: true,
    color: d.c,
    align: 'center',
  });
  s.addText(d.l, {
    x: x + 0.05,
    y: sy + 1.15,
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
  y: 4.55,
  w: W - 2 * MX,
  h: 1.85,
  rectRadius: 0.1,
  fill: { color: DARK },
});
s.addText(
  [
    { text: '법적 상황  ', options: { bold: true, color: ROSE, fontSize: 15 } },
    {
      text: '전속계약 효력정지 가처분 인용 — 본안 전까지 자유 활동 가능',
      options: { color: WHITE, fontSize: 15 },
    },
  ],
  { x: MX + 0.4, y: 4.8, w: W - 2 * MX - 0.8, h: 0.5, fontFace: BF },
);
s.addText(
  '· 7년간 정산서 미제공이 핵심 사유  · 前 대표 상대 횡령·배임 고소 진행 중  · 약 9천만원 미정산 주장',
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
  '→ 이 사건은 "수동적 인형 → 주체적 인물" 전환의 명분이 된다 (단, 소송 자체를 마케팅 소재화 금지)',
  {
    x: MX + 0.4,
    y: 5.8,
    w: W - 2 * MX - 0.8,
    h: 0.5,
    fontFace: BF,
    fontSize: 13,
    italic: true,
    color: GOLD,
  },
);

/* 3 — 핵심 인사이트 */
s = p.addSlide();
s.background = { color: WHITE };
kicker(s, '핵심 인사이트', MX, 0.6);
title(s, '자산이 어디에 있는가', MX, 0.95);
const ins = [
  {
    n: '01',
    h: '팬덤은 글로벌이다',
    b: "TikTok·IG 모두 러시아/CIS·중동·동남아·남미 중심. 한국인 팬이 아님. '국내 연예인'으로 다루면 자산의 90%를 버린다.",
  },
  {
    n: '02',
    h: '엔진은 TikTok이다',
    b: '13.9M의 단일 최대 채널. 신규 유입의 본진. 다른 채널을 여기에 종속시켜 설계해야 한다.',
  },
  {
    n: '03',
    h: "약점은 '서사 부재'다",
    b: '비주얼 의존형은 교체 가능하고 수익이 브랜드딜에만 묶인다. 인격·서사·사업이 없으면 가치가 우상향하지 못한다.',
  },
];
let iy = 2.2;
ins.forEach((d, i) => {
  const y = iy + i * 1.5;
  s.addShape(p.ShapeType.ellipse, {
    x: MX,
    y: y,
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
    fontSize: 22,
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
    w: 10.6,
    h: 0.8,
    fontFace: BF,
    fontSize: 14,
    color: '55505C',
  });
});

/* 4 — 포지셔닝 Before/After */
s = p.addSlide();
s.background = { color: WHITE };
kicker(s, '포지셔닝', MX, 0.6);
title(s, '미팅의 가장 큰 결정 — 누구로 다시 세울 것인가', MX, 0.95);
const colW = 5.7,
  colH = 2.6,
  by = 2.2;
// Before
s.addShape(p.ShapeType.roundRect, {
  x: MX,
  y: by,
  w: colW,
  h: colH,
  rectRadius: 0.1,
  fill: { color: SOFT },
  line: { color: 'E7E0E6', width: 1 },
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
  '수익 = 브랜드딜 단가에 종속',
].forEach((t, i) => {
  s.addText('·  ' + t, {
    x: MX + 0.35,
    y: by + 0.8 + i * 0.52,
    w: colW - 0.7,
    h: 0.45,
    fontFace: BF,
    fontSize: 15,
    color: '55505C',
  });
});
// arrow
s.addShape(p.ShapeType.rightArrow, {
  x: MX + colW + 0.1,
  y: by + 1.1,
  w: 0.7,
  h: 0.5,
  fill: { color: ROSE },
});
// After
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
].forEach((t, i) => {
  s.addText('·  ' + t, {
    x: ax + 0.35,
    y: by + 0.8 + i * 0.52,
    w: colW - 0.7,
    h: 0.45,
    fontFace: BF,
    fontSize: 15,
    color: WHITE,
  });
});
// big bet banner
s.addShape(p.ShapeType.roundRect, {
  x: MX,
  y: 5.15,
  w: W - 2 * MX,
  h: 1.4,
  rectRadius: 0.1,
  fill: { color: WHITE },
  line: { color: GOLD, width: 2 },
});
s.addText(
  [
    { text: '큰 베팅  ', options: { bold: true, color: GOLD, fontSize: 18 } },
    {
      text: '"Reinvention(재탄생)" 내러티브를 마케팅 축으로',
      options: { bold: true, color: INK, fontSize: 18 },
    },
  ],
  { x: MX + 0.4, y: 5.35, w: W - 2 * MX - 0.8, h: 0.5, fontFace: HF },
);
s.addText(
  "법적 독립이 '인형 → 주체'로의 전환에 완벽한 명분을 준다. 톤: 새 시작 · 진짜 나 · 직접 만든다 (소송 직접 언급 X)",
  {
    x: MX + 0.4,
    y: 5.9,
    w: W - 2 * MX - 0.8,
    h: 0.45,
    fontFace: BF,
    fontSize: 13,
    color: '55505C',
  },
);

/* 5 — 국내 vs 해외 */
s = p.addSlide();
s.background = { color: WHITE };
kicker(s, '시장 전략', MX, 0.6);
title(s, '국내 vs 해외 — 글로벌 우선, 한국은 베이스캠프', MX, 0.95);
const zw = 5.7,
  zy = 2.2,
  zh = 3.0;
// 글로벌
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
  '글로벌 브랜드딜 · 커머스 전환',
  '팔로워 2,200만의 실제 거주지를 공략',
].forEach((t, i) => {
  s.addText('·  ' + t, {
    x: MX + 0.4,
    y: zy + 1.4 + i * 0.48,
    w: zw - 0.8,
    h: 0.45,
    fontFace: BF,
    fontSize: 14,
    color: WHITE,
  });
});
// 한국
const kx = MX + zw + 0.9;
s.addShape(p.ShapeType.roundRect, {
  x: kx,
  y: zy,
  w: zw,
  h: zh,
  rectRadius: 0.1,
  fill: { color: SOFT },
  line: { color: 'E7E0E6', width: 1 },
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
].forEach((t, i) => {
  s.addText('·  ' + t, {
    x: kx + 0.4,
    y: zy + 1.4 + i * 0.48,
    w: zw - 0.8,
    h: 0.45,
    fontFace: BF,
    fontSize: 14,
    color: '55505C',
  });
});
s.addText(
  '결론 — 한국을 무대로 쓰되 청중은 전 세계. 국내 단독 시장만 노리면 ROI가 무너진다.',
  {
    x: MX,
    y: 5.6,
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

/* 6 — 플랫폼 역할 분담 */
s = p.addSlide();
s.background = { color: WHITE };
kicker(s, '채널 전략', MX, 0.6);
title(s, '플랫폼 역할 분담 — 퍼널로 나눠라', MX, 0.95);
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
    c: '7B5BD6',
    role: '사람으로 만들고 돈으로 바꾼다',
    items: [
      '브이로그 · 한국 정착기 · Q&A',
      "'인형'에 서사 부여",
      '광고·장편PPL·브랜드 런칭',
    ],
    kpi: 'KPI · 시청시간 · 구독전환 · 충성도',
  },
];
const pw = 3.9,
  pgap = 0.31,
  py = 2.15,
  ph = 4.15;
plat.forEach((d, i) => {
  const x = MX + i * (pw + pgap);
  s.addShape(p.ShapeType.roundRect, {
    x,
    y: py,
    w: pw,
    h: ph,
    rectRadius: 0.1,
    fill: { color: WHITE },
    line: { color: 'E7E0E6', width: 1 },
  });
  s.addShape(p.ShapeType.roundRect, {
    x,
    y: py,
    w: pw,
    h: 0.95,
    rectRadius: 0.1,
    fill: { color: d.c },
  });
  s.addShape(p.ShapeType.rect, {
    x,
    y: py + 0.55,
    w: pw,
    h: 0.4,
    fill: { color: d.c },
  });
  s.addText(d.t, {
    x: x + 0.3,
    y: py + 0.12,
    w: pw - 0.6,
    h: 0.5,
    fontFace: HF,
    fontSize: 23,
    bold: true,
    color: WHITE,
  });
  s.addText(d.tag, {
    x: x + 0.3,
    y: py + 0.58,
    w: pw - 0.6,
    h: 0.35,
    fontFace: HF,
    fontSize: 13,
    bold: true,
    color: 'FFFFFF',
    charSpacing: 2,
  });
  s.addText(d.role, {
    x: x + 0.3,
    y: py + 1.15,
    w: pw - 0.6,
    h: 0.6,
    fontFace: HF,
    fontSize: 14,
    bold: true,
    color: INK,
  });
  d.items.forEach((t, j) => {
    s.addText('·  ' + t, {
      x: x + 0.3,
      y: py + 1.85 + j * 0.5,
      w: pw - 0.55,
      h: 0.45,
      fontFace: BF,
      fontSize: 13,
      color: '55505C',
    });
  });
  s.addText(d.kpi, {
    x: x + 0.3,
    y: py + 3.55,
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
    y: 6.5,
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

/* 7 — 수익화 3단계 */
s = p.addSlide();
s.background = { color: WHITE };
kicker(s, '수익화', MX, 0.6);
title(s, '브랜드딜 의존 탈피 — 3단계 구조', MX, 0.95);
const mon = [
  {
    ph: '단기',
    h: '브랜드딜 최적화',
    b: '글로벌+K-뷰티/패션 협찬. 현 수익원의 단가 인상 협상.',
    c: MUTE,
  },
  {
    ph: '중기',
    h: '오너 브랜드 (PB/협업)',
    b: '뷰티·패션 소품 자체 라인. 인형 비주얼 = 뷰티와 완벽 적합.',
    c: GOLD,
  },
  {
    ph: '장기',
    h: 'IP화',
    b: '화보집·굿즈·멤버십/팬 플랫폼. 단가가 아닌 자산을 보유.',
    c: ROSE,
  },
];
const my = 2.3,
  mh = 3.1;
mon.forEach((d, i) => {
  const x = MX + i * (3.9 + 0.31);
  s.addShape(p.ShapeType.roundRect, {
    x,
    y: my,
    w: 3.9,
    h: mh,
    rectRadius: 0.1,
    fill: { color: i === 2 ? DARK : SOFT },
    line: { color: 'E7E0E6', width: 1 },
  });
  s.addShape(p.ShapeType.ellipse, {
    x: x + 0.35,
    y: my + 0.35,
    w: 0.75,
    h: 0.75,
    fill: { color: d.c },
  });
  s.addText(String(i + 1), {
    x: x + 0.35,
    y: my + 0.46,
    w: 0.75,
    h: 0.5,
    fontFace: HF,
    fontSize: 20,
    bold: true,
    color: WHITE,
    align: 'center',
  });
  s.addText(d.ph, {
    x: x + 1.25,
    y: my + 0.5,
    w: 2.4,
    h: 0.5,
    fontFace: HF,
    fontSize: 15,
    bold: true,
    color: d.c,
  });
  s.addText(d.h, {
    x: x + 0.35,
    y: my + 1.4,
    w: 3.2,
    h: 0.6,
    fontFace: HF,
    fontSize: 19,
    bold: true,
    color: i === 2 ? WHITE : INK,
  });
  s.addText(d.b, {
    x: x + 0.35,
    y: my + 2.05,
    w: 3.25,
    h: 0.9,
    fontFace: BF,
    fontSize: 13,
    color: i === 2 ? 'CFC8D4' : '55505C',
  });
});
s.addText(
  "브랜드딜만 하면 또 '남의 단가에 묶인 모델'. 2·3단계를 깔아야 D모멘텀이 기획사가 아닌 사업 파트너가 된다.",
  {
    x: MX,
    y: 5.75,
    w: W - 2 * MX,
    h: 0.5,
    fontFace: BF,
    fontSize: 14,
    italic: true,
    color: INK,
    align: 'center',
  },
);

/* 8 — 90일 로드맵 */
s = p.addSlide();
s.background = { color: WHITE };
kicker(s, '실행', MX, 0.6);
title(s, '90일 실행 로드맵', MX, 0.95);
const road = [
  {
    d: '0–30일',
    h: '리포지셔닝 셋업',
    items: [
      '채널 톤&매너 리뉴얼(재탄생)',
      'YouTube 채널 신설·기획',
      "앵커 콘텐츠 1탄 '새 시작' 발행",
    ],
  },
  {
    d: '31–60일',
    h: '콘텐츠 엔진 가동',
    items: [
      'TikTok 고빈도 운영 본격화',
      '한국 정착기 브이로그 시리즈',
      '글로벌 브랜드딜 단가 재협상',
    ],
  },
  {
    d: '61–90일',
    h: '수익 다각화 착수',
    items: [
      '오너 브랜드/PB 컨셉 확정',
      '커머스(쇼핑태그) 테스트',
      '성과 리뷰 → 다음 분기 설계',
    ],
  },
];
const ry = 2.25,
  rh = 3.6;
road.forEach((d, i) => {
  const x = MX + i * (3.9 + 0.31);
  s.addShape(p.ShapeType.roundRect, {
    x,
    y: ry,
    w: 3.9,
    h: rh,
    rectRadius: 0.1,
    fill: { color: SOFT },
    line: { color: 'E7E0E6', width: 1 },
  });
  s.addShape(p.ShapeType.roundRect, {
    x,
    y: ry,
    w: 3.9,
    h: 0.85,
    rectRadius: 0.1,
    fill: { color: DARK },
  });
  s.addShape(p.ShapeType.rect, {
    x,
    y: ry + 0.45,
    w: 3.9,
    h: 0.4,
    fill: { color: DARK },
  });
  s.addText(d.d, {
    x: x + 0.3,
    y: ry + 0.18,
    w: 3.3,
    h: 0.5,
    fontFace: HF,
    fontSize: 18,
    bold: true,
    color: ROSE,
  });
  s.addText(d.h, {
    x: x + 0.3,
    y: ry + 1.05,
    w: 3.3,
    h: 0.5,
    fontFace: HF,
    fontSize: 17,
    bold: true,
    color: INK,
  });
  d.items.forEach((t, j) => {
    s.addText('·  ' + t, {
      x: x + 0.3,
      y: ry + 1.7 + j * 0.62,
      w: 3.35,
      h: 0.55,
      fontFace: BF,
      fontSize: 13,
      color: '55505C',
    });
  });
});
s.addText('각 단계 종료 시 지표 리뷰로 다음 단계 가설을 갱신한다.', {
  x: MX,
  y: 6.2,
  w: W - 2 * MX,
  h: 0.4,
  fontFace: BF,
  fontSize: 13,
  italic: true,
  color: MUTE,
  align: 'center',
});

/* 9 — 결정사항 (dark closing) */
s = p.addSlide();
bgDark(s);
s.addShape(p.ShapeType.rect, {
  x: 0,
  y: 0,
  w: 0.18,
  h: H,
  fill: { color: ROSE },
});
kicker(s, '미팅에서 결정할 것', MX, 0.7, GOLD);
s.addText('오늘 합의해야 할 4가지', {
  x: MX,
  y: 1.05,
  w: 11,
  h: 0.9,
  fontFace: HF,
  fontSize: 32,
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
    b: "'재탄생 서사' vs 기존 '비주얼 퀸' 유지·강화",
  },
  {
    n: '03',
    h: 'YouTube 신설',
    b: '리포지셔닝하려면 필수. 안 하면 한계 그대로.',
  },
  { n: '04', h: '오너 브랜드 로드맵', b: '브랜드딜만 vs PB·협업까지 확장' },
];
const dw = 5.7,
  dh = 1.85,
  dgx = 0.9,
  dgy = 0.35,
  dx0 = MX,
  dy0 = 2.3;
dec.forEach((d, i) => {
  const x = dx0 + (i % 2) * (dw + dgx),
    y = dy0 + Math.floor(i / 2) * (dh + dgy);
  s.addShape(p.ShapeType.roundRect, {
    x,
    y,
    w: dw,
    h: dh,
    rectRadius: 0.08,
    fill: { color: DARK2 },
  });
  s.addText(d.n, {
    x: x + 0.35,
    y: y + 0.3,
    w: 1.2,
    h: 0.9,
    fontFace: HF,
    fontSize: 40,
    bold: true,
    color: ROSE,
  });
  s.addText(d.h, {
    x: x + 1.5,
    y: y + 0.32,
    w: dw - 1.8,
    h: 0.5,
    fontFace: HF,
    fontSize: 18,
    bold: true,
    color: WHITE,
  });
  s.addText(d.b, {
    x: x + 1.5,
    y: y + 0.85,
    w: dw - 1.8,
    h: 0.8,
    fontFace: BF,
    fontSize: 13.5,
    color: 'CFC8D4',
  });
});
s.addText('D MOMENTUM  ·  다샤 타란 마케팅 전략', {
  x: MX,
  y: 6.95,
  w: 11,
  h: 0.35,
  fontFace: BF,
  fontSize: 11,
  color: MUTE,
  charSpacing: 2,
});

p.writeFile({
  fileName:
    'C:/Users/BNK-1/Desktop/todo-list/dasha-momentum/다샤타란_D모멘텀_마케팅전략.pptx',
}).then((f) => console.log('SAVED:', f));
