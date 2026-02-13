import { useMemo } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: (i / 20) * 100 + Math.random() * 5,
        size: 16 + Math.random() * 18,
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
