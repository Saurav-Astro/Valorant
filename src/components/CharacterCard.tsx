import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { FC } from "react";

export interface Character {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  description: string;
  theme: {
    primary: string;
    glow: string;
    header: string;
    gradientFrom: string;
    gradientTo: string;
  };
  images: {
    banner: string;
    thumb: string;
    alt: string;
  };
  abilities: { name: string; description: string }[];
  actions: { label: string; href: string }[];
}

interface Props {
  character: Character;
}

const CharacterCard: FC<Props> = ({ character }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [8, -8]);
  const rotateY = useTransform(x, [-150, 150], [-8, 8]);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx);
    y.set(dy);
  };

  return (
    <motion.article
      onMouseMove={onMouseMove}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" as const }}
      className="relative grid md:grid-cols-2 gap-8 p-8 rounded-lg border bg-card/60 backdrop-blur-xl shadow-[var(--shadow-elegant)]"
    >
      <div className="flex flex-col justify-center gap-6" style={{ transform: "translateZ(40px)" }}>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          {character.name}
        </h2>
        <p className="text-md uppercase tracking-widest text-muted-foreground">{character.role}</p>
        <p className="text-lg md:text-xl text-muted-foreground">{character.tagline}</p>
        <p className="text-md md:text-lg text-muted-foreground">{character.description}</p>
        
      </div>
      <motion.div className="relative" style={{ transform: "translateZ(20px)" }}>
        <img
          src={character.images.banner}
          alt={character.images.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-72 md:h-[26rem] object-cover rounded-md border"
          style={{ boxShadow: `0 20px 60px -20px hsl(${character.theme.glow} / 0.5)` }}
        />
        <div
          className="pointer-events-none absolute inset-0 rounded-md"
          style={{ boxShadow: `inset 0 0 80px hsl(${character.theme.primary} / 0.15)` }}
          aria-hidden
        />
      </motion.div>
    </motion.article>
  );
};

export default CharacterCard;