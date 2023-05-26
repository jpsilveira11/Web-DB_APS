import React from "react";
import * as ReactDOM from "react-dom/client";
import "./scss/bootstrap.scss";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import { NavbarWelcome } from "./components/navbar/navbar";

import router from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NavbarWelcome />
    <RouterProvider router={router} />
  </React.StrictMode>
);
