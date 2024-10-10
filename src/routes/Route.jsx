import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProfileDetails from "../pages/ProfileDetails";
import Preview from "../pages/Preview";
import LinksPage from "../pages/LinksPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/linkspage",
        element: <LinksPage />,
      },
      {
        path: "/profile",
        element: <ProfileDetails />,
      },
      {
        path: "/preview",
        element: <Preview />,
      },
      {
        path: "/",
        element: <Navigate to="/linkspage" replace />,
      },
      {
        path: "*",
        element: <Navigate to="/linkspage" replace />,
      },
    ],
  },
]);

export default router;
