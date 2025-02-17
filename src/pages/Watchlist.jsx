import React, { useEffect, useState } from "react";
import { SearchContext } from '../components/searchcontext/searchContext'
import Loading from "../components/Loading";
import { useContext, } from "react";

const Watchlist = () => {
    const { isLoading, } = useContext(SearchContext)
    const [watchlist, setWatchlist] = useState([]);
    // Load anime from localStorage when the component mounts
    useEffect(() => {
        const savedAnime = JSON.parse(localStorage.getItem("saved_anime")) || [];
        setWatchlist(savedAnime);
    }, []);

    // Remove an anime from the watchlist
    const removeFromWatchlist = (id) => {
        const updatedList = watchlist.filter(anime => anime.mal_id !== id);
        setWatchlist(updatedList);
        localStorage.setItem("saved_anime", JSON.stringify(updatedList));
    };

    return (
        <div className="w-[100vw] bg-[#253237] h-screen">
            <div className="p-6 bg-[#253237] text-[#e0fbfc]">
                {isLoading && <Loading />}
                {watchlist.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {watchlist.map((anime) => (
                            <div key={anime} className="border rounded-lg p-4 shadow-lg">
                                <img
                                    src={anime.images.jpg.image_url}
                                    alt={anime.title}
                                    className="w-full h-48 object-cover rounded"
                                />
                                <h2 className="text-lg font-semibold mt-2">{anime.title}</h2>
                                <button
                                    onClick={() => removeFromWatchlist(anime.mal_id)}
                                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Watchlist;
