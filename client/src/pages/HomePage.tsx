import React from "react";

import Layout from "../components/Layout/Layout";
import Clothes from "../components/Home/Clothes/Clothes";
import Welcome from "../components/Home/Welcome/Welcome";
import Care from "../components/Home/Care/Care";
import Collection from "../components/Home/Collection/Collection";
import Discount from "../components/Home/Discount/Discount";
import BuyLess from "../components/Home/BuyLess/BuyLess";
import PerfectMatch from "../components/Home/PerfectMatch/PerfectMatch";
import Transparency from "../components/Home/Transparency/Transparency";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Clothes />
      <Welcome />
      <Care />
      <Collection />
      <Discount />
      <BuyLess />
      <PerfectMatch />
      <Transparency />
    </Layout>
  );
};

export default HomePage;
