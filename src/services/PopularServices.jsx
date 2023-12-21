import React, { useContext, useEffect } from 'react'
import axios from "axios";
import PopularContext from "../context/PopularContext";

const PopularServices = () => {
    const {  setPopularMovie } = useContext(PopularContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=bba7bcb3d1a076fb2d80aa24cedae228')
                setPopularMovie(response.data.results)
            } catch (error) {
                console.error("errror fetching data")
            }
        };
        fetchData();
    },[setPopularMovie])

    return (
        <div></div>
    )
}

export default PopularServices

