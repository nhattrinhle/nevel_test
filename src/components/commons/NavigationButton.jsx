import React from "react";

const NavigationButton = ({ direction = "left", onClick }) => {
  const rotation = direction === "left" ? "rotate(180deg)" : "rotate(-180deg)";

  return (
    <button
      className="flex justify-center items-center w-10 h-10 rounded-xl bg-zinc-700 max-md:w-9 max-md:h-9 max-sm:w-8 max-sm:h-8 cursor-pointer hover:bg-[var(--background-primary-normal)]"
      aria-label={`Navigate ${direction}`}
      onClick={onClick}
    >
      <div>
        <svg
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-icon"
          style={{
            width: "24px",
            height: "24px",
            fill: "white",
            fillOpacity: "0.6",
            transform: rotation,
          }}
        >
          {direction === "right" ? (
            <path
              d="M8 12.88C7.99924 12.7484 8.02446 12.6179 8.07423 12.4961C8.12399 12.3743 8.19732 12.2634 8.29 12.17L14.29 6.17001C14.4783 5.9817 14.7337 5.87592 15 5.87592C15.2663 5.87592 15.5217 5.9817 15.71 6.17001C15.8983 6.35831 16.0041 6.61371 16.0041 6.88001C16.0041 7.14631 15.8983 7.4017 15.71 7.59001L10.41 12.88L15.7 18.17C15.8638 18.3613 15.9494 18.6074 15.9397 18.8591C15.93 19.1107 15.8257 19.3495 15.6476 19.5276C15.4695 19.7057 15.2307 19.81 14.9791 19.8197C14.7274 19.8294 14.4813 19.7438 14.29 19.58L8.29 13.58C8.10525 13.3937 8.0011 13.1423 8 12.88Z"
              fill="white"
              fillOpacity="0.6"
            />
          ) : (
            <path
              d="M16 12.88C16.0008 12.7484 15.9755 12.6179 15.9258 12.4961C15.876 12.3743 15.8027 12.2634 15.71 12.17L9.71 6.17001C9.5217 5.9817 9.2663 5.87592 9 5.87592C8.7337 5.87592 8.47831 5.9817 8.29 6.17001C8.1017 6.35831 7.99591 6.61371 7.99591 6.88001C7.99591 7.14631 8.1017 7.4017 8.29 7.59001L13.59 12.88L8.3 18.17C8.13618 18.3613 8.05057 18.6074 8.06029 18.8591C8.07001 19.1107 8.17434 19.3495 8.35244 19.5276C8.53053 19.7057 8.76927 19.81 9.02095 19.8197C9.27262 19.8294 9.5187 19.7438 9.71 19.58L15.71 13.58C15.8947 13.3937 15.9989 13.1423 16 12.88Z"
              fill="white"
              fillOpacity="0.6"
            />
          )}
        </svg>
      </div>
    </button>
  );
};

export default NavigationButton;