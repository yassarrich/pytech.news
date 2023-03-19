import { useState, useEffect } from 'react'
import axios from "axios";
import ArticleTimeline from './ArticleTimeline';

function Stories() {

  let profileData = []
  
const [articles, getArticles] = useState([]);
const baseUrl = 'http://127.0.0.1:5000/data';

useEffect(() => {
  getAllArticles();
}, []);

const getAllArticles = () => {
  axios.get(baseUrl).then((response) => {
    const allArticles = response.data;

    getArticles(allArticles)

  }).catch(error => console.error(`Error: ${error}`));
} 
  return (
    <>
    <div>
    <h1 className='text-center font-semibold mt-4 border-3'>Top Stories</h1>
    </div>
    <div className="flex flex-wrap mt-4 mb-4">
      <ArticleTimeline articles={articles}/>
    </div>
    </>
  );
}

export default Stories;
