import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Posts.css'

const Posts: React.FC = () => {
  return (
    <div>
      <Header/>
        <div className='posts'>
          <h1>Posts Page</h1>
          <p>Here are the blog posts.</p>
        </div>
      <Footer/>
    </div>
  );
};

export default Posts;
