import React from "react";
import Home from "../components/Home/Home";
import HomeDrink from "../components/HomeDrink/HomeDrink";
import HomeData from "../components/HomeData/HomeData";
import HomeAbout from "../components/HomeAbout/HomeAbout";
import HomeBeverage from "../components/HomeBeverages/HomeBeverage";

const HomePage = () => {
  return (
    <div>
      <Home />
      <HomeDrink />
      <HomeData />
      <HomeAbout />
      <HomeBeverage />
    </div>
  );
};

export default HomePage;
