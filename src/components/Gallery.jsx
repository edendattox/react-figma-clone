import React from "react";
import { Link } from "react-router-dom";
import { data } from "../lib/data";

export const Gallery = () => {
  const DataGallery = data.map((item) => {
    const title = item.name.toLowerCase().replace(" ", "-");
    return (
      <Link to={`https://www.figma.com/templates/${title}`} key={item.id}>
        <div className="flex flex-col gap-y-[20px] text-left">
          <div className=" mb-[11px]">
            <img src={item.img} alt="#" />
          </div>
          <div className="leading-[0.01em] mb-[15px] text-sm font-medium font-roboto">
            {item.name}
          </div>
          <div>
            <p className="mb-[15px] text-xs font-xl font-abel tracking-wide">
              {item.summary}
            </p>
            <p>
              <span className="text-[#5551FF] hover:underline underline-offset-4 font-medium">
                {item.link}
              </span>
            </p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <section className="pt-[70px] pb-[70px] bg-white">
      <div className="max-w-[1150px] ml-auto mr-auto pl-[2rem] pr-[2rem]">
        <div className="grid grid-cols-3 gap-y-[72px] gap-x-[32px] justify-center mt-[42px] mr-auto ml-auto mb-[0px] mdl:grid-cols-1 mdl:max-w-[360px]">
          {DataGallery}
        </div>
      </div>
    </section>
  );
};
