import { useEffect, useRef } from "react";

const Cursor = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current!;
    const ring = ringRef.current!;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 hidden md:block" aria-hidden>
      <div ref={ringRef} className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2" style={{ borderColor: "hsl(var(--header-accent) / 0.7)", boxShadow: "0 0 40px hsl(var(--header-accent) / 0.5)" }} />
      <div ref={dotRef} className="absolute -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--header-accent))", boxShadow: "0 0 20px hsl(var(--header-accent) / 0.8)" }} />
    </div>
  );
};

export default Cursor;
