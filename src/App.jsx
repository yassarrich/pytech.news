import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProfileHome from './ProfileHome.jsx'
import Footer from './Footer.js'
import LikedPost from './LikedPost.jsx'
import Home from "./Home.jsx" 
import Likes from "./Likes.jsx"

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/account" element={<ProfileHome />}/>
          <Route path="/likedPost" element={<Likes />}/>
        </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  )
}

export default App