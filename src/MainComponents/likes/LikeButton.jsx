import React, { useState } from 'react';
import axios from 'axios';

const LikeButton = (props) => {
  
  const [likes, setLikes] = useState(props.artLikes ? props.artLikes + 0: 0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);

    } else {
      setLikes(likes + 1);
      console.log(props.artTitle)
      axios.post('http://127.0.0.1:5000/add', {title: props.artTitle, likes: props.artLikes + 1})
      .then((res) => {
        console.log(res.data)
      }).catch((error) =>{
        console.log(error)
      });
    }
    setIsClicked(!isClicked);
  };
  

  return (
    <button className={ `like-button ${isClicked && 'liked'} mt-2` } onClick={ handleClick }>
      <span className="likes-counter">Like</span>
      <span className="likes-counter">{likes}</span>
    </button>
  );
};

export default LikeButton;