import React, { useContext } from 'react';
import PopularContext from '../../../context/PopularContext';
import Card from '../../common/Card'

const MovieCard = () => {
    const { popularMovie } = useContext(PopularContext);

    return (
        popularMovie.map((movie) => (
            <Card movie={movie} key={movie.id}/>
        ))
    )
}

export default MovieCard