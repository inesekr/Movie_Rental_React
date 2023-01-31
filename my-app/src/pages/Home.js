import React from "react";
import Movies from "../Movies";

// const Home = () => {
//   return <h1>Home</h1>;
// };

function Home(){
  return(
    <div>
      <h1>Available Movies</h1>

      <table>
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
            Movies.map((movie)=>(
              <tr key={movie.id}>
                <td>{movie.name}</td>
                <td>{movie.genre}</td>
                <td>{movie.price}</td>
                <td>{movie.inStock}</td>
                <td>Rent</td>
              </tr>
            ))
          }
        </tbody>
      </table>
 
    </div>
  );
}

export default Home;