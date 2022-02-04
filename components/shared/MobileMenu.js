import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { TiThMenuOutline } from "react-icons/ti";
import { useBabyBlog } from "../../contexts/context";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
const MobileMenu = () => {
  const toggleOpen = () => {
    setToggle(!toggle);
  };
  const { toggle, setToggle } = useBabyBlog();
  const babyButton = [
    {
      title: "ALL",
      href: "/",
    },
    {
      title: "BIRTH",
      href: "/",
    },
    {
      title: "LEARNING",
      href: "/",
    },

    {
      title: "LIFE",
      href: "/",
    },
    {
      title: "MOMENTS",
      href: "/",
    },
    {
      title: "PREGNANCY",
      href: "/",
    },
  ];

  const moreButton = [
    { title: "FAMILY", href: "/" },
    { title: "WORK", href: "/" },
    { title: "REVIEWS", href: "/" },
  ];
  return (
    <>
      <div className={`relative w-full h-screen bg-family bg-center`}>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60 ">
          <div className="flex items-center justify-between pt-[14px] px-4">
            <div onClick={toggleOpen}>
              {!toggle && <TiThMenu className="text-3xl text-white" />}

              {toggle && <TiThMenuOutline className="text-3xl text-white" />}
            </div>
            <div className="flex items-center justify-center space-x-3 text-xl text-white">
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

          <div className="flex px-5 pt-8 flex-col items-start justify-center space-y-5 text-xl text-white">
            <Link href="/">
              <a>HOME</a>
            </Link>
            <Menu>
              <Menu.Button className="w-full flex items-center justify-between">
                BABY
                <IoMdArrowDropdown />
              </Menu.Button>

              <Menu.Items className="flex flex-col text-lg !mb-0 space-y-3 px-4">
                {babyButton.map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <a className={`${active && ""}`} href={item.href}>
                        {item.title}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
            <Link href="/">
              <a>FITNESS</a>
            </Link>
            <Link href="/">
              <a>FOOD</a>
            </Link>
            <Menu>
              <Menu.Button className="w-full flex items-center justify-between">
                MORE
                <IoMdArrowDropdown />
              </Menu.Button>
              <Menu.Items className="flex flex-col text-lg !mb-0 space-y-3 px-4">
                {moreButton.map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <a className={`${active && ""}`} href={item.href}>
                        {item.title}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
            <Link href="/">
              <a>ABOUT</a>
            </Link>
            <Link href="/">
              <a>CONTACT</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
