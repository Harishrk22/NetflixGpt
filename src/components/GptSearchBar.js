import React from "react";
import { LANGCONSTANTS } from "../utils/langConstants";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const currentLang = useSelector((store) => store.config?.lang);
  return (
    <div className="pt-[15%] flex justify-center">
      <form className="bg-black  w-1/2 grid grid-cols-12">
        <input
          className="col-span-9 p-4 m-4 text-lg"
          type="text"
          placeholder={LANGCONSTANTS[currentLang].placeHolder}
        />
        <button className="p-4 m-4 rounded-xl bg-red-700 text-white text-lg col-span-3">
          {LANGCONSTANTS[currentLang].btnName}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
