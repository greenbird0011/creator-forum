/* CreatorForum — shared components + icon set. Exports to window. */

/* ---------------- Icons (lucide-style stroke) ---------------- */
const ICONS = {
  box: <><path d="M21 8 12 3 3 8v8l9 5 9-5V8Z"/><path d="m3 8 9 5 9-5"/><path d="M12 13v8"/></>,
  msg: <><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 9 9 0 0 1-4-1L3 20l1-4.5a8.5 8.5 0 1 1 17-4Z"/></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  sigma: <><path d="M18 7V5H6l6 7-6 7h12v-2"/></>,
  spark: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8"/></>,
  wave: <><path d="M2 12h2l2-6 4 16 4-13 2 6h6"/></>,
  net: <><circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5 6.5 17M12 7.5 17.5 17M7.5 19h9"/></>,
  pad: <><rect x="2" y="7" width="20" height="11" rx="4"/><path d="M7 11v3M5.5 12.5h3M15 11.5h.01M18 13.5h.01"/></>,
  ruler: <><path d="M3 17 17 3l4 4L7 21z"/><path d="m7 9 1.5 1.5M10 6l1.5 1.5M13 13l1.5 1.5M16 10l1.5 1.5"/></>,
  flow: <><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6a3 3 0 0 1 3 3v6"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></>,
  pages: <><path d="M21 8 12 3 3 8v8l9 5 9-5V8Z"/><path d="m3 8 9 5 9-5"/></>,
  code: <><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></>,
  community: <><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 9 9 0 0 1-4-1L3 20l1-4.5a8.5 8.5 0 1 1 17-4Z"/></>,
  sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/></>,
  moon: <><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></>,
  plus: <><path d="M12 5v14M5 12h14"/></>,
  download: <><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></>,
  star: <><path d="m12 3 2.6 5.7 6.2.6-4.7 4.2 1.4 6.1L12 16.8 6.5 19.6l1.4-6.1L3.2 9.3l6.2-.6L12 3Z"/></>,
  check: <><path d="m20 6-11 11-5-5"/></>,
  verified: <><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="9"/></>,
  grid2: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  list: <><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></>,
  back: <><path d="M19 12H5M12 19l-7-7 7-7"/></>,
  copy: <><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></>,
  heart: <><path d="M19 5.6a5 5 0 0 0-7-.1l-.0.0-.0-.0a5 5 0 0 0-7 7l7 7 7-7a5 5 0 0 0 0-6.9Z"/></>,
  reply: <><path d="M9 17l-5-5 5-5"/><path d="M4 12h11a5 5 0 0 1 5 5v2"/></>,
  repost: <><path d="m17 2 4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></>,
  upload: <><path d="M12 16V4M7 9l5-5 5 5M5 20h14"/></>,
  x: <><path d="M18 6 6 18M6 6l12 12"/></>,
  eye: <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></>,
  empty: <><path d="M21 8 12 3 3 8v8l9 5 9-5V8Z"/><path d="m3 8 9 5 9-5"/><path d="M12 13v8"/></>,
  up: <><path d="m18 15-6-6-6 6"/></>,
  down: <><path d="m6 9 6 6 6-6"/></>,
};

function Icon({ name, style, className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
         strokeLinecap="round" strokeLinejoin="round" style={style} className={className}>
      {ICONS[name] || null}
    </svg>
  );
}

/* number formatting like 283.4k */
function fmt(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(n);
}

/* pastel color-block tile per category — keeps icons editorial, not rainbow */
const CAT_BLOCK = {
  "게임플레이": "#dceeb1", "UI / HUD": "#c5b0f4", "이펙트 / VFX": "#efd4d4",
  "오디오": "#f4ecd6", "네트워크": "#c8e6cd", "AI / NPC": "#f3c9b6",
  "데이터 / 세이브": "#dceeb1", "입력 / 컨트롤": "#c8e6cd", "에디터 툴": "#c5b0f4",
};
function catBlock(cat) { return CAT_BLOCK[cat] || "#f7f7f5"; }

/* small monogram avatar */
function Mono({ name, color, size }) {
  return (
    <span className="author-ava" style={{ background: color, width: size, height: size, fontSize: size ? size * 0.42 : undefined }}>
      {name.slice(0, 1)}
    </span>
  );
}

/* ---------------- Top nav ---------------- */
function Nav({ route, go, theme, toggleTheme, query, setQuery }) {
  const tabs = [
    { id: "community", label: "커뮤니티", icon: "community" },
    { id: "playground", label: "유저 라운지", icon: "spark" },
    { id: "packages", label: "패키지", icon: "pages" },
    { id: "snippets", label: "스니펫", icon: "code" },
  ];
  const active = route === "" || route === "categories" || route.startsWith("t/") ? "community"
    : route === "playground" ? "playground"
    : route === "packages" || route.startsWith("p/") || route === "upload" || route === "popular" || route === "recent" ? "packages"
    : route === "snippets" ? "snippets" : "community";
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="brand" onClick={() => go("categories")}>
          <span className="logo-mark">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
              <path d="M4 20 12 6l4 7 4-7 8 14" />
              <circle cx="16" cy="24" r="2.2" fill="currentColor" stroke="none" />
            </svg>
          </span>
          <div className="brand-text">
            <div className="ms">MapleStory Worlds</div>
            <div><b>CreatorForum</b></div>
          </div>
        </div>
        <div className="nav-tabs">
          {tabs.map(t => (
            <div key={t.id} className={"nav-tab" + (active === t.id ? " active" : "")}
                 onClick={() => go(t.id === "community" ? "" : t.id)}>
              <Icon name={t.icon} /> {t.label}
            </div>
          ))}
        </div>
        <div className="nav-spacer" />
        <label className="search">
          <Icon name="search" />
          <input placeholder="패키지·스니펫·작성자 검색…" value={query} onChange={e => setQuery(e.target.value)} />
          {query ? (
            <button className="search-clear" title="지우기" onMouseDown={e => { e.preventDefault(); setQuery(""); }}><Icon name="x" /></button>
          ) : (
            <span className="kbd">⌘K</span>
          )}
        </label>
        <button className="icon-btn" onClick={toggleTheme} title="테마 전환">
          <Icon name={theme === "light" ? "moon" : "sun"} />
        </button>
        <NotificationBell />
        <div className="avatar" title="내 프로필">민</div>
      </div>
    </nav>
  );
}

/* ---------------- 알림 벨 ---------------- */
function NotificationBell() {
  const [open, setOpen] = React.useState(false);
  const [notifications, setNotifications] = React.useState(CF.NOTIFICATIONS);
  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const markRead = (id) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  return (
    <div className="notification-container">
      <button className="icon-btn" onClick={() => setOpen(!open)} title="알림">
        <Icon name="bell" />
        {unreadCount > 0 && <span className="notif-badge">{unreadCount}</span>}
      </button>

      {open && (
        <>
          <div className="notif-overlay" onClick={() => setOpen(false)} />
          <div className="notif-dropdown">
            <div className="notif-header">
              <h3 className="notif-title">알림</h3>
              <button className="notif-mark-read" onClick={markAllRead}>
                모두 읽음
              </button>
            </div>

            <div className="notif-list">
              {notifications.length === 0 ? (
                <div className="notif-empty">
                  <Icon name="bell" />
                  <p>알림이 없습니다</p>
                </div>
              ) : (
                notifications.map(notif => (
                  <div
                    key={notif.id}
                    className={"notif-item" + (notif.read ? "" : " unread")}
                    onClick={() => markRead(notif.id)}
                  >
                    <div className="notif-icon-wrap">
                      <Mono name={notif.author} color={notif.color} size={32} />
                      <div className={"notif-type-icon " + notif.type}>
                        <Icon name={notif.icon} />
                      </div>
                    </div>
                    <div className="notif-content">
                      <p className="notif-text">
                        <strong>{notif.author}</strong>
                        {notif.message}
                      </p>
                      <p className="notif-title-ref">{notif.title}</p>
                      <span className="notif-time">{notif.time}</span>
                    </div>
                    {!notif.read && <div className="notif-dot" />}
                  </div>
                ))
              )}
            </div>

            <div className="notif-footer">
              <button
                className="notif-footer-link"
                onClick={() => {
                  setOpen(false);
                  // 여기에 알림 페이지로 이동하는 로직 추가 가능
                  alert('알림 전체 페이지 기능은 추후 구현 예정입니다.');
                }}
              >
                모든 알림 보기
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ---------------- Global left sidebar (persistent on every route) ---------------- */
function AppSidebar({ route, go, cat, setCat, lic, toggleLic, sort, setSort }) {
  const onPackages = route === "packages" || route.startsWith("p/") || route === "popular" || route === "recent" || route === "upload";
  const navActive = route.startsWith("p/") || route === "packages" ? "packages" : route;
  const counts = React.useMemo(() => {
    const c = { 전체: CF.PACKAGES.length };
    CF.CATEGORIES.forEach(ct => c[ct] = CF.PACKAGES.filter(p => p.cat === ct).length);
    return c;
  }, []);

  const isOnMainPackages = route === "packages" || route.startsWith("p/");

  return (
    <aside className="app-sidebar">
      {onPackages && (
        <div className="side-group">
          <div className="side-label">카테고리</div>
          <div className={"cat" + (cat === "전체" && isOnMainPackages ? " active" : "")} onClick={() => { setCat && setCat("전체"); go("packages"); }}>
            <span className="cat-name">전체</span><span className="cat-count">{counts.전체}</span>
          </div>
          {CF.CATEGORIES.map(c => (
            <div key={c} className={"cat" + (cat === c && isOnMainPackages ? " active" : "")} onClick={() => { setCat && setCat(c); go("packages"); }}>
              <span className="cat-name">{c}</span><span className="cat-count">{counts[c] || 0}</span>
            </div>
          ))}
        </div>
      )}

      {onPackages && (
        <div className="side-group license-group">
          <div className="side-label">라이센스</div>
          {CF.LICENSES.map(l => (
            <div key={l} className={"lic" + (lic.includes(l) ? " on" : "")} onClick={() => toggleLic && toggleLic(l)}>
              <span className="check"><Icon name="check" /></span>{l}
            </div>
          ))}
        </div>
      )}

      <div className="side-group">
        <div className="side-label">발견</div>
        <div className="side-nav">
          <div className={"snav" + (route === "popular" ? " active" : "")} onClick={() => go("popular")}>
            <Icon name="star" /><span className="snav-name">인기 패키지</span>
          </div>
          <div className={"snav" + (route === "recent" ? " active" : "")} onClick={() => go("recent")}>
            <Icon name="spark" /><span className="snav-name">최신 업데이트</span>
          </div>
          <div className={"snav" + (route === "upload" ? " active" : "")} onClick={() => go("upload")}>
            <Icon name="upload" /><span className="snav-name">패키지 올리기</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-brand">
              <div className="footer-logo">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
                  <path d="M4 20 12 6l4 7 4-7 8 14" />
                  <circle cx="16" cy="24" r="2.2" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div>
                <div className="footer-brand-title">MapleStory Worlds</div>
                <div className="footer-brand-sub">CreatorForum</div>
              </div>
            </div>
            <p className="footer-desc">크리에이터를 위한 오픈소스 패키지 레지스트리</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Learn</h4>
            <a href="#" className="footer-link">크리에이터 가이드</a>
            <a href="#" className="footer-link">API 문서</a>
            <a href="#" className="footer-link">튜토리얼</a>
            <a href="#" className="footer-link">예제 프로젝트</a>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Community</h4>
            <a href="#" className="footer-link">디스코드 커뮤니티</a>
            <a href="#" className="footer-link">쇼케이스</a>
            <a href="#" className="footer-link">포럼</a>
            <a href="#" className="footer-link">이벤트</a>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">More</h4>
            <a href="#" className="footer-link">블로그</a>
            <a href="#" className="footer-link">GitHub</a>
            <a href="#" className="footer-link">채용</a>
            <a href="#" className="footer-link">문의하기</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">© 2024 MapleStory Worlds Creators. All rights reserved.</div>
          <div className="footer-links">
            <a href="#" className="footer-bottom-link">개인정보처리방침</a>
            <a href="#" className="footer-bottom-link">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Community Sidebar (패키지와 동일한 디자인) ---------------- */
function CommunitySidebar({ route, go, filter, setFilter }) {

  const categories = [
    "스크립트(Lua)",
    "컴포넌트/엔티티",
    "UI/UX",
    "물리/충돌",
    "서버/멀티플레이",
    "성능/최적화",
    "에디터/툴",
    "리소스/모델",
    "버그 리포트",
    "기능 제안"
  ];

  const tags = ["공지", "질문", "쇼케이스", "피드백"];

  const categoryCounts = React.useMemo(() => {
    const counts = { "전체": CF.COMMUNITY.length };
    categories.forEach(cat => {
      counts[cat] = CF.COMMUNITY.filter(p => p.category === cat).length;
    });
    return counts;
  }, []);

  const tagCounts = React.useMemo(() => {
    const counts = {};
    tags.forEach(tag => {
      counts[tag] = CF.COMMUNITY.filter(p => p.type === tag).length;
    });
    return counts;
  }, []);

  const handleCategoryClick = (cat) => {
    setFilter(cat);
    if (route === "categories") {
      go("");
    }
  };

  return (
    <aside className="app-sidebar">
      <div className="side-group">
        <div className="side-label">카테고리</div>
        <div className={"cat" + (filter === "전체" ? " active" : "")} onClick={() => handleCategoryClick("전체")}>
          <span className="cat-name">전체</span><span className="cat-count">{categoryCounts["전체"]}</span>
        </div>
        {categories.map(cat => (
          <div key={cat} className={"cat" + (filter === cat ? " active" : "")} onClick={() => handleCategoryClick(cat)}>
            <span className="cat-name">{cat}</span><span className="cat-count">{categoryCounts[cat] || 0}</span>
          </div>
        ))}
      </div>

      <div className="side-group">
        <div className="side-label">태그</div>
        {tags.map(tag => (
          <div key={tag} className={"cat" + (filter === tag ? " active" : "")} onClick={() => handleCategoryClick(tag)}>
            <span className="cat-name">#{tag}</span><span className="cat-count">{tagCounts[tag] || 0}</span>
          </div>
        ))}
      </div>

      <div className="side-group">
        <button className="sidebar-cta-btn" onClick={() => go("create-topic")}>
          <Icon name="plus" />
          <span>새 토픽 작성</span>
        </button>
      </div>
    </aside>
  );
}

/* ---------------- Playground Sidebar (유저 라운지용) ---------------- */
function PlaygroundSidebar({ route, go, filter, setFilter }) {

  const categories = [
    "자유게시판",
    "월드 추천",
    "플레이 후기",
    "팁&트릭",
    "스크린샷/영상",
    "유머/밈",
    "이벤트",
    "친구찾기",
    "질문/답변"
  ];

  const tags = ["일반", "추천", "질문", "유머"];

  const categoryCounts = React.useMemo(() => {
    const counts = { "전체": CF.COMMUNITY.length };
    categories.forEach(cat => {
      counts[cat] = CF.COMMUNITY.filter(p => p.category === cat).length;
    });
    return counts;
  }, []);

  const tagCounts = React.useMemo(() => {
    const counts = {};
    tags.forEach(tag => {
      counts[tag] = CF.COMMUNITY.filter(p => p.type === tag).length;
    });
    return counts;
  }, []);

  const handleCategoryClick = (cat) => {
    setFilter(cat);
  };

  return (
    <aside className="app-sidebar">
      <div className="side-group">
        <div className="side-label">카테고리</div>
        <div className={"cat" + (filter === "전체" ? " active" : "")} onClick={() => handleCategoryClick("전체")}>
          <span className="cat-name">전체</span><span className="cat-count">{categoryCounts["전체"]}</span>
        </div>
        {categories.map(cat => (
          <div key={cat} className={"cat" + (filter === cat ? " active" : "")} onClick={() => handleCategoryClick(cat)}>
            <span className="cat-name">{cat}</span><span className="cat-count">{categoryCounts[cat] || 0}</span>
          </div>
        ))}
      </div>

      <div className="side-group">
        <div className="side-label">태그</div>
        {tags.map(tag => (
          <div key={tag} className={"cat" + (filter === tag ? " active" : "")} onClick={() => handleCategoryClick(tag)}>
            <span className="cat-name">#{tag}</span><span className="cat-count">{tagCounts[tag] || 0}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

/* ---------------- Floating Icons Animation (Figma-style) ---------------- */
function FloatingIcons() {
  const icons = [
    { src: 'images/Img_01.png', delay: 0, side: 'left', distance: 450, vOffset: -60, startDist: 0.85 },
    { src: 'images/Img_02.png', delay: 0, side: 'right', distance: 460, vOffset: -60, startDist: 0.85 },
    { src: 'images/Img_03.png', delay: 0, side: 'left', distance: 440, vOffset: 75, startDist: 0.85 },
    { src: 'images/Img_04.png', delay: 0, side: 'right', distance: 450, vOffset: 75, startDist: 0.85 },
  ];

  return (
    <div className="floating-icons-container">
      {icons.map((icon, i) => (
        <div
          key={i}
          className={`floating-icon spread-${icon.side}`}
          style={{
            animationDelay: `${icon.delay}s`,
            '--distance': `${icon.distance}px`,
            '--voffset': `${icon.vOffset}px`,
            '--start-dist': icon.startDist
          }}
        >
          <img src={icon.src} alt="" />
        </div>
      ))}
    </div>
  );
}


Object.assign(window, { Icon, ICONS, fmt, catBlock, Mono, Nav, AppSidebar, CommunitySidebar, PlaygroundSidebar, FloatingIcons, Footer });
