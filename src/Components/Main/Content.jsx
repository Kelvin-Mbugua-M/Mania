import React from 'react'
import { BrowserRouter as Router,Route ,Routes,useParams} from 'react-router-dom'
import './Content.css'
import Home from './Home.jsx'
import SignUp from '../Sign_up_in/SignUp.jsx'
import SignIn from '../Sign_up_in/SignIn.jsx'
import Error404 from '../Error/Error404.jsx'
import RouterComponent from '../Router/RouterComponent.jsx'
import SeriesDetails from '../Details/Series/SeriesDetails.jsx'
import Trending from '../Pages/Trending.js'
import Popular from '../Pages/Popular.js'
import SearchRender from '../Pages/SearchRender.jsx'
const Content = () => {
  const {toMovieId,toSeriesId} = useParams()
  return (
    <div className='main-app-body'>
        <Router>
          <Routes>
            <Route exact path ={'/home' || '/'} element={<Home/>}/>
            <Route exact path ={ '/'} element={<Home/>}/>
            <Route exact path = '/sign-up' element={<SignUp/>} />
            <Route exact path = '/sign-in' element={<SignIn/>}/>
            <Route exact path='/error' element={<Error404/>}/>
            <Route exact path='/series' element={<SeriesDetails/>}/>
            <Route exact path='/trending' element={<SearchRender/>}/>
            <Route exact path='/popular' element={<Popular/>}/>



            <Route path = '*' element={<RouterComponent/>} />
          </Routes>
        </Router>
        </div>
  )
}

export default Content