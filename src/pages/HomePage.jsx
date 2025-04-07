import React from "react";
import Home from "../components/Home/Home";
import HomeDrink from "../components/HomeDrink/HomeDrink";
import HomeData from "../components/HomeData/HomeData";
import HomeAbout from "../components/HomeAbout/HomeAbout";

const HomePage = () => {
  return (
    <div>
      <Home />
      <HomeDrink />
      <HomeData />
      <HomeAbout />
    </div>
  );
};

export default HomePage;
