import './App.css';
import React, { useState } from 'react';

const admin = {
  name: "CRHarding",
  location: "NYC",
  birthday: "01/01/1970",
  about: "Likes long walks on the beach, puppies, and cheeseburgers.",
  profile_picture: "https://www.mikeymo.nl/wp-content/uploads/2019/06/thor-dark-world-splash.jpg"
}

function App() {
  const [users, setUsers] = useState([admin]);

  return (
    <div className="App">
      <h1>Welcome to CaseyBook!</h1>
      <div className="user-profile-wrapper">
        <h2>{users[0].name}</h2>
        <img src={users[0].profile_picture} alt="user" />
        <p>{users[0].about}</p>
      </div>
    </div>
  );
}

export default App;
