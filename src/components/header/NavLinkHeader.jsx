import React from "react";
import { Link } from "react-router-dom";

export default function NavLinkHeader({ linkName, path }) {
  return (
    <Link to={path} className="group relative py-1 md:py-8">
      <span className=" text-gray-500 group-hover:text-black">{linkName}</span>
      <span className="absolute bottom-0 hidden h-1 w-full scale-x-0 rounded-lg duration-300 group-hover:scale-x-100 group-hover:bg-neutral-500 md:block"></span>
    </Link>
  );
}
