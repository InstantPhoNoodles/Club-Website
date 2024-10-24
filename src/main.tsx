import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'; // Using HashRouter for gh-pages
// import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <HashRouter>
        <App />
      </HashRouter>
    {/* <BrowserRouter> */}
  </React.StrictMode>,
)
