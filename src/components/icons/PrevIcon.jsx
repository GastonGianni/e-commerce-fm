import React from "react";

export const PrevIcon = ({ stroke = "#1D2026", ...props }) => {
  return (
    <svg {...props} width="12" height="18" xmlns="http://www.w3.org/2000/svg" stroke={stroke} className="-translate-x-1/4">
      <path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd" />
    </svg>
  );
};
