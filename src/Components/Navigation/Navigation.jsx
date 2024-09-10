import React from 'react'
import { Link } from 'react-router-dom'
import WolfMan from '../../Utilities/Images/wolf-without-teeth.jpg'
import Notification from '../../Utilities/Icons/user.png'
import './Navigation.css'
import LogoImage from '../../Utilities/Icons/logo-64.png'
const Navigation = () => {
  return (
    <div className='navigation-parent-component'>
        <div className='logo-navigation-component'>
            <img src={LogoImage} alt="this is an image" />
            <article>ania</article>
        </div>
        <div className='navigation-component-links'>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Featured</Link>
                    </li>
                    <li>
                        <Link to="/trending">Trending</Link>
                    </li>
                    <li>
                        <Link to="/tv-shows">Shows</Link>
                    </li>
                    <li>
                        <Link to="/popular">Popular</Link>
                    </li>
                    <li>
                        <Link to="/recently-added">Recent</Link>
                    </li>
                    <li>
                        <Link className='notification-navigations' to="/sign-up"><img src={Notification} alt="this is an image"  /></Link>
                    </li>
                </ul>
            </nav>
        </div>
        <img src={WolfMan} alt="this is an image" className='image-profile'/>
    </div>
  )
}

export default Navigation
export { WolfMan } 