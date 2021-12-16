import React from "react";
import { movies } from "../data";

function Movies() {
  return ( <div>
    <h1>Movies Page</h1>
    <div>
      <ul>
        <li>{movies.genres}</li>
      </ul>


    </div>

  </div>
  
  )
}


export default Movies;
