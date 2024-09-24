import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css'

const Home: React.FC = () => {
  return (
    <div>
      <Header/>

      {/* Home Page Content */}
      <div className='home'>
        {/* About us and Anouncment */}
        <section className='home-info'>
          <div className='about-us'>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe officia
              mollitia, maxime odit debitis, corrupti ipsam quod temporibus reprehenderit,
              optio magnam cum qui reiciendis? Aut, maxime labore? Labore, commodi quasi.
            </p>
          </div>
          <div className='info-board'>
            <h2>Anouncment Board</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa consectetur
              a porro ipsa labore eaque veritatis ad illum cumque dolorem fugit nemo officiis
              cum quam quidem ratione est, id suscipit?
            </p>
          </div>
        </section>

        {/* Club Officiers Section */}
        <section className='club-officers'>
          <h2>Meet Our Officers</h2>
          <div className="officer-grid">
            <div className="officer">
              <img src="officer1.jpg" alt="Officer 1" />
              <p>Officer 1</p>
            </div>
            <div className="officer">
              <img src="officer2.jpg" alt="Officer 2" />
              <p>Officer 2</p>
            </div>
            <div className="officer">
              <img src="officer3.jpg" alt="Officer 3" />
              <p>Officer 3</p>
            </div>
            <div className="officer">
              <img src="officer4.jpg" alt="Officer 4" />
              <p>Officer 4</p>
            </div>
            <div className="officer">
              <img src="officer5.jpg" alt="Officer 5" />
              <p>Officer 5</p>
            </div>
            <div className="officer">
              <img src="officer6.jpg" alt="Officer 6" />
              <p>Officer 6</p>
            </div>
          </div>
        </section>

        {/* Club Social Media Section */}
        <section className="socials">
          <h2>Follow Us On Our Social Media</h2>
          <div className="social-icons">
            <a href="https://www.instagram.com/wsutc_bookandteaclub/" target="_blank">
              <img src="src\assets\facebook.png" alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com/wsutc_bookandteaclub/" target="_blank">
              <img src="src\assets\instagram.png" alt="Instagram"/>
            </a>
            <a href="https://www.instagram.com/wsutc_bookandteaclub/" target="_blank">
              <img src="src\assets\twitter.png" alt="Twitter"/>
            </a>
          </div>
        </section>
      </div>

      <Footer/>
    </div>
  );
};

export default Home;
