import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import SearchContext from '../context/SearchContext';

const SearchService = () => {
    const { searchValue, setMovies } = useContext(SearchContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (searchValue === "") {
                    setMovies([])
                }
                if (searchValue) {
                    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bba7bcb3d1a076fb2d80aa24cedae228&query=${searchValue}`);
                    setMovies(response.data.results)
                }
              
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

        return () => {
        };
    }, [searchValue, setMovies]);

    return (
        <div></div>
    );
};

export default SearchService;
