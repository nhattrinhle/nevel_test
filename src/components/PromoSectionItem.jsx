import React from "react";
import PromoSectionHeader from "./commons/PromoSectionHeader";

function PromoSectionItem({ title, image }) {
  return (
    <article className="flex flex-col h-full w-full justify-between gap-2">
      <PromoSectionHeader title={title} hasNavigation={false} />
      <div className="lg:max-h-[240px] h-full aspect-square w-full relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </article >
  );
}

export default PromoSectionItem;
