import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import Contact from "./routes/Contact.jsx";

// 1 - Configuração router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// 2 - Página de error
import ErrorPage from "./routes/ErrorPage.jsx";

// 3 - Componente base
import Home from "./routes/Home.jsx";

// 7 - rota dinamica
import Product from "./routes/Product.jsx";

// 8 - nested route
import Info from "./routes/Info.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3 - Componente base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 7 - rota dinamica
      {
        path: "products/:id",
        element: <Product />,
      },
      // 8 - nested route
      {
        path: "products/:id/info",
        element: <Info />,
      },
    ],
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
