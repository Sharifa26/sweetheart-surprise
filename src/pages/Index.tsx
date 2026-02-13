import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import WaveBorders from "@/components/WaveBorders";
import LockPage from "@/components/pages/LockPage";
import IntroPage from "@/components/pages/IntroPage";
import QuizPage from "@/components/pages/QuizPage";
import FinalPage from "@/components/pages/FinalPage";
import CelebrationPage from "@/components/pages/CelebrationPage";
import couplePhoto from "@/assets/couple-photo.jpg";
import braceletImg from "@/assets/bracelet.webp";

const quizData = [
  {
    gifUrl: "https://media.tenor.com/9X_EXRhnImUAAAAj/love-ilu.gif",
    question: "How much do you love me? 💞",
    options: [
      { label: "A", text: "I love you ∞ time" },
      { label: "B", text: "I love you more than ∞" },
      { label: "C", text: "I love you ∞ * ∞ time" },
      { label: "D", text: "I love you so much" },
    ],
    correctIndex: 2,
  },
  {
    imageUrl: couplePhoto,
    question: "When did we take this picture? 📸",
    options: [
      { label: "A", text: "March 8" },
      { label: "B", text: "December 31" },
      { label: "C", text: "October 28" },
      { label: "D", text: "December 30" },
    ],
    correctIndex: 3,
  },
  {
    imageUrl: braceletImg,
    question: "Why did we exchange this? 💎",
    options: [
      { label: "A", text: "March 12" },
      { label: "B", text: "January 12" },
      { label: "C", text: "March 8" },
      { label: "D", text: "May 26" },
    ],
    correctIndex: 2,
  },
  {
    gifUrl: "https://media.tenor.com/g0Ikld3g1TwAAAAj/z.gif",
    question: "Which place I want to visit with you? 🌍",
    options: [
      { label: "A", text: "Maldives 🏝️" },
      { label: "B", text: "Dubai 🏙️" },
      { label: "C", text: "Andaman Islands 🌊" },
      { label: "D", text: "Darjeeling 🍵" },
    ],
    correctIndex: 0,
  },
];

const Index = () => {
  const [page, setPage] = useState(-1); // -1=lock, 0=intro, 1-4=quiz, 5=final, 6=celebration

  return (
    <div className="pink-grid-bg min-h-screen relative overflow-hidden">
      <FloatingHearts />
      <WaveBorders />

      <AnimatePresence mode="wait">
        {page === -1 && <LockPage key="lock" onUnlock={() => setPage(0)} />}

        {page === 0 && <IntroPage key="intro" onNext={() => setPage(1)} />}

        {page >= 1 && page <= 4 && (
          <QuizPage
            key={`quiz-${page}`}
            {...quizData[page - 1]}
            onCorrect={() => setPage(page + 1)}
          />
        )}

        {page === 5 && <FinalPage key="final" onYes={() => setPage(6)} />}

        {page === 6 && <CelebrationPage key="celebration" />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
