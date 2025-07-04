import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/Home'
import { GlobalStyles } from './styles/globalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <GlobalStyles/>
  </StrictMode>,
)
