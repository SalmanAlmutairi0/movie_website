import React, { useEffect, useRef, useState } from "react";
import '../trending/trending.css';
import Divider from "../../divider/divider";
import starIcon from "../../../img/star.png";
import MoveCard from "../../movieCard/moveCard";
import MovieModal from "../movieDetailsModal/MovieModal";
import arrow from '../../../img/right-arrow.png'
import ScrollArrows from "../scrollArrows/scrollArrows";
export default function Popular() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null)

  const containerRef = useRef(null);

   

  useEffect(() => {
    const fetchMovies = async () => {
        console.log("fetching movies...");
       const apiKey = process.env.REACT_APP_API_KEY
      const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  },[]);


  const handleMovieClick = async (movieId) => {
    if(selectedMovie) {
      setSelectedMovie(null)
      return
    }
    const apiKey = process.env.REACT_APP_API_KEY
    const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
     try {
      const res = await fetch(movieUrl)
      const data = await res.json()
       setSelectedMovie(data)

     } catch (error) {
      console.error('Error fetching movie details:', error)
     }
  }



  return (
    <main>
      <Divider icon={starIcon} text="Top Rated" />

      <div className="container">
       
        <ScrollArrows Ref={containerRef} arrow={arrow} />

          <div className="movie-container" ref={containerRef}>

            {movies.map((movie, index) => (
                index < 20 &&
                <MoveCard
                    key={movie.id}
                    poster={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : null}
                    title={movie.title}
                    year={movie.release_date.slice(0, 4)}
                    time={'140m'}
                    onClick={() => handleMovieClick(movie.id) }
                />
            ))}
          </div>

            {selectedMovie && <MovieModal 
              onClose={() => setSelectedMovie(null)}
              selectedMovie={selectedMovie}
            
            />}

      </div>
    </main>
  );
}
