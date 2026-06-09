/* CreatorForum — app shell: routing, theme, tweaks. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroBlock": "mint",
  "radius": 24,
  "density": "regular",
  "font": "NEXON",
  "dark": false
}/*EDITMODE-END*/;

const FONT_STACKS = {
  "NEXON": '"NEXON Lv2 Gothic", "Noto Sans KR", -apple-system, system-ui, sans-serif',
  "Noto Sans": '"Noto Sans KR", system-ui, sans-serif',
  "Noto Serif": '"Noto Serif KR", Georgia, serif',
};
const HERO_BLOCKS = {
  mint: "#00b8a9", lime: "#84cc16", lilac: "#8b5cf6",
  cream: "#f59e0b", pink: "#ec4899", coral: "#f97316",
};
const DENSITY = { compact: 0.82, regular: 1, comfy: 1.18 };

function useHashRoute() {
  const get = () => decodeURIComponent(location.hash.replace(/^#\/?/, ""));
  const [route, setRoute] = React.useState(get());
  React.useEffect(() => {
    const on = () => setRoute(get());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  const go = (r) => { location.hash = "/" + r; window.scrollTo(0, 0); };
  return [route, go];
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, go] = useHashRoute();
  const [query, setQuery] = React.useState("");

  // package registry filters — lifted so the global sidebar can drive them
  const [pkgCat, setPkgCat] = React.useState("전체");
  const [pkgLic, setPkgLic] = React.useState([]);
  const [pkgSort, setPkgSort] = React.useState("popular");
  const toggleLic = (l) => setPkgLic(p => p.includes(l) ? p.filter(x => x !== l) : [...p, l]);

  // community filter
  const [communityFilter, setCommunityFilter] = React.useState("전체");

  // playground filter
  const [playgroundFilter, setPlaygroundFilter] = React.useState("전체");

  const theme = t.dark ? "dark" : "light";
  const toggleTheme = () => setTweak("dark", !t.dark);

  // apply theme to <html> for token swap
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Cmd/Ctrl+K focuses search
  React.useEffect(() => {
    const on = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const el = document.querySelector(".search input");
        if (el) el.focus();
      }
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, []);

  const rootStyle = {
    "--radius": t.radius + "px",
    "--density": DENSITY[t.density] || 1,
    "--font-ui": FONT_STACKS[t.font] || FONT_STACKS.Inter,
    "--hero-block": HERO_BLOCKS[t.heroBlock] || HERO_BLOCKS.lime,
  };

  let page;
  if (route.startsWith("t/")) page = <CommunityDetail postId={route.slice(2)} go={go} />;
  else if (route.startsWith("p/")) page = <PackageDetail name={route.slice(2)} go={go} setQuery={setQuery} />;
  else if (route === "create-topic") page = <CommunityCreate go={go} />;
  else if (route === "create-playground") page = <PlaygroundCreate go={go} />;
  else if (route === "mypage") page = <MyPage go={go} />;
  else if (route === "packages") page = <PackageList go={go} query={query} setQuery={setQuery}
      cat={pkgCat} setCat={setPkgCat} lic={pkgLic} setLic={setPkgLic} toggleLic={toggleLic}
      sort={pkgSort} setSort={setPkgSort} />;
  else if (route === "playground") page = <Playground query={query} go={go} />;
  else if (route === "snippets") page = <Snippets query={query} />;
  else if (route === "upload") page = <Upload go={go} />;
  else if (route === "popular") page = <PopularPackages go={go} setQuery={setQuery} />;
  else if (route === "recent") page = <RecentPackages go={go} setQuery={setQuery} />;
  else if (route === "categories") page = <Community query={query} go={go} setQuery={setQuery} showCategoryGrid={true} filter={communityFilter} />;
  else page = <Community query={query} go={go} setQuery={setQuery} showCategoryGrid={false} filter={communityFilter} />;

  // 사이드바 표시 조건
  const showPackageSidebar = route !== "snippets" && route !== "" && route !== "playground" && route !== "categories" && route !== "create-topic" && route !== "create-playground" && route !== "mypage" && !route.startsWith("t/");
  const showCommunitySidebar = route === "" || route === "categories";
  const showPlaygroundSidebar = route === "playground";

  return (
    <div style={rootStyle}>
      <div className="app-bg" />
      <Nav route={route} go={go} theme={theme} toggleTheme={toggleTheme} query={query} setQuery={setQuery} />
      <div className={"layout" + (showPackageSidebar || showCommunitySidebar || showPlaygroundSidebar ? "" : " no-sidebar")}>
        {showPackageSidebar && (
          <AppSidebar route={route} go={go} cat={pkgCat} setCat={setPkgCat}
            lic={pkgLic} toggleLic={toggleLic} sort={pkgSort} setSort={setPkgSort} />
        )}
        {showCommunitySidebar && (
          <CommunitySidebar route={route} go={go} filter={communityFilter} setFilter={setCommunityFilter} />
        )}
        {showPlaygroundSidebar && (
          <PlaygroundSidebar route={route} go={go} filter={playgroundFilter} setFilter={setPlaygroundFilter} />
        )}
        <div className="content" key={route || 'home'}>{page}</div>
      </div>

      <AIAssistant />

      <TweaksPanel title="Tweaks">
        <TweakSection label="히어로 블록" />
        <TweakColor label="컬러 블록" value={HERO_BLOCKS[t.heroBlock]}
          options={["#00b8a9", "#84cc16", "#8b5cf6", "#f59e0b", "#ec4899", "#f97316"]}
          onChange={v => {
            const key = Object.keys(HERO_BLOCKS).find(k => HERO_BLOCKS[k] === v) || "mint";
            setTweak("heroBlock", key);
          }} />
        <TweakToggle label="다크 테마" value={t.dark} onChange={v => setTweak("dark", v)} />

        <TweakSection label="타이포그래피" />
        <TweakRadio label="폰트" value={t.font}
          options={["NEXON", "Noto Sans", "Noto Serif"]}
          onChange={v => setTweak("font", v)} />

        <TweakSection label="카드" />
        <TweakSlider label="모서리 둥글기" value={t.radius} min={0} max={32} unit="px"
          onChange={v => setTweak("radius", v)} />
        <TweakRadio label="밀도" value={t.density}
          options={["compact", "regular", "comfy"]}
          onChange={v => setTweak("density", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
