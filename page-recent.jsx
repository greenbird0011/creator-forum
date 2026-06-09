/* 최신 업데이트 전용 페이지 */

function RecentPackages({ go, setQuery }) {
  // 최신 업데이트 순으로 정렬
  const recentList = React.useMemo(() => {
    const list = CF.PACKAGES.slice();
    const recencyRank = ["1일 전","2일 전","3일 전","4일 전","5일 전","6일 전","8일 전","9일 전","12일 전","1주 전","2주 전","3주 전","4주 전","5주 전"];
    list.sort((a, b) => recencyRank.indexOf(a.updated) - recencyRank.indexOf(b.updated));
    return list.slice(0, 12); // TOP 12
  }, []);

  return (
    <main className="main">
      <section className="hero-block">
        <div className="hero-inner" style={{ background: 'linear-gradient(135deg, #84cc16 0%, #65a30d 100%)' }}>
          <span className="eyebrow">메이플스토리월드 · 최신 컬렉션</span>
          <h1 className="hero-title">최신 업데이트 TOP 12</h1>
          <p className="hero-sub">가장 최근에 업데이트된 패키지들입니다. 새로운 기능과 버그 수정이 적용된 따끈따끈한 패키지들을 만나보세요.</p>
        </div>
      </section>

      <div className="popular-grid">
        {recentList.map((pkg, i) => (
          <div key={pkg.name} className="popular-card" onClick={() => go("p/" + pkg.name)}>
            <div className="recent-time">{pkg.updated}</div>
            {pkg.featured && <span className="popular-badge">추천</span>}

            <div className="popular-icon" style={{ background: pkg.color }}>
              <Icon name={pkg.icon} />
            </div>

            <div className="popular-content">
              <div className="pkg-name">
                <span className="scope">{pkg.name.split("/")[0]}/</span>
                <span className="nm">{pkg.name.split("/")[1]}</span>
              </div>
              <p className="pkg-desc">{pkg.desc}</p>

              <div className="popular-stats">
                <div className="stat">
                  <Icon name="clock" />
                  <span>{pkg.updated}</span>
                </div>
                <div className="stat">
                  <Icon name="download" />
                  <span>{pkg.downloads.toLocaleString()}</span>
                </div>
                <div className="stat">
                  <Icon name="star" />
                  <span>{(pkg.stars / 1000).toFixed(1)}k</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="popular-cta">
        <button className="btn-ghost" onClick={() => go("")}>
          <Icon name="grid" /> 전체 패키지 둘러보기
        </button>
      </div>
    </main>
  );
}

Object.assign(window, { RecentPackages });
