import { useState } from "react";
import { SvgLogo as Logo } from "../icons/Logo.js";
import { SvgArrow as Arrow } from "../icons/Arrow.js";
import { Link } from "react-router-dom";
import { ProductBox } from "./ProductBox.jsx";
import { EnterpriseBox } from "./EnterpriseBox.jsx";

export const Navbar = () => {
  const [product, setProducts] = useState(false);
  const [isOpenProduct, setIsOpenProduct] = useState(false);
  const [enterprise, setEnterprise] = useState(false);
  const [isOpenEnterprise, setIsOpenEnterprise] = useState(false);

  return (
    <nav className="flex px-14 py-7 flex-1 justify-between">
      <Link to="/">
        <div className="cursor-pointer">
          <Logo width="42" height="60" />
        </div>
      </Link>
      <div className="flex gap-x-[30px] items-center cursor-pointer">
        <div
          className="relative flex items-center gap-x-[8px] text-xs font-xl font-abel tracking-wide"
          onMouseEnter={(e) => {
            setProducts(!product);
            setIsOpenProduct(!isOpenProduct);
          }}
          onMouseLeave={(e) => {
            setProducts(!product);
            setIsOpenProduct(!isOpenProduct);
          }}
        >
          Products
          <div className="flex">
            <Arrow height="6" width="8" />
          </div>
          {isOpenProduct && (
            <ProductBox
              product={product}
              setProducts={setProducts}
              isOpenProduct={isOpenProduct}
              setIsOpenProduct={setIsOpenProduct}
            />
          )}
        </div>
        <div
          className="relative flex text-xs gap-x-[8px] font-xl font-abel tracking-wide"
          onMouseEnter={(e) => {
            setEnterprise(!enterprise);
            setIsOpenEnterprise(!isOpenEnterprise);
          }}
          onMouseLeave={(e) => {
            setEnterprise(!enterprise);
            setIsOpenEnterprise(!isOpenEnterprise);
          }}
        >
          Enterprise
          <div className="flex items-center ">
            <Arrow height="6" width="8" />
          </div>
          {isOpenEnterprise && (
            <EnterpriseBox
              enterprise={enterprise}
              setEnterprise={setEnterprise}
              isOpenEnterprise={isOpenEnterprise}
              setIsOpenEnterprise={setIsOpenEnterprise}
            />
          )}
        </div>
        <div className="text-xs font-xl font-abel tracking-wide link link-underline link-underline-black text-black ">
          Pricing
        </div>
        <div className="flex text-xs gap-x-[8px] font-xl font-abel tracking-wide  ">
          Community
          <div className="flex items-center ">
            <Arrow height="6" width="8" />
          </div>
        </div>
        <div className="flex text-xs gap-x-[8px] font-xl font-abel tracking-wide ">
          Company
          <div className="flex items-center ">
            <Arrow height="6" width="8" />
          </div>
        </div>
        <div
          className="text-xs font-xl font-abel tracking-wide  
        link link-underline link-underline-black text-black
         "
        >
          Log in
        </div>
        <div>
          <button
            type="button"
            className="px-[1.6rem] py-[.8rem] text-xs font-bold font-roboto bg-black text-white rounded-[10px] tracking-widest  transition-all duration-200 hover:translate-y-[-.150rem] ease-linear"
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};
