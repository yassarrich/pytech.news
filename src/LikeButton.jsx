import React, { useState } from 'react';


const LikeButton = (props) => {

  const [likes, setLikes] = useState(props.likes ? props.likes + 0: 0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
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