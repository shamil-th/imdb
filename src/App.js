import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import SearchService from './services/SearchService';
import SearchContext from './context/SearchContext';
import SearcdByIdContext from './context/MovieContext';
import SearchByIdService from './services/MovieServices';
import WatchlistContext from './context/WatchlistContext';
import WatchlistService from './services/WatchlistService';
import PopularContext from './context/PopularContext';
import PopularServices from './services/PopularServices';
import RelatedContext from './context/RelatedContext';
import RelatedServices from './services/RelatedServices';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [selectedMovie, setselectedMovie] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [addWatchlist, setAddWatchlist] = useState("");
  const [delWatchlist, setDelWatchlist] = useState("");
  const [popularMovie, setPopularMovie] = useState([]);
  const [relatedMovie, setRelatedMovies] = useState([]);

  // console.log(movies);
  return (
    <div className="App">
      <SearchContext.Provider value={{ searchValue, setSearchValue, movies, setMovies }}>
        <SearcdByIdContext.Provider value={{ movieId, setMovieId, selectedMovie, setselectedMovie }}>
          <WatchlistContext.Provider value={{ watchlist, setWatchlist, addWatchlist, setAddWatchlist, setDelWatchlist, delWatchlist }}>
            <PopularContext.Provider value={{ popularMovie, setPopularMovie }}>
              <RelatedContext.Provider value={{ relatedMovie, setRelatedMovies, movieId, setMovieId }}>
                <SearchService />
                <SearchByIdService />
                <WatchlistService />
                <PopularServices />
                <RelatedServices />
                <Layout />
              </RelatedContext.Provider>
            </PopularContext.Provider>
          </WatchlistContext.Provider>
        </SearcdByIdContext.Provider>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
