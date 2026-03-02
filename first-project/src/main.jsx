import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//? 2 Libraries :-
//! 1 react
//? 2. react-dom

//! createRoot() acts like a bridge (makes connection) between main.jsx (src folder)
//!  and index.html . 

//? render() is used to display the content on UI. 