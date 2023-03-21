import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import HomeTimeline from './HomeTimeline.jsx';
import HomeNav from './HomeNav.jsx';


const Home = () => {

  const [loading, setLoading]= useState(false);
  
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
    <HomeNav/>
    <main className='sm:px-8 px-4 py-8  bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Top 3 Recent Stories</h1>
        <p className="mt-2 text-[#666e75] text-[10px] max-w[500px]">Please Note that the API does not return an image or description for a caption, each image and caption is randomly generated for visual and styling purposes</p>
        <p className="mt-2 text-[#666e75] text-[14px] max-w[500px]">Browse through some of the recent articles which have been pulled from the HackerNews API</p>
        
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            Loading News...
          </div>
        ) : (
          <>
          
          <div class="flex flex-wrap -m-4">
            <HomeTimeline articles={articles}/>
          </div>
          </>
        )}
      </div>
    </section>
    </main>
    </>
  )
}

export default Home