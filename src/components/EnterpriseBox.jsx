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
        <a
          href="/overview"
          className="link link-underline link-underline-black text-black font-[12px]"
        >
          Overview
        </a>
      </Link>
      <Link to="customers">
        <a
          href="/customers"
          className="link link-underline link-underline-black text-black font-[12px]"
        >
          Customers
        </a>
      </Link>
      <Link to="contact-sales">
        <a
          href="/overview"
          className="link link-underline link-underline-black text-black font-[12px]"
        >
          Contact Sales
        </a>
      </Link>
    </div>
  );
};
