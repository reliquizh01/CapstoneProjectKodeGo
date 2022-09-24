import React from 'react'
import Image from 'react-bootstrap/Image';
import '../css/styles.css';
import Shop from './Shop';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
        <div>
            {<Header />}
        </div>
        <div>
            {<Shop />}
        </div>
        <div>
            {<Footer />}
        </div>
    </div>
  )
}

export default Home