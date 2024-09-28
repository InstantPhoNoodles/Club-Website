import './Header.css'
import { Link } from 'react-router-dom';
import wsuLogo from '../assets/wsu-logo.png';

const Header: React.FC = () => {
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
    </div>
  )
}

export default Header
