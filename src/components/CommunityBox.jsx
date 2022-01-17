import React, { useLayoutEffect, useState } from "react";
import { SvgTemplate as Template } from "../icons/Template";
import { SvgPlugins as Plugin } from "../icons/Plugins";
import { Link } from "react-router-dom";

export const CommunityBox = ({
  community,
  isOpenCommunity,
  setIsOpenCommunity,
}) => {
  const [newStyle, setNewStyle] = useState(false);

  useLayoutEffect(() => {
    if (isOpenCommunity && !community && !newStyle) {
      setIsOpenCommunity(!isOpenCommunity);
    } else if (!community && (community || newStyle)) {
      setIsOpenCommunity(!isOpenCommunity);
    }
  }, [community, newStyle, isOpenCommunity, setIsOpenCommunity]);

  return (
    <div
      className="navbar-com"
      onMouseEnter={() => {
        setNewStyle(!newStyle);
      }}
      onMouseLeave={(e) => {
        setNewStyle(!newStyle);
      }}
    >
      <div className="flex flex-col text-left w-[250px] gap-y-[.6rem] mt-5 ml-4">
        <h3 className="link link-underline link-underline-black font-medium text-xs  font-roboto tracking-wider">
          Files and templates
        </h3>
        <p className="text-[12px] text-slate-500">
          Free expertly crafted files you can duplicate, remix, and use
        </p>
        <Template />
      </div>
      <div className="flex flex-col text-left w-[250px] gap-y-[.6rem] mt-5">
        <h3 className="link link-underline link-underline-black font-medium text-xs  font-roboto tracking-wider">
          Plugins and widgets
        </h3>
        <p className="text-[12px] text-slate-500">
          Extend what's possible and automate work
        </p>
        <Plugin />
      </div>
      <div className="flex flex-col border-[3px] p-5 text-left gap-y-4 h-[276px] border-black border-r-0 border-t-0 border-b-0 ">
        <Link to="/events-livestreams">
          <div className="link link-underline link-underline-black">
            Events and livestreams
          </div>
        </Link>
        <Link to="/best-practices">
          <div className="link link-underline link-underline-black">
            Best practices
          </div>
        </Link>
        <Link to="/education-program">
          <div className="link link-underline link-underline-black">
            Education program
          </div>
        </Link>
        <Link to="/user-groups">
          <div className="link link-underline link-underline-black">
            User groups
          </div>
        </Link>
      </div>
    </div>
  );
};
