import React from "react";

const FooterLinks = ({ links }) => {
  return (
    <ul className="flex flex-col w-full max-md:text-[12px] max-md:leading-4 text-sm leading-5 text-[var(--text-neutral-accent)] gap-2 items-start">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link?.href} className="cursor-pointer hover:text-[var(--text-primary-normal)] transition-colors duration-200">{link.text}</a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
