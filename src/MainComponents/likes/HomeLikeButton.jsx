import React, { useState } from 'react';
import axios from 'axios';

const HomeLikeButton = (props) => {
  
  const [likes, setLikes] = useState(props.artLikes ? props.artLikes + 0: 0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);

    } else {
      setLikes(likes + 1);
      console.log(props.artTitle)
    }
    setIsClicked(!isClicked);
  };
  

  return (
    <button className={ `like-button ${isClicked && 'liked'} mt-2` } onClick={ handleClick }>
      <span>Like</span>
    </button>
  );
};

export default HomeLikeButton;