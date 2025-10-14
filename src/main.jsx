import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { useState } from 'react'
import { AppContextProvider } from './AppContext.jsx'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  // </StrictMode>,
)



// }

// console.log(interpolateColor(0.25)); // más rojo que verde
// console.log(interpolateColor(0.5));  // punto medio
// console.log(interpolateColor(0.75));
