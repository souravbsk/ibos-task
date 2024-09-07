import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main>
      <Outlet></Outlet>
      <ScrollRestoration/>

    </main>
  );
};

export default AuthLayout;
