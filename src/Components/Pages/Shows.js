import React, { useEffect, useState, useParams, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Main/Footer";
import { SearchIcon } from "./SearchRender";
import { BaseUrl, ImageUrl, ApiKey } from "../TMDB/Resources";
import { WolfMan } from "../Navigation/Navigation";
import "./Show.css";
import "../Main/MovieBox.css";
import Loader from "../StylesAll/Loader";
const Shows = () => {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredShows, setFilteredShows] = useState([]);
  const searchObject = useRef("");
  const getSearchData = (value) => {
    fetch(`${BaseUrl}search/tv?api_key=${ApiKey}&query=${value}`)
      .then((response) => response.json())
      .then((data) => {
        setShows(data.results);
        console.log(data.results);
      })
      .catch((Error) => console.log("failed search operation"));
  };
  const decideSearch = (value) => {
    if (value.length > 4) {
      return getSearchData(value);
    } 
    else if(value.length ===0){
        getSearchData("m")
    }
     else return getSearchData("m");
  };
  useEffect(() => {
    getSearchData("m");
  }, []);
  return (
    <div className="main-shows-body-parent">
      <Navigation />
      <div className="display-body-shows">
        <div className="search-component">
          <input
            type="text"
            name={search}
            id={search}
            value={search}
            ref={searchObject}
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
              decideSearch(search)
            }}
          />
          <button onClick={decideSearch(search)}>
            <img src={SearchIcon} alt="" />
          </button>
        </div>
        <div className="search-results-display">
          <div className="link-show-js">
            {shows.length ? (
              shows.map((value, index) => (
                <div
                  className="movie-box-card"
                  key={index}
                  style={{
                    backgroundImage: `url(${
                      value.backdrop_path
                        ? ImageUrl + value.backdrop_path
                        : WolfMan
                    })`,
                  }}
                >
                  <Link to={value.id}>
                    <div className="movie-box-card-box">
                      <article>Title : {value.original_name}</article>
                      <article> Name : {value.name}</article>
                      <article>First Air Date : {value.first_air_date}</article>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shows;
