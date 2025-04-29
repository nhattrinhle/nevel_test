import React from "react";
import FeatureItem from "./FeatureItem";
import CashBackIcon from '../assets/feature-icons/cash-back.svg';
import RankingIcon from '../assets/feature-icons/ranking.svg';
import VideoIcon from '../assets/feature-icons/video.svg';
import HorseIcon from '../assets/feature-icons/horse.svg';
import NFTsIcon from '../assets/feature-icons/nft.svg';
import RoadMapIcon from '../assets/feature-icons/plane.svg';

const FeaturesBar = () => {
  const features = [
    {
      icon: CashBackIcon,
      title: "free to earn",
    },
    {
      icon: RankingIcon,
      title: "Ranking",
    },
    {
      icon: VideoIcon,
      title: "Video NFT",
    },
    {
      icon: HorseIcon,
      title: "How to buy",
    },
    {
      icon: NFTsIcon,
      title: "New NFTS",
      isNew: true,
    },
    {
      icon: RoadMapIcon,
      title: "Roadmaps",
    },
  ];

  return (
    <section className="flex lg:px-59 bg-[var(--background-neutral-normal)] min-lg:h-[121.88px] h-[92px]">
      <div className="flex max-lg:grid max-lg:grid-cols-6 max-lg:place-items-center justify-between items-center size-full max-lg:py-4">
        {features.map((feature, index) => (
          <FeatureItem key={index} icon={feature.icon} isNew={feature?.isNew} title={feature.title} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesBar;
