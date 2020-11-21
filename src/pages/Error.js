import React from "react";
import { Link, withRouter } from "react-router-dom";

import Banner from "../components/layout/banner/Banner";

export const Error = () => {
  return (
    <Banner title="404" subtitle="page not found">
      <Link to="/home">
        <button type="button" className="btn-primary-main">
          Return Home
        </button>
      </Link>
      <div style={{ height: "24vh", backgroundColor: "white" }} />
    </Banner>
  );
};

export default withRouter(Error);
