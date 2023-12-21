import React, { useContext, useEffect } from "react";
import axios from "axios";
import SearcdByIdContext from "../context/MovieContext";

const SearchByIdService = () => {
    const { movieId, setselectedMovie } = useContext(SearcdByIdContext)

    useEffect(() => {

        const fetchData = async () => {
            try {
                if (movieId) {
                    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=bba7bcb3d1a076fb2d80aa24cedae228`)
                    setselectedMovie(response.data)
                    
                }
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();

        return () =>{
        }

    },[movieId,setselectedMovie])
    // 
    return (
        <div></div>
    );
}


export default SearchByIdService