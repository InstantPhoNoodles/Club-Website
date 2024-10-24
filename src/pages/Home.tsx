import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import OfficerCard from '../components/OfficerCard';
import Footer from '../components/Footer';
import './Home.css'

import off1 from '../assets/off1.png'
import off2 from '../assets/off2.png'
import off3 from '../assets/off3.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'

const Home: React.FC = () => {
  const [showOfficerCard, setShowOfficerCard] = useState(false); // State to control showing the OfficerCard

  const handleClick = () => {
    (showOfficerCard == false) ? setShowOfficerCard(true) : setShowOfficerCard(false);
  };

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
          <div className='border'>
            {!showOfficerCard ? (
              <>
                {/* Original content shown when OfficerCard is not displayed */}
                <h1 className='officer-heading'>Meet Our Officers</h1>
                <div className="officer-grid">
                  <div className="officer" onClick={handleClick}> { }
                    <h2>President</h2>
                    <img src={off1} alt="Officer 1" />
                    <p>Officer 1</p>
                  </div>
                  <div className="officer" onClick={handleClick}> { }
                    <h2>Vice President</h2>
                    <img src={off2} alt="Officer 2" />
                    <p>Officer 2</p>
                  </div>
                  <div className="officer" onClick={handleClick}> { }
                    <h2>Secretary</h2>
                    <img src={off3} alt="Officer 3" />
                    <p>Officer 3</p>
                  </div>
                  <div className="officer" onClick={handleClick}> { }
                    <h2>Treasurer</h2>
                    <img src={off2} alt="Officer 4" />
                    <p>Officer 4</p>
                  </div>
                  <div className="officer" onClick={handleClick}> { }
                    <h2>Media Director</h2>
                    <img src={off3} alt="Officer 5" />
                    <p>Officer 5</p>
                  </div>
                  <div className="officer" onClick={handleClick}> { }
                    <h2>University Liason</h2>
                    <img src={off1} alt="Officer 6" />
                    <p>Officer 6</p>
                  </div>
                </div>
              </>
            ) : (
              // OfficerCard is shown when the state is true
              <>
                <div className='close-button' onClick={handleClick}> { }
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                  </svg>
                </div>
                <OfficerCard/>
              </>
            )}
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
