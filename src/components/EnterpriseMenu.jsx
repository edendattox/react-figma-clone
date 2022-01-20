import React from "react";
import { Link } from "react-router-dom";

export const EnterpriseMenu = () => {
  return (
    <div className="flex text-xs flex-col item-start z-10 whitespace-nowrap relative t-[20px] border-0 mb-0 p-0">
      <Link to="/" className="mb-[6px] py-[6px] px-[12px]">
        <span>
          <div className="relative">Overview</div>
        </span>
      </Link>
      <Link to="/" className="mb-[6px] py-[6px] px-[12px]">
        <span>
          <div className="relative">Customers</div>
        </span>
      </Link>
      <Link to="/" className="mb-[6px] py-[6px] px-[12px]">
        <span>
          <div className="relative">Contact Sales</div>
        </span>
      </Link>
    </div>
  );
};
