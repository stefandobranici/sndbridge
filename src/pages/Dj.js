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
        subtitle="DJs from all across the UK come to Second Bridge to electrify the night"
      />
      <DjCardList djList={djsRepository} />
    </div>
  );
};

export default Dj;
