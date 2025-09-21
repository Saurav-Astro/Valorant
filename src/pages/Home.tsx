import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/data/data.json";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Home = () => {
  const [featuredAgentIndex, setFeaturedAgentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedAgentIndex((prevIndex) => (prevIndex + 1) % data.characters.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const featuredAgent = data.characters[featuredAgentIndex];

  const agentTheme = {
    "--brand": featuredAgent.theme.primary,
    "--brand-glow": featuredAgent.theme.glow,
  } as React.CSSProperties;

  return (
    <main className="min-h-screen flex flex-col" style={agentTheme}>
     

      <section className="relative flex-grow flex items-center min-h-screen text-white overflow-hidden">
        {/* Background Effects */}
        <AnimatePresence>
          <motion.div
            key={featuredAgent.slug + "-bg"}
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.0, ease: "easeInOut" } }}
            exit={{ opacity: 0, transition: { duration: 1.0, ease: "easeInOut" } }}
            style={{
              background: `radial-gradient(ellipse 60% 60% at 80% 40%, hsl(var(--brand) / 0.3), transparent)`,
            }}
            aria-hidden
          />
        </AnimatePresence>
        <div className="absolute inset-0 -z-20 bg-background" />

        {/* Large Agent Image Container (Right Side) */}
        <div className="absolute inset-y-0 right-0 w-full md:w-3/4 lg:w-2/3">
          <AnimatePresence>
            <motion.img
              key={featuredAgent.slug + "-img"}
              src={featuredAgent.images.banner}
              alt={featuredAgent.images.alt}
              initial={{ opacity: 0, x: 200, scale: 1.1 }}
              animate={{ opacity: 1, x: 0, scale: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }}
              exit={{ opacity: 0, x: -100, transition: { duration: 0.6, ease: "easeIn" } }}
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{ filter: `drop-shadow(0 0 60px hsl(var(--brand-glow) / 0.5))` }}
            />
          </AnimatePresence>
          {/* Fading overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/30 to-background" aria-hidden="true" />
          
        </div>

        {/* Text Content (Left Side, on top) */}
        <div className="container relative z-10">
          <div className="max-w-lg text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={featuredAgent.slug + "-text"}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }}
                exit={{ opacity: 0, y: 40, transition: { duration: 0.5, ease: "easeIn" } }}
              >
                <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tighter uppercase" style={{ color: `hsl(${featuredAgent.theme.header})` }}>VALORANT<br />
                  {featuredAgent.name}
                </h1>
                <p className="mt-4 text-xl text-muted-foreground font-medium">
                  {featuredAgent.tagline}
                </p>
              </motion.div>
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-8"
            >
              <Button asChild size="lg" className="group text-lg" style={{
                background: `linear-gradient(135deg, hsl(${featuredAgent.theme.gradientFrom}) 0%, hsl(${featuredAgent.theme.gradientTo}) 100%)`,
                boxShadow: `0 10px 30px -10px hsl(var(--brand-glow) / 0.5)`
              }}>
                <a href="/index">
                  Enter Showcase
                  <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;