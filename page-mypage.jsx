/* CreatorForum — My Page */

function MyPage({ go }) {
  const [activeTab, setActiveTab] = React.useState("posts");

  // 데모용 사용자 정보
  const user = {
    name: "민",
    email: "greenbird@nexon.co.kr",
    color: "#3aa3ff",
    verified: true,
    joinDate: "2024년 1월",
    bio: "메이플스토리 월드 크리에이터입니다 🎮"
  };

  // 데모용 내가 작성한 글
  const myPosts = [
    {
      id: 1,
      title: "dialogue-system 1.9.0 릴리스",
      category: "스크립트(Lua)",
      type: "공지",
      date: "2일 전",
      views: 342,
      comments: 18,
      likes: 156
    },
    {
      id: 2,
      title: "유니티에서 MSW로 이전하는 팁",
      category: "월드 추천",
      type: "팁",
      date: "5일 전",
      views: 234,
      comments: 12,
      likes: 89
    }
  ];

  // 데모용 내가 작성한 댓글
  const myComments = [
    {
      id: 1,
      postTitle: "Physics 충돌 감지가 안돼요",
      content: "Rigidbody 설정을 확인해보세요. IsTrigger가 체크되어 있으면 OnCollision 이벤트가 발생하지 않습니다.",
      date: "1시간 전",
      likes: 5
    },
    {
      id: 2,
      postTitle: "서버 동기화 질문있습니다",
      content: "NetworkTransform 컴포넌트를 사용하면 간단하게 해결됩니다. 공식 문서 참고해보세요!",
      date: "3시간 전",
      likes: 8
    }
  ];

  const stats = {
    posts: myPosts.length,
    comments: myComments.length,
    totalLikes: myPosts.reduce((sum, p) => sum + p.likes, 0),
    totalViews: myPosts.reduce((sum, p) => sum + p.views, 0)
  };

  return (
    <main className="main mypage-container">
      {/* Back Button */}
      <div className="detail-back-section">
        <button className="detail-back-btn" onClick={() => go("")}>
          <Icon name="back" />
        </button>
        <div className="unity-breadcrumb">
          <span className="bc-item" onClick={() => go("")}>홈</span>
          <Icon name="back" style={{ transform: "rotate(180deg)", width: 12, height: 12 }} />
          <span className="bc-item active">마이페이지</span>
        </div>
      </div>

      <div className="mypage-layout">
        {/* Profile Section */}
        <aside className="mypage-sidebar">
          <div className="mypage-profile-card">
            <Mono name={user.name} color={user.color} size={80} />
            <div className="mypage-profile-info">
              <div className="mypage-profile-name">
                {user.name}
                {user.verified && <Icon name="verified" className="verified" />}
              </div>
              <div className="mypage-profile-email">{user.email}</div>
              <div className="mypage-profile-bio">{user.bio}</div>
              <div className="mypage-profile-join">가입: {user.joinDate}</div>
            </div>

            <div className="mypage-stats">
              <div className="mypage-stat-item">
                <div className="stat-num">{stats.posts}</div>
                <div className="stat-label">작성한 글</div>
              </div>
              <div className="mypage-stat-item">
                <div className="stat-num">{stats.comments}</div>
                <div className="stat-label">작성한 댓글</div>
              </div>
              <div className="mypage-stat-item">
                <div className="stat-num">{stats.totalLikes}</div>
                <div className="stat-label">받은 좋아요</div>
              </div>
              <div className="mypage-stat-item">
                <div className="stat-num">{fmt(stats.totalViews)}</div>
                <div className="stat-label">총 조회수</div>
              </div>
            </div>

            <button className="mypage-edit-btn">
              <Icon name="spark" />
              프로필 수정
            </button>
          </div>
        </aside>

        {/* Content Section */}
        <div className="mypage-content">
          {/* Tabs */}
          <div className="mypage-tabs">
            <button
              className={"mypage-tab" + (activeTab === "posts" ? " active" : "")}
              onClick={() => setActiveTab("posts")}
            >
              <Icon name="pages" />
              내가 작성한 글
            </button>
            <button
              className={"mypage-tab" + (activeTab === "comments" ? " active" : "")}
              onClick={() => setActiveTab("comments")}
            >
              <Icon name="msg" />
              내가 작성한 댓글
            </button>
          </div>

          {/* Posts Tab */}
          {activeTab === "posts" && (
            <div className="mypage-posts">
              {myPosts.length === 0 ? (
                <div className="mypage-empty">
                  <Icon name="empty" />
                  <p>작성한 글이 없습니다</p>
                </div>
              ) : (
                myPosts.map(post => (
                  <div key={post.id} className="mypage-post-card" onClick={() => go("t/" + post.id)}>
                    <div className="mypage-post-header">
                      <span className={"mypage-post-badge " + (post.type === "공지" ? "notice" : "tip")}>
                        {post.type}
                      </span>
                      <span className="mypage-post-category">{post.category}</span>
                      <span className="mypage-post-date">{post.date}</span>
                    </div>
                    <h3 className="mypage-post-title">{post.title}</h3>
                    <div className="mypage-post-stats">
                      <span><Icon name="eye" /> {post.views}</span>
                      <span><Icon name="msg" /> {post.comments}</span>
                      <span><Icon name="heart" /> {post.likes}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Comments Tab */}
          {activeTab === "comments" && (
            <div className="mypage-comments">
              {myComments.length === 0 ? (
                <div className="mypage-empty">
                  <Icon name="empty" />
                  <p>작성한 댓글이 없습니다</p>
                </div>
              ) : (
                myComments.map(comment => (
                  <div key={comment.id} className="mypage-comment-card">
                    <div className="mypage-comment-header">
                      <span className="mypage-comment-post">{comment.postTitle}</span>
                      <span className="mypage-comment-date">{comment.date}</span>
                    </div>
                    <p className="mypage-comment-content">{comment.content}</p>
                    <div className="mypage-comment-stats">
                      <span><Icon name="heart" /> {comment.likes}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { MyPage });
