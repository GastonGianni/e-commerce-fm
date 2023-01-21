import React from "react";

export const NextIcon = ({ stroke = "#1D2026", ...props }) => {
  return (
    <svg {...props} width="13" height="18" xmlns="http://www.w3.org/2000/svg" stroke={stroke}>
      <path d="m2 1 8 8-8 8" strokeWidth="3" fillRule="evenodd" fill="none" />
    </svg>
  );
};
