import React from "react";
import { INFO_ICON, PLAY_ICON } from "../utils/constants";

const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className=" md:mt-2  pt-[5%] md:pt-[10%]  md:px-15  absolute w-screen aspect-video bg-gradient-to-r from-black/70 to-transparent">
      <h1 className="text-md md:text-4xl font-bold text-white px-5 md:px-10">
        {original_title}
      </h1>
      <p className="hidden md:inline-block text-xs md:text-lg w-[60%] md:w-1/3 text-white px-5 md:px-10 pt-6">
        {overview}
      </p>
      <div className="mt-3 md:mt-6 px-6 md:px-8  md:ml-2">
        <button className="bg-white px-2 md:px-8 text-sm md:text-lg font-bold border-black p-1 md:p-4 rounded-sm md:rounded-md text-center hover:bg-opacity-80">
          <div className="flex">
            <img
              src={PLAY_ICON}
              alt=""
              className="w-5 h-5 pt-1 md:pt-0 md:w-7 md:h-7 mr-1 md:mr-2 flex align-middle justify-center items-center"
            ></img>
            Play
          </div>
        </button>
        <button className="bg-[rgba(155,155,155,0.7)] mx-2 px-2 md:px-8 text-sm md:text-lg font-bold text-white  border-black p-1 md:p-4 rounded-md text-center hover:bg-gray-500 hover:bg-opacity-40">
          <div className="flex">
            <img
              src={INFO_ICON}
              alt=""
              className="w-5 h-5 md:w-5 md:h-7  mr-1 flex align-middle justify-center items-center"
            ></img>
            More Info
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
