import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";
import App from "./App";

import Dashboard from "./components/dashboard";

import AdAccount from "./components/ad-account";
import Billing from "./components/billing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/receipt",
        element: <Billing />,
      },
      {
        path: "/ad-account",
        element: <AdAccount />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
