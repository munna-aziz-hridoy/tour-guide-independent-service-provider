import React from "react";

import ServicesContainer from "../../Components/ServicesContainer/ServicesContainer";
import useServices from "../../hooks/useServices";

const Services = () => {
  const [services] = useServices();
  return (
    <div className="my-36">
      <p className="text-[#ffcc13] font-semibold my-2 capitalize text-lg text-center">
        Check out Best Promotional Tour
      </p>
      <h2 className="text-[#00095e] font-bold my-2 capitalize text-5xl text-center">
        tour plans
      </h2>
      <ServicesContainer services={services} />
    </div>
  );
};

export default Services;
