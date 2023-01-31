import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useHistory, NavLink} from "react-router-dom";
// import NavBar from './NavBar';

import Home from './pages/Home';
import Yourmovies from './pages/Yourmovies';
import Profile from './pages/Profile';
import Login from './pages/Login';


const App = ()=>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();


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
  // navigate.push("/login");
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
                {/* <Route path='/login' element={<Login></Login>}></Route> */}
              {/* </Route> */}
            </Routes>
      </Router>
    )
  }
}

export default App;
