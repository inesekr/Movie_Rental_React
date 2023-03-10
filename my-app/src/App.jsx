import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useHistory, NavLink} from "react-router-dom";
// import NavBar from './NavBar';

import Home from './pages/Home';
import Yourmovies from './pages/Yourmovies';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Footer from './Footer';
import Header from './Header';

import './App.css';


const App = ()=>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(()=>{
    const loggedIn = localStorage.getItem("isLoggedIn");
    if(loggedIn){
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = ()=>{
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    // navigate.push("/login");
  };

  if (!isLoggedIn){
    return(
      <>
        <Header/>
        <Login></Login>  
        <Footer />   
      </>      
    )
  } else{
    return(
      <>
        <Header/>
        <Router>
          <nav id="nav">
            <ul id="nav-list">
              <li >
                <Link id="home-link" to="/">Home</Link>
              </li>
              <li   >
                <Link id="link" to="/yourmovies">YourMovies</Link>
              </li>
              <li >
                <Link id="link" to="/profile">Profile</Link>
              </li>
              <li >
                <Link id="link" to="#" onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            {/* <Route path='/' element={<NavBar></NavBar>}> */}
            <Route index element={<Home></Home>}></Route>
            <Route path='/yourmovies' element={<Yourmovies></Yourmovies>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
            {/* </Route> */}
          </Routes>
        </Router>
        <Footer></Footer>
      </>
    )
  }
}

export default App;
