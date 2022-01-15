import React from "react";

export const Header = () => {
  return (
    <section className="ml-auto mr-auto max-w-[800px]">
      <div className=" text-center px-[32px] ">
        <h1 className="text-[64px] leading-1 font-roboto font-bold font-tight mb-[20px]">
          Figma Templates
        </h1>
        <div>
          <p className="text-tiny font-[450]">
            Beautifully designed, ready to use templates to save you time and
            accelerate your workflow.
          </p>
        </div>
      </div>
    </section>
  );
};
