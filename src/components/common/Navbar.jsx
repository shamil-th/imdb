import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarCss from './Navbar.module.css'
import SearchContext from '../../context/SearchContext'
import Searchlist from './Searchlist'
import WatchlistContext from '../../context/WatchlistContext'


const Navbar = () => {
    const { setSearchValue, movies, searchValue } = useContext(SearchContext);
    const { watchlist } = useContext(WatchlistContext);

    const [isMovie, setIsMovie] = useState(true);

    let navigate = useNavigate();

    let routeChange = () => {
        setSearchValue("");
        navigate('/watchlist');
        window.scrollTo(0, 0);
    }

    let homePage = () => {
        setSearchValue("");
        navigate('/');
        window.scrollTo(0, 0)
    }

    function searchMovie(e) {
        setSearchValue(e.target.value);
    }

    let watchlistCount = watchlist.length;

    useEffect(() => {
        const timer = setTimeout(() => {

            if (searchValue.length > 0 && movies.length === 0) {
                setIsMovie(false)
            }
            else {
                setIsMovie(true)
            }
        }, 400);

        return () => clearTimeout(timer);
    }, [searchValue, movies]);


    return (
        <div className={NavbarCss.navbar}>
            <div className={NavbarCss.logo} onClick={homePage}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png" alt="log" />
            </div>
            <div className={NavbarCss.search}>

                <input type="text" placeholder='Search IMDb' className={NavbarCss.search_bar} name='movieSearch' onChange={searchMovie} />
                <div className={NavbarCss.search_icon}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className={NavbarCss.searchList}>
                    <Searchlist />
                    {!isMovie && <p>No Results</p>}
                </div>
            </div>
            <div className={NavbarCss.signin}>
                <div className={NavbarCss.watchlist} onClick={routeChange}>
                    <i className="fa-solid fa-bookmark"></i>
                    <p>Watchlist {watchlistCount > 0 && <span>({`${watchlistCount}`})</span>} </p>
                </div>
                <p>Sign in</p>
            </div>


        </div>

    )
}

export default Navbar