import React from 'react'
import './movieModal.css'
import ratingIcon from '../../../img/rating.png'
export default function MovieModal({onClose, selectedMovie}) {



  return (
    <div className='movieModal'>
    <img src={selectedMovie.poster_path ? `https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}` : ''} alt="" />
    <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="details">
            <h2 className="title">{selectedMovie.original_title}</h2>
            <p className="description">
                {selectedMovie.overview}
            </p>
            <div className="categories">
                {selectedMovie.genres.map((genre, index) => (
                    <div key={index} className="genre">
                        <p>{genre.name}</p>
                    </div>
                ))}
                
            </div>
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
  )
}
