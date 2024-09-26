import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import './About.css'

const About: React.FC = () => {
  return (
    <div>
      <Header/>
      <Navbar/>

      {/* About Page Content */}
      <div className='about'>
        <h1>About Page</h1>
        <p>This is the about page.</p>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
