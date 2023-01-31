import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
// import NavBar from './NavBar';

import Home from './pages/Home.js';
import Yourmovies from './pages/Yourmovies.js';
import Profile from './pages/Profile.js';
import Login from './pages/Login.js';


const App = ()=>{
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(()=>{
    const loggedIn = localStorage.getItem("isLoggedIn");
    if(loggedIn){
      setIsLoggedIn(true);
    }
  }, []);

// const handleLogin = ()=>{
//   setIsLoggedIn(true);
//   localStorage.setItem("isLoggedIn", true);
// };

const handleLogout = ()=>{
  setIsLoggedIn(false);
  localStorage.removeItem("isLoggedIn");
};

// const isLoggedIn = ()=>{
//   return localStorage.getItem("isLoggedIn")==="true";
// };


  if (!isLoggedIn){
    return(
      <Login></Login>
    )
  } else{
    return(
      <Router>
          <nav>
          <>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/yourmovies">YourMovies</Link>
            </li>
            <li>
            <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="#" onClick={handleLogout}>Logout</Link>
            </li>
          </>
          </nav>
            <Routes>
              {/* <Route path='/' element={<NavBar></NavBar>}> */}
                <Route index element={<Home></Home>}></Route>
                <Route path='/yourmovies' element={<Yourmovies></Yourmovies>}></Route>
                <Route path='/profile' element={<Profile></Profile>}></Route>
              {/* </Route> */}
            </Routes>
      </Router>
    )
  }
}

export default App;
