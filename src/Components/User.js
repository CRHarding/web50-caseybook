import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
  return (
    <div className="user-profile-wrapper">
      <h2>{props.user.name}</h2>
      <img src={props.user.profile_picture} alt="user" />
      <p>{props.user.about}</p>
      {props.posts && (
        props.posts.map(post => {
          return (
            <div>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          )
        })
      )}
      <Link to="/post">Create a post</Link>
    </div>
  )
}

export default User;
