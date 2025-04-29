import React from "react";
import PromoSectionHeader from "./commons/PromoSectionHeader";

function PromoSectionItem({ title, image }) {
  return (
    <article className="flex flex-col h-full w-full justify-between gap-2">
      <PromoSectionHeader title={title} hasNavigation={false} />
      <div className="lg:max-h-[240px] h-full lg:aspect-square">
        <img
          src={image}
          alt={title}
          className="h-full lg:h-full object-cover rounded-xl"
        />
      </div>
    </article >
  );
}

export default PromoSectionItem;
