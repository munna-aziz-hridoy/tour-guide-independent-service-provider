import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import homeAboutImg from "../../../assets/image/homeAbout.png";

const HomeAbout = () => {
  const navigate = useNavigate();
  return (
    <div className="home-about-section flex justify-between items-center gap-14 my-32">
      <div className="w-1/2">
        <img src={homeAboutImg} alt="" className="w-full" />
      </div>
      <div className="w-1/2">
        <p className="text-lg font-bold capitalize text-[#7ea0ff] my-16">
          about us
        </p>
        <h2 className="text-4xl font-bold text-[#00095e] ">
          Get ready for
          <br /> real time adventure
        </h2>
        <p className="text-xl font-semibold text-[#677f8b] my-6 w-1/2">
          Let's start your tour with me, I will guide you to the best places you
          may like. Want to know more about me? Explore here about me and my
          successfull tour guide history
        </p>
        <button
          onClick={() => navigate("/about")}
          className="flex justify-center items-center gap-2 text-2xl font-bold text-[#00095e] capitalize py-4 px-8 rounded-lg shadow-md bg-[#ffcc13] hover:bg-[#00095e] hover:text-[#ffcc13] my-5 duration-300"
        >
          <p>about me</p>
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </div>
  );
};

export default HomeAbout;
