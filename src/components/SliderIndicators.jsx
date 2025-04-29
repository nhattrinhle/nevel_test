import React from "react";

const SliderIndicators = ({ originalSlides, activeIndex, handleDotClick }) => {
  return (
    <div className="flex absolute bottom-3 left-2/4 z-2 gap-2 items-center self-start -translate-x-2/4 translate-y-[0%]">
      {originalSlides.map((_, index) => (
        <div
          key={index}
          className={`flex shrink-0 self-stretch my-auto w-7 max-md:w-4 h-1 rounded-3xl cursor-pointer ${activeIndex - 1 === index
            ? "bg-[var(--background-primary-normal)]"
            : "bg-[var(--background-neutral-invert-normal)] hover:bg-[var(--background-neutral-subdued)]"
            }`}
          onClick={() => handleDotClick(index)}
        />
      ))}
    </div>
  );
};

export default SliderIndicators;