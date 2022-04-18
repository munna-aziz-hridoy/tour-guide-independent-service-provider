import React, { useRef, useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import SocialLoginButton from "../../Components/SocialLoginButton/SocialLoginButton";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [user, loading] = useAuthState(auth);
  const [
    signInWithEmailAndPassword,
    userFromEmail,
    loadingFromEmail,
    errorFromEmail,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, errorResetPass] =
    useSendPasswordResetEmail(auth);

  const [errorText, setErrorText] = useState();
  const emailRef = useRef();
  const passRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLoginSubmit = (e) => {
    const email = emailRef.current?.value;
    const password = passRef.current?.value;
    e.preventDefault();
    if (!email || !password) {
      return setErrorText("Please fill out all the field");
    }
    signInWithEmailAndPassword(email, password);
    setErrorText("");
  };
  let errorElement = "";
  if (errorFromEmail) {
    errorElement = (
      <p className="text-red-400 font-semibold capitalize">
        {errorFromEmail?.message}
      </p>
    );
  }
  if (errorResetPass) {
    errorElement = (
      <p className="text-red-400 font-semibold capitalize">
        {errorResetPass?.message}
      </p>
    );
  }
  if (loading) {
    return <LoadingSpinner />;
  }

  if (user || userFromEmail) {
    navigate(from);
  }

  const handleForgotPassword = async () => {
    const email = emailRef.current?.value;

    await sendPasswordResetEmail(email);
    toast("Password Reset Email sent");
  };

  return (
    <div>
      <h2 className="text-[#00095e] font-bold mt-20 capitalize text-5xl text-center">
        login
      </h2>
      <div className="w-2/3 mx-auto rounded-xl shadow-xl p-5 pt-10">
        <form onSubmit={handleLoginSubmit}>
          <input
            ref={emailRef}
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
          <p className="text-red-400 font-semibold capitalize">{errorText}</p>
          {errorElement}
          <input
            type="submit"
            value="login"
            className="flex justify-center items-center gap-2 text-2xl font-bold text-[#00095e] capitalize py-4 px-8 rounded-lg shadow-md bg-[#ffcc13] hover:bg-[#00095e] hover:text-[#ffcc13]  duration-300 w-full mt-20 mb-9"
          />
        </form>
        <p
          onClick={handleForgotPassword}
          className="text-xl font-bold text-red-900 capitalize my-4"
        >
          forgot password?
        </p>
        <p className="text-xl font-semibold text-[#00095e] capitalize">
          New to holiday guide?{" "}
          <Link to="/register" className="text-[#ffcc13] font-bold">
            Register
          </Link>
        </p>
        <SocialLoginButton />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
