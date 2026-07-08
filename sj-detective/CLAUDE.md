# SJ 탐정사무소 사이트 — 프로젝트 컨텍스트

## 프로젝트 개요
- **브랜드**: SJ Detective Agency ((SJ)에스제이탐정사무소)
- **도메인**: https://sj-kpi.com (활성, HTTPS 자동)
- **성격**: 정적 사이트 (HTML/CSS/JS 인라인 단일 파일)
- **디자인 톤**: 다크 (#050507 배경) + 골드 액센트 (#b89968) + Pretendard/Noto Serif KR/Cormorant Garamond

## 호스팅·도메인 구조
- **호스팅**: GitHub Pages (무료, HTTPS 자동)
- **CDN/DNS**: Cloudflare (Free 플랜, DNS only 회색 구름 유지)
- **네임서버**: Cloudflare (`amir.ns.cloudflare.com`, `samara.ns.cloudflare.com`)
- **도메인 등록**: 카페24 (2027-08-28 만료)
- **사업자 정보**: (SJ)에스제이탐정사무소 · 대표 김혁진 · 사업자등록번호 702-22-02085
- **주소**: 경기도 고양시 일산서구 주엽로 150, 8층 806호 (자유프라자)

## 저장소 (양쪽 동기화 유지)

### 메인 저장소 (도메인 연결)
- **URL**: https://github.com/gimyedalm-collab/sj-detective
- **로컬**: `C:\Users\BNK-1\Desktop\sj-site\`
- **브랜치**: master
- **Pages 상태**: built, HTTPS enforced, cert approved

### 백업/서브 저장소
- **URL**: https://github.com/gimyedalm-collab/todo-list (sj-detective/ 폴더)
- **로컬**: `C:\Users\BNK-1\Desktop\todo-list\sj-detective\`

⚠️ **양쪽 다 push 하는 이유**: 초기에 todo-list에 만들었다가 도메인용 새 저장소를 만든 흔적. 지금은 sj-detective(sj-kpi.com용)가 메인.

## 파일 구조

```
sj-site/
├── index.html          # 메인 페이지 (모든 CSS/JS 인라인, 4700줄+)
├── privacy.html        # 개인정보처리방침
├── terms.html          # 이용약관
├── CNAME               # sj-kpi.com
├── CLAUDE.md           # 이 파일
└── images/
    ├── team-kim.jpg              # 대표 김혁진 인물샷
    ├── team-duo.jpg              # 김혁진 + 신대현 듀오
    ├── team-group-1.jpg          # 단체사진 1 (모자이크)
    ├── team-group-2.jpg          # 단체사진 2 (모자이크)
    ├── office-front.jpg          # 사무소 입구 (OG 이미지)
    ├── office-investigation.jpg  # 회의실 (재활용)
    ├── office-consult.jpg        # 비밀 상담실
    ├── business-registration.jpg # 사업자등록증
    ├── case-1.png / 2.png / 3.png  # 사례 이미지 (외도조사/결혼전 검증/사람찾기)
    ├── cert-paper-kim.jpg / cert-paper-shin.png
    ├── cert-card-kim.png / cert-card-shin.png
    └── favicon.svg + favicon.ico + favicon-16/32/192/512.png + apple-touch-icon.png
```

## 섹션 순서 (현재 최종)

```
Hero → Trust → About → Services → Process → Why (신뢰의 약속)
    → WARNING (사기 함정 3가지) → Cases → Team → Office → FAQ → CTA → Footer
```

**Nav 메뉴 순서**: 소개 · 의뢰분야 · 진행절차 · 신뢰의 약속 · 팀 · 사무소 · 해결사례 · FAQ

## 연락처 (사이트 전역)
- **대표전화**: 1644-1488
- **직통**: 010-8182-6634
- **카카오톡 오픈채팅**: https://open.kakao.com/o/s7x9l2xi
- **텔레그램**: @sjagency2 (t.me/sjagency2)

## 편집 워크플로우

### 1) 파일 수정
- `index.html`은 하나의 파일에 CSS·JS 다 인라인
- Grep으로 위치 찾고 Edit 도구로 정확한 문자열 교체
- 포매터가 자동으로 재정렬할 수 있으니 정확한 텍스트로 매칭

### 2) 양쪽 저장소 동기화 (필수 패턴)
```bash
cp "C:/Users/BNK-1/Desktop/sj-site/index.html" "C:/Users/BNK-1/Desktop/todo-list/sj-detective/index.html"
cd "C:/Users/BNK-1/Desktop/sj-site"
git add index.html
git commit -m "<메시지>"
git push origin master

cd "C:/Users/BNK-1/Desktop/todo-list"
git stash push -u -m "wip" -- . ':!sj-detective/'
git add sj-detective/index.html
git commit -m "sj-detective: <메시지 동기화>"
git push origin master
git stash pop
```

⚠️ todo-list 저장소는 다른 폴더(benchmark.html, tambeauty-plan 등)에 진행 중인 작업이 있어서 stash 사용 필수.

### 3) 배포 확인
- 푸시 후 1~2분 내 GitHub Pages 빌드 → https://sj-kpi.com 자동 갱신
- 캐시 문제 시 강력 새로고침 (Ctrl+Shift+R) 또는 URL 끝에 `?v=N` 붙여 새 URL로 인식시키기

## 색상 팔레트 (CSS 변수)
```css
--bg: #050507         /* 가장 진한 배경 */
--bg-dark: #0e0e10    /* 살짝 밝은 다크 */
--bg-card: #15151a    /* 카드 배경 */
--gold: #b89968       /* 메인 골드 */
--gold-light: #d4b888
--gold-deep: #8c6f43
--red: #b8332a        /* WARNING 액센트 */
--text: rgba(255, 255, 255, 0.82)
```

## 카드 정렬 강제 (그리드)
모든 카드 그리드(services/why/team/cases/warning/office)에 다음 CSS 적용됨:
```css
.case-grid, .warn-grid, .why-grid, ... {
  grid-auto-rows: 1fr !important;
  align-items: stretch !important;
}
.warn-card { display: flex; flex-direction: column; height: 100%; }
.warn-desc { flex-grow: 0; min-height: 120px; }
.warn-sj { margin-top: 22px; }
```

## 카톡 오픈채팅 링크 (변경 시)
현재: `https://open.kakao.com/o/s7x9l2xi`

3곳에 걸쳐 있음:
- Final CTA 노란 버튼
- Footer 연락처
- 하단 고정 바 K 버튼

## OG 미리보기 (SNS 공유용)
- `og:image` → https://sj-kpi.com/images/office-front.jpg (SJ Detective Agency 로고 입구)
- 캐시 무시하려면 URL에 `?v=N` 붙여서 카톡 등에 공유

## 자주 하는 작업 패턴

### 카피 수정
1. Grep으로 원본 문자열 위치 찾기
2. Read로 정확한 형태 확인 (포매터로 인해 <br />, 들여쓰기가 달라질 수 있음)
3. Edit으로 old_string → new_string 교체
4. 양쪽 저장소 push

### 새 이미지 추가
1. 사용자에게 데스크탑 저장 요청 → Bash `find`로 위치 확인
2. `cp`로 sj-site/images/ 로 복사
3. HTML src 경로 업데이트 (이미 placeholder면 자동)
4. 양쪽 저장소 push (이미지 파일도 add)

### 섹션 추가/이동
1. Grep으로 `<!-- ==================== SECTION ====================` 마커 찾기
2. 통째로 Edit 두 번 (새 위치에 삽입 + 원위치 삭제)
3. nav 메뉴에도 반영 필요 시 같이 수정

## Cloudflare DNS 레코드
```
A     sj-kpi.com   185.199.108.153   DNS only (회색)
A     sj-kpi.com   185.199.109.153   DNS only
A     sj-kpi.com   185.199.110.153   DNS only
A     sj-kpi.com   185.199.111.153   DNS only
CNAME www          sj-kpi.com        DNS only
```

⚠️ Proxy는 반드시 **회색 구름 (DNS only)** — 주황이면 GitHub Pages SSL 발급 실패

## 사용자 선호 (지금까지의 피드백)
- 자동 승인 흐름 선호 (승인 버튼 없이 알아서 진행)
- 파일 만들면 커밋·푸시·라이브 링크까지 한번에
- 스크린샷에 빨간색으로 표시 → 그 부분만 정정 (전체 지우지 말 것)
- 이미지에서 텍스트를 임의로 읽어서 오타로 단정하지 말 것
- PowerShell 자동 승인 (Windows 환경)

## 미완료·개선 여지
- Google Analytics 4 미설치 (광고 돌릴 때 필요)
- 네이버 애널리틱스·카카오 픽셀 미설치
- sitemap.xml, robots.txt 미생성
- JSON-LD 구조화 데이터 미추가
- 약관·방침 변호사 검토 대기
- 의뢰인 후기 섹션 미추가

---

## Claude에게 지시할 때 팁

작업 시작 시 이 파일을 자동으로 읽으니, 이런 식으로 요청하면 됨:

- "Hero 헤드라인 X → Y로 바꿔줘" → Grep + Edit + 양쪽 push
- "새 사례 카드 추가해줘" → case-grid 안에 새 case-card 삽입
- "모바일에서 이 부분 줄바꿈 이상해" → 스크린샷 함께 → 정확한 <br /> 위치 추가

관행:
- 모든 변경은 sj-site + todo-list 양쪽 push
- 커밋 메시지 한국어 OK, 무엇을 바꿨는지 명확히
- 큰 변경이면 이유·의도도 커밋 메시지에 포함
