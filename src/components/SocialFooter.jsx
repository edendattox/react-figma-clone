import React from "react";
import { Link } from "react-router-dom";
import { figma } from "../icons/Figma";
import { SvgTwitter as Twitter } from "../icons/Twitter";
import { SvgYouTube as YouTube } from "../icons/YouTube";
import { SvgInstagram as Instagram } from "../icons/Instagram";
import { SvgFacebook as Facebook } from "../icons/Facebook";

export const SocialFooter = () => {
  return (
    <div className="social-footer">
      <Link to="/">
        <img src={figma} alt="#" className="mb-[24px] h-9" />
      </Link>
      <div className="flex flex-col items-start mdlg:flex-row gap-3 ">
        <Link
          to="/"
          className="flex items-center text-[14px]  text-[rgb(40, 40, 40)] mb-[16px] whitespace-nowrap cursor-pointer leading-[0.02em] mdl:ml-[10px]"
        >
          <Twitter />
          <span className="ml-[9px] mdl:hidden">Twitter</span>
        </Link>
        <Link
          to="/"
          className="flex items-center text-[14px]  text-[rgb(40, 40, 40)] mb-[16px] whitespace-nowrap cursor-pointer leading-[0.02em] mdl:ml-[10px]"
        >
          <YouTube />
          <span className="ml-[9px] mdl:hidden">Youtube</span>
        </Link>
        <Link
          to="/"
          className="flex items-center text-[14px]  text-[rgb(40, 40, 40)] mb-[16px] whitespace-nowrap cursor-pointer leading-[0.02em] mdl:ml-[10px]"
        >
          <Instagram />
          <span className="ml-[9px] mdl:hidden">Instagram</span>
        </Link>
        <Link
          to="/"
          className="flex items-center text-[14px] text-[rgb(40, 40, 40)] mb-[16px] whitespace-nowrap cursor-pointer leading-[0.02em] mdl:ml-[10px]"
        >
          <Facebook />
          <span className="ml-[9px] mdl:hidden">Facebook</span>
        </Link>
        <Link
          to="/"
          className="flex items-center text-[14px]  text-[rgb(40, 40, 40)] mb-[16px] whitespace-nowrap cursor-pointer leading-[0.02em] mdlg:hidden"
        >
          <span className="ml-[9px]">Manage Cookies</span>
        </Link>
      </div>
    </div>
  );
};
