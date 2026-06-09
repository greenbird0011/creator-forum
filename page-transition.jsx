/* SVG Path Page Transition */

function PageTransition() {
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    const handleTransition = () => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 800);
    };

    window.addEventListener('hashchange', handleTransition);
    return () => window.removeEventListener('hashchange', handleTransition);
  }, []);

  if (!isAnimating) return null;

  return (
    <svg className="page-transition-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path
        className="transition-path"
        d="M 0 0 L 0 0 Q 0 50 0 100 L 0 100 Z"
        fill="var(--hero-block)"
      />
    </svg>
  );
}

Object.assign(window, { PageTransition });
