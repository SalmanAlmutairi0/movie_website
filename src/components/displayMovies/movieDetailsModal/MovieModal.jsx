import React, { useEffect, useState } from 'react'
import './movieModal.css'
import ratingIcon from '../../../img/rating.png'
import YouTube from 'react-youtube'



export default function MovieModal({onClose, selectedMovie}) {

    const [trailer, setTrailer] = useState(null)

    const apiKey = process.env.REACT_APP_API_KEY
    const movieUrl = `https://api.themoviedb.org/3/movie/${selectedMovie.id}/videos?api_key=${apiKey}`
     
    useEffect(() => {
            const fetchTrailer = async () => {
                try {
                    const response = await fetch(movieUrl)
                    const data = await response.json()
                    setTrailer(data.results[0].key);

                } catch (error) {
                    console.error('Error fetching trailer:', error)
                }
            }

            fetchTrailer()
    },[])
   

  return (
    <>
    <div className='movieModal'>
    <img className='poster' src={selectedMovie.poster_path ? `https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}` : ''} alt="" />
    <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="details">
            <h2 className="title">{selectedMovie.original_title}</h2>

            {/* <Trailer movieId={selectedMovie.id} /> */}
          <YouTube videoId={trailer} opts={{height: '300', width: '500', playerVars: {autoplay: 1}}} />
            <div className="categories">
                {selectedMovie.genres.map((genre, index) => (
                    <div key={index} className="genre">
                        <p>{genre.name}</p>
                    </div>
                ))}
                
            </div>
            <p className="description">
                {selectedMovie.overview}
            </p>
            <p className="release-date">Release Date: {selectedMovie.release_date.slice(0, 4)}</p>
            <p className="company">Company: {selectedMovie.production_companies[0].name}</p>
            <p className="runtime">Runtime: {selectedMovie.runtime}m</p>
            <div className="rating-container">
                <img src={ratingIcon} />
            <p className="rating">Rating: 8.708</p>
            </div>
            <p className="country">Country: {selectedMovie.production_countries[0].name}</p>
        </div>
    </div>

</div>
    <div className="overlay" onClick={onClose}></div>
</>
  )
}
