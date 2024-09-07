import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Header></Header>
      <main className="mt-36">
        <Outlet></Outlet>
      </main>
      <Footer>

      </Footer>
      <ScrollRestoration/>

    </>
  );
};

export default Main;
