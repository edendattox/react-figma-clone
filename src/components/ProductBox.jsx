import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductBox = ({ product, isOpenProduct, setIsOpenProduct }) => {
  const [newStyle, setNewStyle] = useState(false);

  useLayoutEffect(() => {
    if (isOpenProduct && !product && !newStyle) {
      setIsOpenProduct(!isOpenProduct);
    } else if (!product && (product || newStyle)) {
      setIsOpenProduct(!isOpenProduct);
    }
  }, [product, newStyle, isOpenProduct, setIsOpenProduct]);

  return (
    <div
      className="navbar-div"
      onMouseEnter={() => {
        setNewStyle(!newStyle);
      }}
      onMouseLeave={(e) => {
        setNewStyle(!newStyle);
      }}
    >
      <div className="navbar-div-lg link link-underline link-underline-black   gap-y-[8px] ">
        <h3 className="link link-underline link-underline-black font-medium text-xs font-roboto tracking-wider">
          Introducing FigJam
        </h3>
        <p className="text-[12px] text-slate-500">
          An online whiteboard for teams
        </p>
        <img
          src="https://cdn.sanity.io/images/599r6htc/production/e3df60b72519e83ce44f470f020a555f0aea8b4b-992x640.png"
          alt=""
          className="h-[160px] w-[248px] cursor-pointer"
        />
      </div>
      <div className="navbar-div-sm text-[16px] ">
        <Link to="/design">
          <div className="link link-underline link-underline-black text-black font-[12px]">
            Design
          </div>
        </Link>
        <Link to="/prototyping">
          <div className="link link-underline link-underline-black text-black">
            Prototyping
          </div>
        </Link>
        <Link to="/features">
          <div className="link link-underline link-underline-black text-black">
            Design systems
          </div>
        </Link>
        <Link to="/features">
          <div className="link link-underline link-underline-black text-black">
            Downloads
          </div>
        </Link>
      </div>
    </div>
  );
};
