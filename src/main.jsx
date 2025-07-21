import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/globalStyles'
import { RouterProvider } from 'react-router'
import Router from './routers/Routers'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/>
    <GlobalStyles/>
  </StrictMode>,
)
