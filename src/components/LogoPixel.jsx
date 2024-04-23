import Image from "next/image";
import React from "react";

function LogoPixel() {
  // pixelWithImage
  return (
    <div className="relative w-full lg:w-1/2 h-full bg-primary grid grid-rows-3 grid-cols-3 overflow-hidden">

      <div className={"pixelWithImage"}></div>
      <div className={"pixelNormal"}></div>
      <div className={"pixelWithImage"}></div>
      <div className={"pixelNormal"}></div>
      <div className={"pixelWithImage"}></div>
      <div className={"pixelNormal"}></div>
      <div className={"pixelWithImage"}></div>
      <div className={"pixelNormal"}></div>
      <div className={"pixelWithImage"}></div>

    </div>
  );
}

export default LogoPixel;
