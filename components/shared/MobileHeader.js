import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import { TiThMenuOutline } from "react-icons/ti";
import { useBabyBlog } from "/contexts/context";
import MobileMenu from "./MobileMenu";
import { Transition } from "@headlessui/react";

const MobileHeader = () => {
  const { toggle, setToggle } = useBabyBlog();

  const toggleOpen = () => {
    setToggle(!toggle);
  };
  console.log(toggle);
  return (
    <>
      <div
        className={`w-full flex items-center justify-between border-b shadow-md py-3 px-4  bg-white`}
      >
        <div onClick={toggleOpen}>
          {!toggle && <TiThMenu className="text-3xl text-violet-700" />}

          {toggle && <TiThMenuOutline className="text-3xl text-violet-700" />}
        </div>
        <div className="relative w-32 h-[25px] ">
          <Image
            width={150}
            height={35}
            objectFit="cover"
            layout="responsive"
            src="/logo.webp"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center space-x-3 text-xl text-violet-700">
          <Link href="/">
            <a>
              <BsTwitter />
            </a>
          </Link>
          <Link href="/">
            <a>
              <RiInstagramFill />
            </a>
          </Link>
          <Link href="/">
            <a>
              <BsFacebook />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
