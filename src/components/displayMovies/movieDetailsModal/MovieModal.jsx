import React, { useEffect, useState } from 'react'
import './movieModal.css'
import ratingIcon from '../../../img/rating.png'
import YouTube from 'react-youtube'

import runtimeIcon from '../../../img/runtimeIcon.png'
import imdbIcon from '../../../img/imdb.png'


export default function MovieModal({onClose, selectedMovie}) {

    const [trailer, setTrailer] = useState(null)
    const [openTrailer, setOpenTrailer] = useState(false)


    const apiKey = process.env.REACT_APP_API_KEY
    const movieUrl = `https://api.themoviedb.org/3/movie/${selectedMovie.id}/videos?api_key=${apiKey}`
     
    useEffect(() => {
        console.log('enterd')
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
    },[selectedMovie])
   

  return (
    <>
    <div className='movieModal' onClick={() => openTrailer ? setOpenTrailer(false) : '' }>
   
    <img className='poster' src={selectedMovie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path}` : selectedMovie.poster_path } alt="" />
       
        <div className="close" onClick={() => {onClose() ; setOpenTrailer(false)}  }>
            &times;
        </div>

        
        <div className="modal-content"  >

            <h1 className='title'>{selectedMovie.original_title}</h1>

                <div className="movie-info">

                    <div className="runtime">
                        <img src={runtimeIcon} alt="" />
                        <p>{selectedMovie.runtime} min</p>
                    </div>

                        <div className="movie-year">
                            <p>{selectedMovie.release_date.slice(0, 4)}</p>
                        </div>

                        <div className="movie-rating">
                            <p>{selectedMovie.vote_average.toFixed(1)}</p>
                            <img src={imdbIcon} alt="" />
                        </div>
                </div>

                <div className="genres-container">
                   <div className="genres-title">
                       <p>Genres</p>
                   </div>
                   <div className="geners">
                    {selectedMovie.genres.map((genre, index) => (
                        <div key={index} className="gener">
                            <p>{genre.name}</p>
                        </div>
                    ))}
                      
                     
                   </div>
                </div>

                <div className="wraper">

                    <div className="overview-container">
                        <div className="overview-title">
                            <p>Overview</p>
                        </div>

                        <div className="overview">
                            <p>{selectedMovie.overview}</p>
                        </div>
                    </div>
                </div>

                
                <div className="prodection-container">
                    <div className="prodection-title">
                        <p>Production</p>
                    </div>
                    <div className="prodections">
                        {selectedMovie.production_companies.map((company, index) => (
                            <div key={index} className="company">
                                <p>{company.name}</p>
                            </div>
                        ))}
                      
                    </div>
                </div>

                        
                    <div className="button">
                        
                        {openTrailer 
                        ? <button onClick={() => setOpenTrailer(false)}>Close Trailer</button> 
                        : <button onClick={() => setOpenTrailer(true)}>Play Trailer</button>}

                    </div>
        </div>
                {openTrailer && <div className="trailer">
                    <YouTube videoId={trailer} opts={{height: '500', width: '800', playerVars: {autoplay: 1} }} />
                </div>}
   
   
</div>
    <div className="overlay" onClick={onClose}></div>
</>
  )
}
