import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
  return (
    <div className="user-profile-wrapper">
      <h2>{props.user.name}</h2>
      <img src={props.user.profile_picture} alt="user" />
      <p>{props.user.about}</p>
      <Link to="/post">Create a post</Link>
    </div>
  )
}

export default User;
