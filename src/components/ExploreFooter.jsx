import React from "react";
import { Link } from "react-router-dom";

export const ExploreFooter = () => {
  return (
    <div>
      <h6 className="text-[14px] text-black font-bold my-[16px] text-left">
        Explore
      </h6>
      <div className="flex flex-col items-start">
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Design features
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Prototyping features
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Design systems features
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Collaboration features
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Design process
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
       small:whitespace-normal "
        >
          FigJam
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Pricing
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Figma Organization
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Customers
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Security
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Integrations
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
