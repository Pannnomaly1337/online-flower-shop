import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import User from "./pages/User";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";

const router = createBrowserRouter ([
{
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/user", element: <User /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

export default function App ()
{
  return (
    <CartProvider>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </CartProvider>
  );
}