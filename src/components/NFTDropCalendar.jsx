import React from "react";

import NFTDropCalendar from '../assets/promo-sections/nft-drops-calendar.png'
import PromoSectionHeader from "./commons/PromoSectionHeader";

function NFTDropsCalendar() {
  const images = [{
    id: 1,
    src: NFTDropCalendar,
    alt: "NFT Drop Calendar",
  }]
  return (
    <section>
      <div className="flex flex-col gap-2 w-full">
        <PromoSectionHeader title="NFT Drops Calendar" />

        <div className="flex h-[240px] max-md:h-[171px] w-full">
          {images.map((image) => (
            <div key={image.id} className="w-full h-full aspect-video">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-left-top rounded-xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NFTDropsCalendar;
