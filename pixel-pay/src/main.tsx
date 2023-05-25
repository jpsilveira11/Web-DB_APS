import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/bootstrap.scss";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Welcome from "./pages/welcome/welcome.tsx";
import Login from "./pages/login/login.tsx";
import Register from "./pages/login/register.tsx";
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
