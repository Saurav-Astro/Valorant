import Slider from "react-slick";
import { useRef } from "react";
import type { Character } from "./CharacterCard";

interface Props {
  characters: Character[];
  onSelect: (index: number) => void;
  asNavFor?: Slider | null;
}

const ThumbnailNav = ({ characters, onSelect, asNavFor }: Props) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    slidesToShow: Math.min(characters.length, 3),
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    asNavFor: asNavFor ?? undefined,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } }
    ],
    afterChange: (i: number) => onSelect(i)
  } as const;

  return (
    <div className="relative">
      <Slider ref={(r) => (sliderRef.current = r)} {...(settings as any)}>
        {characters.map((c, idx) => (
          <div key={c.slug} className="px-2">
            <button
              aria-label={`Select ${c.name}`}
              className="w-full rounded-md overflow-hidden border bg-card/70 backdrop-blur hover-scale"
              onClick={() => onSelect(idx)}
            >
              <img src={c.images.thumb} alt={`${c.name} thumbnail`} loading="lazy" decoding="async" className="h-20 w-full object-cover" />
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ThumbnailNav;
