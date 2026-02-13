import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import WrongAnswerOverlay from "../WrongAnswerOverlay";

interface Option {
  label: string;
  text: string;
}

interface Props {
  gifUrl?: string;
  imageUrl?: string;
  question: string;
  options: Option[];
  correctIndex: number;
  onCorrect: () => void;
}

const QuizPage = ({ gifUrl, imageUrl, question, options, correctIndex, onCorrect }: Props) => {
  const [showWrong, setShowWrong] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);

  const handleAnswer = useCallback(
    (idx: number) => {
      if (showWrong || showCorrect) return;
      if (idx === correctIndex) {
        setShowCorrect(true);
        setTimeout(() => onCorrect(), 1200);
      } else {
        setShowWrong(true);
        setTimeout(() => setShowWrong(false), 2500);
      }
    },
    [correctIndex, onCorrect, showWrong, showCorrect]
  );

  const mediaSrc = imageUrl || gifUrl;

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-4 relative z-[1]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-2xl max-w-md w-full text-center border border-border"
        initial={{ rotate: 1 }}
        animate={{ rotate: 1 }}
        whileHover={{ rotate: 0, scale: 1.01 }}
      >
        {mediaSrc && (
          <img
            src={mediaSrc}
            alt="Quiz"
            className="w-44 h-auto max-h-56 mx-auto rounded-2xl object-contain mb-5"
            loading="eager"
          />
        )}

        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{question}</h2>

        <div className="grid grid-cols-1 gap-3">
          {options.map((opt, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className="bg-secondary text-secondary-foreground font-medium py-3 px-5 rounded-2xl text-left border border-border hover:border-primary transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="font-bold text-primary mr-2">{opt.label}</span>
              {opt.text}
            </motion.button>
          ))}
        </div>

        {showCorrect && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="text-6xl">💖</span>
          </motion.div>
        )}
      </motion.div>

      <WrongAnswerOverlay show={showWrong} />
    </motion.div>
  );
};

export default QuizPage;
