import React from 'react';

import { BrowserRouter as Router,   Route } from "react-router-dom"

import NavBar from "./components/NavBar.js"
import Register from "./components/Register"
import Profile from "./components/Profile"
import Users from "./components/user/Users"

function App() {
  return (
    <React.Fragment>

      
      <Router>

      <div className="container">
      <NavBar />

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/profile">
        <Profile />        
      </Route>

      <Route path="/users">
        < Users />        
      </Route>

      

      

      

      </div>
      </Router>

      
    </React.Fragment>
  );
}

export default App;
