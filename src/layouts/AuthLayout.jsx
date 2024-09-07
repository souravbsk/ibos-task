import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main>
      <Outlet></Outlet>
    </main>
  );
};

export default AuthLayout;
