import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { FC } from "react";
import type { Character } from "./CharacterCard";

interface Props {
  character: Character;
  ability: Character["abilities"][0];
  onClose: () => void;
}

const AbilityModal: FC<Props> = ({ character, ability, onClose }) => {
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: "0",
      opacity: 1,
      transition: { delay: 0.2, type: "spring", stiffness: 80 },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-lg mx-4 p-8 rounded-xl border bg-card/80 shadow-2xl"
          style={{
            boxShadow: `0 25px 50px -12px hsl(${character.theme.glow} / 0.4), inset 0 0 10px hsl(${character.theme.primary} / 0.2)`
          }}
          variants={modal}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors">
            <X size={24} />
          </button>
          
          <div className="flex items-center gap-4 mb-6">
            <img src={character.images.thumb} alt={character.name} className="w-16 h-16 rounded-full border-2" style={{ borderColor: `hsl(${character.theme.primary})` }} />
            <div>
              <h3 className="text-3xl font-bold" style={{ color: `hsl(${character.theme.header})` }}>{ability.name}</h3>
              <p className="text-lg text-muted-foreground">{character.name} - {character.role}</p>
            </div>
          </div>
          
          <p className="text-lg text-white">{ability.description}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AbilityModal;