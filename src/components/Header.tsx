import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import data from "@/data/data.json";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Github } from "lucide-react";

interface HeaderProps {
  activeHue?: string; // HSL without function, e.g., "258 85% 60%"
}

const Header = ({ activeHue }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Hook to detect scroll direction
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Set the accent color for the header shadow
  useEffect(() => {
    if (activeHue) {
      document.documentElement.style.setProperty("--header-accent", activeHue);
    }
  }, [activeHue]);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const filteredNavigation = data.navigation.filter(item => item.label !== "Abilities");
  
  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 border-b"
      >
        <div className="container flex items-center justify-between h-16">
          {/* --- THIS LINK IS NOW CORRECTED --- */}
          <a href="/" className="font-bold tracking-tight text-xl hover-scale">
            {data.site.title.split("—")[0].trim()}
          </a>
          
          <nav className="hidden md:flex items-center gap-1">
            {filteredNavigation.map((item) => (
              <a key={item.href} href={item.href} className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground nav-link">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://github.com/Astro-Saurav" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <AnimatePresence mode="wait">
                <motion.div key={theme} initial={{ opacity: 0, rotate: -30 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 30 }}>
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              <AnimatePresence mode="wait">
                <motion.div key={menuOpen ? 'x' : 'menu'} initial={{ opacity: 0, rotate: -30 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 30 }}>
                  {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
        <style>{`
          :root { --header-accent: var(--primary); } 
          header { 
            box-shadow: 0 2px 20px -5px hsl(var(--header-accent) / 0.2);
            transition: box-shadow 0.3s ease-in-out;
          }
          .nav-link { 
            position: relative;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 2px;
            left: 50%;
            width: 0;
            height: 1.5px;
            background: hsl(var(--header-accent));
            transition: all 0.3s ease-in-out;
            transform: translateX(-50%);
          }
          .nav-link:hover::after {
            width: 60%;
          }
        `}</style>
      </motion.header>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl"
          >
            <motion.nav
              initial={{ y: -20 }} animate={{ y: 0 }}
              className="mt-20 container flex flex-col items-center justify-center h-full gap-4"
            >
              {filteredNavigation.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-semibold text-muted-foreground hover:text-foreground"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1, ease: "easeInOut" }}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;