import React, { useContext } from 'react';
import WatchlistContext from '../../../context/WatchlistContext';
import WatchlistCard from './WatchlistCard';


const WatchlistSection = () => {

  const { watchlist } = useContext(WatchlistContext);

  return (
    watchlist.map((movie) => (
      <WatchlistCard movie={movie} key={movie._id} />
    ))
  )
}

export default WatchlistSection