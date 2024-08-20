

import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./hero.css";
var headerImg= require("../../media/heroo.png")
const Hero = () => {
  return (
    <>
    <header id="home" class=" bg">
    

    <div class="container flex flex-col kiki px-6 py-4 mx-auto space-y-6 md:h-70 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div class="flex flex-col items-center w-full md:flex-row md:w-1/2 xs:mb-0 md:mb-10">
            

            <div class="max-w-lg md:mx-12 md:order-2">
                <h1 class="text-3xl font-medium tracking-wide  text-white md:text-4xl">Élevez Votre Entreprise Avec <br /> <span className='relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 text-5xl'>  Digital Move Up</span> </h1>
                <p class="mt-4  description text-gray-300">Votre entreprise est prête à grandir, et nous avons les solutions pour y parvenir. Digital Move Up transforme vos ambitions en succès. Avec nos stratégies de marketing digital sur mesure, nous faisons briller votre marque sur le web. Ensemble, faisons évoluer votre entreprise.</p>
                <div class="mt-6">
                    <AnchorLink href="#about" class="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400">En Savoir Plus</AnchorLink>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center w-full h-100 md:w-7/12 mimi mb-40">
        <img class="object-cover w-full h-full max-w-3xl rounded-md mimi" alt='watch' src={headerImg}  />
        </div>
    </div>
</header>
 

    </>
  );
}

export default Hero;
