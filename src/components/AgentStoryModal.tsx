import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { FC } from "react";

interface Props {
  agent: {
    displayName: string;
    fullPortrait: string;
    role: string;
    story: string;
    gradient: string;
  };
  onClose: () => void;
}

const AgentStoryModal: FC<Props> = ({ agent, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] grid md:grid-cols-2 gap-8 p-8 rounded-xl border bg-card/80 shadow-2xl overflow-y-auto"
          initial={{ scale: 0.9, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors z-10">
            <X size={24} />
          </button>
          
          {/* Agent Image */}
          <div className="relative flex items-center justify-center rounded-lg overflow-hidden">
            <div className="absolute inset-0 opacity-70" style={{ background: agent.gradient }} />
            <img src={agent.fullPortrait} alt={agent.displayName} className="relative z-10 max-h-[70vh] object-contain" />
          </div>

          {/* Agent Story */}
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold tracking-tight">{agent.displayName}</h2>
            <p className="text-md uppercase tracking-widest text-muted-foreground mb-4">{agent.role}</p>
            <div className="prose prose-invert text-lg text-white">
              <p>{agent.story}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AgentStoryModal;