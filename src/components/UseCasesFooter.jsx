import React from "react";
import { Link } from "react-router-dom";

export const UseCasesFooter = () => {
  return (
    <div>
      <h6 className="text-[14px] text-black font-bold my-[16px] text-left">
        Use Cases
      </h6>
      <div className="flex flex-col items-start">
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
        "
        >
          UI design
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
       hover:underline underline-offset-1"
        >
          UX design
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
       hover:underline underline-offset-1"
        >
          Graphic design
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
       hover:underline underline-offset-1"
        >
          Wireframming
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
       hover:underline underline-offset-1"
        >
          Diagramming
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
       hover:underline underline-offset-1"
        >
          Brainstorming
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
       hover:underline underline-offset-1"
        >
          Templates
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
       hover:underline underline-offset-1"
        >
          Remote design
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
       hover:underline underline-offset-1"
        >
          Agencies
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
       hover:underline underline-offset-1"
        >
          Figma for education
        </Link>
      </div>
    </div>
  );
};
