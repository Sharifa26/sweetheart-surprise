import { useMemo } from "react";
import { motion } from "framer-motion";

const CelebrationPage = () => {
  const rainHearts = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 16 + Math.random() * 24,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 3,
        emoji: ["💕", "💖", "✨", "💞", "😘", "🌸"][i % 6],
      })),
    []
  );

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-4 relative z-[1] overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {rainHearts.map((h) => (
        <span
          key={h.id}
          className="heart-rain"
          style={{
            left: `${h.left}%`,
            fontSize: h.size,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          {h.emoji}
        </span>
      ))}

      <motion.div
        className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-lg w-full text-center border border-border relative z-10"
        animate={{
          boxShadow: [
            "0 0 20px hsl(340 82% 65% / 0.3)",
            "0 0 60px hsl(340 82% 65% / 0.6)",
            "0 0 20px hsl(340 82% 65% / 0.3)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <motion.img
          src="https://media.tenor.com/images/12601800/tenor.gif"
          alt="Kiss bear"
          className="w-56 h-56 mx-auto rounded-2xl object-cover mb-6"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          loading="eager"
        />

        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Thank you so much darling 💕
        </h2>
        <p className="text-lg text-muted-foreground mb-2">
          I know you will say yes only 😘
        </p>
        <p className="text-xl font-semibold text-primary">
          Love you so much chellam 💖✨
        </p>

        <div className="mt-6 text-3xl">
          💕 😘 ✨ 🌸 💞 💖
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CelebrationPage;
