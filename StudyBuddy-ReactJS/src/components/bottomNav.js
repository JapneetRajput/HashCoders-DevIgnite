import React from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { LuTrendingUp } from "react-icons/lu";
import { HiOutlineNewspaper } from "react-icons/hi";
import { LuMapPin } from "react-icons/lu";


const navItems = [
    { text: "Home", link: "/home", icon: <AiOutlineHome size={20} /> },
    { text: "News", link: "/posts", icon: <HiOutlineNewspaper size={20} /> },
    { text: "Featured", link: "/featured", icon: <LuTrendingUp  size={20} /> },
    { text: "Maps", link: "/maps", icon: <LuMapPin size={20} /> },
    { text: "Profile", link: "/profile", icon: <AiOutlineUser size={20} /> },
  ];


const BottomNavbar = ({ navItems }) => {
  return (
    <div className="md:hidden fixed bottom-0 w-full dark:bg-[#161b22] bg-white border-t-2 border-black text-[#161b22] dark:text-[#FAF7F0]">
      <ul className="flex justify-between w-full h-16 px-7 2xl:px-16">
        {navItems.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="hover:text-[#babbbd] hover:bg-[#3B7BD3] active:bg-[#3B7BD3]"
          >
            <li className="w-1/3 font-semibold justify-center p-3 text-md cursor-pointer text-[#161b22] dark:text-[#FAF7F0]">
              {item.icon}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default BottomNavbar;