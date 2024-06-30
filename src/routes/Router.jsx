import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import ContactUs from "../pages/contactUs/ContactUs";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
          path: "/contact",
          element: <ContactUs />
        }
      ]
    },
  ]);