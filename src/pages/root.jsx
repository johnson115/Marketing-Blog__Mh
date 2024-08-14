



import React from 'react';
import Hero from './hero/hero';
import Navbar from './navbar/navbar';
import Aboutus from './service/About';
import Service from './service/service';
import Footer from './footer/footer';
import Partenar from './hero/partenar';
const Root = () => {
  return (
    <>
    <Navbar />
<Hero />
<Aboutus />
<Partenar />
<Service />
<Footer/>
    </>
  );
}

export default Root;
