import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";

const Main = () => {
  return (
    <>
      <Header></Header>
      <main className="mt-36">
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Main;
