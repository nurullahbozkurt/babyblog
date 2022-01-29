import Link from "next/link";
import MyDropDown from "./Dropdown";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropdownNav from "./DropdownNav";
import { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import useClickTracking from "./useClickTracking";

const Header = () => {
  const wrapperRef = useRef(null);
  const [isShowing, setIsShowing] = useState(false);
  useClickTracking(wrapperRef, setIsShowing);

  const items = [
    {
      title: "ALL",
    },
    {
      title: "BIRTH",
    },
    {
      title: "LEARNING",
    },

    {
      title: "LIFE",
    },
    {
      title: "MOMENTS",
    },
    {
      title: "PREGNANCY",
    },
  ];
  return (
    <>
      <div>
        <div className="flex items-center justify-center space-x-10 py-5 border-b shadow-md">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div
            ref={wrapperRef}
            onClick={() => setIsShowing((isShowing) => !isShowing)}
            className="flex items-center justify-center space-x-2 cursor-pointer"
          >
            <button>Baby</button>
            <MdKeyboardArrowDown
              className="w-5 h-5 ml-2 -mr-1 text-violet-440 hover:text-violet-200"
              aria-hidden="true"
            />
          </div>
          <div>
            <Link href="/">Fitness</Link>
          </div>
          <div>
            <Link href="/">Food</Link>
          </div>
          <div>
            <MyDropDown />
          </div>
          <div>
            <Link href="/">About</Link>
          </div>
          <div>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className=" w-full flex items-center justify-center">
          <div className="border flex items-center justify-center rounded-sm max-w-[1024px] w-full">
            <Transition
              className="w-full flex shadow-md border"
              show={isShowing}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <DropdownNav items={items} />

              <div className="w-4/5 flex ">
                <div className="w-full flex items-start justify-between pt-5 px-3  gap-2">
                  <div className="flex flex-col items-center justify-center hover:text-pink-500 cursor-pointer">
                    <div className="relative w-48 h-32">
                      <Image
                        alt="Mountains"
                        src="/baby.jpeg"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-full ">
                      <p className="w-full mt-1  text-xs text-center">
                        PERFECT ROOM FOR LEARNING
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center hover:text-pink-500 cursor-pointer">
                    <div className="relative w-48 h-32">
                      <Image
                        alt="Mountains"
                        src="/baby.jpeg"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-full ">
                      <p className="w-full mt-1  text-xs text-center">
                        PERFECT ROOM FOR LEARNING
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center hover:text-pink-500 cursor-pointer">
                    <div className="relative w-48 h-32">
                      <Image
                        alt="Mountains"
                        src="/baby.jpeg"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-full ">
                      <p className="w-full mt-1  text-xs text-center">
                        PERFECT ROOM FOR LEARNING
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center hover:text-pink-500 cursor-pointer">
                    <div className="relative w-48 h-32">
                      <Image
                        alt="Mountains"
                        src="/baby.jpeg"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-full ">
                      <p className="w-full mt-1  text-xs text-center">
                        PERFECT ROOM FOR LEARNING
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
