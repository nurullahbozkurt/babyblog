import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";

export default function DropdownNav({ items }) {
  const [select, setSelect] = useState("");
  return (
    <div className="z-10">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex items-center justify-center">
            Baby
            <MdKeyboardArrowDown
              className="w-5 h-5 ml-2 -mr-1 text-violet-400 hover:text-violet-200"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <div className="w-full relative">
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              as="div"
              className="absolute top-5  left-[-313px] flex items-center justify-center p-1  origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-non"
            >
              <div className="flex items-start justify-center h-full w-full">
                <div className="text-gray-800 flex bg-newGray/30 flex-col text-sm ">
                  {items?.map((item, index) => (
                    <div
                      key={index}
                      className={
                        select === item.title
                          ? `w-full flex items-center justify-end py-2 pl-16 text-pink-500 border-y border-l bg-white  hover:text-pink-300 shadow-sm`
                          : `w-full flex items-center justify-end py-2 pl-16 border-r  hover:bg-white hover:text-pink-300 hover:shadow-sm`
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

                <div className="w-full  flex items-center justify-center  mt-2 px-3  gap-2">
                  <div className="flex flex-col items-center justify-center hover:text-pink-500 cursor-pointer">
                    <div className="relative  w-56 h-40">
                      <Image
                        className="rounded"
                        alt="Mountains"
                        src="/baby.jpeg"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-full ">
                      <p className="w-full mt-1 text-sm text-center">
                        PERFECT ROOM FOR LEARNING
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center hover:text-pink-500 cursor-pointer">
                    <div className="relative w-56 h-40">
                      <Image
                        className="rounded"
                        alt="Mountains"
                        src="/baby.jpeg"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-full ">
                      <p className="w-full mt-1 text-sm text-center">
                        PERFECT ROOM FOR LEARNING
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center hover:text-pink-500 cursor-pointer">
                    <div className="relative w-56 h-40">
                      <Image
                        className="rounded"
                        alt="Mountains"
                        src="/baby.jpeg"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-full ">
                      <p className="w-full mt-1 text-sm text-center">
                        PERFECT ROOM FOR LEARNING
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </div>
      </Menu>
    </div>
  );
}

// import React from "react";
// import { useState } from "react";

// const DropdownNav = ({ items }) => {
//   const [select, setSelect] = useState("");

//   return (
//     <>
//       <div className="w-1/5 text-gray-800 flex flex-col py-3 text-sm bg-newGray">
//         {items?.map((item, index) => (
// <div
//   key={index}
//   className={
//     select === item.title
//       ? `w-full flex items-center justify-end py-2  bg-white text-pink-300 border-y  hover:text-pink-300 shadow-sm`
//       : `w-full flex items-center justify-end py-2 border-r hover:border-r-0 hover:bg-white hover:text-pink-300 hover:shadow-sm`
//   }
// >
//             <button
//               onClick={(e) => setSelect(e.target.value)}
//               className="w-full flex items-center justify-end px-2"
//               value={item.title}
//             >
//               {item.title}
//             </button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default DropdownNav;
