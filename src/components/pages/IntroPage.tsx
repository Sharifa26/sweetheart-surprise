import { motion } from "framer-motion";

interface Props {
  onNext: () => void;
}

const IntroPage = ({ onNext }: Props) => (
  <motion.div
    className="flex flex-col items-center justify-center min-h-screen px-4 relative z-[1]"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.6 }}
  >
    <motion.div
      className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-md w-full text-center border border-border"
      initial={{ rotate: -2 }}
      animate={{ rotate: -2 }}
      whileHover={{ rotate: 0, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <motion.img
        src="https://media.tenor.com/images/22513174/tenor.gif"
        alt="Cute panda"
        className="w-40 h-40 mx-auto rounded-2xl object-cover mb-6"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        Hey Cutiepie 💕
      </h1>
      <p className="text-muted-foreground text-lg mb-8">
        This Valentine, I made a little something special for you.
      </p>

      <motion.button
        onClick={onNext}
        className="bg-primary text-primary-foreground font-semibold text-lg px-10 py-4 rounded-full btn-pulse-glow"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        Open it 💌
      </motion.button>
    </motion.div>
  </motion.div>
);

export default IntroPage;
