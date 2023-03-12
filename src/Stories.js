import { useState } from 'react'
import axios from "axios";

function Stories() {

  const [profileData, setProfileData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url:"/data",
    })
    .then((response) => {
      const res =response.data
    
    for (let i =0; i < 20; i++){
      setProfileData(
        ({
        profile_name: res[i].title,
        url: res[i].urlLink,
        likes: res[i].likes,
        id: res[i].id
        }),
        )
    }
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    } )}
    console.log(profileData)
  
  return (
    <div className="App">
      <header className="App-header">
        {/* new line start*/}
        <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>url: {profileData.url}</p>
              <p>Likes: {profileData.likes}</p>
            </div>
        }
         {/* end of new line */}
      </header>
    </div>
  );
}

export default Stories;
