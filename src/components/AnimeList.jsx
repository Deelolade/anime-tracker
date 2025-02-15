
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import { SearchContext } from './searchcontext/searchContext'
import { useContext, useEffect } from "react";

const AnimeList = () => {
    const { isError, isLoading, animeList } = useContext(SearchContext)


    const saveToLocalStorage = (anime) => {
        const savedAnime = JSON.parse(localStorage.getItem("saved_anime")) || [];
        savedAnime.push(anime)
        localStorage.setItem('saved_anime', JSON.stringify(savedAnime))
        console.log("Anime Saved", anime)
    }
    return (
        <div className="p-6 bg-[#253237] text-[#e0fbfc]">
            {isLoading && <Loading />}
            {isError && <ErrorPage />}
            {!isLoading && !isError && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[80%] md:w-[95%] lg:w-[75%] mx-auto ">
                    {animeList?.map((anime, idx) => (
                        <div key={idx} className="border rounded-lg p-3 shadow border-[#e0fbfc]">
                            <img
                                src={anime.images.webp.large_image_url}
                                alt={anime.title}
                                className="w-[100%] h-76 border-2 border-[#e0fbfc]  rounded-sm "
                            />
                            <h2 className="mt-2 text-lg font-semibold ">{anime.title}</h2>
                            <p>{anime.title_japanese}</p>
                            <p>Rank: {anime.popularity}</p>
                            <p>Rating: <span className="text-bold">{anime.rating}</span></p>
                            <button onClick={() => saveToLocalStorage(animeList)}>click</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AnimeList;
