import React from "react";

export default function NavLinkHeader({ linkName }) {
  return (
    <a href="#" className="group relative py-1 md:py-8">
      <span className="text-gray-500 group-hover:text-black">{linkName}</span>
      <span className="absolute bottom-0 hidden h-1 w-full scale-x-0 transition-all duration-300 group-hover:scale-x-100 group-hover:bg-orange-personal md:block"></span>
    </a>
  );
}
