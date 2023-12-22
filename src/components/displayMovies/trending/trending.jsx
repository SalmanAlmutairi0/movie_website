import React, { useEffect, useState } from "react";
import "./trending.css";
import fireIcon from "../../../img/fire.png";
import Divider from "../../divider/divider";
import poster from "../../../img/image 23.png";
import MoveCard from "../../movieCard/moveCard";
import MovieModal from "../movieDetailsModal/MovieModal";



function Trending() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {

    const fetchMovies = async () => {
      const apiKey = process.env.REACT_APP_API_KEY
      const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`

      try {

        const response = await fetch(apiUrl)
        const data = await response.json()
        setMovies(data.results)

      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    fetchMovies()

  },[])

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
      <Divider
        icon={fireIcon}
        text="Trending"
      />

        <div className="container">

        {movies.map((movie, index) => (
          index < 10 &&
          <MoveCard key={movie.id} 
          poster={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : poster}
          title={movie.original_title}
          year={movie.release_date.slice(0, 4)}
          time={'140m'}
          onClick = {() => handleMovieClick(movie.id)}
          />
        ))}
        </div>

          {selectedMovie && <MovieModal 
            onClose={() => setSelectedMovie(null)}
            selectedMovie={selectedMovie}
          
          />}
      
    </main>
  );
}

export default Trending;
