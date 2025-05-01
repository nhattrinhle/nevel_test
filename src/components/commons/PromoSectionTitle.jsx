import React from 'react'

const PromoSectionTitle = ({ title }) => {
  return (
    <h2
      className="text-[32px] leading-[48px] max-md:text-[24px] max-md:leading-[32px] w-auto italic font-black text-[var(--text-primary-normal)] uppercase"
      style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}
    >
      {title}
    </h2>
  );
};


export default PromoSectionTitle;