import './Header.css'

const Header: React.FC = () => {
  return (
    <div className='Header'>
      <div className='wsu-logo'>
        <a href="https://tricities.wsu.edu/" target="_blank">
          <img src="src\assets\wsu-red-white-logo.png" alt="WSU Logo"/>
        </a>
      </div>
      <div className='banner'>
        <a href="/">
          <h1>Book and Tea Club at WSU Tri-Cities</h1>
        </a>
      </div>
    </div>
  )
}

export default Header
