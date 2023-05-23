import React from "react";
import { Route, createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/welcome/index";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default Routes;
