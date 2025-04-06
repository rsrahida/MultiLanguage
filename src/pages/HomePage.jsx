import React from "react";
import Home from "../components/Home/Home";
import HomeDrink from "../components/HomeDrink/HomeDrink";
import HomeData from "../components/HomeData/HomeData";

const HomePage = () => {
  return (
    <div>
      <Home />
      <HomeDrink />
      <HomeData />
    </div>
  );
};

export default HomePage;
