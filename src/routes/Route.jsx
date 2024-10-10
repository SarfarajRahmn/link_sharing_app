import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProfileDetails from "../pages/ProfileDetails";
import Preview from "../pages/Preview";
import Links from "../pages/links";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Links />,
      },
      {
        path: "/ProfileDetails",
        element: <ProfileDetails />,
      },
      {
        path: "/Preview",
        element: <Preview />,
      },
    ],
  },
]);

export default router;
