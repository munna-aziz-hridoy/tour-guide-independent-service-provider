import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import bannerImg from "../../../assets/image/banner.png";
import { useNavigate } from "react-router-dom";

const HomBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner flex flex-col lg:flex-row justify-between items-center gap-5 my-32">
      <div className="banner-text w-1/2">
        <h2 className="font-bold text-4xl lg:text-7xl text-[#00095e] capitalize my-5">
          want to go for a tour?
          <br />
          <span className="text-[#ffcc13]">i'm your tour guide</span>
        </h2>
        <p className="text-lg font-semibold text-[#00095e] w-2/3">
          I will be happy to arrange a DayPlan [Departure and Return by Reserved
          Day Coach - No overnight journey] or AirPlan [use domestic flights]
          tour package or package on Your own Bandarban Tour Plan
        </p>
        <button
          onClick={() => navigate("/about")}
          className="flex justify-center items-center gap-2 text-2xl font-bold text-[#00095e] capitalize py-4 px-8 rounded-lg shadow-md bg-[#ffcc13] hover:bg-[#00095e] hover:text-[#ffcc13] my-5 duration-300"
        >
          <p>about me</p>
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
      <div className="banner-img w-1/2 ">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default HomBanner;
