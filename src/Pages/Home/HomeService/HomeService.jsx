import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import ServicesContainer from "../../../Components/ServicesContainer/ServicesContainer";
import useServices from "../../../hooks/useServices";

const HomeService = () => {
  const navigate = useNavigate();
  const [services] = useServices();
  const servicesFirstThreeItem = services.slice(0, 3);
  return (
    <div className="my-32">
      <p className="text-[#ffcc13] font-semibold my-2 capitalize text-lg text-center">
        Check out Best Promotional Tour
      </p>
      <h2 className="text-[#00095e] font-bold my-2 capitalize text-5xl text-center">
        tour plans
      </h2>
      <ServicesContainer services={servicesFirstThreeItem} />
      <button
        onClick={() => navigate("/services")}
        className="flex justify-center items-center gap-2 text-2xl font-bold text-[#00095e] capitalize py-4 px-8 rounded-lg shadow-md bg-[#ffcc13] hover:bg-[#00095e] hover:text-[#ffcc13] my-16 duration-300 mx-auto"
      >
        <p>services</p>
        <FontAwesomeIcon icon={faGlobe} />
      </button>
    </div>
  );
};

export default HomeService;
