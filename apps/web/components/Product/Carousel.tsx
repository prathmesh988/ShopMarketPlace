import React from "react";
import { useCarousel } from "@/utils/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  Images: Array<string>;
}

export const Carousel = ({ Images }: CarouselProps) => {
  const { index, nextSlide, prevSlide, direction } = useCarousel(Images);
  return (
    <>
      <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={index}
            src={Images[index]}
            alt="Carousel Slide"
            className="w-full h-64 object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
        >
          <ChevronLeft className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
    </>
  );
};
