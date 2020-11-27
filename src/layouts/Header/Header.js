import React from "react";
import { Route, Switch } from "react-router-dom";

import "./header.css";
import homePageImage from "../../images/homepage-image.jpg";
import productPageImage from "../../images/products-image.jpg";
import contactPageImage from "../../images/contact-image.jpg";
import adminPageImage from "../../images/admin-image.jpg";

function Header() {
  return (
    <>
      <Switch>
        <Route
          path="/"
          render={() => <img src={homePageImage} alt="london" />}
          exact
        />
        <Route
          path="/products"
          render={() => <img src={productPageImage} alt="london" />}
        />
        <Route
          path="/contact"
          render={() => <img src={contactPageImage} alt="london" />}
        />
        <Route
          path="/admin"
          render={() => <img src={adminPageImage} alt="london" />}
        />
        <Route render={() => <img src={homePageImage} alt="london" />} />
      </Switch>
    </>
  );
}

export default Header;
