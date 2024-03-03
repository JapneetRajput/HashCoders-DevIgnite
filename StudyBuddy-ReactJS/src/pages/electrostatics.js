import React, { useState } from "react";
import MovieClip from "../components/youtube";

const Electrostatics = () => {
  const [activeTab, setActiveTab] = useState("video");

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center">
        <button
          className={`px-4 py-2 ${
            activeTab === "video"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-tl-lg rounded-tr-lg`}
          onClick={() => changeTab("video")}
        >
          Video
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "audio"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => changeTab("audio")}
        >
          Audio
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "notes"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } rounded-tr-lg rounded-tl-lg`}
          onClick={() => changeTab("notes")}
        >
          Notes
        </button>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-b-lg">
        {activeTab === "video" && (
          <div>
            <h1>Video Tab Content</h1>
            <MovieClip videoId="_PR74ZDu-IY" />
            <p>Consider two positive charges, q1 and q2, repelling each other with a force f. If a neutral body is placed nearby, its dipoles polarize, attracting the charges. This induces an additional force, f-b, on both charges.

As the size of the ball increases, f-b changes, altering the net force on q1 and q2. When the charges are submerged in the ball's material, both f-1 and f-2 change.

Therefore, when charges are submerged in a medium:

* The force between charges (f-1) remains constant.
* The net force on individual charges decreases due to polarization of medium dipoles.</p>
          </div>
        )}
        {activeTab === "audio" && (
          <div>
            <h1>Audio Tab Content</h1>
            <p>This is the content of the Audio tab.</p>
          </div>
        )}
        {activeTab === "notes" && (
          <div>
            <h1>Notes Tab Content</h1>
            <p>This is the content of the Notes tab.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Electrostatics;
