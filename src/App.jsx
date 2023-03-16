import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import ProfileHome from './ProfileHome.jsx'
import Header from './Header.js'
import Footer from './Footer.js'
import TempNav from './TempNav.jsx'


import Home from "./Home.jsx" 

const App = () => {
  return (
    <>
    <BrowserRouter>
    <TempNav></TempNav>
      <main className='sm:px-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/profile" element={<ProfileHome />}/>
        </Routes>
      </main>
    </BrowserRouter>
    <Footer></Footer>
    </>
  )
}

export default App