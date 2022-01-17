import React from "react";
import { Link } from "react-router-dom";
import { SvgCross as Cross } from "../icons/Cross";
import { SvgLogo as Logo } from "../icons/Logo";
import { SvgArrow as Arrow } from "../icons/Arrow.js";

export const SideBar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="fixed py-[24px] px-[32px] z-50 overflow-y-auto w-screen bg-white h-screen">
      <div className="flex flex-1 justify-between items-center">
        <Link to="/">
          <div className="cursor-pointer">
            <Logo width="42" height="60" />
          </div>
        </Link>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Cross />
        </div>
      </div>
      <nav className="flex flex-col items-start mt-32px text-[20px] mt-[20px]">
        <div className="relative flex">
          <div
            className="flex text-xs p-2 gap-x-[8px] font-xl font-abel tracking-wide 
            mt-[0px] mr-[0px] mb-[6px] ml-[-10px]"
          >
            Products
            <div className="flex items-center">
              <Arrow height="6" width="8" />
            </div>
          </div>
        </div>
        <div className="relative flex">
          <div
            className="flex text-xs p-2 gap-x-[8px] font-xl font-abel tracking-wide 
            mt-[0px] mr-[0px] mb-[6px] ml-[-10px]"
          >
            Enterprise
            <div className="flex items-center">
              <Arrow height="6" width="8" />
            </div>
          </div>
        </div>
        <div
          className="flex items-start text-xs font-xl font-abel tracking-wide  
        link link-underline link-underline-black text-black py-[6px]"
        >
          Pricing
        </div>
        <div className="relative flex">
          <div
            className="flex  text-xs p-2 gap-x-[8px] font-xl font-abel tracking-wide 
            mt-[0px] mr-[0px] mb-[6px] ml-[-10px]"
          >
            Community
            <div className="flex items-center">
              <Arrow height="6" width="8" />
            </div>
          </div>
        </div>
        <div className="relative flex">
          <div
            className="flex text-xs p-2 gap-x-[8px] font-xl font-abel tracking-wide 
            mt-[0px] mr-[0px] mb-[6px] ml-[-10px]"
          >
            Company
            <div className="flex items-center">
              <Arrow height="6" width="8" />
            </div>
          </div>
        </div>
        <div
          className="text-xs font-xl font-abel tracking-wide  
        link link-underline link-underline-black text-black py-[6px] mb-[6px]"
        >
          Log in
        </div>
        <div className="flex items-center font-bold gap-x-5  pt-[12px]">
          <button
            type="button"
            className="px-[1.6rem] py-[.8rem] text-xs font-bold font-roboto bg-black text-white rounded-[10px] tracking-widest  transition-all duration-200 hover:translate-y-[-.150rem] ease-linear"
          >
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
};
