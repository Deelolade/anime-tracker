import { useContext } from 'react'
import { SearchContext } from './searchcontext/searchContext.jsx'

const SearchBar = () => {
    const { searchButton, searchQuery, setSearchQuery } = useContext(SearchContext)
    return (
        <div className='bg-[#253237] sticky top-0 z-50'>
            <div className="sm:flex justify-around items-center sticky lg:w-[85%] mx-auto bg-[#253237] h-[16vh] md:h-[10vh] ">
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
                    <button onClick={searchButton} className="py-2 px-4 border-2 rounded-xl border-[#e0fbfc] text-[#e0fbfc]">search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
