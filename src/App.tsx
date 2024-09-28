import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';

function App() {
  return (
    <> 
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/about" element={<About />} /> {/* About route */}
          <Route path="/posts" element={<Posts />} /> {/* Posts route */}
        </Routes>
      </div>
    </>
  )
}

export default App
