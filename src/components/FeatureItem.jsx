import React from "react";
import Badge from "./commons/Badge";

const FeatureItem = ({ icon, title, isNew }) => {
  return (
    <div className="flex flex-col items-center gap-3 max-lg:gap-2 max-lg:w-full h-full max-lg:h-[60px] max-h-[60px] lg:max-h-[74px]">
      <figure className="flex justify-center items-center h-[42px] w-[53px] max-lg:h-auto max-lg:max-h-[28px] max-lg:w-auto relative">
        {isNew && (
          <Badge
            text="NEW"
            className="top-[-20%] left-[40%]"
          />
        )}

        <img
          src={icon}
          alt={title}
          className="object-contain max-lg:max-h-[28px]"
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </figure>
      <h3 className="flex justify-center items-start w-full h-full max-lg:max-w-[53px] text-[10px] lg:text-sm leading-[12px] lg:leading-5 text-center text-[var(--text-neutral-subdued)] uppercase whitespace-normal font-medium">
        {title}
      </h3>
    </div>
  );
};

export default FeatureItem;
