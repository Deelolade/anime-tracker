import { useEffect, useState } from "react";

function App() {
    const [animeList, setAnimeList] = useState([]);
    const [search, setSearch] = useState("bleach"); // Default search term

    // Function to fetch anime based on search query
    const fetchAnime = async (query) => {
        try {
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
            const data = await response.json();
            setAnimeList(data.data);
        } catch (error) {
            console.error("Error fetching anime:", error);
        }
    };

    // Fetch anime when the search term changes
    const searchButton = () => {
        fetchAnime(search);
    }
    useEffect(() => {
        fetchAnime(search);
    }, [])

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Anime Search</h1>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search for an anime..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 rounded w-full mb-4"
            />
            <button onClick={searchButton} className="py-3 px-4 bg-slate-200">search</button>

            {/* Anime Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-bl ack w-[80%] md:w-[95%] mx-auto">
                {animeList.map((anime, idx) => (
                    <div key={idx} className="border rounded-lg p-3 shadow">
                        <img
                            src={anime.images.webp.large_image_url}
                            alt={anime.title}
                            className="w-[100%] h-76 border-2 border-amber-400 rounded"
                        />
                        <h2 className="mt-2 text-lg font-semibold">{anime.title}</h2>
                        <p>{anime.title_english}</p>
                        <p>Rating: {anime.rating}</p>
                        <p>Rank: {anime.popularity}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
