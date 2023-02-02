import Home from './Home';
// import Movies from '../Movies';
import {useState, useEffect} from 'react';

function Yourmovies ()  {

  let yourMovies = JSON.parse(localStorage.getItem("yourmovies")) || [];

  return (

    // <h1>Here will be your selected movies page</h1>;
    <div id="your-main">
      <div id="your-caption">Your Movies</div>
      <table id="yourTable">
  
        <thead>
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Time</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="yourBody">
    
          {
            yourMovies.map((movie)=>(
              <tr key={movie.id}>
                <td>{movie.name}</td>
                <td>{movie.genre}</td>
                <td><span id="time-span"><span id="time-sign-minus">{'<'}</span><span id="time"><span id="hours">12</span><span id="hours-sign">h</span></span><span id="time-sign-plus">{'>'}</span></span></td>
                <td>{movie.price}</td>
                <td><span id="minus-sign">-</span>{movie.quantity}<span id="plus-sign">+</span></td>
                <td>Remove</td>
              </tr>
            ))
          }

        </tbody>  
      </table>    
    </div>
  )
};

export default Yourmovies;