import './Header.css'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='Header'>

      <div className='banner'>
        <img src="src\assets\wsu-red-white-logo.png" alt="WSU Logo"/>
        <h1>Book and Tea Club in WSU Tri-Cities</h1>
      </div>
      <div>
        <Navbar/>
      </div>

      

    </div>
  )
}

export default Header
