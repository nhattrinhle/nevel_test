import React, { useEffect, useState, useRef } from "react";
import slide from "../assets/slide-mobile.png";
import SliderContainer from "./SliderContainer";
import SliderIndicators from "./SliderIndicators";

const Slider = () => {
  const originalSlides = Array(9).fill(slide);
  const slides = [originalSlides[originalSlides.length - 1], ...originalSlides, originalSlides[0]];
  const [activeIndex, setActiveIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (activeIndex === 0) {
      setTransitionEnabled(false);
      setActiveIndex(originalSlides.length);
    } else if (activeIndex === slides.length - 1) {
      setTransitionEnabled(false);
      setActiveIndex(1);
    } else {
      setTransitionEnabled(true);
    }
  }, [activeIndex, originalSlides.length, slides.length]);

  const handleDotClick = (index) => {
    clearInterval(intervalRef.current);
    setActiveIndex(index + 1);
    startAutoSlide();
  };

  return (
    <section className="flex relative flex-col w-full max-md:max-w-full max-h-[450px]">
      <div className="relative w-full aspect-[2.17] md:aspect-[1600/450] overflow-hidden">
        <SliderContainer slides={slides} activeIndex={activeIndex} transitionEnabled={transitionEnabled} />
      </div>
      <SliderIndicators
        originalSlides={originalSlides}
        activeIndex={activeIndex}
        handleDotClick={handleDotClick}
      />
    </section>
  );
};

export default Slider;