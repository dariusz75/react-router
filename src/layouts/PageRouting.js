import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "../pages";

const PageRouting = () => {
  return <Route path="/" component={Home} exact />;
};

export default PageRouting;
