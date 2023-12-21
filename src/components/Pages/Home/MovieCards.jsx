import React from 'react';
import CardsCss from './MovieCardsCss.module.css';
import MovieCard from './MovieCard';

const MovieCards = () => {

    return (
        <div className={CardsCss.cards_section}>
            <div className={CardsCss.popular_movies}>
                <div className={CardsCss.popular}>
                    <h1>Popular Movies</h1>
                </div>
                <div className={CardsCss.cards}>
                    <MovieCard />
                </div>
            </div>
        </div>
    )
}

export default MovieCards