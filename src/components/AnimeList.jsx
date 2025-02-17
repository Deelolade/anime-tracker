
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import { SearchContext } from './searchcontext/searchContext'
import { useContext, } from "react";
import { CiStopwatch } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";
import Swal from 'sweetalert2'


const AnimeList = () => {
    const { isError, isLoading, animeList } = useContext(SearchContext)
    const saveToLocalStorage = (anime) => {

        const savedAnime = JSON.parse(localStorage.getItem("saved_anime")) || [];
        const count = savedAnime.filter(item => item.id === anime.mal_id).length;
        if (count >= 2) {
            console.log("Cannot save more than two of the same anime:", anime.mal_id);
            return; // Stop execution
        }
        savedAnime.push(anime)
        localStorage.setItem('saved_anime', JSON.stringify(savedAnime));
        Swal.fire({
            title: 'Success!',
            text: `${anime.title_english} has been added to your watchlist`,
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    }
    return (
        <div className="p-6 bg-[#253237] text-[#e0fbfc]">
            {isLoading && <Loading />}
            {isError && <ErrorPage />}
            {!isLoading && !isError && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[80%] md:w-[95%] lg:w-[75%] mx-auto ">
                    {animeList?.map((anime, idx) => (
                        <div key={idx} className="border rounded-lg p-3 shadow border-[#e0fbfc]">
                            <div className="relative group w-full h-76" onClick={() => saveToLocalStorage(anime)}>
                                <img
                                    src={anime.images.webp.large_image_url}
                                    alt={anime.title}
                                    className="w-full h-76 border-2 border-[#e0fbfc] rounded-sm"
                                />
                                <div className="absolute inset-0 bg-black/70 flex rounded-sm justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h1 className="font-semibold text-xl ">Add to watchlist</h1>
                                </div>
                            </div>

                            <h2 className="mt-2 text-xl font-semibold ">{anime.title}</h2>
                            <p>{anime.title_japanese}</p>
                            <p>Rank: {anime.popularity}</p>
                            <p>Rating: <span className="text-bold">{anime.rating}</span></p>
                            <p className="flex items-center"><FiHeart className="mr-1 text-xl" />:Loved by <span className="underline font-semibold"> {anime.favorites} </span> people.</p>
                            <div className="mt-3 flex">
                                <button onClick={() => saveToLocalStorage(anime)} className="bg-[#e0fbfc] mx-auto flex items-center text-[#253237] text-lg font-semibold rounded-sm px-3 py-1 hover:text-[#e0fbfc] hover:bg-[#253237] hover:border-2">Add To Watchlist <CiStopwatch className="font-semibold text-xl mx-2 " /></button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AnimeList;
