import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProfileHome from './MainComponents/profile/ProfileHome.jsx'
import Footer from './MainComponents/body/Footer.js'
import Home from "./MainComponents/home/Home.jsx" 
import Likes from "./MainComponents/likes/Likes.jsx"

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/account/*" element={<ProfileHome />}/>
          <Route path="/likedPost" element={<Likes />}/>
        </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  )
}

export default App