import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/globalStyles'
import Home from './pages/home/Home'
import Games from './pages/games/Games'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<Home/>*/}
    <Games/>
    <GlobalStyles/>
  </StrictMode>,
)
