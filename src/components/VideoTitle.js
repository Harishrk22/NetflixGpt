import React from "react";
import { INFO_ICON, PLAY_ICON } from "../utils/constants";

const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="mt-2 pt-[15%] px-15  absolute w-screen aspect-video bg-gradient-to-r from-black/70 to-transparent">
      <h1 className="text-4xl font-bold text-white px-10">{original_title}</h1>
      <p className="text-md w-1/3 text-white px-10 pt-6">{overview}</p>
      <div className="mt-6 px-8 ml-2">
        <button className="bg-white px-8  text-lg font-bold border-black p-4 rounded-md text-center hover:bg-opacity-80">
          <div className="flex">
            <img
              src={PLAY_ICON}
              alt=""
              className="w-7 h-7  mr-2 flex align-middle justify-center items-center"
            ></img>
            Play
          </div>
        </button>
        <button className="bg-[rgba(155,155,155,0.7)] mx-2 px-8 text-lg font-bold text-white  border-black p-4 rounded-md text-center hover:bg-gray-500 hover:bg-opacity-40">
          <div className="flex">
            <img
              src={INFO_ICON}
              alt=""
              className="w-5 h-7  mr-1 flex align-middle justify-center items-center"
            ></img>
            More Info
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
