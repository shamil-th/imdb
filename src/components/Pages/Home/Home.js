import React, { useContext } from 'react'
import Navbar from '../../common/Navbar'
import MovieCards from './MovieCards'
import Footer from '../../common/Footer'
import './Home.css'
import SearchContext from '../../../context/SearchContext'

const Home = () => {
  const { setSearchValue } = useContext(SearchContext);

  function hideSearch(){
    setSearchValue("")
  }
  return (
    <div className='home' onClick={hideSearch}>
      <Navbar />
      <MovieCards />
      <Footer/>
    </div>
  )
}

export default Home