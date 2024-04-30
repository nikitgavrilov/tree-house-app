import React from "react";
import Layout from "../components/Layout/Layout";
import Clothes from "../components/Clothes/Clothes";
import Welcome from "../components/Welcome/Welcome";
import Care from "../components/Care/Care";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Clothes />
      <Welcome />
      <Care />
    </Layout>
  );
};

export default HomePage;
