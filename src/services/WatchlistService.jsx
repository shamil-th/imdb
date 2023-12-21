import React, { useCallback, useContext, useEffect } from "react";
import axios from "axios";
import WatchlistContext from "../context/WatchlistContext";

const WatchlistService = () => {

    const { setWatchlist, addWatchlist, delWatchlist, setDelWatchlist } = useContext(WatchlistContext);

    const getWatchlistData = useCallback(async () => {
        try {
            const response = await axios.get("http://localhost:4000/watchlist");
            setWatchlist(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, [setWatchlist])

    useEffect(() => {
        if (addWatchlist) {
            const postData = async () => {

                try {
                    await axios.post('http://localhost:4000/watchlist', addWatchlist)
                    console.log('Watchlist updated successfully');

                    //  refetch the updated watchlist
                    getWatchlistData()

                } catch (error) {
                    console.error('Error posting data:', error);
                }
            };

            postData();
        }

    }, [addWatchlist, setWatchlist, getWatchlistData]);

    useEffect(() => {

        getWatchlistData()

    }, [getWatchlistData])

    useEffect(() => {

        if (delWatchlist) {
            const removeMovie = async (id) => {
                try {
                    await axios.delete(`http://localhost:4000/watchlist/${id}`);

                    console.log("Movie removed from watchlist")

                    setDelWatchlist("");

                    //  refetch the updated watchlist
                    getWatchlistData()

                }
                catch (error) {
                    console.error("Error removing from watchlsit:", error)
                }

            }
            removeMovie(delWatchlist);
        }

    }, [delWatchlist, setDelWatchlist, setWatchlist, getWatchlistData])



    return (
        <div></div>
    );
}

export default WatchlistService

