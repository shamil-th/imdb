import React, { useContext } from 'react'
import WatchlistCss from './Watchlist.module.css'
import WatchlistContext from '../../../context/WatchlistContext'
import { useNavigate } from 'react-router-dom'

const WatchlistCard = ({ movie }) => {

  const { setDelWatchlist } = useContext(WatchlistContext);

  function remove(id) {
    setDelWatchlist(id)
  }

  function getYear() {
    let releasedate = movie.releaseDate;
    let date = releasedate.split("-");
    let year = date[0];
    return year;
  }

  let navigate = useNavigate();
  let routeChange = (id) =>{
    let path = `/movieprofile/${id}`;
    navigate(path);
    window.scrollTo(0,0)
  }

  return (

      <div className={WatchlistCss.card}>
        <div onClick={()=> routeChange(movie.movieId)} className={WatchlistCss.poster}>
          <img src={movie.moviePoster} alt="poster" />
        </div>
        <div onClick={()=> routeChange(movie.movieId)} className={WatchlistCss.details}>
          <h2>{movie.title} ({getYear()})</h2>
          <p>Rating {movie.rating && movie.rating.toFixed(1)}</p>
        </div>
        <div onClick={() => remove(movie._id)}  className={WatchlistCss.watchlist}>
          <h4>Remove From Watchlist</h4>
        </div>
      </div>
  
  )
}

export default WatchlistCard