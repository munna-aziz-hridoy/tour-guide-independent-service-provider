import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useServices from "../../hooks/useServices";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { servicesUrl } = useParams();
  const [services] = useServices();
  const selectedId = parseFloat(servicesUrl);

  const selectedService = services.find((service) => service.id === selectedId);

  if (!selectedService) {
    <LoadingSpinner />;
  }

  const { description, duration, image, price, places, name } =
    selectedService || {};
  let tourDays = [];
  for (const day in description) {
    tourDays.push(day);
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="lg:w-1/2">
          <img src={image} alt="" className="rounded-lg shadow-xl" />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-start gap-5">
          <h2 className="text-5xl font-bold text-[#00095e] capitalize">
            {name}
          </h2>
          {places?.map((place) => (
            <p key={place} className="text-2xl font-semibold text-[#677f8b]">
              {place}
            </p>
          ))}
          <p className="text-xl font-semibold capitalize text-[#7ea0ff]">
            price: ${price}
          </p>
          <p className="text-xl font-semibold capitalize text-[#7ea0ff]">
            days: {duration}
          </p>
          <button
            onClick={() => navigate("/checkout")}
            className="flex justify-center items-center gap-2 text-2xl font-bold text-[#00095e] capitalize py-4 px-8 rounded-lg shadow-md bg-[#ffcc13] hover:bg-[#00095e] hover:text-[#ffcc13] my-5 duration-300 cursor-pointer"
          >
            <p>Book now</p>
            <FontAwesomeIcon icon={faCartArrowDown} />
          </button>
        </div>
      </div>
      <h2 className="text-[#00095e] font-bold capitalize text-5xl text-center my-20">
        tour plans
      </h2>
      {tourDays.map((day) => (
        <p
          key={day}
          className="text-lg font-semibold text-[#677f8b] my-8 flex gap-4"
        >
          <span className="capitalize text-[#00095e]  mx-4 rounded-md font-bold text-2xl ">
            {day} :
          </span>
          {description[day]}
        </p>
      ))}
    </div>
  );
};

export default ServiceDetails;
