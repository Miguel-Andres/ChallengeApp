import React from 'react';

import { BrowserRouter as Router,   Route } from "react-router-dom"

import NavBar from "./components/NavBar.js"
import Register from "./components/Register"
import Profile from "./components/Profile"
import Users from "./components/user/Users"
import Store from "./components/Store"

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

      <Route path="/store">
        <Store/>       
      </Route>

      

      

      

      </div>
      </Router>

      
    </React.Fragment>
  );
}

export default App;
