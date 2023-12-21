import React, { useContext } from 'react';
import CardsCss from '../Home/MovieCardsCss.module.css';
import RelatedCards from './RelatedCards';
import RelatedContext from '../../../context/RelatedContext';


const RelatedMovies = () => {

    const { relatedMovie } = useContext(RelatedContext);

    return (
        <>
         { relatedMovie.length > 0 &&
        <div className={CardsCss.cards_section}>
            <div className={CardsCss.popular_movies}>
                <div className={CardsCss.popular}>
                    <h1>Related Movies</h1>
                </div>
                <div className={CardsCss.cards}>
                   <RelatedCards relatedMovie={relatedMovie}/>
                </div>
            </div>
        </div>}
        </>
    )
}

export default RelatedMovies