import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
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
        path: "links",
        element: <Links />,
      },
      {
        path: "profile",
        element: <ProfileDetails />,
      },
      {
        path: "preview",
        element: <Preview />,
      },
      {
        path: "/",
        element: <Navigate to="/links" replace />,
      },
      {
        path: "*",
        element: <Navigate to="/links" replace />,
      },
    ],
  },
]);

export default router;
