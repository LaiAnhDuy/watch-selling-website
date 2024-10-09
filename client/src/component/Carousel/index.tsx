import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AutoPlay from "embla-carousel-autoplay";
interface EmblaCarouselProps {
  slides: string[];
}

const Carousel: React.FC<EmblaCarouselProps> = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoPlay({ delay: 3000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="bg-black">
      <div className="relative max-w-[80vw] mx-auto embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide min-w-full relative" key={index}>
              <div className="h-[400px]">
                <img src={slide} className="w-full h-full" />
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-[80vw] mx-auto flex justify-between absolute left-0 right-0 top-[200px]">
          <button
            className="bg-slate-200 rounded-full w-8 h-8 flex justify-end items-center ml-2"
            onClick={scrollPrev}
          >
            <ArrowBackIosIcon />
          </button>
          <button
            className=" bg-slate-200 rounded-full w-8 h-8 flex justify-center items-center mr-2"
            onClick={scrollNext}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
