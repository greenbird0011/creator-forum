/* CreatorForum — Community Post Detail Page */

// Reply 컴포넌트 (재귀적으로 렌더링)
function ReplyItem({ reply, depth = 0, onLike, onCollapse }) {
  const hasChildren = reply.children && reply.children.length > 0;
  const totalReplies = hasChildren ? reply.children.length : 0;

  return (
    <div className="unity-reply-item" style={{ marginLeft: depth > 0 ? '40px' : '0' }}>
      <div className="unity-post-card">
        {/* Collapse Line */}
        {hasChildren && (
          <div
            className={"unity-collapse-line" + (reply.collapsed ? " collapsed" : "")}
            onClick={() => onCollapse(reply.id)}
          />
        )}

        <div className="unity-post-header">
          <Mono name={reply.author} color={reply.color} size={40} />
          <div className="unity-post-author-info">
            <div className="unity-post-author-name">
              {reply.author}
              {reply.verified && <Icon name="verified" className="verified" />}
            </div>
            <div className="unity-post-date">{reply.time}</div>
          </div>
        </div>

        <div className="unity-post-body">
          {reply.content}
        </div>

        <div className="unity-post-footer">
          <button
            className={"unity-action-btn" + (reply.liked ? " liked" : "")}
            onClick={() => onLike(reply.id)}
          >
            <Icon name="heart" style={reply.liked ? { fill: "#ef4444" } : undefined} />
            <span>{reply.likes}</span>
          </button>
          <button className="unity-action-btn">
            <Icon name="repost" />
            <span>공유</span>
          </button>
          {hasChildren && (
            <button
              className="unity-action-btn unity-collapse-btn"
              onClick={() => onCollapse(reply.id)}
            >
              <Icon name={reply.collapsed ? "down" : "up"} />
              <span>{reply.collapsed ? `${totalReplies}개 답글 보기` : '접기'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Children Replies */}
      {hasChildren && !reply.collapsed && (
        <div className="unity-reply-children">
          {reply.children.map(child => (
            <ReplyItem
              key={child.id}
              reply={child}
              depth={depth + 1}
              onLike={onLike}
              onCollapse={onCollapse}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CommunityDetail({ postId, go }) {
  // 실제로는 postId로 데이터를 가져와야 하지만, 데모용으로 하드코딩
  const post = CF.COMMUNITY[0]; // 첫 번째 포스트 사용

  const [replyText, setReplyText] = React.useState("");
  const [replies, setReplies] = React.useState([
    {
      id: 1,
      author: "효요공방",
      color: "#ff7a59",
      verified: true,
      time: "15분 전",
      content: "정말 유용한 기능이네요! 저도 비슷한 이슈가 있었는데 도움이 많이 될 것 같습니다. 혹시 퍼포먼스 테스트도 해보셨나요?",
      likes: 8,
      liked: false,
      collapsed: false,
      children: [
        {
          id: 3,
          author: "나리스튜디오",
          color: "#3aa3ff",
          verified: true,
          time: "12분 전",
          content: "네, 100개 이상의 다이얼로그로 테스트했는데 메모리 사용량이 30% 정도 개선되었습니다!",
          likes: 5,
          liked: false,
          collapsed: false,
          children: []
        }
      ]
    },
    {
      id: 2,
      author: "PixelPub",
      color: "#7c5cff",
      verified: true,
      time: "22분 전",
      content: "다국어 핫스왑 지원 너무 좋습니다 👍 마이그레이션 가이드 따라 적용했는데 바로 되네요!",
      likes: 12,
      liked: false,
      collapsed: false,
      children: []
    }
  ]);

  const [liked, setLiked] = React.useState(post.liked);
  const [likes, setLikes] = React.useState(post.likes);

  const handleReply = () => {
    if (!replyText.trim()) return;

    const newReply = {
      id: replies.length + 1,
      author: "민",
      color: "#3aa3ff",
      verified: false,
      time: "방금 전",
      content: replyText,
      likes: 0,
      liked: false
    };

    setReplies([...replies, newReply]);
    setReplyText("");
  };

  const handleReplyLike = (replyId) => {
    const updateReplyLike = (replyList) => {
      return replyList.map(reply => {
        if (reply.id === replyId) {
          return {
            ...reply,
            liked: !reply.liked,
            likes: reply.liked ? reply.likes - 1 : reply.likes + 1
          };
        }
        if (reply.children && reply.children.length > 0) {
          return { ...reply, children: updateReplyLike(reply.children) };
        }
        return reply;
      });
    };
    setReplies(updateReplyLike(replies));
  };

  const toggleCollapse = (replyId) => {
    const updateCollapse = (replyList) => {
      return replyList.map(reply => {
        if (reply.id === replyId) {
          return { ...reply, collapsed: !reply.collapsed };
        }
        if (reply.children && reply.children.length > 0) {
          return { ...reply, children: updateCollapse(reply.children) };
        }
        return reply;
      });
    };
    setReplies(updateCollapse(replies));
  };

  // 참여자 목록
  const allParticipants = [
    { name: post.author, color: post.color },
    ...replies.map(r => ({ name: r.author, color: r.color }))
  ];
  const uniqueParticipants = allParticipants.filter((p, idx, arr) =>
    arr.findIndex(t => t.name === p.name) === idx
  ).slice(0, 5);

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
          <span className="bc-item active">{post.type}</span>
        </div>
      </div>

      {/* Unity 스타일 헤더 */}
      <div className="unity-detail-header">
        <div className="unity-detail-title-section">
          <span className={"unity-detail-badge " + post.pill}>{post.type}</span>
          <h1 className="unity-detail-title">{post.title}</h1>
        </div>
      </div>

      {/* Unity 스타일 통계 바 */}
      <div className="unity-stats-bar">
        <div className="unity-stats-left">
          <div className="unity-stat-item">
            <span className="stat-num">{fmt(post.views)}</span>
            <span className="stat-label">views</span>
          </div>
          <div className="unity-stat-item">
            <span className="stat-num">{likes}</span>
            <span className="stat-label">likes</span>
          </div>
          <div className="unity-stat-item">
            <span className="stat-num">{post.comments + replies.length}</span>
            <span className="stat-label">replies</span>
          </div>
          <div className="unity-stat-item">
            <span className="stat-num">{uniqueParticipants.length}</span>
            <span className="stat-label">users</span>
          </div>
          <div className="unity-participants-mini">
            {uniqueParticipants.map((p, i) => (
              <Mono key={i} name={p.name} color={p.color} size={28} />
            ))}
          </div>
        </div>
        <div className="unity-stats-right">
          <span className="read-time">5 min read</span>
        </div>
      </div>

      {/* Original Post (Unity 카드 스타일) */}
      <div className="unity-post-card">
        <div className="unity-post-header">
          <Mono name={post.author} color={post.color} size={40} />
          <div className="unity-post-author-info">
            <div className="unity-post-author-name">
              {post.author}
              {post.verified && <Icon name="verified" className="verified" />}
            </div>
            <div className="unity-post-date">{post.time}</div>
          </div>
        </div>
        <div className="unity-post-body">
          {post.body}
        </div>
        <div className="unity-post-footer">
          <button
            className={"unity-action-btn" + (liked ? " liked" : "")}
            onClick={() => { setLiked(!liked); setLikes(l => liked ? l - 1 : l + 1); }}
          >
            <Icon name="heart" style={liked ? { fill: "#ef4444" } : undefined} />
            <span>{likes}</span>
          </button>
          <button className="unity-action-btn">
            <Icon name="repost" />
            <span>공유</span>
          </button>
        </div>
      </div>

      {/* Replies Section (Unity 카드 스타일) */}
      <div className="unity-replies-section">
        <div className="unity-replies-header">
          <h3 className="unity-replies-title">{replies.length} Replies</h3>
          <button className="unity-sort-btn">Top replies</button>
        </div>

        {replies.map((reply) => (
          <ReplyItem
            key={reply.id}
            reply={reply}
            depth={0}
            onLike={handleReplyLike}
            onCollapse={toggleCollapse}
          />
        ))}
      </div>

      {/* Reply Form (Unity 스타일) */}
      <div className="unity-reply-form">
        <h3 className="unity-form-title">답글 작성</h3>
        <div className="unity-form-content">
          <Mono name="민" color="#3aa3ff" size={40} />
          <textarea
            className="unity-form-textarea"
            placeholder="답글을 작성하세요..."
            value={replyText}
            onChange={e => setReplyText(e.target.value)}
            rows={4}
          />
        </div>
        <div className="unity-form-actions">
          <button
            className="btn-cta"
            onClick={handleReply}
            disabled={!replyText.trim()}
          >
            답글 등록
          </button>
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { CommunityDetail });
