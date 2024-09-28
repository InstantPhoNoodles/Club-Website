import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import './Home.css'

import off1 from '../assets/off1.png'
import off2 from '../assets/off2.png'
import off3 from '../assets/off3.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'

const Home: React.FC = () => {
  return (
    <div>
      <Header/>
      <Navbar/>

      {/* Home Page Content */}
      <div className='home'>
        {/* About Us and Anouncments */}
        <section className='home-info'>
          <div className='about-us'>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe officia mollitia, maxime odit debitis, corrupti ipsam quod temporibus reprehenderit, optio magnam cum qui reiciendis? Aut, maxime labore? Labore, commodi quasi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa consectetur a porro ipsa labore eaque veritatis ad illum cumque dolorem fugit nemo officiis cum quam quidem cum quam quidem cum quam quidem?</p>
          </div>
          <div className='anouncment-board'>
            <h2>Anouncment Board</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe officia mollitia, maxime odit debitis, corrupti ipsam quod temporibus reprehenderit, optio magnam cum qui reiciendis? Aut, maxime labore? Labore, commodi quasi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa consectetur a porro ipsa labore eaque veritatis ad illum cumque dolorem fugit nemo officiis cum quam quidem cum quam quidem cum quam quidem?</p>
          </div>
        </section>

        {/* Club Officiers Section */}
        <section className='club-officers'>
          <h2>Meet Our Officers</h2>
          <div className="officer-grid">
            <div className="officer">
              <h3>President</h3>
              <img src={off1} alt="Officer 1" />
              <p>Officer 1</p>
            </div>
            <div className="officer">
              <h3>Vice President</h3>
              <img src={off2} alt="Officer 2" />
              <p>Officer 2</p>
            </div>
            <div className="officer">
              <h3>Secretary</h3>
              <img src={off3} alt="Officer 3" />
              <p>Officer 3</p>
            </div>
            <div className="officer">
              <h3>Treasurer</h3>
              <img src={off2} alt="Officer 4" />
              <p>Officer 4</p>
            </div>
            <div className="officer">
              <h3>Media Director</h3>
              <img src={off3} alt="Officer 5" />
              <p>Officer 5</p>
            </div>
            <div className="officer">
              <h3>University Liason</h3>
              <img src={off1} alt="Officer 6" />
              <p>Officer 6</p>
            </div>
          </div>
        </section>

        {/* Club Social Media Section */}
        <section className="socials">
          <h2>Follow Us On Our Social Media</h2>
          <div className="social-icons">
            <a href="https://www.instagram.com/wsutc_bookandteaclub/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com/wsutc_bookandteaclub/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram"/>
            </a>
            <a href={"https://www.instagram.com/wsutc_bookandteaclub/"} target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter"/>
            </a>
          </div>
        </section>
      </div>

      <Footer/>
    </div>
  );
};

export default Home;
