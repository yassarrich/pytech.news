import React from 'react'
import HomeLikeButton from '../likes/HomeLikeButton';

export default function HomeTimeline(props) {

const StoryBoards = (props) => {
    const {menu, articles} = props;
    var temp = articles.slice(0,3);
    if(temp.length > 0){
        return (
            
            temp.map((articles, index) => {
                return(
                    <>

                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="bg-white  p-6 rounded-lg border">
                        <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={`https://picsum.photos/seed/${articles.id}/300/200`} alt="Image Size 720x400"/>
                        
                        <h2 key ={articles.id} className = "text-lg text-gray-900 font-medium title-font mb-2 ">
                        { articles.urlLink ? <a target="_blank" rel="noopener noreferrer" href={articles.urlLink}>{articles.title} </a> : articles.title} 
                        </h2>
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-4">Author: {articles.author}</h3>

                        <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a urna elementum, tempor leo id, lobortis nisi. Morbi ullamcorper luctus ante, id pellentesque neque tempor sed.</p>
                    <a href='http://127.0.0.1:5000/login'>
                        <HomeLikeButton /> 
                    </a>
                    </div>
                </div>
                 </>

                    
                )
            })
        )
} else{
    return (
    <div className='justify-center'>
    <h1 >Loading...</h1>
    </div>
    )
}

}
return(
    <>
        {StoryBoards(props)}
    </>
)
}
