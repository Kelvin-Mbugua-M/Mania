import React from 'react'
import { useState , useEffect ,useRef } from 'react'
import { Link , useParams } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import './SearchRender.css'
import SearchIcon from '../../Utilities/Icons/search.png'
import { WolfMan } from '../Navigation/Navigation'
import Default from '../../Utilities/Images/Default.jpg'
 import { ApiKey ,ImageUrl,BaseUrl } from '../TMDB/Resources'
import Loader from '../StylesAll/Loader.js'
import Footer from '../Main/Footer.jsx'
const SearchRender = ({props,withLink}) => {
  const [searchResults,setSearchResults] = useState([])
  const [searchBarValue , setSearchBarValue] = useState('')
  const searchBar = useRef('')
  const setSearchUrl = props
  const Bias = withLink || ''
  const fetchData = (value)=>{
    fetch(`${BaseUrl}${setSearchUrl}api_key=${ApiKey}&query=${value}${Bias}`)
    .then(response=>response.json())
    .then(data=>setSearchResults(data.results))
    .catch(Error=>console.error('failed to fetch'))
    
  }
  const DecideUpdateFetch=(value)=>{
    const LengthTest = value.split('')
    if(LengthTest.length>0){
      fetchData(value)
    }
    else if(LengthTest ===0){
      fetchData('vampire')
    }
    else return null
  }
  useEffect(()=>{
    DecideUpdateFetch('the')
  },[0])
  return (
    <div className="search-render-parent">
        <Navigation/>
        <div className="search-bar-main-parent">
            <div className="search-bar-element">
                <input type="text" name="" id="" placeholder='search' value={searchBarValue} onChange={(e)=>{setSearchBarValue(e.target.value);DecideUpdateFetch(e.target.value)}} ref={searchBar}/>
                <button onClick={()=>fetchData(searchBar.current.value)}>
                   <img src={SearchIcon} alt="" /> 
                </button>
            </div>
          
        </div>
        <div className="search-bar-results-parent">
          {searchResults.length?(searchResults.map((value,index)=>(
            <div className="search-results-cards" key={index} style={{backgroundImage:`url('${value.backdrop_path?ImageUrl+value.backdrop_path:Default}')`}}>
            <div className="search-results-cards-data">
                <article>Title :{value.original_title}</article>
                <article>Date : {value.release_date} </article>
                <article>Rating : {value.popularity}</article>
                <article>Review : {value.overview}</article>
            </div>
          </div>))):(<Loader/>)}
        </div>
        <Footer/>
    </div>
  )
}

export default SearchRender
export {SearchIcon}