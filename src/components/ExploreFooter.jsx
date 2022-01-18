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
        "
        >
          Design features
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
        "
        >
          Prototyping features
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
        "
        >
          Design systems features
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
        "
        >
          Collaboration features
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
        "
        >
          Design process
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
        "
        >
          FigJam
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
        "
        >
          Pricing
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
        "
        >
          Figma Organization
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
        "
        >
          Customers
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
        "
        >
          Security
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
        "
        >
          Integrations
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
        "
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
