import React from 'react'
import { useEffect ,useState ,useRef } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../StylesAll/Loader'
import Navigation from '../Navigation/Navigation'
import Footer from '../Main/Footer'
import {ApiKey ,ImageUrl,BaseUrl}  from '../TMDB/Resources.js'

import './Recent.css'
const Recent = () => {
    let page = 0
    const [display, setDisplay] = useState([])
    const fetchDisplay = (value) =>{
        fetch(`${BaseUrl}discover/movie?api_key=${ApiKey}&&sort_by=release_date.desc&vote_count.gte=100&language=en-US&page=${value}`)
        .then(response=>response.json())
        .then(data=>{setDisplay((preData)=>[...preData,...data.results]);console.log(display)})
        .catch(Error=>console.log('failed to fetch'))
    }
    useEffect(()=>{
        fetchDisplay(4)
        
    },[1])
  return (
    <div className="recent-main-parent-component">
        <Navigation />
        <div className="content-main-recent-body">
        {display.length?display.map((value,index)=>(
           
            <Link key={index} to={value.id}>
                <div className="div-recent-card"  style={{backgroundImage:`url(${ImageUrl+value.backdrop_path})`}} >
                    <div className="recent-card-content" style={{backgroundImage:`url(${ImageUrl+value.poster_path})`}}>
                        <article>Original Title :{ value.title}</article>
                        <article>Release Date :{value.release_date}</article>
                    </div>
                </div>
            </Link>
        
        )):<Loader/>}
        </div> 
        <Footer/>
    </div>
  )
}

export default Recent