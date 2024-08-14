

import ".././hero/hero.css" ;
import React from 'react';
var about=require("../../media/about-us.png");


const Aboutus = () => {
  return (
    <div className=" relative pt-20 pb-40 lg:pt-20 bg-white">
    <div className="relative xl:container m-auto px-2 md:px-4 lg:px-4 justify-center">
    <h1 id="about" class=" w-full text-center text-[55px] font-extrabold text-black">
    Digital Move Up Platform 
    Votre 
      <span class="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF] animate__animated animate__flash"> Partenaire Idéal</span>
    </h1>
      
      
      <ul class="grid w-full gap-6 md:grid-cols-3">
      <li>
          

          <div class="w-full card mt-12 max-w-sm p-4  border  rounded-lg shadow sm:p-6 md:p-8  border-gray-700">
          <h1 id="tittle" class="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">Maîtrise Complète du Digital</h1>
          <p class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">Nous gérons tous les aspects numériques de votre entreprise: 
          marketing, développement web et mobile, et élévation de marque. Nous avons l'expertise nécessaire.</p>
          </div>
          
                  </li>
        <li>
          

        <div class="w-full card mt-12 max-w-sm p-4  border  rounded-lg shadow sm:p-6 md:p-8  border-gray-700">
          <h1 id="tittle" class="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">Vision Créative et Unique</h1>
          <p class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">Chez Digital Move Up Platform, nous allions vision unique et créativité exceptionnelle pour offrir des solutions innovantes et sur mesure, parfaitement adaptées à vos besoins .</p>
          </div>
          
                  </li>
                  <li>
          

                  <div class="w-full card mt-12 max-w-sm p-4  border  rounded-lg shadow sm:p-6 md:p-8  border-gray-700">
          <h1 id="tittle" class="mb-4 text-xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-3xl ">Passion et Dévouement</h1>
          <p class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">Nous ne faisons pas que réaliser des tâches, nous travaillons avec passion. Notre équipe est dévouée à votre réussite, dépassant les attentes pour transformer vos idées en succès éclatant .</p>
          </div>
          
                  </li>
      </ul>
    </div>
  </div>
  
  );
}

export default Aboutus;
