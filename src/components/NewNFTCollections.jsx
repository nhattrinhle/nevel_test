import React from "react";

import PromoSectionHeader from "./commons/PromoSectionHeader";
import Image1 from '../assets/promo-sections/new-nft-collections/image-1.png';
import Image2 from '../assets/promo-sections/new-nft-collections/image-2.png';
import Image3 from '../assets/promo-sections/new-nft-collections/image-3.png';
import Image4 from '../assets/promo-sections/new-nft-collections/image-4.png';
import Image5 from '../assets/promo-sections/new-nft-collections/image-5.png';
import Image6 from '../assets/promo-sections/new-nft-collections/image-6.png';
import Image7 from '../assets/promo-sections/new-nft-collections/image-7.png';

function NewNFTCollections() {
  const nftImages = [
    { id: 1, src: Image1, alt: "NFT Collection Item 1" },
    { id: 2, src: Image2, alt: "NFT Collection Item 2" },
    { id: 3, src: Image3, alt: "NFT Collection Item 3" },
    { id: 4, src: Image4, alt: "NFT Collection Item 4" },
    { id: 5, src: Image5, alt: "NFT Collection Item 5" },
    { id: 6, src: Image6, alt: "NFT Collection Item 6" },
    { id: 7, src: Image7, alt: "NFT Collection Item 7" }
  ];

  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col gap-2 w-full">
        <PromoSectionHeader title="New NFT Collections" />

        <div className="flex gap-4 overflow-hidden max-md:gap-2">
          {nftImages.map((image) => (
            <div key={image.id} className="flex-shrink-0">
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-xl object-cover 
                  w-[180px] h-[245px] 
                  max-md:w-[102px] max-md:h-[140px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewNFTCollections;