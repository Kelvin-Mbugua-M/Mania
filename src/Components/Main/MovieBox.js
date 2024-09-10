import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './MovieBox.css'
import { WolfMan } from '../Navigation/Navigation'
import { ApiKey,ImageUrl } from '../TMDB/Resources'
const MovieBox = ({props}) => {
  const [movieDetails,setMovieDetails] = useState([])
  useEffect(()=>{
    
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&sort_by=popularity.desc&primary_release_date.gte=2024-05-01&with_original_language=en`)
      .then(response=>response.json())
      .then(data=>setMovieDetails(data.results)).catch(error=>
        console.error(error))
      },[1])
      

  return (
    <div className="movie-box-parent">     
       {movieDetails.length>0?(
        movieDetails.map(element=>(
         <div className="movie-box-card" style={{backgroundImage:`url(${element.backdrop_path?ImageUrl+element.backdrop_path  :WolfMan})`}}>
        <div className="movie-box-card-box">
          <article>Title:{element.original_title}</article>
          <article>Date:{element.release_date
          }</article>
        </div>
        </div>
        ))
        
    
      ):(<div>
        no content to show
       </div>)} 
    </div>
  )
}

export default MovieBox