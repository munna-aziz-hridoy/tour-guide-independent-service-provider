import React from "react";

import ServiceCard from "../ServiceCard/ServiceCard";

const ServicesContainer = ({ services }) => {
  return (
    <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-6 my-16">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServicesContainer;
