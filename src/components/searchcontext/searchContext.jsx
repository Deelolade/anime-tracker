import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [search, setSearch] = useState("bleach"); // Default search term

    // Fetch anime when the component mounts
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
        if (search) {
            refetch();  // Trigger fetch when search term changes
        }
    }, [search]);  // Add search as a dependency to re-fetch on change

    if (search === "") {
        console.warn("search term is empty")
    }
    return (
        <SearchContext.Provider value={{
            searchQuery,
            setSearchQuery,
            search,
            setSearch,
            animeList,
            isLoading,
            isError,
            error,
            refetch,
            searchButton
        }}>
            {children}
        </SearchContext.Provider>
    );
};
