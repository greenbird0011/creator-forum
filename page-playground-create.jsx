/* CreatorForum — Playground Create Post Page */

function PlaygroundCreate({ go }) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [category, setCategory] = React.useState("자유게시판");
  const [type, setType] = React.useState("일반");
  const [images, setImages] = React.useState([]);
  const fileInputRef = React.useRef(null);

  const categories = [
    "자유게시판", "월드 추천", "플레이 후기", "팁&트릭",
    "스크린샷/영상", "유머/밈", "이벤트", "친구찾기", "질문/답변"
  ];

  const types = [
    { id: "일반", label: "일반", color: "#c5b0f4" },
    { id: "추천", label: "추천", color: "#dceeb1" },
    { id: "질문", label: "질문", color: "#b8d9f4" },
    { id: "유머", label: "유머", color: "#f3c9b6" }
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
    alert("게시글이 작성되었습니다!");
    go("playground"); // 유저 라운지로 이동
  };

  return (
    <main className="main unity-detail">
      {/* Back Button */}
      <div className="detail-back-section">
        <button className="detail-back-btn" onClick={() => go("playground")}>
          <Icon name="back" />
        </button>
        <div className="unity-breadcrumb">
          <span className="bc-item" onClick={() => go("playground")}>유저 라운지</span>
          <Icon name="back" style={{ transform: "rotate(180deg)", width: 12, height: 12 }} />
          <span className="bc-item active">새 글 작성</span>
        </div>
      </div>

      {/* Header */}
      <div className="create-header">
        <h1 className="create-title">새 글 작성</h1>
        <p className="create-subtitle">유저 라운지에 자유롭게 글을 작성해보세요</p>
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
            placeholder="게시글 제목을 입력하세요"
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
            placeholder="자유롭게 내용을 작성해주세요.&#10;&#10;• 월드 추천: 추천하는 월드와 플레이 포인트를 소개해주세요&#10;• 플레이 후기: 재미있게 플레이한 월드에 대한 후기를 남겨주세요&#10;• 스크린샷/영상: 멋진 순간을 캡처해서 공유해주세요&#10;• 팁&트릭: 유용한 팁과 공략을 공유해주세요"
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
          <button className="btn-ghost" onClick={() => go("playground")}>
            취소
          </button>
          <button
            className="btn-cta"
            onClick={handleSubmit}
            disabled={!title.trim() || !content.trim()}
          >
            <Icon name="check" />
            글 작성
          </button>
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { PlaygroundCreate });
