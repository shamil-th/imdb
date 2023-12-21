import React, { useContext } from 'react';
import NavbarCss from './Navbar.module.css';
import SearchContext from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';

const SearchItems = ({ movie }) => {

    const { setSearchValue } = useContext(SearchContext);

    let navigate = useNavigate();

    let movieProfile = id => {
        setSearchValue("");
        let path = `/movieprofile/${id}`;
        navigate(path);
        window.scrollTo(0, 0)
    }

    return (
        <div onClick={() => movieProfile(movie.id)} className={NavbarCss.listItem} >
            <div className={NavbarCss.poster_section}>
                <img className={NavbarCss.poster} src={movie.poster_path ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` : "https://ottawa.citynews.ca/wp-content/themes/citynews-2023/src/images/thumbnail-default.png"} alt="movie poster" />
            </div>
            <div className={NavbarCss.details}>
                <h1>{movie.title}</h1>
                <p className={NavbarCss.date}>{movie.release_date}</p>
                <p>{movie.overview.length > 90 ? `${movie.overview.slice(0, 90)}...` : movie.overview}</p>
            </div>
        </div>
    )
}

export default SearchItems