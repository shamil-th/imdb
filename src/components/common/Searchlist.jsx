import React, { useContext } from 'react';
import SearchContext from '../../context/SearchContext';
import SearchItems from './SearchItems';


const Searchlist = () => {

    const { movies } = useContext(SearchContext);

    return (
        movies.map((movie) => (
            <SearchItems movie={movie} key={movie.id} />
        ))
    )
}

export default Searchlist