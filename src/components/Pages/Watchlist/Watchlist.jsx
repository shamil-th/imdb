import React, { useContext } from 'react';
import Navbar from '../../common/Navbar';
import WatchlistContext from '../../../context/WatchlistContext';
import WatchlistSection from "./WatchlistSection"
import WatchlistCss from './Watchlist.module.css'
import Footer from '../../common/Footer';
import SearchContext from '../../../context/SearchContext';

const Watchlist = () => {

  const { watchlist } = useContext(WatchlistContext);
  const { setSearchValue } = useContext(SearchContext);

  function hideSearch(){
    setSearchValue("")
  }

  return (
    <div onClick={hideSearch}>
      <Navbar />
      <div className={WatchlistCss.wrapper}>
        <div className={WatchlistCss.watchlist_title}>
          <h1>My Watchlist</h1>
        </div>
        <div className={WatchlistCss.watchlist_section}>
          {watchlist.length === 0 && <p>You haven't added any movies to your watchlist</p>}
          <WatchlistSection />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Watchlist