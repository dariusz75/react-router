import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home, Products, Contact, Admin, Error } from "../pages";

const PageRouting = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={Admin} />
      <Route component={Error} />
    </Switch>
  );
};

export default PageRouting;
