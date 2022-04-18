import React from "react";
import googleLogo from "../../assets/image/googleLogo.png";
import fasebookLogo from "../../assets/image/facebookLogo.png";
import githubLogo from "../../assets/image/githubLogo.png";
const SocialLoginButton = () => {
  return (
    <div className="flex justify-center items-center gap-5 mx-auto my-5 p-5">
      <button className="flex justify-center items-center gap-2   p-2 rounded-lg shadow-md bg-white border-2 border-white hover:border-[#00095e]  duration-300 my-5">
        <img src={googleLogo} alt="" className="w-[40px] h-[40px]" />
      </button>
      <button className="flex justify-center items-center gap-2  p-2 rounded-lg shadow-md bg-white border-2 border-white hover:border-[#00095e]  duration-300  my-5">
        <img src={fasebookLogo} alt="" className="w-[40px] h-[40px]" />
      </button>
      <button className="flex justify-center items-center gap-2 t  p-2 rounded-lg shadow-md bg-white border-2 border-white hover:border-[#00095e]  duration-300  my-5">
        <img src={githubLogo} alt="" className="w-[40px] h-[40px]" />
      </button>
    </div>
  );
};

export default SocialLoginButton;
