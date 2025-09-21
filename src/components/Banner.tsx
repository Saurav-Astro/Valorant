import Slider from "react-slick";
import { useEffect, useMemo, useRef, useState } from "react";
import data from "@/data/data.json";
import CharacterCard, { type Character } from "@/components/CharacterCard";
import ThumbnailNav from "@/components/ThumbnailNav";
// import RainEffect from "@/components/RainEffect";
import Cursor from "@/components/Cursor";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  onThemeChange?: (hslHue: string) => void;
}

const Banner = ({ onThemeChange }: Props) => {
  const characters = data.characters as Character[];
  const [index, setIndex] = useState(0);
  const mainRef = useRef<Slider | null>(null);
  const navRef = useRef<Slider | null>(null);

  const settings = useMemo(
    () => ({
      dots: false,
      arrows: false,
      infinite: true,
      fade: true,
      speed: 600,
      autoplay: true,
      autoplaySpeed: 4500,
      pauseOnHover: true,
      asNavFor: navRef.current ?? undefined,
      beforeChange: (_: number, next: number) => setIndex(next),
      adaptiveHeight: true,
    }), []);

  useEffect(() => {
    const hue = characters[index]?.theme.header || getComputedStyle(document.documentElement).getPropertyValue("--primary");
    onThemeChange?.(hue);
  }, [index, characters, onThemeChange]);

  return (
    <section id="overview" className="relative pt-28 pb-10">
      {/* <RainEffect /> */}
      <Cursor />
      <div className="container">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            {data.sections.overview.title}
          </h1>
          <p className="text-muted-foreground mt-2">{data.sections.overview.subtitle}</p>
        </div>

        <Slider ref={(r) => (mainRef.current = r)} {...(settings as any)}>
          {characters.map((c) => (
            <div key={c.slug} className="px-1">
              <CharacterCard character={c} />
            </div>
          ))}
        </Slider>

        <div className="mt-6">
          <ThumbnailNav
            characters={characters}
            onSelect={(i) => {
              mainRef.current?.slickGoTo(i);
              setIndex(i);
            }}
            asNavFor={mainRef.current}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
