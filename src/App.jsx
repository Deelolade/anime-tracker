import React from 'react'
import Home from './pages/Home'
import AnimeDetails from './pages/AnimeDetails'
import Watchlist from './pages/Watchlist'
import SearchBar from './components/SearchBar.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SearchProvider } from './components/searchcontext/searchContext.jsx'
import AnimeList from './components/AnimeList'


const client = new QueryClient({
  defaultOptions: {
    refetchWindowsFocus: true
  }
})
const App = () => {
  return (
    <QueryClientProvider client={client}>
      <SearchProvider>
        <SearchBar />
        <AnimeList />
      </SearchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<AnimeDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </Router>
    </QueryClientProvider>

  )
}

export default App
