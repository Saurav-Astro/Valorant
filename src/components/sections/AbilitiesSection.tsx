// src/components/AllAgentsSection.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import data from "@/data/data.json";
import type { Character } from "@/components/CharacterCard";
import AgentDetailModal from "@/components/AgentDetailModal";

const AllAgentsSection = () => {
  const [selectedAgent, setSelectedAgent] = useState<Character | null>(null);
  const characters = data.characters as Character[];

  return (
    <>
      <section id="all-agents" className="py-20">
        <div className="container">
          <header className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Meet the Agents</h2>
            <p className="text-lg text-muted-foreground mt-2">Click any agent to see their full profile and abilities.</p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {characters.map((c, idx) => (
              <motion.article
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.5) }}
                className="group relative overflow-hidden rounded-xl border bg-card/60 backdrop-blur-lg shadow-lg cursor-pointer h-96 flex flex-col"
                style={{
                  borderColor: `hsl(${c.theme.primary} / 0.3)`
                }}
                onClick={() => setSelectedAgent(c)}
              >
                <div
                  className="absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-80"
                  style={{
                    background: `linear-gradient(135deg, hsl(${c.theme.gradientFrom}) 0%, hsl(${c.theme.gradientTo}) 100%)`
                  }}
                  aria-hidden
                />
                <div className="flex-grow flex items-center justify-center">
                    <img
                      src={c.images.banner}
                      alt={c.images.alt}
                      loading="lazy"
                      decoding="async"
                      className="relative z-[1] w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div className="relative z-[2] p-4 border-t bg-background/70 backdrop-blur-md" style={{ borderColor: `hsl(${c.theme.primary} / 0.3)` }}>
                  <h3 className="text-xl font-bold leading-none" style={{ color: `hsl(${c.theme.header})` }}>{c.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{c.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {selectedAgent && (
        <AgentDetailModal
          character={selectedAgent}
          onClose={() => setSelectedAgent(null)}
        />
      )}
    </>
  );
};

export default AllAgentsSection;