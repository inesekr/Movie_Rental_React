const Yourmovies = () => {
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
      <th></th>
    </tr>
  </thead>
  <tbody id="yourBody"></tbody>  
  </table>    
  </div>
  )
};

export default Yourmovies;