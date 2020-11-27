import React from "react";
import { Route, Redirect } from "react-router-dom";

import { AdminPanel } from "../../pages";

const permission = false;

const Admin = () => {
  return (
    <Route
      render={() => (permission ? <AdminPanel /> : <Redirect to="/login" />)}
    />
  );
};

export default Admin;
