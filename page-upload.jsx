/* CreatorForum — Upload form (패키지 올리기). */

function Upload({ go }) {
  const [name, setName] = React.useState("");
  const [scope, setScope] = React.useState("@mnx");
  const [ko, setKo] = React.useState("");
  const [en, setEn] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [cat, setCat] = React.useState("");
  const [license, setLicense] = React.useState("MIT");
  const [tags, setTags] = React.useState([]);
  const [tagDraft, setTagDraft] = React.useState("");
  const [toast, setToast] = React.useState(false);

  const addTag = (t) => {
    t = t.trim().replace(/[^a-z0-9-]/gi, "").toLowerCase();
    if (t && !tags.includes(t) && tags.length < 6) setTags([...tags, t]);
    setTagDraft("");
  };

  const valid = name.trim() && ko.trim() && desc.trim() && cat;

  const submit = () => {
    if (!valid) return;
    setToast(true);
    setTimeout(() => { setToast(false); go(""); }, 1800);
  };

  return (
    <div className="main">
      <div className="form-wrap fade-key">
        <div className="back-link" onClick={() => go("")}><Icon name="back" /> 전체 패키지</div>
        <span className="eyebrow" style={{ marginBottom: 10, display: "block" }}>레지스트리에 게시</span>
        <h1 className="page-title" style={{ marginBottom: 6 }}>패키지 올리기</h1>
        <p className="page-sub" style={{ marginBottom: 28 }}>메이플스토리월드 크리에이터 레지스트리에 패키지를 공개합니다.</p>

        <div className="steps">
          <div className="step active"><span className="num">1</span><span className="lbl">기본 정보</span></div>
          <div className="step active"><span className="num">2</span><span className="lbl">분류 · 태그</span></div>
          <div className="step"><span className="num">3</span><span className="lbl">파일 업로드</span></div>
        </div>

        <div className="field-row">
          <div className="field">
            <label>스코프</label>
            <select value={scope} onChange={e => setScope(e.target.value)} className="mono-input">
              <option>@mnx</option><option>@ui</option><option>@fx</option><option>@math</option><option>@audio</option><option>@net</option>
            </select>
          </div>
          <div className="field">
            <label>패키지 이름 <span className="hint">소문자·하이픈</span></label>
            <input type="text" className="mono-input" placeholder="my-package" value={name}
                   onChange={e => setName(e.target.value.replace(/[^a-z0-9-]/gi, "").toLowerCase())} />
          </div>
        </div>

        <div className="field-row">
          <div className="field"><label>한글 이름</label><input type="text" placeholder="예: 인벤토리 프로" value={ko} onChange={e => setKo(e.target.value)} /></div>
          <div className="field"><label>영문 이름 <span className="hint">선택</span></label><input type="text" placeholder="Inventory Pro" value={en} onChange={e => setEn(e.target.value)} /></div>
        </div>

        <div className="field">
          <label>한 줄 설명</label>
          <textarea placeholder="이 패키지가 무엇을 해결하는지 한두 문장으로 설명해 주세요." value={desc} onChange={e => setDesc(e.target.value)} />
        </div>

        <div className="field">
          <label>카테고리</label>
          <div className="chip-pick">
            {CF.CATEGORIES.map(c => (
              <span key={c} className={"chip" + (cat === c ? " on" : "")} onClick={() => setCat(c)}>{c}</span>
            ))}
          </div>
        </div>

        <div className="field">
          <label>태그 <span className="hint">최대 6개 · Enter로 추가</span></label>
          <div className="tag-input">
            {tags.map(t => (
              <span className="ti-tag" key={t}>{t}<button onClick={() => setTags(tags.filter(x => x !== t))}><Icon name="x" /></button></span>
            ))}
            <input value={tagDraft} placeholder={tags.length ? "" : "datetime, utility…"}
                   onChange={e => setTagDraft(e.target.value)}
                   onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addTag(tagDraft); } if (e.key === "Backspace" && !tagDraft && tags.length) setTags(tags.slice(0, -1)); }} />
          </div>
        </div>

        <div className="field">
          <label>라이센스</label>
          <div className="chip-pick">
            {CF.LICENSES.map(l => (
              <span key={l} className={"chip" + (license === l ? " on" : "")} onClick={() => setLicense(l)}>{l}</span>
            ))}
          </div>
        </div>

        <div className="field">
          <label>패키지 파일</label>
          <div className="dropzone" onClick={() => setToast(false)}>
            <Icon name="upload" />
            <div className="dz-title">.msw 파일을 끌어다 놓거나 클릭해서 선택</div>
            <div className="dz-sub">최대 50MB · 단일 아카이브</div>
          </div>
        </div>

        <div className="form-foot">
          <span className="preview-note">{valid ? "검토 후 게시할 준비가 됐어요." : "이름·한글 이름·설명·카테고리를 입력해 주세요."}</span>
          <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
            <button className="btn-ghost" onClick={() => go("")}>취소</button>
            <button className="btn-cta" style={{ opacity: valid ? 1 : 0.5, pointerEvents: valid ? "auto" : "none" }} onClick={submit}>
              <Icon name="check" /> 게시하기
            </button>
          </div>
        </div>
      </div>

      <div className={"toast" + (toast ? " show" : "")}>
        <Icon name="check" /> {scope}/{name || "패키지"} 가 게시되었습니다!
      </div>
    </div>
  );
}

Object.assign(window, { Upload });
