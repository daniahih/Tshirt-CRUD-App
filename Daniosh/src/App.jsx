import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import LoginPage from "./pages/LoginPage";

const routes = [
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
];

export default function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
