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
    <div className="flex flex-wrap -m-4">
      <ArticleTimeline articles={articles}/>
    </div>
  );
}

export default Stories;
