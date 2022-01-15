import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

export const EnterpriseBox = ({
  enterprise,
  isOpenEnterprise,
  setIsOpenEnterprise,
}) => {
  const [newStyle, setNewStyle] = useState(false);

  useLayoutEffect(() => {
    if (isOpenEnterprise && !enterprise && !newStyle) {
      setIsOpenEnterprise(!isOpenEnterprise);
    } else if (!enterprise && (enterprise || newStyle)) {
      setIsOpenEnterprise(!isOpenEnterprise);
    }
  }, [enterprise, newStyle, isOpenEnterprise, setIsOpenEnterprise]);

  return (
    <div
      className="navbar-ent"
      onMouseEnter={() => {
        setNewStyle(!newStyle);
      }}
      onMouseLeave={(e) => {
        setNewStyle(!newStyle);
      }}
    >
      <Link to="/overview">
        <div className="link link-underline link-underline-black text-black font-[12px]">
          Overview
        </div>
      </Link>
      <Link to="customers">
        <div className="link link-underline link-underline-black text-black font-[12px]">
          Customers
        </div>
      </Link>
      <Link to="contact-sales">
        <div className="link link-underline link-underline-black text-black font-[12px]">
          Contact Sales
        </div>
      </Link>
    </div>
  );
};
