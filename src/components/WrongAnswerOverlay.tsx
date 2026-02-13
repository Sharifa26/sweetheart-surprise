import { motion, AnimatePresence } from "framer-motion";

interface Props {
  show: boolean;
}

const WrongAnswerOverlay = ({ show }: Props) => (
  <AnimatePresence>
    {show && (
      <motion.div
        className="wrong-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img
          src="https://media.tenor.com/BrJjmVscA4YAAAAj/bubu-angry-bubu-fierce.gif"
          alt="Angry"
          className="w-48 h-48 rounded-2xl object-cover"
          loading="eager"
        />
        <p className="text-2xl md:text-3xl font-bold text-red-400">
          I'm going to kill you 😡💢
        </p>
      </motion.div>
    )}
  </AnimatePresence>
);

export default WrongAnswerOverlay;
