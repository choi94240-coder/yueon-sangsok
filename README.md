# 유언과 상속 이야기 – GitHub Pages 랜딩페이지

## 포함 파일
- `index.html` : 랜딩페이지 본문
- `style.css` : 반응형 디자인
- `script.js` : QR코드 생성 및 주소 복사
- `assets/유언상속강의서.pdf` : 원본 강의 PDF

## 1. GitHub 저장소 만들기
1. https://github.com 에 로그인합니다.
2. 오른쪽 위 `+` → `New repository`를 선택합니다.
3. 저장소 이름을 예: `yueon-sangsok` 으로 입력합니다.
4. `Public`을 선택하고 `Create repository`를 누릅니다.

## 2. 파일 업로드
1. 저장소 화면에서 `Add file` → `Upload files`를 누릅니다.
2. 압축을 푼 폴더 안의 `index.html`, `style.css`, `script.js`, `assets` 폴더를 업로드합니다.
3. `Commit changes`를 누릅니다.
   - 폴더 구조가 유지되어야 합니다.
   - `index.html`은 저장소 최상위(root)에 있어야 합니다.

## 3. GitHub Pages 켜기
1. 저장소의 `Settings` → 왼쪽 `Pages`로 이동합니다.
2. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
3. Branch는 `main`, 폴더는 `/(root)`를 선택하고 `Save`를 누릅니다.
4. 1~5분 정도 기다린 뒤 Pages 화면에 표시되는 공개 주소를 엽니다.
   - 주소 예시: `https://깃허브아이디.github.io/yueon-sangsok/`

## 4. QR코드 확인
- 배포된 랜딩페이지를 열면 QR코드가 현재 페이지의 `#top` 주소로 자동 생성됩니다.
- 스마트폰 카메라로 QR코드를 스캔해 첫 화면으로 이동하는지 확인합니다.
- QR코드는 공개된 GitHub Pages 주소에서 생성됩니다. PC의 `file://` 주소로 열었을 때 보이는 안내 문구는 실제 배포용 QR코드가 아닙니다.
- QR코드 생성에는 QRCode.js CDN을 사용하므로 페이지를 열 때 인터넷 연결이 필요합니다.

## 5. 수정 및 재배포
- GitHub 저장소에서 파일을 수정하거나 새 파일을 업로드하고 `Commit changes`를 누르면 자동으로 다시 배포됩니다.
- 디자인은 `style.css`, 글과 메뉴는 `index.html`, QR 동작은 `script.js`에서 수정합니다.

## 주의
- 강의 PDF의 내용을 소개하는 교육용 페이지입니다. 상속세·유류분·상속 절차 등 법률 및 세무 내용은 법령 개정과 개별 사정에 따라 달라질 수 있습니다. 실제 의사결정 전 변호사·법무사·세무사 등 전문가에게 확인하세요.
- 원본 PDF도 함께 공개되므로 민감한 개인정보가 포함되어 있지 않은지 공개 전에 확인하세요.
