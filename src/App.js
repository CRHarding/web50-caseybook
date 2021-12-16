import './App.css';
import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

import User from './Components/User';

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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <h1>Welcome to CaseyBook!</h1>
      <Route path="/profile">
        <User user={users[0]} />
      </Route>
    </div>
  );
}

export default App;
