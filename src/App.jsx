import React from 'react'
import Home from './pages/Home'
import AnimeDetails from './pages/AnimeDetails'
import Watchlist from './pages/Watchlist'
import SearchBar from './components/AnimeList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const client = new QueryClient({
  defaultOptions: {
    refetchWindowsFocus: true
  }
})
const App = () => {
  return (
    <QueryClientProvider client={client}>
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
