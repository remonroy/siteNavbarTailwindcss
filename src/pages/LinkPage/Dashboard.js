import React, { useState } from "react";
import { TabsLinks } from "../../constants";

function Dashboard() {
  const [active, setActive] = useState(1);
  console.log("Active= ", active);
  const handleClick = (index) => setActive(index);
  const checkActive = (index, className) => (active === index ? className : "");

  return (
    <div className="m-3 text-gray-900 font-poppins font-semibold w-full ">
      <div className="w-1/2 mx-auto">
        <div className="flex items-center justify-between  bg-gray-900 text-white p-3 rounded-md px-2">
          {TabsLinks?.map((item) => (
            <button
              key={item?.id}
              onClick={() => handleClick(item?.id)}
              className={`${checkActive(
                item?.id,
                "bg-white text-gray-900 px-2 rounded-md"
              )} px-2 `}
            >
              {item?.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col bg-stone-400 drop-shadow-lg rounded-md">
          {TabsLinks?.map((item) => (
            <div
              className={`${item?.id === active ? "block" : "hidden"} p-3 `}
              key={item?.id}
            >
              <img className="w-full h-1/5" src={item.img} alt={item.img} />
              {item?.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
