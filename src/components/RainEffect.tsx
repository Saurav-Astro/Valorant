import { useEffect, useRef } from "react";

const RainEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const dropsRef = useRef<Array<{ x: number; y: number; l: number; xs: number; ys: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dropsRef.current = Array.from({ length: Math.floor(window.innerWidth / 2) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        l: Math.random() * 1 + 1,
        xs: -2 + Math.random() * 2 + 2,
        ys: Math.random() * 10 + 10,
      }));
    };

    const draw = () => {
      const hue = getComputedStyle(document.documentElement).getPropertyValue("--header-accent") || getComputedStyle(document.documentElement).getPropertyValue("--ring");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = `hsl(${hue} / 0.5)`;
      ctx.lineWidth = 1;
      ctx.lineCap = "round";

      for (const p of dropsRef.current) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        ctx.stroke();
      }
      move();
      rafRef.current = requestAnimationFrame(draw);
    };

    const move = () => {
      for (const p of dropsRef.current) {
        p.x += p.xs;
        p.y += p.ys;
        if (p.x > canvas.width || p.y > canvas.height) {
          p.x = Math.random() * canvas.width;
          p.y = -20;
        }
      }
    };

    init();
    draw();

    const onResize = () => init();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-10 mix-blend-screen opacity-40" aria-hidden="true" />;
};

export default RainEffect;
