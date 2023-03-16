import React, { useEffect } from 'react';
import axios from "axios";
import Stories from './Stories';
import Header from './Header';
import Footer from './Footer';

function App() {

  return (
    <div>
    <Header></Header>
    <Stories></Stories>
    <Footer></Footer>
    </div>
  );
}

export default App;


