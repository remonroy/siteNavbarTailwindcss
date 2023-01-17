import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { NavLinks } from "../../constants";

function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } text-gray-100 px-4 duration-500`}
      >
        <div className="py-3 flex justify-end ">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {NavLinks?.map((item, i) => (
            <Link
              key={i}
              to={item?.link}
              className={`${
                item.margin && "mt-5"
              } group flex items-center gap-3.5 font-medium text-sm p-2 hover:bg-gray-700 rounded-md`}
            >
              {/* {React.cloneElement(item?.icon, { size: "20" })} */}
              <div>{React.cloneElement(item?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                } whitespace-pre duration-500`}
              >
                {item?.name}
              </h2>
              <h2
                className={`bg-white absolute left-48 whitespace-pre font-semibold text-gray-900 rounded-md drop-shadow-lg w-0 ${
                  open && "hidden"
                } group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit overflow-hidden`}
              >
                {item?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default SiteNavbar;
