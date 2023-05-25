import { createBrowserRouter } from "react-router-dom";

import Welcome from "../pages/welcome/welcome.tsx";
import Login from "../pages/login/login.tsx";
import Register from "../pages/login/register.tsx";
import GamesByCategory from "../pages/games-by-category/index.tsx";
import AllGames from "../pages/all-games/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/category/:categoryId",
    element: <GamesByCategory />,
  },
  {
    path: "/games",
    element: <AllGames />,
  },
]);

export default router;
