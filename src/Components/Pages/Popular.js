import React from "react";
import Navigation from "../Navigation/Navigation";
import MovieBox from "../Main/MovieBox";
import Loader from "../StylesAll/Loader";
import Footer from '../Main/Footer.jsx'

const Popular = () => {
  return (
    <>
      <Navigation />
      <MovieBox/>
      <Footer/>
    </>
  );
};

export default Popular;
