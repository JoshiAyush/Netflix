import { useState } from "react";
import { useEffect } from "react";

import { movie } from "../netflix/imdb/movie/movie.js";

function useMovie(query) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    movie(query, (results) => setResults(results));
  }, []);

  return results;
}

export default useMovie;
