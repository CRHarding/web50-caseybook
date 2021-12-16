import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import User from './Components/User';
import Users from './Components/Users';
import PostForm from './Components/PostForm';

const admin = {
  name: "CRHarding",
  location: "NYC",
  birthday: "01/01/1970",
  about: "Likes long walks on the beach, puppies, and cheeseburgers.",
  profile_picture: "https://www.mikeymo.nl/wp-content/uploads/2019/06/thor-dark-world-splash.jpg",
  uuid: "loremipsumdolor"
}

const post = {
  title: '',
  content: ''
}

function App(props) {
  const [users, setUsers] = useState([admin]);
  const [formValues, setFormValues] = useState(post);
  const [posts, setPosts] = useState([post]);

  const history = useHistory();

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
      .then(resp => {
        const newUsers = resp.data.results.map(usr => {
          const normalizedUser = {
            name: usr.name.first,
            location: usr.location.city,
            birthday: usr.dob.date,
            about: usr.email,
            profile_picture: usr.picture.large,
            uuid: usr.login.uuid
          }
          return normalizedUser;
        })

        setUsers([ admin, ...newUsers ])
      }).catch(err => console.error(err))
  }, [])

  const change = (evt) => {
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
  }

  const submit = (evt) => {
    evt.preventDefault();
    setPosts([ ...posts, formValues ]);
    setFormValues(post);
    history.push('/profile');
  }

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/users">Friends Page</Link>
      </nav>
      <h1>Welcome to CaseyBook!</h1>
      <Route path="/profile">
        <User user={users[0]} posts={posts} />
      </Route>
      <Route path="/users">
        <Users friends={users} />
      </Route>
      <Route path="/post">
        <PostForm
          change={change}
          submit={submit}
          formValues={formValues}
        />
      </Route>
    </div>
  );
}

export default App;
