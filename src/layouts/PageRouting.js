import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  Home,
  Products,
  ProductPage,
  Contact,
  Admin,
  Login,
  Error,
} from "../pages";

const PageRouting = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/products" component={Products} />
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <Route component={Error} />
    </Switch>
  );
};

export default PageRouting;
