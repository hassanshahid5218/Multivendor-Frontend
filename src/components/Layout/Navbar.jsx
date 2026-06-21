

import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";

const Navbar = ({ active }) => {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {navItems &&
        navItems.map((item, index) => (
          <div key={index} className="relative px-3">

            <Link
              to={item.url}
              className={`text-[15px] font-[500] transition-colors duration-200 ${
                active === index + 1
                  ? "text-[#ffffff]"
                  : "text-[#e2e2e2]"
              } hover:text-white`}
            >
              {item.title}
            </Link>

            {/* Active underline */}
            {active === index + 1 && (
              <div className="absolute left-0 bottom-[-8px] w-full h-[2px] bg-white rounded-full" />
            )}

          </div>
        ))}
    </div>
  );
};

export default Navbar;