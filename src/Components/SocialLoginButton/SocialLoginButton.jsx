import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const SocialLoginButton = () => {
  return (
    <div className="flex justify-center items-center gap-5 mx-auto my-5 p-5">
      <button className="flex justify-center items-center gap-2 text-2xl font-bold text-[#00095e] capitalize py-4 px-8 rounded-lg shadow-md bg-[#ffcc13] hover:bg-[#00095e] hover:text-[#ffcc13]  duration-300 my-20">
        <p>continue with google</p>
        <FontAwesomeIcon icon={faGoogle} />
      </button>
      <button className="flex justify-center items-center gap-2 text-2xl font-bold text-[#00095e] capitalize py-4 px-8 rounded-lg shadow-md bg-[#ffcc13] hover:bg-[#00095e] hover:text-[#ffcc13]  duration-300  my-20">
        <p>continue with github</p>
        <FontAwesomeIcon icon={faGithub} />
      </button>
      <button className="flex justify-center items-center gap-2 text-2xl font-bold text-[#00095e] capitalize py-4 px-8 rounded-lg shadow-md bg-[#ffcc13] hover:bg-[#00095e] hover:text-[#ffcc13]  duration-300  my-20">
        <p>continue with facebook</p>
        <FontAwesomeIcon icon={faFacebookSquare} />
      </button>
    </div>
  );
};

export default SocialLoginButton;
