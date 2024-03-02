import React, { useContext, useState } from "react";
import { AiOutlineMail, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AuthContext } from "../context/UserContext";

const Navbar = () => {
  let token = localStorage.getItem("token");
  const { userAuth, setUserAuth } = useContext(AuthContext);

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  if (token) {
    setUserAuth(true);
  }

  return (
    <div className="fixed w-full h-20  shadow-xl bg-[#ecf0f3] text-[#1f2937] tracking-wide mb-24">
      <div className="flex items-center justify-between w-full h-full px-7 2xl:px-16">
        <h1 className="pl-0 text-4xl font-bold cursor-pointer sm:text-2xl md:text-4xl">
          EDORA
        </h1>
        <div>
          <ul className="hidden md:flex ">
            {/* <Link href='/' className='invisible ml-10 font-bold uppercase text-md'>
                        Home
                    </Link> */}
            <a href="/home">
              <li className="ml-10 font-bold uppercase cursor-pointer text-md hover:border-b">
                Home
              </li>
            </a>
            <a href="/">
              <li className="ml-10 font-bold uppercase cursor-pointer text-md hover:border-b">
                About
              </li>
            </a>
            <a href="/">
              <li className="ml-10 font-bold uppercase cursor-pointer text-md hover:border-b">
                Skills
              </li>
            </a>
            <a href="/">
              <li className="ml-10 font-bold uppercase cursor-pointer text-md hover:border-b">
                Projects
              </li>
            </a>
            <a href="/logout">
              <li className="ml-10 font-bold uppercase cursor-pointer text-md hover:border-b">
                Logout
              </li>
            </a>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] py-10 px-6 ease-in duration-500"
              : "hidden"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <h1 className="text-4xl font-bold">Memories</h1>
              <div
                onClick={handleNav}
                className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
              >
                <AiOutlineClose size={15} />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="w-[100%] md:w-[90%] py-2">
                Let's build something legendary
              </p>
            </div>
          </div>
          <div>
            <ul className="font-bold uppercase">
              <a href="/">
                <li className="py-4 cursor-pointer text-md">Home</li>
              </a>
              <a href="/">
                <li className="py-4 cursor-pointer text-md">About</li>
              </a>
              <a href="/">
                <li className="py-4 cursor-pointer text-md">Skills</li>
              </a>
              <a href="/">
                <li className="py-4 cursor-pointer text-md">Projects</li>
              </a>
              <a href="/logout">
                <li className="py-4 cursor-pointer text-md">Logout</li>
              </a>
            </ul>
            <div className="pt-[40%]">
              <p className="uppercase tracking widest text-[#5651e5]">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/japneetrajput/"
                  className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a
                  href="https://github.com/JapneetRajput"
                  className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="mailto:japneetrajput2804@gmail.com"
                  className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105"
                >
                  <AiOutlineMail size={18} />
                </a>
                <a
                  href="tel:+918104235686"
                  className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105"
                >
                  <BsFillPersonLinesFill size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
