import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '../../Utilities/Icons/facebook.png'
import TwitterIcon from '../../Utilities/Icons/twitter.png'
import GithubIcon from '../../Utilities/Icons/github.png'
import './Footer.css'
const Footer = () => {
    const thisTime = new Date()
    const thisYear = thisTime.getFullYear()
  return (
    <div className="footer-parent">
        <div className="footer-child">
            <Link>Privacy Policy</Link>
            <Link to='/copy-right'>Terms of Service</Link>
        </div>
        <div className="footer-images">
            <button><img src={FacebookIcon} alt="This are icon images" /></button>
            <button><img src={TwitterIcon} alt="This are icon images" /></button>
            <button><img src={GithubIcon} alt="This are icon images" /></button>

        </div>
        <Link to='/copy-right'>CopyRight : {thisYear}</Link>
    </div>
  )
}

export default Footer