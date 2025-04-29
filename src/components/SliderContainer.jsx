import React from "react";

const SliderContainer = ({ slides, activeIndex, transitionEnabled }) => {
  return (
    <div
      className="flex h-full transition-transform duration-300 ease-in-out"
      style={{
        transform: `translateX(-${activeIndex * 100}%)`,
        transition: transitionEnabled ? "transform 300ms ease-in-out" : "none",
      }}
    >
      {slides.map((slideImage, index) => (
        <img
          key={index}
          src={slideImage}
          alt={`Slide ${index > 0 && index < slides.length - 1 ? index : ""}`}
          className="w-full flex-shrink-0 object-cover object-center md:object-[40%_35%] md:h-[450px]"
        />
      ))}
    </div>
  );
};

export default SliderContainer;