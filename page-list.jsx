/* CreatorForum — Package list page: sidebar + cards + search/filter/sort. */

function PackageCard({ pkg, view, go, i, setQuery }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", (e.clientX - r.left) + "px");
    e.currentTarget.style.setProperty("--my", (e.clientY - r.top) + "px");
  };
  return (
    <article className="card" style={{ animationDelay: (0.02 + i * 0.02) + "s" }}
             onMouseMove={onMove} onClick={() => go("p/" + pkg.name)}>
      {pkg.featured && <span className="featured">추천</span>}
      <div className="card-top">
        <span className="pkg-icon" style={{ background: catBlock(pkg.cat), color: "#14140f" }}>
          <Icon name={pkg.icon} />
        </span>
        <div className="card-titles">
          <div className="pkg-name"><span className="scope">{pkg.scope}/</span> <span className="nm">{pkg.name}</span></div>
          <div className="pkg-sub">{pkg.ko} · {pkg.en}</div>
        </div>
      </div>
      <p className="pkg-desc">{pkg.desc}</p>
      <div className="tags">
        {pkg.tags.map(t => <span className="tag" key={t} title={"#" + t + " 필터"}
          onClick={(e) => { e.stopPropagation(); setQuery && setQuery(t); window.scrollTo(0, 0); }}>{t}</span>)}
      </div>
      <div className="card-foot">
        <div className="author">
          <Mono name={pkg.author} color={pkg.authorColor} />
          <span className="author-name">{pkg.author}</span>
          {pkg.verified && <Icon name="verified" className="verified" />}
        </div>
        <div className="foot-stats">
          <span className="stat"><Icon name="download" /> {fmt(pkg.downloads)}</span>
          <span className="stat star"><Icon name="star" /> {fmt(pkg.stars)}</span>
        </div>
      </div>
    </article>
  );
}

function Sidebar({ cat, setCat, lic, toggleLic, counts }) {
  return (
    <aside className="sidebar">
      <div className="side-group">
        <div className="side-label">카테고리</div>
        <div className={"cat" + (cat === "전체" ? " active" : "")} onClick={() => setCat("전체")}>
          <span className="cat-dot" /><span className="cat-name">전체</span><span className="cat-count">{counts.전체}</span>
        </div>
        {CF.CATEGORIES.map(c => (
          <div key={c} className={"cat" + (cat === c ? " active" : "")} onClick={() => setCat(c)}>
            <span className="cat-dot" /><span className="cat-name">{c}</span>
            <span className="cat-count">{counts[c] || 0}</span>
          </div>
        ))}
      </div>
      <div className="side-group">
        <div className="side-label">라이센스</div>
        {CF.LICENSES.map(l => (
          <div key={l} className={"lic" + (lic.includes(l) ? " on" : "")} onClick={() => toggleLic(l)}>
            <span className="check"><Icon name="check" /></span>{l}
          </div>
        ))}
      </div>
    </aside>
  );
}

const SORTS = [
  { id: "popular", label: "인기순" },
  { id: "downloads", label: "다운로드" },
  { id: "recent", label: "최신" },
  { id: "stars", label: "별점" },
];

function PackageList({ go, query, setQuery, cat, setCat, lic, setLic, toggleLic, sort, setSort }) {
  const [view, setView] = React.useState("grid");

  const filtered = React.useMemo(() => {
    let list = CF.PACKAGES.slice();
    if (cat !== "전체") list = list.filter(p => p.cat === cat);
    if (lic.length) list = list.filter(p => lic.includes(p.license));
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(p =>
        (p.scope + "/" + p.name).toLowerCase().includes(q) ||
        p.ko.includes(query) || p.en.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) || p.tags.some(t => t.includes(q)) ||
        p.author.toLowerCase().includes(q));
    }
    const recencyRank = ["1일 전","2일 전","3일 전","4일 전","5일 전","6일 전","8일 전","9일 전","12일 전","1주 전","2주 전","3주 전","4주 전","5주 전"];
    list.sort((a, b) => {
      if (sort === "downloads") return b.downloads - a.downloads;
      if (sort === "stars") return b.stars - a.stars;
      if (sort === "recent") return recencyRank.indexOf(a.updated) - recencyRank.indexOf(b.updated);
      // popular: featured first, then a blend of downloads+stars
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return (b.downloads + b.stars * 50) - (a.downloads + a.stars * 50);
    });
    return list;
  }, [cat, lic, sort, query]);

  const toggleLicLocal = (l) => (toggleLic ? toggleLic(l) : setLic(p => p.includes(l) ? p.filter(x => x !== l) : [...p, l]));

  const hasFilters = cat !== "전체" || lic.length > 0 || !!query.trim();
  const clearAll = () => { setCat("전체"); setLic([]); setQuery && setQuery(""); };

  const showHero = cat === "전체" && lic.length === 0 && !query.trim();

  return (
    <main className="main">
      <section className={"hero-block" + (showHero ? "" : " hidden")}>
        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="hero-title">크리에이터가 만든 모든 것,<br />한 곳에서 가져다 씁니다.</h1>
            <p className="hero-sub">검증된 오픈 소스 패키지를 한 줄로 설치하세요.</p>
            <div className="hero-cta">
              <button className="btn-cta" onClick={() => go("upload")}><Icon name="plus" /> 패키지 올리기</button>
              <button className="btn-ghost" onClick={() => go("snippets")}><Icon name="code" /> 스니펫 둘러보기</button>
            </div>
          </div>
          <div className="hero-characters">
            <img src="Img/Img_character.png" alt="characters" className="hero-character-img" />
          </div>
        </div>
      </section>
        <div className="page-head">
          <div>
            <h1 className="page-title">{cat === "전체" ? "전체 패키지" : cat}<span className="count">{filtered.length}개</span></h1>
          </div>
          <div className="head-spacer" />
          <div className="segmented">
            {SORTS.map(s => (
              <button key={s.id} className={"seg" + (sort === s.id ? " active" : "")} onClick={() => setSort(s.id)}>{s.label}</button>
            ))}
          </div>
          <div className="view-toggle">
            <button className={view === "grid" ? "active" : ""} onClick={() => setView("grid")} title="그리드"><Icon name="grid2" /></button>
            <button className={view === "list" ? "active" : ""} onClick={() => setView("list")} title="리스트"><Icon name="list" /></button>
          </div>
          <button className="btn-cta" onClick={() => go("upload")}><Icon name="plus" /> 패키지 올리기</button>
        </div>

        {hasFilters && (
          <div className="filter-bar">
            <span className="fb-label">적용된 필터</span>
            {cat !== "전체" && (
              <button className="fb-chip" onClick={() => setCat("전체")}>{cat}<Icon name="x" /></button>
            )}
            {lic.map(l => (
              <button key={l} className="fb-chip" onClick={() => toggleLicLocal(l)}>{l}<Icon name="x" /></button>
            ))}
            {query.trim() && (
              <button className="fb-chip" onClick={() => setQuery && setQuery("")}>“{query}”<Icon name="x" /></button>
            )}
            <button className="fb-clear" onClick={clearAll}>모두 지우기</button>
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="empty">
            <Icon name="empty" />
            <div className="t">검색 결과가 없어요</div>
            <div className="s">다른 키워드나 카테고리를 시도해 보세요.</div>
            {hasFilters && <button className="btn-ghost" style={{ marginTop: 18 }} onClick={clearAll}><Icon name="x" /> 필터 초기화</button>}
          </div>
        ) : (
          <div className={"grid" + (view === "list" ? " list" : "")}>
            {filtered.map((p, i) => <PackageCard key={p.scope + p.name} pkg={p} view={view} go={go} i={i} setQuery={setQuery} />)}
          </div>
        )}
    </main>
  );
}

Object.assign(window, { PackageCard, Sidebar, PackageList });
