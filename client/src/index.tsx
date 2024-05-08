import "./assets/styles/null.scss";
import "./assets/styles/global.scss";
import "./assets/styles/slider.scss";
import "./assets/styles/transition.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import OurTeamPage from "./pages/OurTeamPage";
import ShopPage from "./pages/ShopPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/team",
    element: <OurTeamPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<RouterProvider router={router} />);
