import React from "react";
// import Movies from "../Movies";
import Yourmovies from "./Yourmovies";

import {useState} from 'react';

let movies = [
  {
    id:1,
    name: "Batman1",
    genre: "Action",
    price: "4.99$",
    inStock: 0
  },
  {
    id:2,
    name: "Batman2",
    genre: "Action",
    price: "4.99$",
    inStock: 1
  },
  {
    id:3,
    name: "Batman3",
    genre: "Action",
    price: "4.99$",
    inStock: 2
  },
  {
    id:4,
    name: "Batman4",
    genre: "Action",
    price: "4.99$",
    inStock: 3
  },
  {
    id:5,
    name: "Batman5",
    genre: "Action",
    price: "4.99$",
    inStock: 4
  },
  {
    id:6,
    name: "Batman6",
    genre: "Action",
    price: "4.99$",
    inStock: 5
  },
  {
    id:7,
    name: "Batman7",
    genre: "Action",
    price: "4.99$",
    inStock: 6
  },
  {
    id:8,
    name: "Batman8",
    genre: "Action",
    price: "4.99$",
    inStock: 7
  }
];

// const Home = () => {
//   return <h1>Home</h1>;
// };

movies = JSON.parse(localStorage.getItem("movies")) || movies;

function Home(){

 
  //should define also currentUser here:
  // let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  // and set current user on login

  // const[yourMovies, setYourMovies] = useState("");

  const[moviesState, setMovies] = useState(movies);
  let yourMovies = JSON.parse(localStorage.getItem("yourmovies")) || [];

  const handleRent = (movie) =>{

    if(movie.inStock ===0){
      alert("This movie is out of stock!");
      return;
    }
    // const updatedMovies = movies.map((m)=>{
    //   if(m.id===movie.id){
    //     return {...m, inStock: m.inStock -1};
    //   }
    //   return m;
    // });
    
    // setMovies(updatedMovies);
    // setYourMovies([...yourMovies, movie]);

  
    let updatedMovies = moviesState.map(m=>{
        if(m.id===movie.id){
          m.inStock--;
        }
        return m;
      });
      setMovies(updatedMovies);
      localStorage.setItem("movies", JSON.stringify(updatedMovies));

      let movieIndex = yourMovies.findIndex(m=>m.id===movie.id);
      if(movieIndex === -1){
        yourMovies.push({...movie, quantity: 1});
      }
      else{
        yourMovies[movieIndex].quantity++;
      }

      // yourMovies.push(movie);

      localStorage.setItem("yourmovies", JSON.stringify(yourMovies));

    //  const updatedMovie = {...movie, inStock:movie.inStock -1};
    //  movies = movies.map((m)=>(m.id===movie.id ? updatedMovie :m));
    //  localStorage.setItem("movies", JSON.stringify(movies));  
    
  };

  return(
    
    <div id="main">
    <div id="caption">
      <p>Available Movies</p>
    </div>
    <table id="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Price for 12h</th>
          <th>Is in stock</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          movies.map((movie)=>(
            <tr key={movie.id}>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.price}</td>
              <td>
                {movie.inStock>0 ? (
                 <img src={require("../icons/check.png")} alt="Is in stock"/>
                ) : (
                  <img src={require("../icons/cross.png")} alt="Out of stock"/>
                )}
              </td>
              <td>
                <p onClick={()=>handleRent(movie)}>Rent</p>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
   
    {/* console.log(yourMovies); */}
    </div>
    
  );
}


export default Home;