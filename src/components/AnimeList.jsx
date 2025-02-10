import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./Loading";


function AnimeList() {
    const [searchQuery, setSearchQuery] = useState("")
    const [search, setSearch] = useState("popular"); // Default search term

    const { data: animeList, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["animeList", search],
        queryFn: async ({ queryKey }) => {
            const [, query] = queryKey;
            if (!query) return [];
            const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`);
            return response.data.data
        },
        onError: (err) => {
            console.error("Error fetching anime:", err)
        }, enabled: true,
    });
    // Fetch anime when the search term changes
    const searchButton = () => {
        setSearch(searchQuery)
        refetch()
    }
    useEffect(() => {
        refetch()
    }, [])
    return (
        <div className="p-6 bg-[#253237] text-[#e0fbfc]">
            <div className="sm:flex justify-around items-center mb-10 sticky lg:w-[85%] mx-auto">
                <h1 className=" text-[25px] md:text-4xl font-bold mb-6 sm:mb-4 text-[#9DB4C0] rotate-355 sm:rotate-350">AnimeTracker</h1>
                {/* Search Input */}
                <div className=" w-[100%] sm:w-[80%] justify-evenly flex items-center">
                    <input
                        type="text"
                        placeholder="Search for an anime..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border-2 border-[#9DB4C0] rounded-xl py-2 sm:py-3 text-xl w-[70%] sm:w-[80%] text-[#e0fbfc] px-5 outline-0  hover:border-[#e0fbfc] "
                    />
                    <button onClick={searchButton} className="py-2 px-4 border-2 rounded-xl  ">search</button>
                </div>
            </div>
            {/* Anime Grid */}

            {isLoading && <Loading />}
            {isError && <Loading/>}
            {!isLoading && !isError && (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[80%] md:w-[95%] lg:w-[75%] mx-auto ">
                    {animeList?.map((anime, idx) => (
                        <div key={idx} className="border rounded-lg p-3 shadow ">
                            <img
                                src={anime.images.webp.large_image_url}
                                alt={anime.title}
                                className="w-[100%] h-76 border-2 border-[#253237] hover:border  rounded "
                            />
                            <h2 className="mt-2 text-lg font-semibold ">{anime.title}</h2>
                            <p>{anime.title_japanese}</p>
                            <p>Rank: {anime.popularity}</p>
                            <p>Rating: <span className="text-bold">{anime.rating}</span></p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AnimeList;
