import React from "react";
import aboutImg from "../../assets/image/aboutImg.png";
const About = () => {
  return (
    <div>
      <div className="home-about-section flex flex-col lg:flex-row justify-between items-center gap-14 my-32">
        <div className="lg:w-1/3">
          <img src={aboutImg} alt="" className="w-full rounded-xl shadow-xl" />
        </div>
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <p className="text-lg font-bold capitalize text-[#7ea0ff] my-16">
            about me
          </p>
          <h2 className="text-4xl font-bold text-[#00095e] ">
            Get ready for
            <br /> real time adventure
          </h2>
          <p className="text-xl font-semibold text-[#677f8b] my-6 w-1/2">
            I'm
            <span className="text-[#00095e] text-2xl font-bold">
              {" "}
              Munna Aziz.{" "}
            </span>
            I want to be a full-stack developer. And at present I'm trying to do
            achive my goal
          </p>
        </div>
      </div>
      <div className="p-6 rounded-lg shadow-lg my-16">
        <h3 className="text-2xl font-bold text-[#ffcc13]">My Vision </h3>
        <p className="text-lg font-semibold text-gray-400 my-8">
          My vision is always to be a software developer. From the day I
          understand what computer is, I wanted to know how computers work. This
          interest grow my dream to be a software develper. And the end of the
          day I want to see myself at the success point.
        </p>
      </div>
      <div className="p-6 rounded-lg shadow-lg my-16">
        <h3 className="text-2xl font-bold text-[#ffcc13]">My Mission </h3>
        <p className="text-lg font-semibold text-gray-400 my-8">
          I'm now struggling to do something to make my dreams come true. This
          mission is not that easy, but I'm dam sure I can do something better
          at the end of my journey. My mission is to learn everything that I can
          learn.
        </p>
      </div>
      <div className="p-6 rounded-lg shadow-lg my-16">
        <h3 className="text-2xl font-bold text-[#ffcc13]">My Goal </h3>
        <p className="text-lg font-semibold text-gray-400 my-8">
          My goal is to become a software developer at some gient company like{" "}
          <span className="text-[#00095e] font-bold">
            google, facebook, amazon etc.
          </span>{" "}
          I will achive my goal one day. There is just one way to get to my
          goal, hard working. I will definetly work hard as much as I can
        </p>
      </div>
    </div>
  );
};

export default About;
