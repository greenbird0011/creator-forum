/* CreatorForum — Snippets tab + Community tab with category sections. */

/* tiny lua-ish highlighter */
function hlLua(code) {
  const esc = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return esc
    .replace(/(--[^\n]*)/g, '<span class="tok-com">$1</span>')
    .replace(/("[^"]*")/g, '<span class="tok-str">$1</span>')
    .replace(/\b(local|function|end|for|if|then|else|return|do|while|not|and|or|nil|true|false)\b/g, '<span class="tok-key">$1</span>')
    .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="tok-num">$1</span>');
}

function SnippetCard({ s, i }) {
  const [likes, setLikes] = React.useState(s.likes);
  const [liked, setLiked] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  // 코드 미리보기 (처음 6줄)
  const previewCode = s.code.split('\n').slice(0, 6).join('\n');
  const hasMore = s.code.split('\n').length > 6;

  const copyCode = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(s.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <article className="snip-card rise" style={{ animationDelay: (0.02 + i * 0.02) + "s" }}>
      <div className="snip-head">
        <span className="dotrow"><i /><i /><i /></span>
        <span className="fname">{s.fname}</span>
        <span className="lang">{s.lang}</span>
        <button className="copy-btn" onClick={copyCode} title={copied ? "복사됨!" : "코드 복사"}>
          {copied ? <Icon name="check" /> : <Icon name="copy" />}
        </button>
      </div>
      <div className="snip-info">
        <div className="title">{s.title}</div>
        <div className="by">by {s.author}</div>
      </div>
      <pre className="snip-code">
        <code dangerouslySetInnerHTML={{ __html: hlLua(previewCode) }} />
        {hasMore && <span className="code-more">... {s.code.split('\n').length - 6}줄 더보기</span>}
      </pre>
      <div className="snip-foot">
        <div className="likes" style={{ cursor: "pointer", color: liked ? "#ef4444" : undefined }}
             onClick={() => { setLiked(!liked); setLikes(l => liked ? l - 1 : l + 1); }}>
          <Icon name="heart" style={liked ? { fill: "#ef4444" } : undefined} /> {liked ? likes : s.likes}
        </div>
      </div>
    </article>
  );
}

function Snippets({ query }) {
  const list = CF.SNIPPETS.filter(s =>
    !query.trim() || s.title.includes(query) || s.author.includes(query) ||
    s.code.toLowerCase().includes(query.toLowerCase()) || s.fname.includes(query.toLowerCase()));
  return (
    <main className="main" style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <div className="page-head route-block" style={{ background: "var(--block-cream)" }}>
          <div>
            <span className="eyebrow">코드 조각 모음</span>
            <h1 className="page-title">스니펫<span className="count">{list.length}개</span></h1>
            <p className="page-sub">바로 복사해 쓰는 코드 조각</p>
          </div>
          <div className="head-spacer" />
          <button className="btn-cta"><Icon name="plus" /> 스니펫 공유</button>
        </div>
        {list.length === 0 ? (
          <div className="empty"><Icon name="code" /><div className="t">결과가 없어요</div></div>
        ) : (
          <div className="snip-grid">
            {list.map((s, i) => <SnippetCard key={s.title} s={s} i={i} />)}
          </div>
        )}
    </main>
  );
}

/* ---------------- Community ---------------- */
// Unity 스타일 토픽 리스트
function ForumPost({ p, i, go }) {
  // 참여자 목록 생성 (작성자 + 마지막 답글자)
  const participants = [
    { name: p.author, color: p.color },
    { name: p.lastReplier || p.author, color: p.lastReplyColor || p.color },
  ];
  // 중복 제거하고 최대 5명까지
  const uniqueParticipants = participants.filter((p, idx, arr) =>
    arr.findIndex(t => t.name === p.name) === idx
  ).slice(0, 5);

  return (
    <article
      className="unity-topic"
      style={{ animationDelay: (0.02 + i * 0.025) + "s" }}
      onClick={() => go && go("t/" + i)}
    >
      {/* 좌측: 제목 + 정보 */}
      <div className="unity-topic-main">
        <div className="unity-topic-header">
          <span className={"unity-badge " + p.pill}>{p.type}</span>
          <h3 className="unity-topic-title">{p.title}</h3>
        </div>
        <div className="unity-topic-meta">
          <span className="unity-author">
            {p.author}
            {p.verified && <Icon name="verified" className="verified" />}
          </span>
          <span className="unity-separator">·</span>
          <span className="unity-time">{p.time}</span>
        </div>
        <p className="unity-topic-preview">{p.body}</p>
      </div>

      {/* 우측: 통계 */}
      <div className="unity-topic-stats">
        {/* 참여자 아바타 */}
        <div className="unity-participants">
          {uniqueParticipants.map((participant, idx) => (
            <Mono
              key={idx}
              name={participant.name}
              color={participant.color}
              size={28}
            />
          ))}
        </div>

        {/* 댓글 수 */}
        <div className="unity-stat">
          <Icon name="reply" />
          <span>{p.comments}</span>
        </div>

        {/* 조회수 */}
        <div className="unity-stat">
          <Icon name="eye" />
          <span>{fmt(p.views)}</span>
        </div>

        {/* 작성일 */}
        <div className="unity-date created">
          {p.time}
        </div>

        {/* 활동일 */}
        <div className="unity-date activity">
          {p.time}
        </div>
      </div>
    </article>
  );
}

// 갤러리 카드 형식 (이미지 중심)
function ShowcaseCard({ p, i, go }) {
  return (
    <article
      className="showcase-card rise"
      style={{ animationDelay: (0.02 + i * 0.02) + "s" }}
      onClick={() => go && go("t/" + i)}
    >
      {p.thumbnail && (
        <div className="showcase-thumbnail">
          <img src={p.thumbnail} alt={p.title} />
        </div>
      )}
      <div className="showcase-content">
        <div className="showcase-header">
          <span className={"showcase-badge " + p.pill}>{p.type}</span>
          <h3 className="showcase-title">{p.title}</h3>
        </div>
        <p className="showcase-body">{p.body}</p>
        <div className="showcase-footer">
          <div className="showcase-author">
            <Mono name={p.author} color={p.color} size={32} />
            <div className="showcase-author-info">
              <span className="showcase-author-name">
                {p.author}
                {p.verified && <Icon name="verified" className="verified" />}
              </span>
              <span className="showcase-time">{p.time}</span>
            </div>
          </div>
          <div className="showcase-stats">
            <span className="showcase-stat"><Icon name="heart" /> {fmt(p.likes)}</span>
            <span className="showcase-stat"><Icon name="eye" /> {fmt(p.views)}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function CategorySection({ category, posts, go }) {
  const [expanded, setExpanded] = React.useState(false);
  const displayPosts = expanded ? posts : posts.slice(0, 3);

  return (
    <div className="category-section">
      <div className="category-header">
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="category-icon">
            <Icon name={category.icon} />
          </div>
          <div>
            <h2 className="category-title">{category.name}</h2>
            <p className="category-count">{posts.length}개의 게시글</p>
          </div>
        </div>
        {posts.length > 3 && (
          <button className="btn-ghost" onClick={() => setExpanded(!expanded)}>
            {expanded ? "접기" : `전체 보기 (${posts.length})`}
          </button>
        )}
      </div>
      <div className="category-posts">
        {displayPosts.map((p, i) => <Post key={i} p={p} i={i} go={go} />)}
      </div>
    </div>
  );
}

/* 카테고리 카드 */
function CategoryCard({ icon, title, description, color, onClick }) {
  return (
    <div className="category-card" onClick={onClick}>
      <div className="category-card-icon" style={{ background: color }}>
        <Icon name={icon} />
      </div>
      <h3 className="category-card-title">{title}</h3>
      <p className="category-card-desc">{description}</p>
    </div>
  );
}

function Community({ query, go, setQuery, showCategoryGrid, filter }) {
  const [sort, setSort] = React.useState("latest");
  const [filterType, setFilterType] = React.useState("all");

  let list = CF.COMMUNITY.filter(p =>
    !query.trim() || p.title.includes(query) || p.body.includes(query) || p.author.includes(query));

  // 좌측 사이드바 필터 (카테고리/태그)
  if (filter && filter !== "전체") {
    const tags = ["공지", "질문", "쇼케이스", "피드백"];
    if (tags.includes(filter)) {
      // 태그 필터
      list = list.filter(p => p.type === filter);
    } else {
      // 카테고리 필터
      list = list.filter(p => p.category === filter);
    }
  }

  // 타입 필터
  if (filterType !== "all") {
    const typeMap = { showcase: "쇼케이스", question: "질문", feedback: "피드백" };
    list = list.filter(p => p.type === typeMap[filterType]);
  }

  list = list.slice();
  if (sort === "popular") list.sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes));

  // 카테고리 데이터
  const categoryGroups = [
    {
      title: "시작하기",
      categories: [
        { icon: "spark", title: "시작 가이드", description: "메이플스토리 월드 크리에이터를 처음 시작하는 분들을 위한 가이드입니다.", color: "#3aa3ff" },
        { icon: "pages", title: "튜토리얼", description: "단계별 튜토리얼로 게임 제작의 기초를 배워보세요.", color: "#7c5cff" },
        { icon: "msg", title: "FAQ", description: "자주 묻는 질문과 답변을 확인하세요.", color: "#2fb6a8" },
      ]
    },
    {
      title: "개발 카테고리",
      categories: [
        { icon: "code", title: "스크립트(Lua)", description: "Lua 스크립트 작성, 디버깅, 최적화에 대해 토론하세요.", color: "#f59e0b" },
        { icon: "box", title: "컴포넌트/엔티티", description: "게임 오브젝트와 컴포넌트 시스템 활용법을 공유하세요.", color: "#ec4899" },
        { icon: "grid", title: "UI/UX", description: "유저 인터페이스 디자인과 사용자 경험 개선 방법을 논의하세요.", color: "#8b5cf6" },
        { icon: "wave", title: "물리/충돌", description: "물리 엔진과 충돌 처리에 관한 질문과 팁을 나눠보세요.", color: "#06b6d4" },
        { icon: "net", title: "서버/멀티플레이", description: "멀티플레이어 게임과 서버 관리에 대해 이야기해요.", color: "#10b981" },
        { icon: "spark", title: "성능/최적화", description: "게임 퍼포먼스 향상과 최적화 기법을 공유하세요.", color: "#f97316" },
        { icon: "ruler", title: "에디터/툴", description: "크리에이터 에디터와 개발 도구 활용법을 배워보세요.", color: "#84cc16" },
        { icon: "grid2", title: "리소스/모델", description: "3D 모델, 텍스처, 사운드 등 게임 리소스를 공유하고 논의하세요.", color: "#ef4444" },
      ]
    },
    {
      title: "커뮤니티",
      categories: [
        { icon: "star", title: "쇼케이스", description: "멋진 프로젝트와 창작물을 자랑하고 피드백을 받아보세요.", color: "#fbbf24" },
        { icon: "msg", title: "질문/도움", description: "막히는 부분이 있나요? 커뮤니티에 질문하고 도움을 받아보세요.", color: "#3b82f6" },
        { icon: "heart", title: "피드백", description: "메이플스토리 월드에 대한 의견과 개선 제안을 남겨주세요.", color: "#f43f5e" },
      ]
    }
  ];

  return (
    <main className="main community-main">
      {/* Unity 스타일 헤더 */}
      <div className="community-hero">
        <h1 className="community-hero-title">메이플스토리 월드 크리에이터 포럼</h1>
        <p className="community-hero-sub">질문하고, 공유하고, 함께 성장하세요</p>

        {/* 큰 검색창 */}
        <div className="community-search-bar">
          <Icon name="search" />
          <input
            type="text"
            placeholder="토픽 검색..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      {showCategoryGrid ? (
        /* 카테고리 그리드 */
        <div className="categories-container">
          {categoryGroups.map((group, idx) => (
            <div key={idx} className="category-group">
              <h2 className="category-group-title">{group.title}</h2>
              <div className="category-grid">
                {group.categories.map((cat, i) => (
                  <CategoryCard key={i} {...cat} onClick={() => {
                    go("");
                    setQuery(cat.title);
                  }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* 필터 및 정렬 */}
          <div className="community-filters">
            <div className="filter-right">
              <div className="segmented">
                <button className={"seg" + (sort === "latest" ? " active" : "")} onClick={() => setSort("latest")}>최신순</button>
                <button className={"seg" + (sort === "popular" ? " active" : "")} onClick={() => setSort("popular")}>인기순</button>
              </div>
            </div>
          </div>

          {/* Unity 스타일 토픽 리스트 */}
          <div className="topics-container">
            <div className="unity-topics-header">
              <div className="unity-header-left">
                <span className="unity-count">{list.length}개의 토픽</span>
              </div>
              <div className="unity-header-right">
                <span className="unity-col">참여자</span>
                <span className="unity-col">댓글</span>
                <span className="unity-col">조회</span>
                <span className="unity-col">작성</span>
                <span className="unity-col">활동</span>
              </div>
            </div>

            {list.length === 0 ? (
              <div className="empty"><Icon name="community" /><div className="t">토픽이 없어요</div></div>
            ) : (
              <div className="unity-topics-list">
                {list.map((p, i) => <ForumPost key={i} p={p} i={i} go={go} />)}
              </div>
            )}

            <div className="topics-footer">
              <a href="https://discord.gg/maplestoryworlds" target="_blank" className="topics-footer-link">디스코드</a>
              <span className="topics-nav-sep">·</span>
              <a href="https://maplestoryworlds.nexon.com/ko/creator" target="_blank" className="topics-footer-link">크리에이터센터</a>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

/* Reddit 스타일 포스트 */
function RedditPost({ p, i, go }) {
  const [votes, setVotes] = React.useState(p.upvotes - p.downvotes);
  const [voteState, setVoteState] = React.useState(0);
  const [reactions, setReactions] = React.useState({
    '👍': Math.floor(Math.random() * 20),
    '❤️': Math.floor(Math.random() * 15),
    '🔥': Math.floor(Math.random() * 10),
    '😍': Math.floor(Math.random() * 8)
  });

  const handleVote = (dir) => {
    if (voteState === dir) {
      setVoteState(0);
      setVotes(p.upvotes - p.downvotes);
    } else {
      const change = dir - voteState;
      setVoteState(dir);
      setVotes(votes + change);
    }
  };

  return (
    <article className="reddit-post-card rise" style={{ animationDelay: (0.02 + i * 0.02) + "s" }}>
      <div className="reddit-post-content">
        <div className="reddit-post-header">
          <div className="reddit-post-meta">
            <Mono name={p.author} color={p.color} size={20} />
            <span className="reddit-post-author">
              {p.author}
              {p.verified && <Icon name="verified" className="verified" style={{ width: 14, height: 14 }} />}
            </span>
            <span className="reddit-post-time">· {p.time}</span>
            <span className={"reddit-post-badge " + p.pill}>{p.type}</span>
          </div>
        </div>

        <div className="reddit-post-body" onClick={() => go && go("t/" + i)}>
          <h3 className="reddit-post-title">{p.title}</h3>
          <p className="reddit-post-text">{p.body}</p>

          {/* 큰 이미지 */}
          {p.thumbnail && (
            <div className="reddit-post-image">
              <img src={p.thumbnail} alt={p.title} />
            </div>
          )}
        </div>

        {/* 액션 바 */}
        <div className="reddit-post-actions">
          {/* 투표 버튼들 */}
          <button
            className={"reddit-post-action vote-action up" + (voteState === 1 ? " active" : "")}
            onClick={(e) => { e.stopPropagation(); handleVote(1); }}
            title="좋아요"
          >
            <span className="vote-icon">👍</span>
            <span className={"vote-count" + (voteState === 1 ? " upvoted" : voteState === -1 ? " downvoted" : "")}>
              {fmt(votes)}
            </span>
          </button>
          <button
            className={"reddit-post-action vote-action down" + (voteState === -1 ? " active" : "")}
            onClick={(e) => { e.stopPropagation(); handleVote(-1); }}
            title="싫어요"
          >
            <span className="vote-icon">👎</span>
          </button>

          <button className="reddit-post-action">
            <Icon name="reply" />
            <span>{p.comments} 댓글</span>
          </button>
          <button className="reddit-post-action">
            <Icon name="repost" />
            <span>공유</span>
          </button>
          <button className="reddit-post-action">
            <Icon name="star" />
            <span>저장</span>
          </button>

          {/* 이모티콘 반응 */}
          <div className="reddit-reactions">
            {Object.entries(reactions).map(([emoji, count]) => (
              <button key={emoji} className="reaction-btn" onClick={(e) => {
                e.stopPropagation();
                setReactions({...reactions, [emoji]: count + 1});
              }}>
                <span className="reaction-emoji">{emoji}</span>
                <span className="reaction-count">{count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* 유저 라운지 (Reddit 스타일) */
function Playground({ query, go }) {
  const [sort, setSort] = React.useState("hot");
  const [showCreateForm, setShowCreateForm] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [category, setCategory] = React.useState("자유게시판");
  const [images, setImages] = React.useState([]);
  const fileInputRef = React.useRef(null);

  const categories = [
    "자유게시판", "월드 추천", "플레이 후기", "팁&트릭",
    "스크린샷/영상", "유머/밈", "이벤트", "친구찾기", "질문/답변"
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setImages(prev => [...prev, {
            id: Date.now() + Math.random(),
            url: event.target.result,
            name: file.name
          }]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleRemoveImage = (imageId) => {
    setImages(prev => prev.filter(img => img.id !== imageId));
  };

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }
    alert("게시글이 작성되었습니다!");
    setShowCreateForm(false);
    setTitle("");
    setContent("");
    setImages([]);
  };

  const handleCancel = () => {
    setShowCreateForm(false);
    setTitle("");
    setContent("");
    setImages([]);
  };

  let list = CF.COMMUNITY.filter(p =>
    !query.trim() || p.title.includes(query) || p.body.includes(query) || p.author.includes(query));
  list = list.slice();

  if (sort === "hot") list.sort((a, b) => (b.upvotes - b.downvotes + b.comments * 2) - (a.upvotes - a.downvotes + a.comments * 2));
  else if (sort === "top") list.sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes));

  return (
    <div className="playground-layout">
      <main className="playground-main">
        <div className="playground-header">
          <div>
            <h1 className="playground-title">유저 라운지 🎮</h1>
            <p className="playground-sub">자유롭게 소통하고 투표하세요</p>
          </div>
          {!showCreateForm && (
            <button className="btn-cta" onClick={() => setShowCreateForm(true)}>
              <Icon name="plus" /> 글 작성
            </button>
          )}
        </div>

        {showCreateForm && (
          <div className="playground-create-form">
            <div className="playground-create-header">
              <h3>새 글 작성</h3>
              <button className="create-close-btn" onClick={handleCancel}>
                <Icon name="x" />
              </button>
            </div>

            <div className="create-section">
              <select
                className="playground-category-select"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="create-section">
              <input
                type="text"
                className="playground-title-input"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={e => setTitle(e.target.value)}
                maxLength={100}
              />
            </div>

            <div className="create-section">
              <textarea
                className="playground-content-textarea"
                placeholder="내용을 입력하세요..."
                value={content}
                onChange={e => setContent(e.target.value)}
                rows={6}
              />
            </div>

            <div className="create-section">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
              <button
                className="playground-upload-btn"
                onClick={() => fileInputRef.current?.click()}
              >
                <Icon name="upload" />
                <span>이미지 추가</span>
              </button>

              {images.length > 0 && (
                <div className="playground-image-grid">
                  {images.map(img => (
                    <div key={img.id} className="playground-image-item">
                      <img src={img.url} alt={img.name} />
                      <button
                        className="playground-image-remove"
                        onClick={() => handleRemoveImage(img.id)}
                      >
                        <Icon name="x" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="playground-create-actions">
              <button className="btn-ghost" onClick={handleCancel}>
                취소
              </button>
              <button
                className="btn-cta"
                onClick={handleSubmit}
                disabled={!title.trim() || !content.trim()}
              >
                작성 완료
              </button>
            </div>
          </div>
        )}

        <div className="playground-sorts">
          <button className={"sort-btn" + (sort === "hot" ? " active" : "")} onClick={() => setSort("hot")}>
            <Icon name="spark" /> Hot
          </button>
          <button className={"sort-btn" + (sort === "new" ? " active" : "")} onClick={() => setSort("new")}>
            <Icon name="star" /> New
          </button>
          <button className={"sort-btn" + (sort === "top" ? " active" : "")} onClick={() => setSort("top")}>
            <Icon name="wave" /> Top
          </button>
        </div>

        <div className="reddit-posts">
          {list.map((p, i) => <RedditPost key={i} p={p} i={i} go={go} />)}
        </div>
      </main>

      <aside className="playground-sidebar">
        <div className="sidebar-card">
          <h3 className="sidebar-title">라운지 소개</h3>
          <p className="sidebar-desc">자유롭게 소통하고 작품을 공유하는 캐주얼한 공간입니다.</p>
          <div className="sidebar-stats">
            <div className="stat-item">
              <div className="stat-num">{fmt(CF.COMMUNITY.length * 142)}</div>
              <div className="stat-label">멤버</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">{fmt(CF.COMMUNITY.length * 23)}</div>
              <div className="stat-label">온라인</div>
            </div>
          </div>
        </div>

        <div className="sidebar-card">
          <h3 className="sidebar-title">인기 토픽</h3>
          <div className="popular-topics">
            {CF.COMMUNITY.slice(0, 5).map((p, i) => (
              <div key={i} className="popular-topic" onClick={() => go("t/" + i)}>
                <div className="popular-num">#{i + 1}</div>
                <div className="popular-info">
                  <div className="popular-title">{p.title}</div>
                  <div className="popular-meta">{fmt(p.upvotes)} upvotes</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar-card">
          <h3 className="sidebar-title">라운지 규칙</h3>
          <div className="sidebar-rules">
            <div className="rule-item">
              <span className="rule-num">1.</span>
              <span className="rule-text">서로를 존중하고 배려해주세요</span>
            </div>
            <div className="rule-item">
              <span className="rule-num">2.</span>
              <span className="rule-text">스팸이나 광고성 게시글은 금지됩니다</span>
            </div>
            <div className="rule-item">
              <span className="rule-num">3.</span>
              <span className="rule-text">창작물 공유 시 출처를 명시해주세요</span>
            </div>
            <div className="rule-item">
              <span className="rule-num">4.</span>
              <span className="rule-text">건설적인 피드백을 환영합니다</span>
            </div>
            <div className="rule-item">
              <span className="rule-num">5.</span>
              <span className="rule-text">불법 콘텐츠는 즉시 신고됩니다</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

Object.assign(window, { Snippets, Community, Playground, ForumPost, RedditPost, ShowcaseCard });
