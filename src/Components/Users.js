import React from 'react';

import User from './User';

const Users = (props) => {
  return (
    <div className="users-wrapper">
      {props.friends.map(friend => {
        return <User key={friend.uuid} user={friend} />
      })}
    </div>
  )
}

export default Users;
