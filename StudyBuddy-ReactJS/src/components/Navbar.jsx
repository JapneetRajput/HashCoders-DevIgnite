import React, { useContext, useState } from "react";
import { HiOutlineNewspaper } from "react-icons/hi";
import { LuMapPin } from "react-icons/lu";
import { LuTrendingUp } from "react-icons/lu";
import { MdAddCircleOutline } from "react-icons/md";
import { AuthContext } from "../context/UserContext";
import { useNavigate, useLocation } from "react-router";
import { RiSettings4Line } from "react-icons/ri";
import { MdOutlineRateReview } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { IoCalendarClearOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";



const Navbar = () => {
  const { userAuth, setUserAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { text: "News", link: "/home", icon: <IoCalendarClearOutline  size={20} /> },
    { text: "Featured", link: "/syllabus", icon: <CgNotes   size={20} /> },
    { text: "Add", link: "/syllabus", icon: <MdAddCircleOutline size={30} /> },
    { text: "Maps", link: "/feedback", icon: <MdOutlineRateReview  size={20} /> },
    { text: "Settings", link: "/profile", icon: <RiSettings4Line size={20} /> },
  ];

  return (
    <div className="z-[999999] fixed bottom-0 w-full dark:bg-[#161b22] bg-white border-t-2 border-[#3c3c3c] text-[#161b22] dark:text-[#FAF7F0]">
      <ul className="flex justify-between w-full h-16 px-4 2xl:px-16">
        {navItems.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className={`hover:text-[#dedede] rounded-t rounded-2xl hover:bg-[#313638] active:bg-[#313638] ${
              location.pathname === item.link
                ? "bg-[#313638] text-white"
                : ""
            }`}
          >
            <li className="flex flex-col items-center justify-center w-full p-3 text-sm text-center cursor-pointer">
              {item.icon}
              <span className="hidden font-semibold md:flex">{item.text}</span>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;