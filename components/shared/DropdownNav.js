import React from "react";
import { useState } from "react";

const DropdownNav = ({ items }) => {
  const [select, setSelect] = useState("");

  return (
    <>
      <div className="w-1/5 text-gray-800 flex flex-col py-3 text-sm bg-newGray">
        {items?.map((item, index) => (
          <div
            key={index}
            className={
              select === item.title
                ? `w-full flex items-center justify-end py-2  bg-white text-pink-300 border-y  hover:text-pink-300 shadow-sm`
                : `w-full flex items-center justify-end py-2 border-r hover:border-r-0 hover:bg-white hover:text-pink-300 hover:shadow-sm`
            }
          >
            <button
              onClick={(e) => setSelect(e.target.value)}
              className="w-full flex items-center justify-end px-2"
              value={item.title}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default DropdownNav;
