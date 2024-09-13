import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Home.css";
import WolfMan from "../../Utilities/Images/wolf-without-teeth.jpg";
import DeadWOlf from '../../Utilities/Images/image.jpg'
import MovieBox from "./MovieBox";
import Footer from "./Footer";
const Home = () => {
  console.log(WolfMan);
  const date = Date.now();
  const Text = "Drama";
  const lengthy = "2h 41 min";
  return (
    <div className="home-main-component">
      <Navigation />
      <div
        className="main-home-welcome-picture-movie"
        style={{ backgroundImage: `url(${DeadWOlf})` }}
      >
        <h1>The Last Emperor</h1>
        <article>
          {date} . {Text} {lengthy}
        </article>
        <div className="home-main-link">
          <Link to="/error">More...</Link>
        </div>
      </div>
      <MovieBox/>
      <Footer/>
    </div>
  );
};

export default Home;
