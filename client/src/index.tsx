import "./assets/styles/null.scss";
import "./assets/styles/global.scss";
import "./assets/styles/slider.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import OurTeamPage from "./pages/OurTeamPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/team",
    element: <OurTeamPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<RouterProvider router={router} />);
