import React from "react";

const NoRoutePage = () => {
  return (
    <div className="w-full h-[60vh] flex justify-center items-center">
      <div>
        <h2 className="text-[#00095e] font-bold text-7xl text-center ">
          4<span className="text-red-500">0</span>4
        </h2>
        <p className="text-red-400 text-center text-2xl">
          The page you are looking for is now found. Please make sure you
          entered a correct url
        </p>
      </div>
    </div>
  );
};

export default NoRoutePage;
