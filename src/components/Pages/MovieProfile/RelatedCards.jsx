import React from 'react';
import Card from '../../common/Card';

const RelatedCards = ({relatedMovie}) => {


  return (
    relatedMovie.map((movie) => (
            <Card movie={movie} key={movie.id}/>
        ))
  )
}

export default RelatedCards