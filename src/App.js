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
      <h1>Welcome to CaseyBook! Coming soon! Watch out Zuck, I'm onto you!!</h1>
    </div>
  );
}

export default App;
