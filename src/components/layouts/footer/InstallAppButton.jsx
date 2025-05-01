import React from "react";

import InstallButton from '../../../assets/install-button.png'

function InstallAppButton() {
  return (
    <div className="relative group w-[151px]">
      <button
        className="flex justify-center items-center h-11 rounded-lg w-full cursor-pointer"
        aria-label="Install App"
      >
        <img src={InstallButton} className="w-full h-full object-cover" alt="App Icon" />
      </button>
      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Click to download App
      </div>
    </div>
  );
}


export default InstallAppButton;
