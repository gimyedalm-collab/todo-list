# DMTM CRM — Gmail 인바운드 연동 남은 세팅

대상: https://dmtmcrm.mycafe24.com
코드 배포 외에 콘솔에서 직접 처리해야 하는 항목. 하나라도 빠지면 연결 실패.

- [ ] **Google Cloud OAuth 동의화면** — `gmail.readonly` 스코프 추가 + `contact@d-momentum.com`을 테스트 사용자로 등록 (앱 미검증 상태면 필수)
- [ ] **리디렉션 URI** — `https://dmtmcrm.mycafe24.com/google/callback` 이 OAuth 클라이언트에 등록됐는지 확인
- [ ] **INTAKE_AGENCY_ID** — 실제 기획사 id로 채우기 (Gmail 인바운드 메일 귀속 대상 결정, 현재 빈칸)
