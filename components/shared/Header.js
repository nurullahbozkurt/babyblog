import Link from "next/link";
import Dropdown from "./Dropdown";
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
        <div className="flex fixed w-full items-center justify-center space-x-10 py-5 border-b shadow-md z-10 bg-white">
          <button className="relative w-32 h-14">
            <Image
              alt=""
              src="/logo.webp"
              layout="fill"
              objectFit="cover"
            ></Image>
          </button>
          <div>
            <Link href="/">Home</Link>
          </div>
          <DropdownNav items={items} />
          <div>
            <Link href="/">Fitness</Link>
          </div>
          <div>
            <Link href="/">Food</Link>
          </div>
          <div>
            <Dropdown />
          </div>
          <div>
            <Link href="/">About</Link>
          </div>
          <div>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className=" w-full flex items-center justify-center"></div>
      </div>
    </>
  );
};

export default Header;
