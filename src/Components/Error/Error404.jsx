import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'
import LibertyStatue from '../../Utilities/Images/statue-liberty-new-york.png'
const Error404 = () => {
  return (
    <div className="main-error-404-component">
        <div className="error-404-data-section">
            <h1>404</h1>
            <article className='article-state'>Oops! you've wandered off course</article>
            <article className="error-404-info-to-main">Let's navigate back together</article>
            <Link to='/home'>Return to Home</Link>
        </div>
        <img src={LibertyStatue} alt="" className="error-404-statue-of-liberty" />
    </div>
  )
}

export default Error404
export {LibertyStatue}