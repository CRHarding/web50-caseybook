import React from 'react';

const User = (props) => {
  return (
    <div className="user-profile-wrapper">
      <h2>{props.user.name}</h2>
      <img src={props.user.profile_picture} alt="user" />
      <p>{props.user.about}</p>
    </div>
  )
}

export default User;
