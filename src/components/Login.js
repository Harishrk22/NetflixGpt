import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { BG_IMG } from "../utils/constants";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  //useRef is used [We can also use state variable and use onchange input to update]
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const handleBtnClick = () => {
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const name = !isSignIn ? nameRef.current?.value || "" : null;

    const error = validate(email, password, name);
    setErrorMsg(error);

    if (error) return;

    if (!isSignIn) {
      //signup form
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage + "" + errorCode);
        });
    } else {
      //signin form
      console.log("sign in form");
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;

          if (errorCode === "auth/invalid-credential") {
            setErrorMsg("Invalid Credentials");
          }
        });
    }
  };

  return (
    <div>
      <div className="z-50 relative">
        <Header />
      </div>
      <img
        className="opacity-100 fixed h-screen object-cover md:w-screen"
        src={BG_IMG}
        alt="bg"
      ></img>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" bg-black w-[80%] md:w-3/12 mx-auto  mt-12 flex flex-col absolute top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 text-white bg-opacity-80"
      >
        <h2 className=" font-bold text-xl md:text-2xl p-2 md:p-4">
          {isSignIn ? "Sign In" : " Sign up"}
        </h2>
        {!isSignIn && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-4 m-4 bg-transparent border"
          ></input>
        )}
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className="p-2 m-3 md:p-4 md:m-4 bg-transparent border"
        ></input>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-2 m-3 md:p-4 md:m-4 bg-transparent border"
        ></input>
        <p className="text-red-500 py-2 mx-4 text-sm md:text-lg">{errorMsg}</p>
        <button
          onClick={handleBtnClick}
          className="p-3 m-3 md:p-4 md:m-4 bg-[rgb(229,9,20)] rounded-md md:rounded-lg"
        >
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
