import React from "react";
import PrimaryButton from "../../commons/PrimaryButton";
import SecondaryButton from "../../commons/SecondaryButton";

const AuthButtons = () => {
  return (
    <div className="flex gap-[8px] items-center justify-center italic text-center uppercase" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
      <PrimaryButton className="px-6 p-2 md:px-8 inline-flex items-center justify-center h-[40px] max-md:h-[36px] text-[16px] leading-[20px] font-[900] uppercase">
        SIGN UP
      </PrimaryButton>
      <SecondaryButton className="px-6 p-2 md:px-8 inline-flex items-center justify-center h-[40px] max-md:h-[36px] text-[16px] leading-[20px] font-[900] uppercase">
        LOG IN
      </SecondaryButton>
    </div>
  );
};

export default AuthButtons;