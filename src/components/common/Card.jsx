import React, { useContext } from 'react';
import CardCss from '../Pages/Home/CardCss.module.css'
import { useNavigate } from 'react-router-dom';
import SearchContext from '../../context/SearchContext';

const Card = ({movie}) => {

    const { setSearchValue } = useContext(SearchContext)

    let navigate = useNavigate();
    let routeChange = (id) => {
        setSearchValue("")
        let path = `/movieprofile/${id}`;
        navigate(path);
        window.scrollTo(0, 0);
    }

    function movieProfile(id) {
        routeChange(id);
    }

  return (
    <div className={CardCss.card} onClick={() => { movieProfile(movie.id) }}>

    <img src={movie.poster_path ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` : "https://ottawa.citynews.ca/wp-content/themes/citynews-2023/src/images/thumbnail-default.png"} alt="movie poster" />
    <div className={CardCss.intro}>
        <h1>{movie.title}</h1>
        <p>Rating <span>{movie.vote_average.toFixed(1)}</span></p>
        <p>{movie.release_date}</p>
        {/* <p>{movie.overview}</p> */}
    </div>
</div>
  )
}

export default Card