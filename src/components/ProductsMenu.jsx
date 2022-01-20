import React from "react";
import { Link } from "react-router-dom";

export const ProductsMenu = () => {
  return (
    <div className="flex text-xs flex-col item-start z-10 whitespace-nowrap relative t-[20px] border-0 mb-0 p-0">
      <Link to="/" className="mb-[6px] py-[6px] px-[12px]">
        <span>
          <div className="relative">FigJam</div>
        </span>
      </Link>
      <Link to="/" className="mb-[6px] py-[6px] px-[12px]">
        <span>
          <div className="relative">Design</div>
        </span>
      </Link>
      <Link to="/" className="mb-[6px] py-[6px] px-[12px]">
        <span>
          <div className="relative">Prototyping</div>
        </span>
      </Link>
      <Link to="/" className="mb-[6px] py-[6px] px-[12px]">
        <span>
          <div className="relative">Design systems</div>
        </span>
      </Link>
      <Link to="/" className="mb-[6px] py-[6px] px-[12px]">
        <span>
          <div className="relative">Downloads</div>
        </span>
      </Link>
    </div>
  );
};
