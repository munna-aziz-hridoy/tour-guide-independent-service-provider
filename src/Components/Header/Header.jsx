import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import profile from "../../assets/image/profile.png";
import logo from "../../assets/image/logo.png";
import CustomLink from "../CustomLink/CustomLink";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [showUserDetals, setShowUserDetails] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user] = useAuthState(auth);

  const menuItems = [
    { id: 1, itemName: "home", pathLink: "/" },
    { id: 2, itemName: "services", pathLink: "/services" },
    { id: 3, itemName: "blogs", pathLink: "/blogs" },
    { id: 4, itemName: "about", pathLink: "/about" },
  ];

  const profilePhoto = user?.photoURL || profile;

  const handleOpenMeu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <header className="h-32 shadow-xl">
      <nav className="container mx-auto h-full flex justify-between items-center relative">
        <div className="logo-container h-full flex justify-center items-center">
          <img src={logo} alt="" />
        </div>
        <div className="w-2/3menu-wrapper flex justify-between">
          <ul
            className={`menu-container ${
              isMenuOpen ? " top-32" : " top-[-500px]"
            } flex justify-center items-center gap-7  duration-300 flex-col lg:flex-row absolute lg:static bg-white lg:bg-transparent w-full lg:w-fit top-32 lg:top-0 left-0  shadow-lg lg:shadow-none rounded-b-lg pb-5 lg:pb-0`}
          >
            {menuItems.map((item) => {
              const { id, itemName, pathLink } = item;
              return (
                <CustomLink to={pathLink} key={id}>
                  {itemName}
                </CustomLink>
              );
            })}
            <li>
              <div className="h-full w-full bg-[#ffcc13] flex justify-center gap-5 items-center rounded-md shadow-md p-4">
                {user ? (
                  <>
                    <button
                      onClick={handleSignOut}
                      className="text-[#00095e] font-bold text-xl capitalize"
                    >
                      log out
                    </button>
                    <div
                      onClick={() => setShowUserDetails(!showUserDetals)}
                      className="w-16 h-16 rounded-full p-1 bg-[#00095e] relative cursor-pointer"
                    >
                      <img src={profilePhoto} alt="" className="rounded-full" />
                      {showUserDetals ? (
                        <div className="absolute w-[280px] h-[130px] left-[-160px] top-[110px] bg-white shadow-lg rounded-xl p-5 flex flex-col justify-center items-center gap-4">
                          <h2 className="font-bold text-2xl text-[#00095e] capitalize">
                            {user ? user.displayName : "No Names"}
                          </h2>
                          <p className="font-semibold text-lg text-[#00095e]">
                            {user ? user.email : "No Email"}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[#00095e] font-bold text-xl capitalize"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="text-[#00095e] font-bold text-xl capitalize"
                    >
                      register
                    </Link>
                  </>
                )}
              </div>
            </li>
          </ul>

          <div
            onClick={handleOpenMeu}
            className="mobile-menu flex lg:hidden w-fit cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="text-2xl text-[#00095e]"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
