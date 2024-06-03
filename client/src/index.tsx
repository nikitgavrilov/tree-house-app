import "./assets/styles/null.scss";
import "./assets/styles/global.scss";
import "./assets/styles/slider.scss";
import "./assets/styles/transition.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import OurTeamPage from "./pages/OurTeamPage";
import ShopPage from "./pages/ShopPage";
import RegPage from "./pages/RegPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import AdminPage from "./pages/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/shop/:id",
    element: <ProductPage />,
  },
  {
    path: "/team",
    element: <OurTeamPage />,
  },
  {
    path: "/reg",
    element: <RegPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
