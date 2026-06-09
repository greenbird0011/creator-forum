/* AI Code Assistant Chatbot */

function AIAssistant() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    { role: 'assistant', content: '안녕하세요! 메이플스토리월드 크리에이터 AI 어시스턴트입니다. 패키지 추천, 코드 질문, 스니펫 생성 등을 도와드릴게요! 😊' }
  ]);
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const quickActions = [
    { icon: 'box', label: '패키지 추천', prompt: '인벤토리 시스템을 만들고 싶은데 어떤 패키지를 사용하면 좋을까요?' },
    { icon: 'code', label: '코드 질문', prompt: '대화 시스템 패키지를 어떻게 사용하나요?' },
    { icon: 'spark', label: '스니펫 생성', prompt: '타이머 기능을 만드는 Lua 코드를 작성해주세요' },
  ];

  const handleSend = (text) => {
    if (!text.trim()) return;

    const userMessage = { role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // AI 응답 시뮬레이션 (실제로는 API 호출)
    setTimeout(() => {
      const response = generateAIResponse(text);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setLoading(false);
    }, 1000 + Math.random() * 1000);
  };

  const generateAIResponse = (question) => {
    const q = question.toLowerCase();

    if (q.includes('인벤토리') || q.includes('inventory')) {
      return '인벤토리 시스템을 만드신다면 **@ui/inventory-pro** 패키지를 추천드려요!\n\n주요 기능:\n- 드래그&드롭 지원\n- 장비 슬롯 시스템\n- 자동 정렬 기능\n- 툴팁 내장\n\n설치:\n```\nmsw add @ui/inventory-pro\n```\n\n기본 사용법은 패키지 상세 페이지에서 확인하실 수 있어요!';
    }

    if (q.includes('대화') || q.includes('dialogue')) {
      return '**@nx/dialogue-system** 패키지 사용법을 알려드릴게요!\n\n```lua\nlocal Dialogue = require("@nx/dialogue-system")\n\n-- 대화 시작\nDialogue.play("intro_scene", {\n  speed = 28,\n  lang = "ko"\n})\n```\n\n분기형 대사, 타이핑 연출, 다국어까지 지원해요!';
    }

    if (q.includes('타이머') || q.includes('timer')) {
      return '타이머 기능 코드를 작성해드릴게요!\n\n```lua\nlocal countdown = 60\n\nwhile countdown > 0 do\n  print("남은 시간: " .. countdown .. "초")\n  wait(1)\n  countdown = countdown - 1\nend\n\nprint("시간 종료!")\n```\n\n더 고급 기능이 필요하시면 **@luastd/datetime** 패키지도 확인해보세요!';
    }

    // 기본 응답
    return '좋은 질문이에요! 구체적인 상황을 더 알려주시면 더 정확한 도움을 드릴 수 있어요.\n\n예를 들어:\n- 어떤 기능을 만들고 싶으신가요?\n- 어떤 패키지를 사용 중이신가요?\n- 어떤 오류가 발생했나요?\n\n패키지 목록은 왼쪽 메뉴에서 확인하실 수 있어요!';
  };

  return (
    <>
      {/* 플로팅 버튼 */}
      <button
        className={"ai-fab" + (open ? " open" : "")}
        onClick={() => setOpen(!open)}
        title="AI 어시스턴트"
      >
        {open ? <Icon name="x" /> : (
          <img src="Img/Img_AI.png" alt="AI" className="ai-fab-img" />
        )}
      </button>

      {/* 챗봇 윈도우 */}
      {open && (
        <div className="ai-window">
          <div className="ai-header">
            <div>
              <div className="ai-title">AI 어시스턴트</div>
              <div className="ai-status">● 온라인</div>
            </div>
            <button className="ai-close" onClick={() => setOpen(false)}>
              <Icon name="x" />
            </button>
          </div>

          <div className="ai-messages">
            {messages.map((msg, i) => (
              <div key={i} className={"ai-msg " + msg.role}>
                {msg.role === 'assistant' && (
                  <div className="msg-avatar">
                    <img src="Img/Img_AI.png" alt="AI" />
                  </div>
                )}
                <div className="msg-bubble">
                  {msg.content.split('\n').map((line, j) => {
                    if (line.startsWith('```')) return null;
                    if (line.includes('**')) {
                      const parts = line.split('**');
                      return <p key={j}>{parts.map((p, k) => k % 2 === 1 ? <strong key={k}>{p}</strong> : p)}</p>;
                    }
                    if (line.startsWith('- ')) {
                      return <li key={j}>{line.slice(2)}</li>;
                    }
                    if (line.trim()) {
                      return <p key={j}>{line}</p>;
                    }
                    return null;
                  })}
                  {msg.content.includes('```') && (
                    <pre><code>{msg.content.match(/```[\s\S]*?```/g)?.[0]?.replace(/```\w*\n?/g, '').trim()}</code></pre>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="ai-msg assistant">
                <div className="msg-avatar">
                  <img src="Img/Img_AI.png" alt="AI" />
                </div>
                <div className="ai-typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
          </div>

          {messages.length === 1 && (
            <div className="ai-quick-actions">
              {quickActions.map((action, i) => (
                <button key={i} className="quick-action" onClick={() => handleSend(action.prompt)}>
                  <Icon name={action.icon} />
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          )}

          <div className="ai-input-area">
            <input
              className="ai-input"
              placeholder="질문을 입력하세요..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend(input)}
            />
            <button
              className="ai-send"
              onClick={() => handleSend(input)}
              disabled={!input.trim() || loading}
            >
              <svg viewBox="0 0 24 24" fill="#14140f">
                <path d="M3 20V4l19 8-19 8zm2-3l11.85-5L5 7v3.5l6 1.5-6 1.5V17z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

Object.assign(window, { AIAssistant });
