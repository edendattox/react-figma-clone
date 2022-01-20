import React from "react";
import { Link } from "react-router-dom";

export const UseCasesFooter = () => {
  return (
    <div>
      <h6 className="text-[14px] text-black font-bold my-[16px] text-left flex-wrap">
        Use Cases
      </h6>
      <div className="flex flex-col items-start ">
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
        hover:underline underline-offset-1
        small:whitespace-normal
        "
        >
          UI design
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
       hover:underline underline-offset-1 
       small:whitespace-normal "
        >
          UX design
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
       hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Graphic design
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
       hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Wireframming
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
       hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Diagramming
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
       hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Brainstorming
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828]
       hover:underline underline-offset-1
       small:whitespace-normal "
        >
          Templates
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828] hover:underline underline-offset-1 small:whitespace-normal "
        >
          Remote design
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828] hover:underline underline-offset-1 small:whitespace-normal "
        >
          Agencies
        </Link>
        <Link
          to="/"
          className="text-[14px] leading-[1.5] tracking-wider whitespace-nowrap mb-[16px] text-[#282828] hover:underline underline-offset-1 small:whitespace-normal "
        >
          Figma for education
        </Link>
      </div>
    </div>
  );
};
