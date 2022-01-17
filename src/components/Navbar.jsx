import { useState } from "react";
import { SvgLogo as Logo } from "../icons/Logo.js";
import { SvgArrow as Arrow } from "../icons/Arrow.js";
import { SvgMenu as Menu } from "../icons/Menu.js";
import { SvgCross as Cross } from "../icons/Cross.js";
import { Link } from "react-router-dom";
import { ProductBox } from "./ProductBox.jsx";
import { EnterpriseBox } from "./EnterpriseBox.jsx";
import { CommunityBox } from "./CommunityBox.jsx";
import { CompanyBox } from "./CompanyBox.jsx";
import { useMediaQuery } from "react-responsive";

export const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  // product
  const [product, setProducts] = useState(false);
  const [isOpenProduct, setIsOpenProduct] = useState(false);
  // enterprise
  const [enterprise, setEnterprise] = useState(false);
  const [isOpenEnterprise, setIsOpenEnterprise] = useState(false);
  // community
  const [community, setCommunity] = useState(false);
  const [isOpenCommunity, setIsOpenCommunity] = useState(false);
  // company
  const [company, setCompany] = useState(false);
  const [isOpenCompany, setIsOpenCompany] = useState(false);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 980px" });

  return (
    <nav className="flex px-12 py-6 flex-1 justify-between">
      <Link to="/">
        <div className="cursor-pointer">
          <Logo width="42" height="60" />
        </div>
      </Link>

      {!isTabletOrMobile && (
        <div className="flex gap-x-[20px] items-center cursor-pointer">
          <div
            className="relative flex p-2 items-center gap-x-[8px] text-xs font-xl font-abel tracking-wide"
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
            className="relative flex p-2 text-xs gap-x-[8px] font-xl font-abel tracking-wide"
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
          <div className="text-xs font-xl p-2 font-abel tracking-wide link link-underline link-underline-black text-black ">
            Pricing
          </div>
          <div
            className="relative flex text-xs p-2 gap-x-[8px] font-xl font-abel tracking-wide"
            onMouseEnter={(e) => {
              setCommunity(!community);
              setIsOpenCommunity(!isOpenCommunity);
            }}
            onMouseLeave={(e) => {
              setCommunity(!community);
              setIsOpenCommunity(!isOpenCommunity);
            }}
          >
            Community
            <div className="flex items-center">
              <Arrow height="6" width="8" />
            </div>
            {isOpenCommunity && (
              <CommunityBox
                community={community}
                setCommunity={setCommunity}
                isOpenCommunity={isOpenCommunity}
                setIsOpenCommunity={setIsOpenCommunity}
              />
            )}
          </div>
          <div
            className="relative flex text-xs  gap-x-[8px] font-xl font-abel tracking-wide"
            onMouseEnter={(e) => {
              setCompany(!company);
              setIsOpenCompany(!isOpenCompany);
            }}
            onMouseLeave={(e) => {
              setCompany(!company);
              setIsOpenCompany(!isOpenCompany);
            }}
          >
            Company
            <div className="flex items-center ">
              <Arrow height="6" width="8" />
            </div>
            {isOpenCompany && (
              <CompanyBox
                company={company}
                setCompany={setCompany}
                isOpenCompany={isOpenCompany}
                setIsOpenCompany={setIsOpenCompany}
              />
            )}
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
      )}
      {isTabletOrMobile && (
        <div className="flex items-center font-bold gap-x-5 ">
          <button
            type="button"
            className="px-[1.6rem] py-[.8rem] text-xs font-bold font-roboto bg-black text-white rounded-[10px] tracking-widest  transition-all duration-200 hover:translate-y-[-.150rem] ease-linear"
          >
            Sign up
          </button>
          <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <Cross /> : <Menu />}
          </div>
        </div>
      )}
    </nav>
  );
};
