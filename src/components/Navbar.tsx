import './Navbar.css'
import { Link } from 'react-router-dom';

interface NavbarProps {
  show?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ show }) => {
  return (
    <div className={`Navbar ${show ? 'show' : ''}`}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
    </div>
  )
}

export default Navbar
