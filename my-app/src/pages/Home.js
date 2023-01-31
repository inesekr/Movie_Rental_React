import React from "react";
import Movies from "../Movies.js";

// const Home = () => {
//   return <h1>Home</h1>;
// };

function Home(){
  return(
    <div>
      <h1>Home</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            Movies.map((movie)=>(
              <tr key={movie.id}>
                <td>{movie.name}</td>
                <td>{movie.price}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
 
    </div>
  );
}

export default Home;