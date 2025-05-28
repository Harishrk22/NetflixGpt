import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <div className="absolute w-screen z-50 mx-0 mt-0 bg-gradient-to-b from-black flex justify-between">
      <img src={LOGO_URL} alt="logo" className="w-40 z-10" />
      <div className="flex justify-center align-middle">
        <img
          className="w-30 h-30 p-4"
          src="https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABdEyUfiGKB_IE32uWZW3KcuE4Vk5kEFKQM1HrVqjN4jNv-Robrvl9ctyTBXJkMcZBfIjTnqQDRqsf7TQTr_RwCEwgwqxhME.png?r=d47"
          alt="logoutLogo"
        ></img>
        <button onClick={handleSignOut} className="align-middle text-center">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
