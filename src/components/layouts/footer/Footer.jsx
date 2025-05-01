"use client";
import React from "react";
import FooterColumn from "./FooterColumn";
import FooterLinks from "./FooterLinks";
import InstallAppButton from "./InstallAppButton";
import { footerLinks } from "../../data/footerLinks";

const Footer = () => {
  return (
    <footer className="border-t border-solid border-t-[color:var(--border-neutral-subdued)] py-10 px-5 xl:px-59 bg-[var(--background-neutral-accent)]">
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:flex md:gap-10 lg:gap-[40px]">
        <div className="md:flex-1">
          <FooterColumn title="About Us">
            <FooterLinks links={footerLinks.about} />
          </FooterColumn>
        </div>

        <div className="md:flex-1">
          <FooterColumn title="Products">
            <FooterLinks links={footerLinks.products} />
          </FooterColumn>
        </div>

        <div className="md:flex-1">
          <FooterColumn title="Resources">
            <FooterLinks links={footerLinks.resources} />
          </FooterColumn>
        </div>

        <div className="md:flex-1 flex flex-col gap-6">
          <FooterColumn title="Contact Us">
            <FooterLinks links={footerLinks.contact} />
          </FooterColumn>
          <div className="w-full flex flex-col">
            <InstallAppButton />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;