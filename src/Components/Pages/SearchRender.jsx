import React from 'react'
import { useState , useEffect ,useRef } from 'react'
import { Link , useParams } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import './SearchRender.css'
import SearchIcon from '../../Utilities/Icons/search.png'
import { WolfMan } from '../Navigation/Navigation'
import Default from '../../Utilities/Images/Default.jpg'
 import { ApiKey ,ImageUrl } from '../TMDB/Resources'
import Loader from '../StylesAll/Loader.js'
const SearchRender = ({props}) => {
  const [searchResults,setSearchResults] = useState([])
  const [searchBarValue , setSearchBarValue] = useState('')
  const searchBar = useRef('')

  const fetchData = (value)=>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${value}`)
    .then(response=>response.json())
    .then(data=>{setSearchResults(data.results);console.log(data.results)} )
    .catch(Error=>console.error(Error))
    
  }
  return (
    <div className="search-render-parent">
        <Navigation/>
        <div className="search-bar-main-parent">
            <div className="search-bar-element">
                <input type="text" name="" id="" placeholder='search' value={searchBarValue} onChange={(e)=>{setSearchBarValue(e.target.value);fetchData(e.target.value)}} ref={searchBar}/>
                <button onClick={()=>fetchData(searchBar.current.value)}>
                   <img src={SearchIcon} alt="" /> 
                </button>
            </div>
          
        </div>
        <div className="search-bar-results-parent">
          {searchResults.length?(searchResults.map((value,key)=>(
            <div className="search-results-cards" style={{backgroundImage:`url('${value.backdrop_path?ImageUrl+value.backdrop_path:Default}')`}}>
            <div className="search-results-cards-data">
                <article>Title :{value.original_title}</article>
                <article>Date : {value.release_date} </article>
                <article>Rating : {value.popularity}</article>
                <article>Review : {value.overview}</article>
            </div>
          </div>))):(<Loader/>)}
        </div>
    </div>
  )
}

export default SearchRender