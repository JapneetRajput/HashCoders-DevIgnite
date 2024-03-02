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
      <div className="flex justify-between items-center w-full h-full px-7 2xl:px-16">
        <h1 className="text-4xl sm:text-2xl md:text-4xl cursor-pointer pl-0 font-bold">
          Memories
        </h1>
        <div>
          <ul className="hidden md:flex ">
            {/* <Link href='/' className='invisible ml-10 text-md font-bold uppercase'>
                        Home
                    </Link> */}
            <a href="/">
              <li className="font-bold ml-10 text-md uppercase hover:border-b cursor-pointer">
                Home
              </li>
            </a>
            <a href="/">
              <li className="font-bold ml-10 text-md uppercase hover:border-b cursor-pointer">
                About
              </li>
            </a>
            <a href="/">
              <li className="font-bold ml-10 text-md uppercase hover:border-b cursor-pointer">
                Skills
              </li>
            </a>
            <a href="/">
              <li className="font-bold ml-10 text-md uppercase hover:border-b cursor-pointer">
                Projects
              </li>
            </a>
            <a href="/logout">
              <li className="font-bold ml-10 text-md uppercase hover:border-b cursor-pointer">
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
            <div className="flex w-full items-center justify-between">
              <h1 className="text-4xl font-bold">Memories</h1>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={15} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[100%] md:w-[90%] py-2">
                Let's build something legendary
              </p>
            </div>
          </div>
          <div>
            <ul className="uppercase font-bold">
              <a href="/">
                <li className="py-4 text-md cursor-pointer">Home</li>
              </a>
              <a href="/">
                <li className="py-4 text-md cursor-pointer">About</li>
              </a>
              <a href="/">
                <li className="py-4 text-md cursor-pointer">Skills</li>
              </a>
              <a href="/">
                <li className="py-4 text-md cursor-pointer">Projects</li>
              </a>
              <a href="/logout">
                <li className="py-4 text-md cursor-pointer">Logout</li>
              </a>
            </ul>
            <div className="pt-[40%]">
              <p className="uppercase tracking widest text-[#5651e5]">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/japneetrajput/"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a
                  href="https://github.com/JapneetRajput"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="mailto:japneetrajput2804@gmail.com"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <AiOutlineMail size={18} />
                </a>
                <a
                  href="tel:+918104235686"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
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
