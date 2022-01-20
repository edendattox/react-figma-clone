import React from "react";
import { Link } from "react-router-dom";

export const CompareFooter = () => {
  return (
    <div>
      <h6 className="text-[14px] text-black font-bold my-[16px] text-left">
        Compare
      </h6>
      <div className="flex flex-col items-start">
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
            hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Sketch
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
            hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Adobe XD
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
            hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Invision Studio
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
            hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Framer
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
            hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Design on Windows
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
            hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Miro
        </Link>
      </div>
    </div>
  );
};
