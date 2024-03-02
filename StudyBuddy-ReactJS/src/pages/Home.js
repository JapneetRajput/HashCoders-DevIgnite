import React, { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Calendar from "../components/date-fns.js"; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <Navbar /> */}
      <div class="p-4 flex flex-row items-start left-2 justify-between">
          <div class="text-2xl pt-2 font-bold text-[#383838]"> Hi, user</div>
          <img class="w-6 pt-2 mr-2 font-bold text-[#383838]" src="https://api.iconify.design/clarity:notification-outline-badged.svg?color=%233a4043" alt="Notifications"/>
          </div>
      <div className="pt-28">
      <Calendar />
      </div>
      
    </>
  );
};

export default Home;
