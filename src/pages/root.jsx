



import React from 'react';
import Hero from './hero/hero';
import Navbar from './navbar/navbar';
import Aboutus from './service/About';
import Service from './service/service';
import Footer from './footer/footer';

const Root = () => {
  return (
    <>
    <Navbar />
<Hero />
<Aboutus />
<Service />
<Footer/>
    </>
  );
}

export default Root;
