import React, { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Calendar from "../components/date-fns.js";
import ProgressCard from "../components/Card/ProgressCard";
import SubjectCard from "../components/Card/SubjectCard";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <Navbar /> */}
      <div class="p-4 flex flex-row items-start left-2 justify-between">
        <div class="text-2xl pt-2 font-bold text-[#383838]"> Hi, user</div>
        <img class="w-6 pt-2 mr-2 font-bold text-[#383838]" src="https://api.iconify.design/clarity:notification-outline-badged.svg?color=%233a4043" alt="Notifications" />
      </div>
      <ProgressCard />
      <div className="pt-8">
        <Calendar />
        <div className="justify-center pt-8">
          <h3 className="ml-4 font-semibold text-start">Subjects</h3>
          <SubjectCard subject="Physics" units={8} logo="https://api.iconify.design/ion:bulb-outline.svg?color=%233a4043" url="/physics" />
          <SubjectCard subject="Chemistry" units={8} logo="https://api.iconify.design/game-icons:chemical-drop.svg?color=%233a4043" url="/chemistry" />
          <SubjectCard subject="Mathematics" units={8} logo="https://api.iconify.design/fluent:math-symbols-20-filled.svg?color=%233a4043" url="/mathematics" />
          <SubjectCard subject="English" units={8} logo="https://api.iconify.design/icon-park-outline:english.svg?color=%233a4043" url="/english" />
         
        </div>
        <button
          className="shadow-none w-1/4 mb-4 hover:text-[#313638] text-white border-[#232323] hover:bg-white bg-[#313638] border hover:border-[#313638]  rounded-lg h-10 mt-8"
          onClick={()=>{navigate("/syllabus")}}
        >
          Explore All Subjects
        </button>
      </div>

    </>
  );
};

export default Home;
