

import './footer.css';
import React from 'react';

const Footer = () => {
  
  return (
    <>
  {/* component */}
  {/* This is an example component */}
  <div className=" p-28 foot bg">

    <div className="md:flex">
      <div id="contact" className="md:w-full text-white bg-indigo-900/[.37] p-8 sm:rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg rounded-tl-lg flex justify-center">
        <div>
          <h1 className="text-5xl mb-5 font-bold text-center">
            Let's  <span className="text-pink-300">us</span> Build the <span className="text-pink-300">Bridge</span>
             <br />between Your Brand and customer
          </h1>
          <h2 className="text-sm mb-12 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum excepturi alias ipsum possimus, eius corrupti <br /> voluptates earum nobis facere est modi, et velit tenetur sit impedit! Esse vel error iusto.
          </h2>
          <div className="flex justify-center">
            <div className="mr-8">
              <p className="text-4xl font-bold  text-center">10k+</p>
              <p className="text-sm  text-center">companies</p>
            </div>
            <div className="mr-8 ">
              <p className="text-4xl font-bold  text-center">120+</p>
              <p className="text-sm  text-center">teams</p>
            </div>
            <div>
              <p className="text-4xl font-bold  text-center">10k+</p>
              <p className="text-sm  text-center">events</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</>

  );
}

export default Footer;
