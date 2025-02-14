import React from 'react'
import Home from './pages/Home'
import AnimeDetails from './pages/AnimeDetails'
import Watchlist from './pages/Watchlist'
import SearchBar from './components/SearchBar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AnimeList from './components/AnimeList'



const App = () => {
  return (
    <Router>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<AnimeDetails />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </Router>

  )
}

export default App
