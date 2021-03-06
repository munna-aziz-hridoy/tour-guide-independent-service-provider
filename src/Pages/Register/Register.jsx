import React, { useRef, useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import SocialLoginButton from "../../Components/SocialLoginButton/SocialLoginButton";
import auth from "../../firebase.init";

import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [user] = useAuthState(auth);
  const [createUserWithEmailAndPassword, userRegister, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [errorText, setErrorText] = useState();
  const navigate = useNavigate();
  const emailRef = useRef();
  const userNameRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();

  let errorElement = "";
  if (user || userRegister) {
    navigate("/");
  }
  if (error) {
    errorElement = (
      <p className="text-red-400 font-semibold capitalize">{error?.message}</p>
    );
  }
  if (loading) {
    return <LoadingSpinner />;
  }

  const handleRegisterSubmit = (e) => {
    errorElement = "";
    e.preventDefault();
    const userName = userNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passRef.current?.value;
    const confrimPassword = confirmPassRef.current?.value;

    if (!email || !password || !confrimPassword || !userName) {
      return setErrorText("Please fill out all the field");
    }
    if (password !== confrimPassword) {
      return setErrorText("Password did'nt match");
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <h2 className="text-[#00095e] font-bold mt-20 capitalize text-5xl text-center">
        register
      </h2>
      <div className="w-2/3 mx-auto rounded-xl shadow-xl p-5 pt-10">
        <form onSubmit={handleRegisterSubmit}>
          <input
            ref={userNameRef}
            required
            type="text"
            name="userName"
            id="userName"
            placeholder="your username"
            className="w-full h-16 text-xl font-bold placeholder:text-lg placeholder:text-semibold placeholder:capitalize border-[#00095e] border-2 rounded-md shadow-md py-1 px-2 my-3"
          />
          <input
            ref={emailRef}
            required
            type="email"
            name="email"
            id="email"
            placeholder="your email"
            className="w-full h-16 text-xl font-bold placeholder:text-lg placeholder:text-semibold placeholder:capitalize border-[#00095e] border-2 rounded-md shadow-md py-1 px-2 my-3"
          />

          <input
            ref={passRef}
            type="password"
            name="password"
            id="password"
            placeholder="your password"
            className="w-full h-16 text-xl font-bold placeholder:text-lg placeholder:text-semibold placeholder:capitalize border-[#00095e] border-2 rounded-md shadow-md py-1 px-2 my-3"
          />
          <input
            ref={confirmPassRef}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="confirm your password"
            className="w-full h-16 text-xl font-bold placeholder:text-lg placeholder:text-semibold placeholder:capitalize border-[#00095e] border-2 rounded-md shadow-md py-1 px-2 my-3"
          />
          <p className="text-red-400 font-semibold capitalize">{errorText}</p>
          {errorElement}
          <input
            type="submit"
            value="register"
            className="flex justify-center items-center gap-2 text-2xl font-bold text-[#00095e] capitalize py-4 px-8 rounded-lg shadow-md bg-[#ffcc13] hover:bg-[#00095e] hover:text-[#ffcc13]  duration-300 w-full my-20 cursor-pointer"
          />
        </form>
        <p className="text-xl font-semibold text-[#00095e] capitalize">
          already have an accout?{" "}
          <Link to="/login" className="text-[#ffcc13] font-bold">
            login
          </Link>
        </p>
        <SocialLoginButton />
      </div>
    </div>
  );
};

export default Register;
