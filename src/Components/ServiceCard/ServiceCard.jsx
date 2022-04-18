import {
  faCartArrowDown,
  faClock,
  faGlobe,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const { id, name, image, places, price, duration } = service;
  return (
    <div className="rounded-lg shadow-xl pb-5 flex flex-col justify-between ">
      <div>
        <img src={image} alt="" className="w-fit rounded-t-xl" />
        <div className="p-4 my-5 ">
          <h2 className="text-3xl font-bold text-[#00095e] capitalize">
            {name}
          </h2>
          <p className="text-[#7ea0ff] font-bold text-2xl my-4">${price}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center ">
          <p className="font-bold text-lg text-[#00095e] capitalize flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faGlobe} className="text-xl" />{" "}
            {places?.length} places.{" "}
          </p>
          <p className="text-[#7ea0ff] font-semibold text-lg flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faClock} className="text-xl" />
            {duration} days
          </p>
        </div>
        <button
          onClick={() => navigate("/checkout")}
          className="flex justify-center items-center gap-2 text-2xl font-bold text-[#00095e] capitalize py-4 px-8 rounded-lg shadow-md bg-[#ffcc13] hover:bg-[#00095e] hover:text-[#ffcc13] my-5 duration-300 w-full"
        >
          <p>Book now</p>
          <FontAwesomeIcon icon={faCartArrowDown} />
        </button>
        <button
          onClick={() => navigate(`/servicesDetails/${id}`)}
          className="flex justify-center items-center gap-2 text-2xl font-bold border-[#00095e] border-2 text-[#00095e] capitalize py-4 px-8 rounded-lg shadow-md hover:bg-[#00095e] hover:text-[#ffcc13] my-7 duration-300 w-full"
        >
          <p>details</p>
          <FontAwesomeIcon icon={faInfoCircle} />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
