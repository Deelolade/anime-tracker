import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SearchProvider } from './components/searchcontext/searchContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const client = new QueryClient({
  defaultOptions: {
    refetchWindowsFocus: true
  }
})
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <SearchProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </SearchProvider>
  </QueryClientProvider>
)
