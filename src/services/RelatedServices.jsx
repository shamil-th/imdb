import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import RelatedContext from '../context/RelatedContext';

const RelatedServices = () => {

    const { movieId, setRelatedMovies } = useContext(RelatedContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (movieId) {
                    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1&api_key=bba7bcb3d1a076fb2d80aa24cedae228`)
                    setRelatedMovies(response.data.results);
                }
            } catch (error) {
                console.error("error fetching data: ", error)
            }
        }
        fetchData();
    },[movieId,setRelatedMovies])

    return (
        <div></div>
    )
}

export default RelatedServices