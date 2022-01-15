import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CompanyBox = ({ company, isOpenCompany, setIsOpenCompany }) => {
  const [newStyle, setNewStyle] = useState(false);

  useLayoutEffect(() => {
    if (isOpenCompany && !company && !newStyle) {
      setIsOpenCompany(!isOpenCompany);
    } else if (!company && (company || newStyle)) {
      setIsOpenCompany(!isOpenCompany);
    }
  }, [company, newStyle, isOpenCompany, setIsOpenCompany]);

  return (
    <div
      className="navbar-company"
      onMouseEnter={() => {
        setNewStyle(!newStyle);
      }}
      onMouseLeave={(e) => {
        setNewStyle(!newStyle);
      }}
    >
      <Link to="/blog">
        <div className="link link-underline link-underline-black text-black font-[12px]">
          Blog
        </div>
      </Link>
      <Link to="/careers">
        <div className="link link-underline link-underline-black text-black font-[12px]">
          Careers
        </div>
      </Link>
      <Link to="/our-story">
        <div className="link link-underline link-underline-black text-black font-[12px]">
          Our story
        </div>
      </Link>
      <Link to="/help-center">
        <div className="link link-underline link-underline-black text-black font-[12px]">
          Help Center
        </div>
      </Link>
    </div>
  );
};
