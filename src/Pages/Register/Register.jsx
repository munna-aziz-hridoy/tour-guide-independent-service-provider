import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("register");
  };
  return (
    <div>
      <h2 className="text-[#00095e] font-bold mt-20 capitalize text-5xl text-center">
        register
      </h2>
      <div className="w-2/3 mx-auto rounded-xl shadow-xl p-5 pt-10">
        <form onClick={handleRegisterSubmit}>
          <input
            required
            type="text"
            name="userName"
            id="userName"
            placeholder="your username"
            className="w-full h-16 text-xl font-bold placeholder:text-lg placeholder:text-semibold placeholder:capitalize border-[#00095e] border-2 rounded-md shadow-md py-1 px-2 my-3"
          />
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="your email"
            className="w-full h-16 text-xl font-bold placeholder:text-lg placeholder:text-semibold placeholder:capitalize border-[#00095e] border-2 rounded-md shadow-md py-1 px-2 my-3"
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="your password"
            className="w-full h-16 text-xl font-bold placeholder:text-lg placeholder:text-semibold placeholder:capitalize border-[#00095e] border-2 rounded-md shadow-md py-1 px-2 my-3"
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="confirm your password"
            className="w-full h-16 text-xl font-bold placeholder:text-lg placeholder:text-semibold placeholder:capitalize border-[#00095e] border-2 rounded-md shadow-md py-1 px-2 my-3"
          />
          <input
            type="submit"
            value="register"
            className="flex justify-center items-center gap-2 text-2xl font-bold text-[#00095e] capitalize py-4 px-8 rounded-lg shadow-md bg-[#ffcc13] hover:bg-[#00095e] hover:text-[#ffcc13]  duration-300 w-full my-20"
          />
        </form>
        <p className="text-xl font-semibold text-[#00095e] capitalize">
          already have an accout?{" "}
          <Link to="/login" className="text-[#ffcc13] font-bold">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
