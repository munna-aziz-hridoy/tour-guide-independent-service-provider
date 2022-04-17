import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <li className="menu-item cursor-pointer relative py-2 px-6">
      <Link
        to={to}
        {...props}
        className={`${
          match ? "text-[#ffcc13]" : "text-[#00095e] "
        } font-bold text-xl capitalize`}
      >
        {children}
      </Link>
      <div className="bg-[#ffcc13] absolute  bottom-0 left-0 h-1 rounded-full menu-item-border"></div>
    </li>
  );
};

export default CustomLink;
