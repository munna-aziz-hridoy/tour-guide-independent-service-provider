import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGoogle,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-[#00095e]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div>
            <img src={logo} alt="" />
            <p className="text-lg font-semibold text-slate-400 my-5">
              {" "}
              I'm here to arrange your tour plan and guide you to the best
              places you may want to se
            </p>
            <div className="flex justify-start items-center gap-5 text-white text-3xl my-4">
              <FontAwesomeIcon
                href="https://www.facebook.com"
                icon={faFacebookSquare}
                className="cursor-pointer hover:text-[#ffcc13] "
              />
              <FontAwesomeIcon
                href="https://www.google.com"
                icon={faGoogle}
                className="cursor-pointer hover:text-[#ffcc13] "
              />
              <FontAwesomeIcon
                href="https://www.github.com"
                icon={faGithub}
                className="cursor-pointer hover:text-[#ffcc13] "
              />
              <FontAwesomeIcon
                href="https://www.instagram.com"
                icon={faInstagram}
                className="cursor-pointer hover:text-[#ffcc13] "
              />
            </div>
          </div>
          <div>
            <h2 className="text-slate-300 font-bold capitalize text-2xl ">
              Quick Link
            </h2>
            <div className="p-4 flex flex-col gap-2">
              <Link
                to="/"
                className="text-white hover:text-[#ffcc13] text-lg font-semibold w-fit"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-white hover:text-[#ffcc13] text-lg font-semibold w-fit"
              >
                Services
              </Link>
              <Link
                to="/blogs"
                className="text-white hover:text-[#ffcc13] text-lg font-semibold w-fit"
              >
                Blogs
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-[#ffcc13] text-lg font-semibold w-fit"
              >
                About
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-slate-300 font-bold capitalize text-2xl ">
              Usefull links
            </h2>
            <div className="p-4 flex flex-col gap-2">
              <Link
                to="/login"
                className="text-white hover:text-[#ffcc13] text-lg font-semibold w-fit"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white hover:text-[#ffcc13] text-lg font-semibold w-fit"
              >
                Register
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-slate-100 font-bold capitalize text-2xl ">
              contact
            </h2>
            <div className="p-5 flex flex-col gap-4">
              <p className="text-lg font-semibold text-slate-300 capitalize">
                1700, gazipur sadar, gazipur
              </p>
              <p className="text-lg font-semibold text-slate-300 capitalize">
                <span className="text-xl font-bold text-[#ffcc13]">
                  email:{" "}
                </span>
                munna.aziz.hridoy@gmail.com
              </p>
              <p className="text-lg font-semibold text-slate-300 capitalize">
                <span className="text-xl font-bold text-[#ffcc13]">
                  phone:{" "}
                </span>
                +123 456 789
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
