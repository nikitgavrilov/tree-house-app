import React from "react";
import Layout from "../components/Layout/Layout";
import ShopAll from "../components/Shop/ShopAll/ShopAll";
import Products from "../components/Shop/Products/Products";

const ShopPage: React.FC = () => {
  return (
    <Layout>
      <ShopAll />
      <Products />
    </Layout>
  );
};

export default ShopPage;
