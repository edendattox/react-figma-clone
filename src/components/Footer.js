import React from "react";
import { Link } from "react-router-dom";
import { ExploreFooter } from "./ExploreFooter";
import { SocialFooter } from "./SocialFooter";
import { UseCasesFooter } from "./UseCasesFooter";
import { ResourcesFooter } from "./ResourcesFooter";
import { CompareFooter } from "./CompareFooter";
// import { figma } from "../icons/Figma";
// import { SvgTwitter as Twitter } from "../icons/Twitter";
// import { SvgYouTube as YouTube } from "../icons/YouTube";
// import { SvgInstagram as Instagram } from "../icons/Instagram";
// import { SvgFacebook as Facebook } from "../icons/Facebook";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-5 justify-between max-w-[1200px] mx-auto gap-[48px] pt-[80px] px-[32px] pb-[112px] mdlg:grid-cols-4 small:grid-cols-2">
      <SocialFooter />
      <UseCasesFooter />
      <ExploreFooter />
      <ResourcesFooter />
      <CompareFooter />
    </footer>
  );
};
