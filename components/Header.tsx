import React from "react";
import { motion } from "framer-motion";
import { IoIosGlobe, IoMdSearch, IoMdPerson } from "react-icons/io";
import Head from "next/head";

function Header() {
  const [active, setActive] = React.useState(0);
  return (
    <div className=" absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
      <Head>
        <title>Harold Porfolio</title>
      </Head>
      <div className="  flex items-center gap-2 font-medium tracking-[4px]">
        <IoIosGlobe className=" text-xl" />
        AI Engineer
      </div>
      <ul className=" flex flex-wrap items-center gap-3 text-[11px] md:gap-10">
        {menus.map((menu, index) => {
          return (
            <motion.li
              layout
              key={index}
              className={` ${
                active == index && " border-b-2 border-b-green-500 text-3xl"
              } inline-block cursor-pointer text-red-100 border-b-green-500 transition duration-500 ease-in-out hover:border-b-2 hover:text-red text-2xl`}
            >
              {menu}
            </motion.li>
          );
        })}
        <div className=" flex items-center gap-6">
          <IoMdSearch className=" text-lg" />
          <IoMdPerson className=" text-lg" />
        </div>
      </ul>
    </div>
  );
}

export default Header;

const menus = [
  "About me",
  "Projects",
  "Skills",
  "Experiences",
  "Resume",
  "Contacts",
];
