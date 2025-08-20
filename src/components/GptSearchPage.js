import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          src={BG_IMG}
          alt="bg-image"
          className="h-screen object-cover w-screen"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
