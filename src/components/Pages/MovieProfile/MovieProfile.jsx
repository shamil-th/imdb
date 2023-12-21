import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../common/Navbar'
import MovieProfileSection from './MovieProfileSection'
import { useParams } from 'react-router-dom';
import SearcdByIdContext from '../../../context/MovieContext';
import SearchContext from '../../../context/SearchContext';
import Footer from '../../common/Footer';
import { ClipLoader } from 'react-spinners';
import LoaderCss from '../../common/Loader.module.css';
import RelatedMovies from './RelatedMovies';

const MovieProfile = () => {
  const { selectedMovie, setMovieId } = useContext(SearcdByIdContext);
  const { setMovies, setSearchValue } = useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isLongLoading, setIsLongLoading] = useState(true);

  function hideSearch() {
    setSearchValue("")
  }

  const { id } = useParams();
  useEffect(() => {
    setMovieId(id)
    setMovies([]);
  }, [setMovieId, setMovies, id])

  useEffect(() => {
    setIsLoading(true)
    setIsLongLoading(true)
  },[id])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 600);
    return () => clearTimeout(timer);
  }, [setMovies,id])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLongLoading(false)

    }, 1500);
    return () => clearTimeout(timer);
  }, [setMovies,id])


  return (
    <div onClick={hideSearch}>
      <Navbar />
      {isLoading ? <div className={LoaderCss.loader}><ClipLoader color="#36d7b7" /></div> :
        <MovieProfileSection selectedMovie={selectedMovie} />}
      {isLongLoading ? <div className={LoaderCss.loader}><ClipLoader color="#36d7b7" /></div> :
        <RelatedMovies />}
      <Footer />
    </div>
  )
}

export default MovieProfile