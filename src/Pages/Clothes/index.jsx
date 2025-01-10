import React, { useState } from "react";
import Navbar from "../../Layouts/nav";
import Footer from "../../Layouts/footer";
import Sort from "./Sort";

const Clothes = () => {
  return (
    <>
      <Navbar />
      <Sort />
      <Footer />
    </>
  );
};

export default Clothes;
