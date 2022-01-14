import { SvgLogo as Logo } from "../icons/Logo.js";
import { SvgArrow as Arrow } from "../icons/Arrow.js";

export const Navbar = () => {
  return (
    <nav className="flex px-14 py-7 flex-1  justify-between">
      <div className="flex">
        <Logo width="42" height="60" />
      </div>
      <div className="flex gap-x-[30px] items-center ">
        <div className="flex items-center gap-x-[8px] text-xs font-xl font-abel tracking-wide">
          Products
          <div className="flex items-center ">
            <Arrow height="6" width="8" />
          </div>
        </div>
        <div className="flex text-xs gap-x-[8px] font-xl font-abel tracking-wide">
          Enterprise
          <div className="flex items-center ">
            <Arrow height="6" width="8" />
          </div>
        </div>
        <div className="text-xs font-xl font-abel tracking-wide">Pricing</div>
        <div className="flex text-xs gap-x-[8px] font-xl font-abel tracking-wide">
          Community
          <div className="flex items-center ">
            <Arrow height="6" width="8" />
          </div>
        </div>
        <div className="flex text-xs gap-x-[8px] font-xl font-abel tracking-wide">
          Company
          <div className="flex items-center ">
            <Arrow height="6" width="8" />
          </div>
        </div>
        <div className="text-xs font-xl font-abel tracking-wide">Log in</div>
        <div>
          <button
            type="button"
            className="px-[1.8rem] py-[.8rem] text-xs font-bold font-roboto bg-black text-white rounded-[10px] tracking-widest"
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};
