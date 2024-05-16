import React from "react";

import Layout from "../components/Layout/Layout";
import Info from "../components/OurTeam/Info/Info";
import WeCommitted from "../components/OurTeam/WeCommitted/WeCommitted";
import Vision from "../components/OurTeam/Vision/Vision";
import Manufacture from "../components/OurTeam/Manufacture/Manufacture";
import Mission from "../components/OurTeam/Mission/Mission";

const OurTeamPage: React.FC = () => {
  return (
    <Layout>
      <Info />
      <WeCommitted />
      <Vision />
      <Manufacture />
      <Mission />
    </Layout>
  );
};

export default OurTeamPage;
