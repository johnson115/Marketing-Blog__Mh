import React, { useEffect, useRef, useState } from 'react';
import ".././hero/hero.css";
import "./about.css";

const Aboutus = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Optional: Disconnect observer once visible
        }
      },
      { threshold: 0.1 } // Adjust as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative pt-20 pb-40 lg:pt-20 back">
      <div className="relative xl:container m-auto px-2 md:px-4 lg:px-4 justify-center">
        <h1
          id="about"
          className="tiitt w-full text-center text-[49px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"
        >
          Digital Move Up Platform est Votre 
          <span className={`text-transparent foo bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF] ${isVisible ? 'animate__animated animate__flash' : ''}`}>
            {" "}
            Partenaire Idéal
          </span>
        </h1>

        <ul className="grid w-full gap-6 md:grid-cols-3 mr-auto ml-auto">
          <li className='mr-auto ml-auto'>
            <div className={`cards ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}>
              <p className="card-title">Maîtrise Complète du Digital</p>
              <p className="small-desc">
                Nous gérons tous les aspects numériques de votre entreprise: 
                marketing, développement web et mobile, et élévation de marque. Nous avons l'expertise nécessaire.
              </p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </div>
          </li>
          <li className='ml-auto mr-auto'>
            <div className={`cards ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}>
              <p className="card-title">Vision Créative et Unique</p>
              <p className="small-desc">
                Chez Digital Move Up Platform, nous allions vision unique et créativité exceptionnelle pour offrir des solutions innovantes et sur mesure, parfaitement adaptées à vos besoins.
              </p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </div>
          </li>
          <li className='ml-auto mr-auto'>
            <div className={`cards ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}>
              <p className="card-title">Passion et Dévouement</p>
              <p className="small-desc">
                Nous ne faisons pas que réaliser des tâches, nous travaillons avec passion. Notre équipe est dévouée à votre réussite, dépassant les attentes pour transformer vos idées en succès éclatant.
              </p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aboutus;
