import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import AuthProviders from "./Providers/AuthProviders";
import CartProvider from "./Providers/CartProvider";
import RefetchProvider from "./Providers/RefetchProvider";
import OrderProvider from "./Providers/OrderProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RefetchProvider>
      <AuthProviders>
        <OrderProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </OrderProvider>
      </AuthProviders>
    </RefetchProvider>
  </StrictMode>
);
