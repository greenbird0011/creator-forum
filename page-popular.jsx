/* 인기 패키지 전용 페이지 */

function PopularPackages({ go, setQuery }) {
  // 인기 패키지 정렬: featured 우선, 그 다음 다운로드+스타 순
  const popularList = React.useMemo(() => {
    const list = CF.PACKAGES.slice();
    list.sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return (b.downloads + b.stars * 50) - (a.downloads + a.stars * 50);
    });
    return list.slice(0, 12); // TOP 12
  }, []);

  return (
    <main className="main">
      <section className="hero-block">
        <div className="hero-inner" style={{ background: 'linear-gradient(135deg, #00d4aa 0%, #00b8a9 100%)' }}>
          <span className="eyebrow">메이플스토리월드 · 베스트 컬렉션</span>
          <h1 className="hero-title">인기 패키지 TOP 12</h1>
          <p className="hero-sub">크리에이터들이 가장 많이 사용하는 검증된 패키지들입니다. 다운로드와 별점이 높은 순서대로 모았어요.</p>
        </div>
      </section>

      <div className="popular-grid">
        {popularList.map((pkg, i) => (
          <div key={pkg.name} className="popular-card" onClick={() => go("p/" + pkg.name)}>
            <div className="popular-rank">#{i + 1}</div>
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
                  <Icon name="download" />
                  <span>{pkg.downloads.toLocaleString()}</span>
                </div>
                <div className="stat">
                  <Icon name="star" />
                  <span>{(pkg.stars / 1000).toFixed(1)}k</span>
                </div>
                <div className="stat">
                  <Icon name="package" />
                  <span>{pkg.category}</span>
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

Object.assign(window, { PopularPackages });
