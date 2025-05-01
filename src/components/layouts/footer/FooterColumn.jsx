import React from "react";

const FooterColumn = ({ title, children }) => {
  return (
    <section className="w-full flex flex-col gap-3 items-start">
      <h2 className="text-lg italic font-black leading-7 text-[var(--text-neutral-subdued)] uppercase" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
        {title}
      </h2>
      <div className="w-full text-sm leading-5 text-[var(--text-neutral-accent)]">
        {children}
      </div>
    </section>
  );
};

export default FooterColumn;
