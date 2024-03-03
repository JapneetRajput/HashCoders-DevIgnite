import React from "react";

const ProgressCard = () => {
  return (
    <div>
      <div class="flex flex-wrap">
        <div class=" md:max-w-full px-3 w-5/6 mx-auto mt-4">
          <div class="relative flex flex-col min-w-0 break-words bg-[#6ac57e] border-0 bg-clip-border rounded-2xl mb-5 draggable">
            <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[60px] pb-0 bg-transparent">
              <div class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/normal text-dark">
                <span class="text-white text-5xl/none font-semibold mr-2 tracking-[-0.115rem]">
                  85%
                </span>
                <span class="pt-1 font-medium text-white/80 text-lg/normal">
                  Portion Completed
                </span>
              </div>
            </div>
            <div class="flex items-end flex-auto py-8 pt-0 px-9 ">
              <div class="flex flex-col items-center w-full mt-3">
                <div class="flex justify-between w-full mt-auto mb-2 font-semibold text-white/80 text-lg/normal">
                  <span class="text-sm">12 Topics Pending</span>
                  {/* <span className="text-sm">85%</span> */}
                </div>

                <div class="mx-3 rounded-2xl h-[8px] w-full bg-white/20">
                  <div class="rounded-2xl bg-white w-[85%] h-[8px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
