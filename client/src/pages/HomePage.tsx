import React from "react";
import Layout from "../components/Layout/Layout";
import Clothes from "../components/Clothes/Clothes";
import Welcome from "../components/Welcome/Welcome";
import Care from "../components/Care/Care";
import Collection from "../components/Collection/Collection";
import Discount from "../components/Discount/Discount";
import BuyLess from "../components/BuyLess/BuyLess";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Clothes />
      <Welcome />
      <Care />
      <Collection />
      <Discount />
      <BuyLess />
    </Layout>
  );
};

export default HomePage;
