import next from "next";
import { useState } from "react";

export const useCarousel = (images: Array<string>) => {

    const [index, setIndex] = useState(0);
    const direction = 1;

    const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

    return { index, nextSlide, prevSlide, direction };
}