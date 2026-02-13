import { useMemo } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 18 + Math.random() * 22,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 10,
      })),
    []
  );

  return (
    <>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            fontSize: h.size,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          💕
        </span>
      ))}
    </>
  );
};

export default FloatingHearts;
