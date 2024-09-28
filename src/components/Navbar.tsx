import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className='Navbar'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
    </div>
  )
}

export default Navbar
