import React from "react";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomBanner from "./HomeBanner/HomBanner";
import HomeService from "./HomeService/HomeService";

const Home = () => {
  return (
    <div>
      <HomBanner />
      <HomeService />
      <HomeAbout />
    </div>
  );
};

export default Home;
