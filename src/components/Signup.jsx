import React from "react";
import { Link } from "react-router-dom";
import { SvgGoogle as Google } from "../icons/Google";

export const Signup = () => {
  return (
    <section className="mx-auto pt-[144px] pb-[80px] w-[422px] max-w-[100%]">
      <h2 className="text-[32px] font-medium leading-[2] text-center py-0 px-[32px] ">
        Try Figma for free.
      </h2>
      <div>
        <div className="max-w-[420px] w-[100%] h-[600px] py-[36px] px-[10px]">
          <div className="min-h-[560px]">
            <form
              action=""
              className="flex flex-col w-[100%] text-[16px] px-[32px]"
            >
              <button className="flex items-center justify-center gap-2 m-auto w-[100%] p-[10px] text-black border-[3.8px] font-medium border-black rounded-[8px] bg-white text-[16px] cursor-pointer">
                {" "}
                <span>
                  <Google />
                </span>
                Continue with Google
              </button>
              <span className="block h-[60px] w-[100%] leading-[60px] text-[16px] text-[#666] ">
                or
              </span>
              <input
                type="text"
                name="email"
                placeholder="Email"
                autoCapitalize="off"
                autoCorrect="off"
                className="leading-normal pl-[12px] text-[16px] border-[3.8px] border-black rounded-[5px] w-[100%] select-auto px-[6px] py-[10px] cursor-pointer "
              />
              <div className="h-[16px]"></div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoCapitalize="off"
                autoCorrect="off"
                className="leading-normal pl-[12px] text-[16px] border-[3.8px] border-black rounded-[5px] w-[100%] select-auto px-[6px] py-[10px] cursor-pointer"
              />
              <div className="h-[16px]"></div>
              <button className="flex items-center h-[48px] justify-center gap-2 m-auto w-[100%] p-[10px] text-white font-bold rounded-[8px] bg-black text-[18px] cursor-pointer tracking-wide">
                Create account
              </button>
              <div className="h-[16px]"></div>
              <div>
                <div className="flex items-center justify-center">
                  <Link
                    to="/account"
                    className="text-[#5551ff] font-normal hover:underline underline-offset-4 cursor-pointer"
                  >
                    Sign up with SAML
                  </Link>
                </div>
                <div className="h-[16px]"></div>
                <div>
                  <div className="text-[16px] text-[#0009]">
                    Already have an account?{" "}
                    <Link
                      to="/account"
                      className="text-[#5551ff] hover:underline underline-offset-4 cursor-pointer"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
              <div className="h-[16px]"></div>
              <div>
                <div className="text-[12px] text-[#0009]">
                  This site is protected by reCAPTCHA and the Google
                  <Link
                    to="https://policies.google.com/privacy"
                    className="text-[#5551ff] hover:underline underline-offset-4 cursor-pointer"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="https://policies.google.com/privacy"
                    className="text-[#5551ff] hover:underline underline-offset-4 cursor-pointer"
                  >
                    Terms of Service
                  </Link>{" "}
                  apply.{" "}
                </div>
                <span className="w-[100%] text-[12px] text-[#0009]">
                  By clicking "Create account", I agree to Figma's TOS and
                  <Link
                    to="https://policies.google.com/privacy"
                    className="text-[#5551ff] hover:underline underline-offset-4 cursor-pointer"
                  >
                    Privacy Policy
                  </Link>{" "}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
