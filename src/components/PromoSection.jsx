import React from "react";

import NewNFTCollections from "./NewNFTCollections.jsx";
import NFTDropsCalendar from "./NFTDropCalendar.jsx";
import HotNFTImage from "../assets/promo-sections/hot-nft.png";
import PromotionImage from "../assets/promo-sections/promotion.png";
import PromoSectionItem from "./PromoSectionItem.jsx";



function PromoSection() {
  return (
    <section className="xl:px-59 py-20 max-xl:px-5 max-lg:py-10 flex flex-col bg-[var(--background-neutral-accent)]">
      <div className="flex flex-col gap-20 max-lg:gap-10 w-full">
        <NewNFTCollections />

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 w-full">
          <div className="w-full lg:basis-[54%] min-w-0">
            <NFTDropsCalendar />
          </div>

          <div className="flex flex-row lg:basis-[46%] justify-between gap-6 max-lg:gap-4 w-full min-w-0">
            <div className="h-full w-full min-w-0">
              <PromoSectionItem title="Hot NFT" image={HotNFTImage} />
            </div>
            <div className="h-full w-full min-w-0">
              <PromoSectionItem title="Promotion" image={PromotionImage} />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default PromoSection;
