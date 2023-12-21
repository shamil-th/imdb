import React, { useContext, useEffect, useState } from 'react'
import MovieCss from './MovieProfileSection.module.css'
import WatchlistContext from '../../../context/WatchlistContext';
import { Tooltip } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';

const MovieProfileSection = ({ selectedMovie }) => {

  const { setAddWatchlist, watchlist, setDelWatchlist } = useContext(WatchlistContext);
  const [isWatchslist, setIsWatchlist] = useState(true)

  useEffect(() => {

    const newid = watchlist.find(findid);
    function findid(movie) {
      return movie.movieId === selectedMovie.id;
    }

    if (newid) {
      setIsWatchlist(false);
    }
    else {
      setIsWatchlist(true)
    }

  }, [selectedMovie, watchlist])


  const addToWatchlist = () => {

    if (isWatchslist) {
      setAddWatchlist({
        movieId: selectedMovie.id,
        moviePoster: selectedMovie.poster_path ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${selectedMovie.poster_path}` : 'https://static.displate.com/857x1200/displate/2020-04-15/2ebd15a821cf4ef249811bedcd4bb464_d8d3dc3c7dd6c938b2bee3fb93f0abb6.jpg',
        title: selectedMovie.title,
        releaseDate: selectedMovie.release_date,
        rating: selectedMovie.vote_average
      })
    }
    else {
      const newMovie = watchlist.find(findid);
      function findid(movie) {
        return movie.movieId === selectedMovie.id;
      }
      setDelWatchlist(newMovie._id)
    }

  };

  const backgroundImg = selectedMovie.backdrop_path && `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${selectedMovie.backdrop_path}`;
  const poster = selectedMovie.poster_path && `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${selectedMovie.poster_path}`;
  const defaultImg = "https://static.displate.com/857x1200/displate/2020-04-15/2ebd15a821cf4ef249811bedcd4bb464_d8d3dc3c7dd6c938b2bee3fb93f0abb6.jpg";

  return (
    <div className={MovieCss.profile}>
      <div className={MovieCss.profile_banner} style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
        <div className={MovieCss.profile_banner}>
          <div className={MovieCss.poster_card}>
            <img src={selectedMovie.poster_path ? `${poster}` : `${defaultImg}`} alt="movie poster" className={MovieCss.poster} />
            <OverlayTrigger placement="right" overlay={
              <Tooltip id="tooltip-right">
                {isWatchslist ? <p className={MovieCss.tt}>Add to watchlist</p> : <p className={MovieCss.tt}>Remove from watchlist</p>}
              </Tooltip>
            }>
              <div className={MovieCss.addWatchlist} onClick={() => addToWatchlist()}>{isWatchslist ? <i className="fa-regular fa-bookmark watchlist_icon"></i> : <i className="fa-solid fa-bookmark"></i>}</div>
            </OverlayTrigger>
          </div>
          <div className={MovieCss.details}>
            <h1>{selectedMovie.title}</h1>
            <div className={MovieCss.title_sub}>
              <p>{selectedMovie.release_date}</p>
              {selectedMovie.runtime > 0 && <p className={MovieCss.runtime}>{selectedMovie.runtime}m</p>}

            </div>
            <div className={MovieCss.genre_section}>
              <div className={MovieCss.genres}>
                {selectedMovie && selectedMovie.genres && Array.isArray(selectedMovie.genres) && (
                  selectedMovie.genres.map((genre) => (
                    <p key={genre.id} className={MovieCss.genre}>{genre.name}</p>
                  ))
                )}
              </div>
              <p className={MovieCss.rating}><i className="fa-solid fa-star"></i>{selectedMovie.vote_average && selectedMovie.vote_average.toFixed(1)}/10</p>
            </div>
            <h4>Overview</h4>
            <p>{selectedMovie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieProfileSection