import './Header.css'
import { Link } from 'react-router-dom';
import { useState, useEffect  } from 'react';
import Navbar from './Navbar';
import wsuLogo from '../assets/wsu-logo.png';

const Header: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false); // State to control showing the Navbar.
  const [isMobileView, setIsMobileView] = useState(false); // Track if viewport width <= 760px

  // Handle hamburger click to toggle the navbar on mobile.
  const handleClick = () => {
    setShowNavbar(!showNavbar);
  };

  // Check viewport width and update state.
  const handleResize = () => {
    if (window.innerWidth <= 760) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
      // Automatically close Navbar if resizing to desktop so that there is no double navbar.
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    // Set initial state based on current window width
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Club name, Hamberger menu, Navbar below. */}
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

      {/* Navbar can be toggle by hamberger menu when is mobile mode. */}
      { isMobileView && <Navbar show={showNavbar} /> }
    </>
  );
};

export default Header
