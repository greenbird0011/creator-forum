/* CreatorForum — Community Create Topic Page */

function CommunityCreate({ go }) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [category, setCategory] = React.useState("스크립트(Lua)");
  const [type, setType] = React.useState("질문");
  const [images, setImages] = React.useState([]);
  const fileInputRef = React.useRef(null);

  const categories = [
    "스크립트(Lua)", "컴포넌트/엔티티", "UI/UX", "물리/충돌",
    "서버/멀티플레이", "성능/최적화", "에디터/툴", "리소스/모델",
    "버그 리포트", "기능 제안"
  ];

  const types = [
    { id: "질문", label: "질문", color: "#c5b0f4" },
    { id: "쇼케이스", label: "쇼케이스", color: "#dceeb1" },
    { id: "버그", label: "버그 리포트", color: "#f3c9b6" },
    { id: "피드백", label: "피드백", color: "#b8d9f4" }
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

    // 실제로는 서버에 전송하거나 상태 관리
    alert("토픽이 작성되었습니다!");
    go(""); // 커뮤니티 메인으로 이동
  };

  return (
    <main className="main unity-detail">
      {/* Back Button */}
      <div className="detail-back-section">
        <button className="detail-back-btn" onClick={() => go("")}>
          <Icon name="back" />
        </button>
        <div className="unity-breadcrumb">
          <span className="bc-item" onClick={() => go("")}>커뮤니티</span>
          <Icon name="back" style={{ transform: "rotate(180deg)", width: 12, height: 12 }} />
          <span className="bc-item active">새 토픽 작성</span>
        </div>
      </div>

      {/* Header */}
      <div className="create-header">
        <h1 className="create-title">새 토픽 작성</h1>
        <p className="create-subtitle">커뮤니티에 질문하거나 정보를 공유해보세요</p>
      </div>

      {/* Create Form */}
      <div className="create-form">
        {/* Category & Type Selection */}
        <div className="create-section">
          <label className="create-label">카테고리</label>
          <div className="create-select-grid">
            {categories.map(cat => (
              <button
                key={cat}
                className={"create-option-btn" + (category === cat ? " active" : "")}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="create-section">
          <label className="create-label">타입</label>
          <div className="create-type-grid">
            {types.map(t => (
              <button
                key={t.id}
                className={"create-type-btn" + (type === t.id ? " active" : "")}
                style={{
                  borderColor: type === t.id ? t.color : "var(--divider)",
                  background: type === t.id ? t.color + "20" : "transparent"
                }}
                onClick={() => setType(t.id)}
              >
                <span className="type-badge" style={{ background: t.color }}></span>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Title Input */}
        <div className="create-section">
          <label className="create-label">제목</label>
          <input
            type="text"
            className="create-input"
            placeholder="토픽 제목을 입력하세요"
            value={title}
            onChange={e => setTitle(e.target.value)}
            maxLength={100}
          />
          <div className="create-hint">{title.length}/100</div>
        </div>

        {/* Content Textarea */}
        <div className="create-section">
          <label className="create-label">내용</label>
          <textarea
            className="create-textarea"
            placeholder="토픽 내용을 자세히 작성해주세요.&#10;&#10;• 질문인 경우: 문제 상황, 시도한 방법, 기대하는 결과를 명확히 작성해주세요&#10;• 쇼케이스인 경우: 프로젝트 설명, 사용한 기술, 결과물을 공유해주세요&#10;• 버그 리포트인 경우: 재현 방법, 예상 동작, 실제 동작을 상세히 작성해주세요"
            value={content}
            onChange={e => setContent(e.target.value)}
            rows={12}
          />
        </div>

        {/* Image Upload */}
        <div className="create-section">
          <label className="create-label">이미지 첨부 (선택)</label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          <button
            className="create-upload-btn"
            onClick={() => fileInputRef.current?.click()}
          >
            <Icon name="upload" />
            <span>이미지 업로드</span>
          </button>

          {images.length > 0 && (
            <div className="create-image-grid">
              {images.map(img => (
                <div key={img.id} className="create-image-item">
                  <img src={img.url} alt={img.name} />
                  <button
                    className="create-image-remove"
                    onClick={() => handleRemoveImage(img.id)}
                  >
                    <Icon name="x" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="create-actions">
          <button className="btn-ghost" onClick={() => go("")}>
            취소
          </button>
          <button
            className="btn-cta"
            onClick={handleSubmit}
            disabled={!title.trim() || !content.trim()}
          >
            <Icon name="check" />
            토픽 작성
          </button>
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { CommunityCreate });
