import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <img
        className="opacity-100 absolute "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg"
        alt="bg"
      ></img>
      <form className=" bg-black w-3/12 mx-auto  flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 text-white bg-opacity-80">
        <h2 className=" font-bold text-2xl p-4">
          {isSignIn ? "Sign In" : " Sign up"}
        </h2>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-4 bg-transparent border"
          ></input>
        )}
        <input
          type="email"
          placeholder="Email"
          className="p-4 m-4 bg-transparent border"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-4 bg-transparent border"
        ></input>
        <button className="p-4 m-4 bg-[rgb(229,9,20)] rounded-lg">
          {isSignIn ? "Sign In" : " Sign up"}
        </button>
        <div className="my-4" onClick={handleSignIn}>
          <span className="m-3 p-2 text-gray-400 cursor-pointer">
            {isSignIn
              ? "New to Netflix? Sign up now"
              : "Already have an account? Sign in"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
