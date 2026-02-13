import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  onUnlock: () => void;
}

const PIN = "2612";

const LockPage = ({ onUnlock }: Props) => {
  const [entered, setEntered] = useState("");
  const [shake, setShake] = useState(false);

  const handleKey = (digit: string) => {
    if (entered.length >= 4) return;
    const next = entered + digit;
    setEntered(next);

    if (next.length === 4) {
      if (next === PIN) {
        setTimeout(() => onUnlock(), 400);
      } else {
        setShake(true);
        setTimeout(() => {
          setShake(false);
          setEntered("");
        }, 600);
      }
    }
  };

  const handleDelete = () => {
    setEntered((prev) => prev.slice(0, -1));
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-4 relative z-[1]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-2xl max-w-sm w-full text-center border border-border"
        initial={{ rotate: -1 }}
        animate={{ rotate: -1 }}
        whileHover={{ rotate: 0, scale: 1.01 }}
      >
        <motion.img
          src="https://media.tenor.com/AX1cEf_KBYkAAAAM/bubu-dudu-sseeyall.gif"
          alt="Bubu Dudu"
          className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-2xl object-contain mb-3"
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          loading="eager"
        />

        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Unlock for You 🔒
        </h2>
        <p className="text-muted-foreground text-sm mb-5">
          Enter the secret PIN to continue
        </p>

        {/* PIN dots */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          animate={shake ? { x: [-12, 12, -8, 8, -4, 4, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-primary transition-all duration-200 ${
                i < entered.length
                  ? "bg-primary scale-110"
                  : "bg-transparent"
              }`}
            />
          ))}
        </motion.div>

        {/* Numpad */}
        <div className="grid grid-cols-3 gap-2 md:gap-3 max-w-[240px] mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <motion.button
              key={n}
              onClick={() => handleKey(String(n))}
              className="bg-secondary text-secondary-foreground font-bold text-lg md:text-xl w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-border hover:border-primary transition-colors mx-auto"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              {n}
            </motion.button>
          ))}
          <div />
          <motion.button
            onClick={() => handleKey("0")}
            className="bg-secondary text-secondary-foreground font-bold text-lg md:text-xl w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-border hover:border-primary transition-colors mx-auto"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          >
            0
          </motion.button>
          <motion.button
            onClick={handleDelete}
            className="bg-muted text-muted-foreground font-bold text-sm md:text-base w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-border hover:border-primary transition-colors mx-auto flex items-center justify-center"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          >
            ⌫
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LockPage;
