/* CreatorForum — Package detail page. */

function CopyBtn({ text }) {
  const [done, setDone] = React.useState(false);
  return (
    <button className="copy-btn" onClick={(e) => {
      e.stopPropagation();
      try { navigator.clipboard.writeText(text); } catch (_) {}
      setDone(true); setTimeout(() => setDone(false), 1200);
    }} title="복사">
      <Icon name={done ? "check" : "copy"} />
    </button>
  );
}

function PackageDetail({ name, go, setQuery }) {
  const pkg = CF.PACKAGES.find(p => p.name === name);
  React.useEffect(() => { window.scrollTo(0, 0); }, [name]);
  if (!pkg) return (
    <div className="shell"><main className="main"><div className="empty"><Icon name="empty" /><div className="t">패키지를 찾을 수 없어요</div></div></main></div>
  );

  const related = CF.PACKAGES.filter(p => p.cat === pkg.cat && p.name !== pkg.name).slice(0, 3);
  const installCmd = "msw add " + pkg.scope + "/" + pkg.name;

  return (
    <div className="main">
      <div className="detail fade-key">
        <div className="detail-back-section" style={{ marginBottom: 24 }}>
          <button className="detail-back-btn" onClick={() => go("packages")}>
            <Icon name="back" />
          </button>
          <div className="back-link" onClick={() => go("packages")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
            <span>전체 패키지</span>
          </div>
        </div>

        <div className="detail-head">
          <span className="pkg-icon" style={{ background: catBlock(pkg.cat), color: "#14140f" }}>
            <Icon name={pkg.icon} />
          </span>
          <div style={{ minWidth: 0 }}>
            <span className="eyebrow" style={{ marginBottom: 8, display: "block" }}>{pkg.cat}</span>
            <h1 className="detail-title"><span className="scope">{pkg.scope}/</span>{pkg.name}</h1>
            <div className="detail-meta">
              <span>{pkg.ko} · {pkg.en}</span>
              <span className="dot-sep">·</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <Mono name={pkg.author} color={pkg.authorColor} size={18} /> {pkg.author}
                {pkg.verified && <Icon name="verified" className="verified" />}
              </span>
              <span className="dot-sep">·</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-2)" }}>v{pkg.version}</span>
            </div>
          </div>
          <div className="detail-actions">
            <button className="btn-ghost"><Icon name="star" /> 별표 {fmt(pkg.stars)}</button>
            <button className="btn-cta"><Icon name="download" /> 설치</button>
          </div>
        </div>

        <div className="detail-grid">
          <div>
            <div className="install">
              <span className="prompt">$</span>
              <code>{installCmd}</code>
              <CopyBtn text={installCmd} />
            </div>

            <div className="readme">
              <h2>{pkg.ko} — {pkg.en}</h2>
              <p>{pkg.desc} 메이플스토리월드 스크립트 런타임에 맞춰 설계되었으며, 별도 빌드 과정 없이 바로 가져다 쓸 수 있습니다.</p>

              <div className="tags" style={{ marginBottom: 22 }}>
                {pkg.tags.map(t => <span className="tag" key={t} title={"#" + t + " 패키지 보기"}
                  onClick={() => { setQuery && setQuery(t); go(""); }}>{t}</span>)}
              </div>

              <h3>설치</h3>
              <pre><code><span className="tok-com">{"-- 패키지 매니저로 추가"}</span>{"\n"}{installCmd}</code></pre>

              <h3>빠른 시작</h3>
              <pre><code dangerouslySetInnerHTML={{ __html: quickStart(pkg) }} /></pre>

              <h3>주요 기능</h3>
              <ul>
                <li>의존성 최소화 — {pkg.deps === 0 ? "외부 의존성 0개" : pkg.deps + "개의 경량 의존성"}, 번들 크기 {pkg.size}</li>
                <li>타입 힌트와 인텔리센스를 위한 정의 파일 포함</li>
                <li>저사양 기기를 고려한 핫패스 최적화</li>
                <li>{pkg.license} 라이센스로 상업적 사용 가능</li>
              </ul>

              <h3>호환성</h3>
              <p>메이플스토리월드 에디터 1.4 이상에서 테스트되었습니다. 모바일·PC 클라이언트 모두 지원합니다.</p>
            </div>
          </div>

          <aside>
            <div className="side-card">
              <h4>통계</h4>
              <div className="stat-row" style={{ marginBottom: 6 }}>
                <div className="stat-box"><div className="num">{fmt(pkg.downloads)}</div><div className="lbl">다운로드</div></div>
                <div className="stat-box"><div className="num">{fmt(pkg.stars)}</div><div className="lbl">별표</div></div>
              </div>
            </div>
            <div className="side-card">
              <h4>정보</h4>
              <div className="kv"><span className="k">버전</span><span className="v">{pkg.version}</span></div>
              <div className="kv"><span className="k">라이센스</span><span className="v">{pkg.license}</span></div>
              <div className="kv"><span className="k">업데이트</span><span className="v">{pkg.updated}</span></div>
              <div className="kv"><span className="k">크기</span><span className="v">{pkg.size}</span></div>
              <div className="kv"><span className="k">의존성</span><span className="v">{pkg.deps}</span></div>
              <div className="kv"><span className="k">카테고리</span><span className="v" style={{ fontFamily: "var(--font-ui)" }}>{pkg.cat}</span></div>
            </div>
            {related.length > 0 && (
              <div className="side-card">
                <h4>관련 패키지</h4>
                {related.map(r => (
                  <div key={r.name} className="kv" style={{ cursor: "pointer" }} onClick={() => go("p/" + r.name)}>
                    <span className="v" style={{ color: "var(--text)" }}>{r.name}</span>
                    <span className="k" style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}><Icon name="download" style={{ width: 11, height: 11, display: "inline", verticalAlign: "-1px" }} /> {fmt(r.downloads)}</span>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

/* per-package quick-start sample, syntax-highlighted */
function quickStart(pkg) {
  const samples = {
    "datetime": `<span class="tok-key">local</span> DT = <span class="tok-fn">require</span>(<span class="tok-str">"@luastd/datetime"</span>)\n\n<span class="tok-key">local</span> t = DT.<span class="tok-fn">now</span>()\n<span class="tok-fn">print</span>(t:<span class="tok-fn">format</span>(<span class="tok-str">"YYYY-MM-DD HH:mm"</span>))`,
    "dialogue-system": `<span class="tok-key">local</span> Dialogue = <span class="tok-fn">require</span>(<span class="tok-str">"@nx/dialogue-system"</span>)\n\nDialogue.<span class="tok-fn">play</span>(<span class="tok-str">"intro_scene"</span>, {\n  speed = <span class="tok-num">28</span>, lang = <span class="tok-str">"ko"</span>,\n})`,
    "inventory-pro": `<span class="tok-key">local</span> Inv = <span class="tok-fn">require</span>(<span class="tok-str">"@ui/inventory-pro"</span>)\n\n<span class="tok-key">local</span> bag = Inv.<span class="tok-fn">new</span>({ slots = <span class="tok-num">36</span> })\nbag:<span class="tok-fn">enableDrag</span>(<span class="tok-key">true</span>)`,
  };
  const fallback = `<span class="tok-key">local</span> M = <span class="tok-fn">require</span>(<span class="tok-str">"${pkg.scope}/${pkg.name}"</span>)\n\n<span class="tok-com">-- ${pkg.ko} 사용 예시</span>\nM.<span class="tok-fn">setup</span>({ enabled = <span class="tok-key">true</span> })`;
  return samples[pkg.name] || fallback;
}

Object.assign(window, { PackageDetail });
