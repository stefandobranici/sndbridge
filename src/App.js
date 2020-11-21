import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Landing from "./pages/Landing.js";
import Home from "./pages/Home.js";
import Events from "./pages/Events.js";
import Dj from "./pages/Dj.js";
import Gallery from "./pages/Gallery.js";
import ContactUs from "./pages/ContactUs.js";
import Error from "./pages/Error.js";

import Layout from "./components/layout/Layout.js";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/events/" component={Events} />
          <Route exact path="/dj/" component={Dj} />
          <Route exact path="/gallery/" component={Gallery} />
          <Route exact path="/contact-us/" component={ContactUs} />
          <Route component={Error} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
