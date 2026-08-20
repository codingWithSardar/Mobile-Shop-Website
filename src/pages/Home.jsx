import React, { useContext, useEffect } from "react";
import Hero from "../components/Hero";
import CraftSection from "../components/CraftSection";
import Category from "../components/Category";
import { UserContext } from "../context/UserContext";
import Featured from "../components/Featured";
import Stats from "../components/Stats";
import BestSeller from "../components/BestSeller";
import Reviews from "../components/Reviews";

const Home = () => {
  const { fetchData } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Hero />
      <CraftSection />
      <Category />
      <Featured />
      <Stats />
      <div id="best-seller">
        <BestSeller />
      </div>

      <Reviews />
    </div>
  );
};

export default Home;
