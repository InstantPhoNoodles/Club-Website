import './Header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import wsuLogo from '../assets/wsu-logo.png';

const Header: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false); // State to control showing the OfficerCard

  const handleClick = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className='Header'>
      <div className='wsu-logo'>
        <a href="https://tricities.wsu.edu/" target="_blank" rel="noopener noreferrer">
          <img src={wsuLogo} alt="WSU Logo"/>
        </a>
      </div>
      <div className='banner'>
        <Link to="/"><h1>Book and Tea Club at WSU Tri-Cities</h1></Link>
      </div>
      <div className='hamburger' onClick={handleClick}> { }
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>
      </div>
    </div>
  );
};

export default Header
