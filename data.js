/* CreatorForum data — packages, snippets, community.
   Attached to window.CF for use across babel scripts. */
(function () {
  // author color helper handled in components
  const PACKAGES = [
    {
      scope: "@luastd", name: "datetime", ko: "날짜·시간 유틸", en: "DateTime",
      cat: "게임플레이", icon: "box", iconColor: "#ff7a59",
      desc: "타이머, 포맷팅, 듀레이션, 게임 내 시계까지. 의존성 없는 가벼운 시간 라이브러리.",
      tags: ["datetime", "utility", "format"],
      author: "kbyte", verified: false, authorColor: "#e0892f",
      downloads: 283400, stars: 1800, featured: false,
      version: "2.4.1", license: "MIT", updated: "3일 전", size: "12.4 KB", deps: 0,
    },
    {
      scope: "@nx", name: "dialogue-system", ko: "대화 시스템", en: "Dialogue System",
      cat: "AI / NPC", icon: "msg", iconColor: "#9d7bff",
      desc: "분기형 대사, 타이핑 연출, 다국어 테마까지 한 번에. 노드 그래프로 컷신 흐름을 짭니다.",
      tags: ["dialogue", "cutscene", "i18n"],
      author: "나리스튜디오", verified: true, authorColor: "#3aa3ff",
      downloads: 184200, stars: 2100, featured: true,
      version: "1.9.0", license: "MIT", updated: "1일 전", size: "48.1 KB", deps: 2,
    },
    {
      scope: "@ui", name: "inventory-pro", ko: "인벤토리 프로", en: "Inventory Pro",
      cat: "UI / HUD", icon: "grid", iconColor: "#3aa3ff",
      desc: "드래그&드롭, 정렬, 장비 슬롯, 툴팁이 내장된 인벤토리 UI 컴포넌트 세트.",
      tags: ["inventory", "ui", "drag-drop"],
      author: "PixelPub", verified: true, authorColor: "#7c5cff",
      downloads: 142800, stars: 1900, featured: true,
      version: "3.2.0", license: "Apache-2.0", updated: "5일 전", size: "64.7 KB", deps: 1,
    },
    {
      scope: "@math", name: "vector-lite", ko: "벡터 수학", en: "Vector Lite",
      cat: "에디터 툴", icon: "sigma", iconColor: "#ffb347",
      desc: "2D/3D 벡터, 보간, 이징 함수 모음. 핫패스에 최적화된 제로 컬렉션 연산.",
      tags: ["math", "vector", "easing"],
      author: "북설믹스", verified: false, authorColor: "#2fb6a8",
      downloads: 156000, stars: 1400, featured: false,
      version: "0.8.3", license: "MIT", updated: "2주 전", size: "9.2 KB", deps: 0,
    },
    {
      scope: "@fx", name: "tween-flow", ko: "트윈 플로우", en: "Tween Flow",
      cat: "이펙트 / VFX", icon: "spark", iconColor: "#ff5c8a",
      desc: "제너럴 가능한 트윈 엔진. 시퀀스, 콜백, 30종 이징으로 UI·연출을 부드럽게.",
      tags: ["tween", "animation", "easing"],
      author: "PixelPub", verified: true, authorColor: "#7c5cff",
      downloads: 132700, stars: 1700, featured: true,
      version: "4.0.2", license: "MIT", updated: "4일 전", size: "21.8 KB", deps: 0,
    },
    {
      scope: "@fx", name: "particle-presets", ko: "파티클 프리셋", en: "Particle Presets",
      cat: "이펙트 / VFX", icon: "spark", iconColor: "#ff5c8a",
      desc: "타격감·환경·UI용 파티클 120종 프리셋. 한 줄로 스폰하고 풀링으로 최적화.",
      tags: ["particle", "vfx", "pooling"],
      author: "효요공방", verified: true, authorColor: "#ff7a59",
      downloads: 118900, stars: 1600, featured: true,
      version: "2.1.5", license: "MIT", updated: "1주 전", size: "88.3 KB", deps: 1,
    },
    {
      scope: "@mnx", name: "quest-kit", ko: "퀘스트 키트", en: "Quest Kit",
      cat: "게임플레이", icon: "box", iconColor: "#e0a82f",
      desc: "단계형·반복형 퀘스트, 목표 추적, 보상 지급을 선언적으로 구성하는 제작 키트.",
      tags: ["quest", "progress", "reward"],
      author: "한별로", verified: true, authorColor: "#34c759",
      downloads: 97400, stars: 1300, featured: true,
      version: "1.4.0", license: "Apache-2.0", updated: "6일 전", size: "37.0 KB", deps: 1,
    },
    {
      scope: "@save", name: "cloud-save", ko: "클라우드 세이브", en: "Cloud Save",
      cat: "데이터 / 세이브", icon: "box", iconColor: "#3aa3ff",
      desc: "버전드 세이브 슬롯, 충돌 해결, 오프라인 큐를 갖춘 저장 시스템.",
      tags: ["save", "sync", "offline"],
      author: "데이터팜", verified: false, authorColor: "#2fb6a8",
      downloads: 86200, stars: 980, featured: false,
      version: "1.1.2", license: "MIT", updated: "3주 전", size: "29.5 KB", deps: 2,
    },
    {
      scope: "@audio", name: "sound-pool", ko: "사운드 풀", en: "Sound Pool",
      cat: "오디오", icon: "wave", iconColor: "#ffb347",
      desc: "동시 재생, 거리 감쇠, 믹서 버스를 지원하는 경량 사운드 풀 매니저.",
      tags: ["audio", "sfx", "mixer"],
      author: "사운드굴", verified: false, authorColor: "#e0892f",
      downloads: 74100, stars: 870, featured: false,
      version: "0.6.0", license: "MIT", updated: "9일 전", size: "18.9 KB", deps: 0,
    },
    {
      scope: "@net", name: "room-sync", ko: "룸 싱크", en: "Room Sync",
      cat: "네트워크", icon: "net", iconColor: "#3aa3ff",
      desc: "권위 서버 기반 상태 동기화, 보간/예측, 입력 리플레이를 갖춘 멀티 룸 SDK.",
      tags: ["network", "multiplayer", "sync"],
      author: "랜선상회", verified: true, authorColor: "#3aa3ff",
      downloads: 64800, stars: 1100, featured: false,
      version: "2.0.0", license: "독점 (사내)", updated: "2일 전", size: "120 KB", deps: 3,
    },
    {
      scope: "@input", name: "gamepad-map", ko: "게임패드 맵", en: "Gamepad Map",
      cat: "입력 / 컨트롤", icon: "pad", iconColor: "#9d7bff",
      desc: "키보드·게임패드·터치를 하나의 액션 맵으로. 리바인딩 UI까지 포함.",
      tags: ["input", "gamepad", "rebind"],
      author: "조이스틱랩", verified: false, authorColor: "#7c5cff",
      downloads: 58300, stars: 760, featured: false,
      version: "1.3.1", license: "MIT", updated: "12일 전", size: "22.4 KB", deps: 0,
    },
    {
      scope: "@editor", name: "grid-snap", ko: "그리드 스냅", en: "Grid Snap",
      cat: "에디터 툴", icon: "ruler", iconColor: "#ffb347",
      desc: "타일·오브젝트 배치를 위한 그리드 스냅, 정렬 가이드, 멀티 선택 헬퍼.",
      tags: ["editor", "grid", "snap"],
      author: "툴메이커", verified: true, authorColor: "#34c759",
      downloads: 51200, stars: 690, featured: false,
      version: "0.9.4", license: "MIT", updated: "4주 전", size: "15.7 KB", deps: 0,
    },
    {
      scope: "@mnx", name: "state-machine", ko: "상태 머신", en: "State Machine",
      cat: "게임플레이", icon: "flow", iconColor: "#e0a82f",
      desc: "계층형 FSM, 전이 가드, 디버그 시각화를 제공하는 캐릭터 행동 엔진.",
      tags: ["fsm", "behavior", "ai"],
      author: "한별로", verified: true, authorColor: "#34c759",
      downloads: 47600, stars: 920, featured: false,
      version: "1.0.0", license: "Apache-2.0", updated: "1주 전", size: "26.1 KB", deps: 0,
    },
    {
      scope: "@save", name: "save-codec", ko: "세이브 코덱", en: "Save Codec",
      cat: "데이터 / 세이브", icon: "box", iconColor: "#3aa3ff",
      desc: "스키마 마이그레이션, 압축, 무결성 체크섬을 갖춘 직렬화 코덱.",
      tags: ["serialize", "schema", "migrate"],
      author: "데이터팜", verified: false, authorColor: "#2fb6a8",
      downloads: 39800, stars: 540, featured: false,
      version: "0.5.2", license: "MIT", updated: "5주 전", size: "14.0 KB", deps: 1,
    },
    {
      scope: "@ui", name: "hud-kit", ko: "HUD 키트", en: "HUD Kit",
      cat: "UI / HUD", icon: "grid", iconColor: "#3aa3ff",
      desc: "체력바, 미니맵, 데미지 폰트, 알림 토스트를 묶은 전투 HUD 컴포넌트.",
      tags: ["hud", "ui", "combat"],
      author: "PixelPub", verified: true, authorColor: "#7c5cff",
      downloads: 36200, stars: 810, featured: false,
      version: "2.2.0", license: "Apache-2.0", updated: "8일 전", size: "52.3 KB", deps: 1,
    },
    {
      scope: "@fx", name: "shader-fx", ko: "셰이더 FX", en: "Shader FX",
      cat: "이펙트 / VFX", icon: "spark", iconColor: "#ff5c8a",
      desc: "디졸브, 아웃라인, 히트 플래시 등 30종 포스트 셰이더 프리셋 컬렉션.",
      tags: ["shader", "post-fx", "outline"],
      author: "효요공방", verified: true, authorColor: "#ff7a59",
      downloads: 31500, stars: 720, featured: false,
      version: "1.0.3", license: "MIT", updated: "2주 전", size: "41.9 KB", deps: 0,
    },
  ];

  const CATEGORIES = ["게임플레이", "UI / HUD", "이펙트 / VFX", "오디오", "네트워크", "AI / NPC", "데이터 / 세이브", "입력 / 컨트롤", "에디터 툴"];
  const LICENSES = ["MIT", "Apache-2.0", "독점 (사내)"];

  const SNIPPETS = [
    {
      title: "데미지 숫자 팝업", lang: "lua", fname: "damage_popup.lua",
      author: "효요공방", likes: 342,
      code: `-- 타격 위치에 데미지 숫자를 띄운다\nlocal function PopDamage(pos, amount, crit)\n  local label = HUD.SpawnLabel(pos)\n  label.Text  = tostring(amount)\n  label.Color = crit and Color.Gold or Color.White\n  Tween.To(label, { y = pos.y - 60, alpha = 0 }, 0.8, "OutCubic")\n  Tween.OnDone(label, function() label:Destroy() end)\nend`,
    },
    {
      title: "부드러운 카메라 추적", lang: "lua", fname: "camera_follow.lua",
      author: "북설믹스", likes: 287,
      code: `-- 매 프레임 카메라를 타깃으로 보간\nfunction Camera:Follow(target, dt)\n  local goal = target.Position + self.Offset\n  self.Position = Vector.Lerp(\n    self.Position, goal, 1 - 0.001 ^ dt\n  )\n  self:ClampToBounds(self.Bounds)\nend`,
    },
    {
      title: "인벤토리 자동 정렬", lang: "lua", fname: "auto_sort.lua",
      author: "PixelPub", likes: 256,
      code: `-- 등급 → 이름순으로 슬롯 재배치\nfunction Inventory:Sort()\n  table.sort(self.Slots, function(a, b)\n    if a.Rarity ~= b.Rarity then\n      return a.Rarity > b.Rarity\n    end\n    return a.Name < b.Name\n  end)\n  self:Refresh()\nend`,
    },
    {
      title: "타이핑 대사 효과", lang: "lua", fname: "typewriter.lua",
      author: "나리스튜디오", likes: 421,
      code: `-- 글자를 하나씩 출력하는 코루틴\nfunction Typewriter(label, text, cps)\n  return coroutine.wrap(function()\n    for i = 1, #text do\n      label.Text = text:sub(1, i)\n      Sound.Play("blip", 0.3)\n      wait(1 / cps)\n    end\n  end)\nend`,
    },
    {
      title: "오브젝트 풀링", lang: "lua", fname: "object_pool.lua",
      author: "한별로", likes: 198,
      code: `-- 자주 생성되는 객체를 재사용\nfunction Pool:Get()\n  local obj = table.remove(self.free)\n  if not obj then obj = self.factory() end\n  obj.Active = true\n  return obj\nend\n\nfunction Pool:Release(obj)\n  obj.Active = false\n  self.free[#self.free + 1] = obj\nend`,
    },
    {
      title: "스크린 흔들림", lang: "lua", fname: "screen_shake.lua",
      author: "효요공방", likes: 312,
      code: `-- 폭발/타격 시 카메라 셰이크\nfunction Camera:Shake(power, time)\n  local t = 0\n  RunService.Update(function(dt)\n    t = t + dt\n    local d = power * (1 - t / time)\n    self.Offset = Vector.Random() * d\n    return t < time\n  end)\nend`,
    },
  ];

  const COMMUNITY_CATEGORIES = [
    { id: "announcements", name: "공지 & 업데이트", icon: "bell" },
    { id: "questions", name: "질문 & 도움", icon: "msg" },
    { id: "showcase", name: "쇼케이스", icon: "star" },
    { id: "feedback", name: "피드백", icon: "code" },
  ];

  const COMMUNITY = [
    {
      author: "나리스튜디오", color: "#3aa3ff", verified: true, time: "12분 전", type: "공지", pill: "s", category: "스크립트(Lua)",
      title: "dialogue-system 1.9.0 릴리스 — 다국어 핫스왑 지원",
      body: "런타임에 언어를 바꿔도 진행 중인 대사가 끊기지 않습니다. 마이그레이션 가이드는 README를 참고하세요. 피드백 환영합니다!",
      likes: 64, comments: 18, reposts: 9, views: 342, liked: true,
      lastReplier: "효요공방", lastReplyColor: "#ff7a59",
      thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=500&fit=crop&q=80",
      upvotes: 156, downvotes: 12
    },
    {
      author: "초보크리에이터", color: "#e0892f", verified: false, time: "38분 전", type: "질문", pill: "q", category: "UI/UX",
      title: "inventory-pro 드래그가 모바일에서 안 먹어요",
      body: "PC에서는 잘 되는데 터치 환경에서 슬롯이 안 잡힙니다. 혹시 enableTouch 옵션 따로 켜야 하나요? 버전은 3.2.0 입니다.",
      likes: 12, comments: 7, reposts: 0, views: 156, liked: false,
      lastReplier: "PixelPub", lastReplyColor: "#7c5cff",
      thumbnail: null,
      upvotes: 23, downvotes: 3
    },
    {
      author: "PixelPub", color: "#7c5cff", verified: true, time: "1시간 전", type: "쇼케이스", pill: "b", category: "UI/UX",
      title: "hud-kit으로 만든 보스전 HUD 공유합니다",
      body: "체력바 페이즈 전환 연출에 tween-flow를 같이 썼더니 훨씬 부드럽네요. 프리셋 GIF 첨부합니다. 자유롭게 가져다 쓰세요 🎮",
      likes: 156, comments: 24, reposts: 31, views: 1247, liked: false,
      lastReplier: "나리스튜디오", lastReplyColor: "#3aa3ff",
      thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=500&fit=crop&q=80",
      upvotes: 342, downvotes: 18
    },
    {
      author: "북설믹스", color: "#2fb6a8", verified: false, time: "3시간 전", type: "질문", pill: "q", category: "스크립트(Lua)",
      title: "vector-lite의 Lerp가 프레임 독립적인가요?",
      body: "dt를 곱해서 쓰고 있는데 프레임마다 결과가 미세하게 달라집니다. 권장 사용 패턴이 있으면 알려주세요.",
      likes: 8, comments: 5, reposts: 1, views: 89, liked: false,
      lastReplier: "데이터팜", lastReplyColor: "#2fb6a8",
      thumbnail: null,
      upvotes: 15, downvotes: 2
    },
    {
      author: "효요공방", color: "#ff7a59", verified: true, time: "6시간 전", type: "쇼케이스", pill: "b", category: "리소스/모델",
      title: "particle-presets 2.1.5 — 신규 '눈보라' 프리셋 20종",
      body: "겨울 맵 업데이트에 맞춰 환경 파티클을 추가했습니다. 풀링 기본값도 손봐서 저사양에서 프레임 드랍이 줄었어요.",
      likes: 203, comments: 41, reposts: 27, views: 2154, liked: false,
      lastReplier: "북설믹스", lastReplyColor: "#2fb6a8",
      thumbnail: "https://images.unsplash.com/photo-1636690619932-032f8c8c8d4c?w=800&h=500&fit=crop&q=80",
      upvotes: 487, downvotes: 34
    },
    {
      author: "데이터팜", color: "#2fb6a8", verified: false, time: "1일 전", type: "피드백", pill: "f", category: "기능 제안",
      title: "cloud-save 패키지 충돌 해결 로직 개선 요청",
      body: "현재 Last-Write-Wins 방식인데 Three-Way Merge 옵션이 있으면 좋겠습니다. 멀티플레이 게임에서 세이브 덮어쓰기 이슈가 많아요.",
      likes: 34, comments: 12, reposts: 3, views: 267, liked: false,
      lastReplier: "효요공방", lastReplyColor: "#ff7a59",
      thumbnail: null,
      upvotes: 78, downvotes: 9
    },
    {
      author: "스피드런너", color: "#f59e0b", verified: true, time: "2일 전", type: "쇼케이스", pill: "s", category: "서버/멀티플레이",
      title: "실시간 멀티플레이어 레이싱 게임",
      body: "최대 8명이 동시에 플레이할 수 있는 레이싱 게임을 만들었습니다. 실시간 동기화와 랩타임 리더보드 기능이 있습니다.",
      likes: 287, comments: 52, reposts: 38, views: 3421, liked: false,
      lastReplier: "PixelPub", lastReplyColor: "#7c5cff",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop&q=80",
      upvotes: 892, downvotes: 67
    },
    {
      author: "UIWizard", color: "#ec4899", verified: true, time: "3일 전", type: "쇼케이스", pill: "s", category: "UI/UX",
      title: "판타지 RPG UI 패키지",
      body: "판타지 RPG에 사용할 수 있는 완전한 UI 세트입니다. 인벤토리, 스킬트리, 캐릭터 시트 등 20개 이상의 컴포넌트가 포함되어 있습니다.",
      likes: 412, comments: 78, reposts: 94, views: 5234, liked: false,
      lastReplier: "나리스튜디오", lastReplyColor: "#3aa3ff",
      thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=500&fit=crop&q=80",
      upvotes: 1243, downvotes: 89
    },
    {
      author: "DungeonMaster", color: "#8b5cf6", verified: true, time: "4일 전", type: "쇼케이스", pill: "s", category: "스크립트(Lua)",
      title: "프로시저럴 던전 생성기",
      body: "무작위로 던전을 생성하는 시스템입니다. 방 크기, 복잡도, 적 배치를 커스터마이즈할 수 있습니다.",
      likes: 356, comments: 64, reposts: 72, views: 4187, liked: false,
      lastReplier: "효요공방", lastReplyColor: "#ff7a59",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop&q=80",
      upvotes: 967, downvotes: 54
    },
    {
      author: "코드마스터", color: "#10b981", verified: false, time: "5일 전", type: "질문", pill: "q", category: "일반/잡담",
      title: "크리에이터 팁 공유해요",
      body: "여러분만의 개발 꿀팁이 있나요? 자유롭게 공유해봐요!",
      likes: 45, comments: 23, reposts: 5, views: 567, liked: false,
      lastReplier: "나리스튜디오", lastReplyColor: "#3aa3ff",
      thumbnail: null,
      upvotes: 89, downvotes: 4
    },
    {
      author: "게임개발자", color: "#f59e0b", verified: true, time: "6일 전", type: "쇼케이스", pill: "s", category: "컴포넌트/엔티티",
      title: "재사용 가능한 NPC 시스템",
      body: "간단하게 NPC를 설정할 수 있는 컴포넌트 시스템입니다. 대화, 퀘스트, 상점 기능 포함.",
      likes: 234, comments: 45, reposts: 28, views: 1890, liked: false,
      lastReplier: "PixelPub", lastReplyColor: "#7c5cff",
      thumbnail: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=500&fit=crop&q=80",
      upvotes: 512, downvotes: 23
    },
    {
      author: "물리엔진러버", color: "#06b6d4", verified: false, time: "7일 전", type: "질문", pill: "q", category: "물리/충돌",
      title: "복잡한 충돌 처리 최적화 방법",
      body: "여러 오브젝트가 동시에 충돌할 때 성능 이슈가 있는데, 좋은 해결책 있을까요?",
      likes: 67, comments: 34, reposts: 8, views: 445, liked: false,
      lastReplier: "효요공방", lastReplyColor: "#ff7a59",
      thumbnail: null,
      upvotes: 134, downvotes: 11
    },
    {
      author: "서버개발자", color: "#8b5cf6", verified: true, time: "1주 전", type: "쇼케이스", pill: "s", category: "서버/멀티플레이",
      title: "동기화 최적화 라이브러리",
      body: "네트워크 트래픽을 50% 줄이는 동기화 시스템을 만들었습니다.",
      likes: 189, comments: 56, reposts: 42, views: 2345, liked: false,
      lastReplier: "데이터팜", lastReplyColor: "#2fb6a8",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop&q=80",
      upvotes: 678, downvotes: 34
    },
    {
      author: "최적화전문가", color: "#f97316", verified: true, time: "1주 전", type: "피드백", pill: "f", category: "성능/최적화",
      title: "프레임 드랍 개선 가이드",
      body: "실전에서 사용할 수 있는 성능 최적화 체크리스트를 정리했습니다.",
      likes: 345, comments: 67, reposts: 89, views: 3456, liked: false,
      lastReplier: "북설믹스", lastReplyColor: "#2fb6a8",
      thumbnail: null,
      upvotes: 890, downvotes: 23
    },
    {
      author: "툴개발자", color: "#84cc16", verified: false, time: "1주 전", type: "쇼케이스", pill: "s", category: "에디터/툴",
      title: "커스텀 에디터 확장 툴",
      body: "에디터에서 반복 작업을 자동화하는 툴입니다. 생산성이 2배 올랐어요!",
      likes: 178, comments: 43, reposts: 34, views: 1567, liked: false,
      lastReplier: "효요공방", lastReplyColor: "#ff7a59",
      thumbnail: "https://images.unsplash.com/photo-1636690619932-032f8c8c8d4c?w=800&h=500&fit=crop&q=80",
      upvotes: 456, downvotes: 19
    },
    {
      author: "아티스트", color: "#ef4444", verified: true, time: "2주 전", type: "쇼케이스", pill: "s", category: "리소스/모델",
      title: "무료 3D 에셋 팩 공유",
      body: "판타지 테마 3D 모델 50개를 무료로 배포합니다. 상업적 이용 가능!",
      likes: 567, comments: 123, reposts: 234, views: 8900, liked: false,
      lastReplier: "UIWizard", lastReplyColor: "#ec4899",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop&q=80",
      upvotes: 1890, downvotes: 45
    },
    {
      author: "버그헌터", color: "#ef4444", verified: false, time: "2주 전", type: "피드백", pill: "f", category: "버그 리포트",
      title: "엔진 버전 업데이트 후 충돌 이슈",
      body: "최신 버전으로 업데이트 후 특정 상황에서 크래시가 발생합니다.",
      likes: 234, comments: 89, reposts: 12, views: 2345, liked: false,
      lastReplier: "나리스튜디오", lastReplyColor: "#3aa3ff",
      thumbnail: null,
      upvotes: 456, downvotes: 23
    },
    {
      author: "기획자", color: "#a855f7", verified: true, time: "2주 전", type: "피드백", pill: "f", category: "기능 제안",
      title: "비주얼 스크립팅 기능 추가 제안",
      body: "코드 없이 로직을 구현할 수 있는 비주얼 스크립팅이 있으면 좋겠습니다.",
      likes: 456, comments: 134, reposts: 67, views: 4567, liked: false,
      lastReplier: "PixelPub", lastReplyColor: "#7c5cff",
      thumbnail: null,
      upvotes: 1234, downvotes: 89
    },
    {
      author: "초보개발자", color: "#14b8a6", verified: false, time: "2주 전", type: "질문", pill: "q", category: "일반/잡담",
      title: "처음 시작하는 분들께 추천하는 튜토리얼",
      body: "입문자에게 좋은 학습 자료 추천 부탁드립니다!",
      likes: 123, comments: 67, reposts: 23, views: 1234, liked: false,
      lastReplier: "효요공방", lastReplyColor: "#ff7a59",
      thumbnail: null,
      upvotes: 234, downvotes: 8
    },
    {
      author: "테크리드", color: "#3b82f6", verified: true, time: "3주 전", type: "공지", pill: "s", category: "일반/잡담",
      title: "2024 크리에이터 콘테스트 안내",
      body: "올해 크리에이터 콘테스트가 개최됩니다! 상금 1000만원!",
      likes: 890, comments: 234, reposts: 456, views: 12345, liked: true,
      lastReplier: "DungeonMaster", lastReplyColor: "#8b5cf6",
      thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=500&fit=crop&q=80",
      upvotes: 2345, downvotes: 34
    },
    {
      author: "프로그래머", color: "#f59e0b", verified: true, time: "3주 전", type: "질문", pill: "q", category: "스크립트(Lua)",
      title: "Lua 메모리 관리 베스트 프랙티스",
      body: "대규모 프로젝트에서 메모리 누수를 방지하는 방법을 공유해주세요.",
      likes: 178, comments: 45, reposts: 23, views: 1567, liked: false,
      lastReplier: "코드마스터", lastReplyColor: "#10b981",
      thumbnail: null,
      upvotes: 345, downvotes: 12
    },
    {
      author: "UI디자이너", color: "#ec4899", verified: true, time: "3주 전", type: "질문", pill: "q", category: "UI/UX",
      title: "반응형 UI 구현 팁",
      body: "다양한 화면 비율에서 UI가 깨지지 않게 하는 방법이 궁금합니다.",
      likes: 234, comments: 56, reposts: 34, views: 2345, liked: false,
      lastReplier: "UIWizard", lastReplyColor: "#ec4899",
      thumbnail: null,
      upvotes: 567, downvotes: 19
    },
  ];

  // 알림 데이터
  const NOTIFICATIONS = [
    {
      id: 1,
      type: "reply",
      icon: "reply",
      author: "효요공방",
      color: "#ff7a59",
      message: "님이 회원님의 게시글에 댓글을 남겼습니다",
      title: "파티클 최적화 팁",
      time: "5분 전",
      read: false
    },
    {
      id: 2,
      type: "like",
      icon: "heart",
      author: "PixelPub",
      color: "#7c5cff",
      message: "님이 회원님의 댓글을 좋아합니다",
      title: "인벤토리 드래그 앤 드롭",
      time: "1시간 전",
      read: false
    },
    {
      id: 3,
      type: "mention",
      icon: "msg",
      author: "나리스튜디오",
      color: "#3aa3ff",
      message: "님이 회원님을 멘션했습니다",
      title: "다국어 시스템 질문",
      time: "2시간 전",
      read: false
    },
    {
      id: 4,
      type: "upvote",
      icon: "star",
      author: "DungeonMaster",
      color: "#8b5cf6",
      message: "님이 회원님의 게시글을 upvote했습니다",
      title: "프로시저럴 던전 생성기",
      time: "5시간 전",
      read: true
    },
    {
      id: 5,
      type: "reply",
      icon: "reply",
      author: "UIWizard",
      color: "#ec4899",
      message: "님이 회원님의 게시글에 댓글을 남겼습니다",
      title: "RPG UI 패키지",
      time: "1일 전",
      read: true
    }
  ];

  // 유저 라운지 데이터 (플레이어 중심)
  const PLAYGROUND = [
    {
      author: "메이플마니아", color: "#ff6b9d", verified: false, time: "5분 전", type: "일반", pill: "general", category: "자유게시판",
      title: "다들 몇시간째 플레이 중이신가요? ㅋㅋ",
      body: "저는 벌써 50시간 넘게 했는데 아직도 할 게 너무 많아요 ㅎㅎ 다들 몇시간이나 하셨어요?",
      likes: 28, comments: 15, reposts: 2, views: 234, liked: false,
      lastReplier: "겜돌이", lastReplyColor: "#3aa3ff",
      thumbnail: null,
      upvotes: 89, downvotes: 5
    },
    {
      author: "월드탐험가", color: "#3aa3ff", verified: true, time: "23분 전", type: "추천", pill: "recommend", category: "월드 추천",
      title: "이번주 꼭 해봐야 할 월드 TOP 3",
      body: "1. 좀비 서바이벌 - 친구들이랑 하면 꿀잼\n2. 파쿠르 챌린지 - 난이도 미쳤음 ㅋㅋ\n3. RPG 던전 - 스토리 개꿀",
      likes: 156, comments: 42, reposts: 28, views: 1842, liked: true,
      lastReplier: "겜마스터", lastReplyColor: "#ff7a59",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop&q=80",
      upvotes: 342, downvotes: 23
    },
    {
      author: "스샷러버", color: "#ff7a59", verified: false, time: "1시간 전", type: "일반", pill: "general", category: "스크린샷/영상",
      title: "오늘 찍은 스샷 중 제일 잘나온거.jpg",
      body: "석양 질 때 캐릭터 뒤에서 찍었는데 분위기 개좋다... 다들 보세요",
      likes: 234, comments: 38, reposts: 15, views: 2156, liked: false,
      lastReplier: "포토그래퍼", lastReplyColor: "#8b5cf6",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop&q=80",
      upvotes: 445, downvotes: 12
    },
    {
      author: "팁좀줘", color: "#fbbf24", verified: false, time: "2시간 전", type: "질문", pill: "question", category: "질문/답변",
      title: "초보인데 레벨업 빨리하는 법 좀 알려주세요 ㅠㅠ",
      body: "레벨 10에서 막혔어요... 다들 어떻게 하면 빨리 레벨 올리나요? 팁 좀 부탁드려요!",
      likes: 45, comments: 28, reposts: 3, views: 567, liked: false,
      lastReplier: "프로게이머", lastReplyColor: "#3aa3ff",
      thumbnail: null,
      upvotes: 67, downvotes: 8
    },
    {
      author: "짤방왕", color: "#8b5cf6", verified: false, time: "3시간 전", type: "유머", pill: "humor", category: "유머/밈",
      title: "ㅋㅋㅋ 이거 진짜 공감 ㅋㅋㅋ",
      body: "월드 만들다가 버그 터지는 순간.gif\n다들 공감하시죠? ㅋㅋㅋㅋ",
      likes: 389, comments: 67, reposts: 52, views: 3245, liked: true,
      lastReplier: "밈러버", lastReplyColor: "#ec4899",
      thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop&q=80",
      upvotes: 892, downvotes: 34
    },
    {
      author: "공략마스터", color: "#10b981", verified: true, time: "4시간 전", type: "일반", pill: "general", category: "팁&트릭",
      title: "[팁] 모르면 손해보는 숨겨진 기능 10가지",
      body: "1. 더블점프는 스페이스 두번\n2. 숨겨진 상점은 맵 구석에\n3. 보스 패턴 외우는 법\n...(계속)",
      likes: 567, comments: 94, reposts: 123, views: 4567, liked: false,
      lastReplier: "팁받아요", lastReplyColor: "#fbbf24",
      thumbnail: null,
      upvotes: 1234, downvotes: 56
    },
    {
      author: "리뷰어", color: "#ec4899", verified: false, time: "5시간 전", type: "추천", pill: "recommend", category: "플레이 후기",
      title: "방금 '던전의 제왕' 월드 클리어했는데요",
      body: "진짜 개꿀잼이에요 ㅋㅋ 난이도는 좀 있지만 스토리가 탄탄해서 끝까지 재밌게 했습니다. 추천!",
      likes: 178, comments: 45, reposts: 19, views: 1456, liked: false,
      lastReplier: "게임리뷰", lastReplyColor: "#3aa3ff",
      thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=500&fit=crop&q=80",
      upvotes: 298, downvotes: 15
    },
    {
      author: "이벤트알리미", color: "#3aa3ff", verified: true, time: "6시간 전", type: "일반", pill: "general", category: "이벤트",
      title: "[이벤트] 주말 보스 레이드 2배 경험치!",
      body: "이번 주말 동안 보스 레이드 경험치 2배 이벤트 진행합니다! 놓치지 마세요!",
      likes: 234, comments: 52, reposts: 78, views: 2345, liked: true,
      lastReplier: "이벤트왕", lastReplyColor: "#ff7a59",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop&q=80",
      upvotes: 456, downvotes: 12
    },
    {
      author: "길드마스터", color: "#ff7a59", verified: false, time: "8시간 전", type: "일반", pill: "general", category: "친구찾기",
      title: "같이 레이드 갈 파티원 구합니다!",
      body: "레벨 50+ 파티원 2명 구해요! 주로 저녁 9시~12시 사이 활동합니다. 디스코드 있으신 분!",
      likes: 67, comments: 34, reposts: 8, views: 456, liked: false,
      lastReplier: "파티원", lastReplyColor: "#8b5cf6",
      thumbnail: null,
      upvotes: 89, downvotes: 4
    },
    {
      author: "베테랑유저", color: "#8b5cf6", verified: true, time: "10시간 전", type: "일반", pill: "general", category: "팁&트릭",
      title: "PvP 꿀팁 공유합니다",
      body: "PvP에서 이기는 법:\n1. 포지션 선점\n2. 스킬 쿨타임 관리\n3. 상대 패턴 읽기\n4. 템 세팅 최적화",
      likes: 345, comments: 78, reposts: 45, views: 2890, liked: false,
      lastReplier: "PvP고수", lastReplyColor: "#10b981",
      thumbnail: null,
      upvotes: 678, downvotes: 23
    }
  ];

  window.CF = { PACKAGES, CATEGORIES, LICENSES, SNIPPETS, COMMUNITY, PLAYGROUND, COMMUNITY_CATEGORIES, NOTIFICATIONS };
})();
