import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProfileDetails from "../pages/ProfileDetails";
import Preview from "../pages/Preview";
import LinksPage from "../pages/LinksPage";
import PreviewLayout from "../layouts/PreviewLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/links",
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
        element: <Navigate to="/links" replace />,
      },
      {
        path: "*",
        element: <Navigate to="/links" replace />,
      },
    ],
  },
  {
    path: "/preview",
    element: <PreviewLayout />,
    children: [
      {
        path: "/preview",
        element: <Preview />,
      },
    ],
  },
]);

export default router;
