import React from "react";

import NavigationButton from "./NavigationButton";
import PromoSectionTitle from './PromoSectionTitle';

const PromoSectionHeader = ({ title, onNext, onPrev, hasNavigation = true }) => {
  return (
    <header className="flex justify-between items-center py-0 mx-auto w-full max-w-non max-sm:max-w-screen-sm">
      <PromoSectionTitle title={title} />
      {hasNavigation && (
        <nav className="flex gap-2 items-center">
          <NavigationButton direction="left" onClick={onPrev} />
          <NavigationButton direction="right" onClick={onNext} />
        </nav>
      )}
    </header>
  )
}

export default PromoSectionHeader;  