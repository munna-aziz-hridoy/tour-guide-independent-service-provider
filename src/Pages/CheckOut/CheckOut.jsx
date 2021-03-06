import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const [errorText, setErrorText] = useState();
  const emailRef = useRef();
  const nameRef = useRef();
  const navigate = useNavigate();
  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (emailRef.current.value && nameRef.current.value) {
      setErrorText("");
      navigate("/thanks");
    }
    setErrorText("Please fill out all the field");
  };
  return (
    <div>
      <h2 className="text-[#00095e] font-bold mt-20 capitalize text-5xl text-center">
        CheckOut
      </h2>
      <form
        onSubmit={handleCheckoutSubmit}
        className="lg:w-2/3 mx-auto rounded-xl shadow-xl p-5 pt-10"
      >
        <input
          ref={nameRef}
          type="text"
          name="name"
          id="name"
          placeholder="your name"
          className="w-full h-16 text-xl font-bold placeholder:text-lg placeholder:text-semibold placeholder:capitalize border-[#00095e] border-2 rounded-md shadow-md py-1 px-2 my-3"
        />
        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          placeholder="your email"
          className="w-full h-16 text-xl font-bold placeholder:text-lg placeholder:text-semibold placeholder:capitalize border-[#00095e] border-2 rounded-md shadow-md py-1 px-2 my-3"
        />
        <div className="flex justify-center items-center gap-5">
          <input
            type="text"
            name="from"
            id="from"
            placeholder="where from"
            className="w-full h-16 text-xl font-bold placeholder:text-lg placeholder:text-semibold placeholder:capitalize border-[#00095e] border-2 rounded-md shadow-md py-1 px-2 my-3"
          />
          <input
            type="text"
            name="to"
            id="where-to"
            placeholder="where to"
            className="w-full h-16 text-xl font-bold placeholder:text-lg placeholder:text-semibold placeholder:capitalize border-[#00095e] border-2 rounded-md shadow-md py-1 px-2 my-3"
          />
        </div>
        <input
          type="number"
          name="number"
          id="number"
          placeholder="your phone number"
          className="w-full h-16 text-xl font-bold placeholder:text-lg placeholder:text-semibold placeholder:capitalize border-[#00095e] border-2 rounded-md shadow-md py-1 px-2 my-3"
        />
        <p className="text-red-400 font-semibold capitalize">{errorText}</p>
        <input
          type="submit"
          value="confirm order"
          className="flex justify-center items-center gap-2 text-2xl font-bold text-[#00095e] capitalize py-4 px-8 rounded-lg shadow-md bg-[#ffcc13] hover:bg-[#00095e] hover:text-[#ffcc13]  duration-300 w-full my-20 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default CheckOut;
