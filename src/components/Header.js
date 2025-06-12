import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/langConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const showGPTSearch = useSelector((state) => state.gpt?.gptSearch);

  const handleGptClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguage = (identifier) => {
    dispatch(changeLanguage(identifier));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //this function will be called when component unmounts.
    return () => unsubscribe();
  }, []);

  return (
    user && (
      <div className="absolute w-screen z-50 mx-0 mt-0 bg-gradient-to-b from-black flex justify-between">
        <img src={LOGO_URL} alt="logo" className="w-40 z-10" />
        <div className="flex justify-center align-middle">
          {showGPTSearch && (
            <select
              className="m-2 p-2 rounded-md bg-gray-800 text-white border border-gray-600 shadow-sm focus:outline-none focus:ring-2 transition duration-200"
              onChange={(e) => handleLanguage(e.target.value)}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.language}
                </option>
              ))}
            </select>
          )}

          <button
            className="m-2 px-4 min-w-[100px] rounded-lg flex items-center justify-center bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold shadow-md transition duration-300 ease-in-out"
            onClick={handleGptClick}
          >
            {showGPTSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="w-30 h-30 p-4"
            src="https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABdEyUfiGKB_IE32uWZW3KcuE4Vk5kEFKQM1HrVqjN4jNv-Robrvl9ctyTBXJkMcZBfIjTnqQDRqsf7TQTr_RwCEwgwqxhME.png?r=d47"
            alt="logoutLogo"
          />

          <button onClick={handleSignOut} className="align-middle text-center">
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default Header;
