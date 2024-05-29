import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { generateModuleWiseQuiz, generateSchedule } from "../api/service";
import { useNavigate } from "react-router";

const SyllabusPage = () => {
  const [unitStates, setUnitStates] = useState(
    Object.entries(units).flatMap(([subject, units]) =>
      units.map((unit) => ({ subject, unit, selected: false, intensity: "" }))
    )
  );

  const navigate = useNavigate();

  const [scheduleString, setScheduleString] = useState("");
  const [schedule, setSchedule] = useState("");

  const handleUnitSelect = (unit) => {
    setUnitStates(
      unitStates.map((item) => {
        if (item.unit === unit) {
          return { ...item, selected: !item.selected };
        }
        return item;
      })
    );
  };

  const handleIntensityChange = (unit, intensity) => {
    setUnitStates(
      unitStates.map((item) => {
        if (item.unit === unit) {
          return { ...item, intensity };
        }
        return item;
      })
    );
  };

  const createScheduleString = async () => {
    let schedule = "";
    unitStates.forEach((unitState) => {
      if (unitState.selected) {
        if (schedule !== "") {
          schedule += ",";
        }
        schedule += `${unitState.subject}{${unitState.unit}:${unitState.intensity}}`;
      }
    });
    const response = await generateModuleWiseQuiz(schedule);
    // setSchedule(response);
    console.log(response);
    navigate("/quiz");
    setScheduleString(schedule);
  };

  const isAddToScheduleDisabled = unitStates.every(
    (unit) => !unit.selected || unit.intensity === ""
  );

  const handleAddToSchedule = () => {
    createScheduleString();
  };

  return (
    <div className="relative w-full px-6 pt-10 pb-8 mt-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
      <div className="px-5 mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-center md:text-4xl">
            FULL SYLLABUS
          </h2>
          <p className="mt-3 text-lg text-neutral-500 md:text-xl">
            C.B.S.E Board (2023-2024)
          </p>
        </div>
        <div className="grid max-w-xl mx-auto mt-8 divide-y divide-neutral-200">
          {Object.entries(units).map(([subject, unitList]) => (
            <div key={subject}>
              <h3 className="text-xl font-semibold mt-6 mb-3">
                {subject.toUpperCase()}
              </h3>
              {unitList.map((unit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2"
                >
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={unitStates.some(
                        (unitState) =>
                          unitState.unit === unit && unitState.selected
                      )}
                      onChange={() => handleUnitSelect(unit)}
                    />
                    <span className="ml-2 text-sm">{unit}</span>
                  </label>
                  <select
                    className="px-3 py-1 border rounded-md"
                    value={
                      unitStates.find((unitState) => unitState.unit === unit)
                        ?.intensity || ""
                    }
                    onChange={(e) =>
                      handleIntensityChange(unit, e.target.value)
                    }
                  >
                    <option value="">Intensity</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            onClick={handleAddToSchedule}
            className={`shadow-none w-full mb-4 hover:text-[#313638] text-white border-[#232323] hover:bg-white bg-[#313638] border hover:border-[#313638] rounded-lg h-10 mt-8 ${
              isAddToScheduleDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isAddToScheduleDisabled}
          >
            Generate personalized quiz
            <Toaster />
          </button>
        </div>
      </div>
    </div>
  );
};

const units = {
  physics: [
    "Unit I: Electrostatics",
    "Unit II: Current Electricity",
    "Unit III: Magnetic Effects of Current and Magnetism",
    "Unit IV: Electromagnetic Induction and Alternating Currents",
    "Unit V: Electromagnetic Waves",
    "Unit VI: Optics",
    "Unit VII: Dual Nature of Radiation and Matter",
    "Unit VIII: Atoms and Nuclei",
    "Unit IX: Electronic Devices",
  ],
};

export default SyllabusPage;
