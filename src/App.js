import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

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

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
      .then(resp => {
        const newUsers = resp.data.results.map(usr => {
          const normalizedUser = {
            name: usr.name.first,
            location: usr.location.city,
            birthday: usr.dob.date,
            about: usr.email,
            profile_picture: usr.picture.medium
          }
          return normalizedUser;
        })

        setUsers([ admin, ...newUsers ])
      }).catch(err => console.error(err))
  }, [])

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
