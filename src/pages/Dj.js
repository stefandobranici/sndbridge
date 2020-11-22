import React from "react";
import Banner from "../components/layout/banner/Banner";

import DjCardList from "../components/menu/dj/DjCardList";

import { djsRepository } from "../repository/djs";

export const Dj = () => {
  return (
    <div>
      {" "}
      <Banner
        title="Our DJs"
        subtitle="Only bringing in the very best artists of the South-West"
      />
      <DjCardList djList={djsRepository} />
    </div>
  );
};

export default Dj;
