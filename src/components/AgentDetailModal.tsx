// src/components/AgentDetailModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { FC } from "react";
import type { Character } from "./CharacterCard"; // Assuming CharacterCard exports this type

interface Props {
  character: Character;
  onClose: () => void;
}

const AgentDetailModal: FC<Props> = ({ character, onClose }) => {
  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.1, type: "spring", stiffness: 100 },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] grid md:grid-cols-2 gap-8 p-8 rounded-xl border bg-card/80 shadow-2xl overflow-y-auto"
          style={{
            borderColor: `hsl(${character.theme.primary} / 0.5)`,
            boxShadow: `0 25px 50px -12px hsl(${character.theme.glow} / 0.4)`
          }}
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors z-10">
            <X size={24} />
          </button>
          
          {/* Left Side: Image & Core Info */}
          <div className="flex flex-col items-center text-center">
            <img 
              src={character.images.banner} 
              alt={character.images.alt} 
              className="max-w-full h-auto rounded-lg mb-4 border"
              style={{ borderColor: `hsl(${character.theme.primary} / 0.5)` }}
            />
            <h2 className="text-4xl font-bold" style={{ color: `hsl(${character.theme.header})` }}>{character.name}</h2>
            <p className="text-md uppercase tracking-widest text-muted-foreground">{character.role}</p>
            <p className="text-lg text-muted-foreground mt-2">{character.tagline}</p>
            <p className="text-md text-muted-foreground mt-4">{character.description}</p>
          </div>

          {/* Right Side: Abilities */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold mb-6" style={{ color: `hsl(${character.theme.header})` }}>Abilities</h3>
            <ul className="space-y-4">
              {character.abilities.map((ab) => (
                <li key={ab.name} className="p-4 rounded-lg border bg-background/50" style={{ borderColor: `hsl(${character.theme.primary} / 0.3)`}}>
                  <p className="font-semibold text-xl text-white">{ab.name}</p>
                  <p className="text-md text-muted-foreground mt-1">{ab.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AgentDetailModal;