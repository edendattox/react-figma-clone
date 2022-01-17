import * as React from "react";

export const SvgCross = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="currentColor" d="M4 18L18 4l2 2L6 20z"></path>
    <path fill="currentColor" d="M6 4l14 14-2 2L4 6z"></path>
  </svg>
);
