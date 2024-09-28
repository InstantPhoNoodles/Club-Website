import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className='Navbar'>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="./About">About</a></li>
        <li><a href="./Posts">Posts</a></li>
      </ul>
    </div>
  )
}

export default Navbar
