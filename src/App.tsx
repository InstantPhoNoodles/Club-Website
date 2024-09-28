import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/posts" element={<Posts />} /> 
        </Routes>
      </div>
  );
}

export default App;
