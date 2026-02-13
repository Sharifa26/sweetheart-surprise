import { useState, useCallback } from "react";
import { motion } from "framer-motion";

interface Props {
  onYes: () => void;
}

const FinalPage = ({ onYes }: Props) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [dodgeCount, setDodgeCount] = useState(0);

  const dodgeNo = useCallback(() => {
    const x = (Math.random() - 0.5) * 250;
    const y = (Math.random() - 0.5) * 300;
    setNoPos({ x, y });
    setDodgeCount((c) => c + 1);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-4 relative z-[1]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-md w-full text-center border border-border"
        initial={{ rotate: -1 }}
        animate={{ rotate: -1 }}
        whileHover={{ rotate: 0 }}
      >
        <img
          src="https://media.tenor.com/sU9__yX0MdIAAAAj/love.gif"
          alt="Love"
          className="w-48 h-48 mx-auto rounded-2xl object-cover mb-6"
          loading="eager"
        />

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Will you be my Valentine? 💖
        </h2>

        <div className="flex items-center justify-center gap-6 relative min-h-[80px]">
          <motion.button
            onClick={onYes}
            className="bg-primary text-primary-foreground font-bold text-xl px-10 py-4 rounded-full btn-pulse-glow z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            YES 💕
          </motion.button>

          <motion.button
            onMouseEnter={dodgeNo}
            onTouchStart={dodgeNo}
            onClick={dodgeNo}
            className="bg-muted text-muted-foreground font-bold text-xl px-10 py-4 rounded-full border border-border z-10"
            animate={{
              x: noPos.x,
              y: noPos.y,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
            style={{ fontSize: Math.max(12, 20 - dodgeCount * 2) }}
          >
            NO 🙈
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FinalPage;
