import React from "react";
import { useNavigate } from "react-router-dom";

const SubjectCard = ({ subject, units, logo, url }) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    // Navigate to the specified URL when the "Explore" button is clicked
    navigate(url);
  };

  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full px-4 mt-4 sm:w-1/2">
        <div className={`flex flex-col h-full min-w-0 break-words bg-white border border-gray-400 rounded-2xl mb-5`}>
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex flex-col items-start justify-center">
              <span className="flex text-lg font-semibold text-gray-800">
                <img src={logo} alt="Sub Logo" /> &nbsp;
                {subject}
              </span>
              <span className="ml-2 text-sm text-gray-60">{units} Units</span>
            </div>
            {/* Anchor tag for navigation */}
            <span
              onClick={handleExploreClick}
              className="text-sm text-gray-600 cursor-pointer"
            >
              Explore
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
