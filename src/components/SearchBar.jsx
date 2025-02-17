import { useContext } from 'react'
import { SearchContext } from './searchcontext/searchContext.jsx'
import { Link } from 'react-router-dom'

const SearchBar = () => {
    const { searchButton, searchQuery, setSearchQuery } = useContext(SearchContext)
    return (
        <div className='bg-[#253237] sticky top-0 z-50'>
            <div className="sm:flex justify-around items-center sticky lg:w-[85%] mx-auto bg-[#253237] h-auto md:h-[10vh] ">
                <Link to="/" className=" text-[25px] md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-4 text-[#9DB4C0] rotate-355 sm:rotate-350">AnimeTracker</Link>
                {/* Search Input */}
                <div className=" w-[100%] sm:w-[80%] justify-evenly sm:flex  items-center ">
                    <div className="flex justify-center lg:w-[80%] ">
                    <input
                        type="text"
                        placeholder="Search for any anime..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border-2 border-[#9DB4C0] rounded-xl py-2 sm:py-3 text-xl w-[70%] sm:w-[90%] text-[#e0fbfc] px-5 outline-0  hover:border-[#e0fbfc] border-solid "
                    />
                    <button onClick={searchButton} className="py-2 px-4 lg:w-[10%] border-2 rounded-xl border-[#e0fbfc] border-solid text-[#e0fbfc]">search</button>
                    </div>
                    <div className=" mt-4 sm:mt-0  grid place-items-center">
                        <Link to="/watchlist" className="py-2 px-3 border-2 text-center rounded-xl border-[#e0fbfc] text-[#e0fbfc] w-[80%] border-solid sm:w-auto">My WatchList</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
