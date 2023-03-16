import React from 'react'

export default function ArticleTimeline(props) {

const StoryBoards = (props) => {
    const {menu, articles} = props
    if(articles.length > 0){
        return (

            articles.map((articles, index) => {
                return(
            
                <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="bg-white p-6 rounded-lg">
                        <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={`https://picsum.photos/seed/${articles.id}/300/200`} alt="Image Size 720x400"/>
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Author: {articles.author}</h3>
                        <h2 key ={articles.id} class = "text-lg text-gray-900 font-medium title-font mb-4 ">
                        { articles.urlLink ? <a target="_blank" rel="noopener noreferrer" href={articles.urlLink}>{articles.title} </a> : articles.title} 
                        </h2>

                        <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    </div>
                </div>
                 

                    
                )
            })
        )
} else{
    return (
    <div className='justify-center'>
    <h1 >Loading</h1>
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
