import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ShowCase from "./pages/ShowCase";
import LocationDetail from "./pages/LocationDetail";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/showcase",
    element: <ShowCase />,
  },
  {
    path: "/location",
    element: <LocationDetail />,
  },
]);
