# MapleStory Worlds CreatorForum

메이플스토리 월드 크리에이터를 위한 커뮤니티 포럼 사이트

## 🎮 주요 기능

### 커뮤니티 (개발자 중심)
- **카테고리**: 스크립트(Lua), 컴포넌트/엔티티, UI/UX, 물리/충돌, 서버/멀티플레이, 성능/최적화, 에디터/툴, 리소스/모델, 버그 리포트, 기능 제안
- **기능**: Unity Discussions 스타일의 토픽 리스트, 댓글 시스템, 중첩 답글, 좋아요
- **글 작성**: 별도 페이지에서 카테고리/타입 선택 후 작성

### 유저 라운지 (플레이어 중심)
- **카테고리**: 자유게시판, 월드 추천, 플레이 후기, 팁&트릭, 스크린샷/영상, 유머/밈, 이벤트, 친구찾기, 질문/답변
- **기능**: Reddit 스타일의 포스트, 투표(upvote/downvote), 정렬(Hot/New/Top)
- **글 작성**: 페이지 상단에서 인라인으로 바로 작성

### 패키지 레지스트리
- 패키지 목록 및 상세 정보
- 카테고리/라이선스별 필터링
- 인기순/최신순 정렬

### 코드 스니펫
- Lua 코드 스니펫 공유

## 🛠️ 기술 스택

- **Frontend**: React 18.3.1 (Babel standalone)
- **Styling**: CSS Custom Properties
- **Routing**: Hash-based client-side routing
- **Fonts**: NEXON Lv2 Gothic, Noto Sans KR

## 🚀 실행 방법

1. **Python HTTP 서버 실행**
   ```bash
   cd creator-forum
   python -m http.server 8000
   ```

2. **브라우저에서 접속**
   ```
   http://localhost:8000/CreatorForum.html
   ```

## 📁 프로젝트 구조

```
creator-forum/
├── CreatorForum.html          # 메인 HTML
├── styles.css                 # 전체 스타일
├── data.js                    # 데이터 (커뮤니티, 패키지, 알림)
├── app.jsx                    # 메인 앱 로직 & 라우팅
├── components.jsx             # 공통 컴포넌트
├── ai-assistant.jsx           # AI 어시스턴트
├── page-feed.jsx              # 커뮤니티 & 유저 라운지
├── page-community-detail.jsx # 토픽 상세
├── page-community-create.jsx # 커뮤니티 글 작성
├── page-playground-create.jsx # 유저 라운지 글 작성
├── page-list.jsx              # 패키지 리스트
├── page-detail.jsx            # 패키지 상세
├── page-upload.jsx            # 패키지 업로드
├── page-popular.jsx           # 인기 패키지
├── page-recent.jsx            # 최근 패키지
├── page-transition.jsx        # 페이지 전환
└── tweaks-panel.jsx           # 디자인 트윅 패널
```

## ✨ 주요 UI/UX 특징

- **레딧 스타일 뒤로가기 버튼**: 모든 상세 페이지에 원형 뒤로가기 버튼
- **중첩 댓글**: 레딧 스타일의 접기/펼치기 기능
- **이미지 업로드**: 글 작성 시 여러 이미지 첨부 가능
- **다크 모드**: 라이트/다크 테마 전환
- **반응형 디자인**: 다양한 화면 크기 지원

## 📝 라이선스

MIT License

## 👨‍💻 개발자

Nexon - greenbird@nexon.co.kr
