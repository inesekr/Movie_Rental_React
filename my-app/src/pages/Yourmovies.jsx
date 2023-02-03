import Home from './Home';
// import Movies from '../Movies';
import {useState, useEffect} from 'react';

function Yourmovies ()  {

  // const [yourMovies, setYourMovies] = useState(()=>{
  //   try{
  //   const localData = JSON.parse(localStorage.getItem("yourmovies")) || [];
  //   return localData.map(movie=>({...movie, hours:12}));
  //   } catch(error) {
  //     return[];
  //   }
  // });

    const [yourMovies, setYourMovies] = useState(()=>{
  
    const localData = JSON.parse(localStorage.getItem("yourmovies")) || [];
    return localData.map(movie=>({...movie}));
    
  });

    useEffect(()=>{
      localStorage.setItem("yourmovies", JSON.stringify(yourMovies));
    }, [yourMovies]);

    console.log(yourMovies);


  const handleHoursChange=(index, value)=>{
    setYourMovies(prevMovies=>{
      const updatedMovies = JSON.parse(JSON.stringify(prevMovies));
    
      updatedMovies[index].hours = value ? updatedMovies[index].hours + 12 : updatedMovies[index].hours -12;
      if (updatedMovies[index].hours>168){
        updatedMovies[index].hours = 168;
      } else if (updatedMovies[index].hours<12){
        updatedMovies[index].hours = 12;
      }
      return updatedMovies;
    });
  };

  const handleQuantityChange=(index, value)=>{
    setYourMovies(prevMovies=>{
      const updatedMovies = JSON.parse(JSON.stringify(prevMovies));
    
      updatedMovies[index].quantity = value ? updatedMovies[index].quantity + 1 : updatedMovies[index].quantity -1;
      
      if (updatedMovies[index].hours>168){
        updatedMovies[index].hours = 168;
      } else if (updatedMovies[index].quantity<0){
        updatedMovies[index].quantity = 0;
      }
      return updatedMovies;
    });
  };
  // function handleRemove(movie){

  // }

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
            yourMovies.map((movie, index)=>(
              <tr key={movie.id}>
                <td>{movie.name}</td>
                <td>{movie.genre}</td>
                <td><span id="time-span"><span id="time-sign-minus" onClick={()=>handleHoursChange(index, false)}>{'<'}</span><span id="time"><span id="hours">{movie.hours}</span><span id="hours-sign">h</span></span><span id="time-sign-plus" onClick={()=>handleHoursChange(index, true)}>{'>'}</span></span></td>
                <td>{movie.price}</td>
                <td><span id="quantity-span"><span id="minus-sign" onClick={()=>handleQuantityChange(index, false)}>-</span><span id="quantity">{movie.quantity}</span><span id="plus-sign" onClick={()=>handleQuantityChange(index, true)}>+</span></span></td>
                            
                <td>
                  <p >Remove</p>
                  {/* <p onClick={()=>handleRemove(movie)}>Remove</p> */}
                </td>
              </tr>
            ))
          }

        </tbody>  
      </table>    
    </div>
  )
};

export default Yourmovies;