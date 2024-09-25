import './Footer.css'

function Footer() {
  return (
    <div className='Footer'>
      {/* Copyright and Disclaimer */}
      <div className='nav-info'>
        <p>&copy; 2024 Book and Tea Club</p>
        <p>
          Disclaimer: This is an unofficial website for the Book and Teal Club at WSU Tri-Cities.
          We are not an official website commissioned by Washington State University.
        </p>
      </div>

      {/* Facebook */}
      <div className='social-links'>
        <a href="https://www.instagram.com/wsutc_bookandteaclub/" target="_blank">
          <img src="src\assets\facebook.png" alt="Facebook"/>
          WSUTC_BookAndTeaClub
        </a>
      </div>

      {/* Instagram */}
      <div className='social-links'>
        <a href="https://www.instagram.com/wsutc_bookandteaclub/" target="_blank">
          <img src="src\assets\instagram.png" alt="Instagram"/>
          WSUTC_BookAndTeaClub
        </a>
      </div>

      {/* Twitter */}
      <div className='social-links'>
        <a href="https://www.instagram.com/wsutc_bookandteaclub/" target="_blank">
          <img src="src\assets\twitter-blue.png" alt="Twitter"/>
          WSUTC_BookAndTeaClub
        </a>
      </div>
    </div>
  )
}

export default Footer
