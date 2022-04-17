import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useServices from "../../hooks/useServices";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { homeServicesUrl } = useParams();
  const [services] = useServices();
  const selectedId = parseFloat(homeServicesUrl);

  const selectedService = services.find(
    async (service) => (await service.id) === selectedId
  );

  if (!selectedService) {
    <div className="w-full h-[50vh] flex justify-center items-center">
      <svg
        role="status"
        className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#ffcc13]"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>;
  }

  const { description, duration, image, price, places, name } =
    selectedService || {};
  let tourDays = [];
  for (const day in description) {
    tourDays.push(day);
  }
  console.log(tourDays);
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
            className="flex justify-center items-center gap-2 text-2xl font-bold text-[#00095e] capitalize py-4 px-8 rounded-lg shadow-md bg-[#ffcc13] hover:bg-[#00095e] hover:text-[#ffcc13] my-5 duration-300 "
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
