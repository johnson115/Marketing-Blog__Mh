import React, { useEffect, useRef, useState } from "react";
import "./service.css";
import 'animate.css';

const Service = () => {
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
      { threshold: 0.1 } // Adjust this value as needed
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

  // Image imports
  const img1 = require("../../media/1.png");
  const img2 = require("../../media/2.png");
  const img3 = require("../../media/3.png");
  const img4 = require("../../media/4.png");
  const img5 = require("../../media/5.png");
  const img6 = require("../../media/6.png");
  const img7 = require("../../media/7.png");
  const img8 = require("../../media/8.png");

  return (
    <div ref={sectionRef} className="py-16 bg-gray-50 overflow-hidden">
      <div className="container m-auto px-6 space-y-10 text-gray-500 md:px-14">
        <div>
          <p id="we" className="text-center text-gray-600 text-lg font-semibold">
            Our Services
          </p>
          <h2 className="mt-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
            Votre Entreprise, Notre Expertise
          </h2>
        </div>
        <div className="mt-16 grid divide-x divide-y rounded-xl overflow-hidden justify-center sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
          {[
            { img: img1, title: "Sponsoring & Publicités", subtitle: "Maximisez la visibilité de votre marque", description: "avec des campagnes de sponsoring et de publicité ciblées, conçues pour atteindre efficacement votre audience et optimiser votre retour sur investissement." },
            { img: img2, title: "Développement Web & Mobile", subtitle: "Créez des sites web et des applications mobiles", description: "performants et esthétiques, répondant aux besoins de votre entreprise." },
            { img: img3, title: "Optimisation SEO", subtitle: "", description: "Améliorez la visibilité de votre site web pour attirer davantage de visiteurs qualifiés." },
            { img: img4, title: "Gestion des Réseaux Sociaux", subtitle: "", description: "Développez votre présence en ligne avec une gestion efficace de vos réseaux sociaux." },
            { img: img5, title: "Marketing de Contenu", subtitle: "", description: "Créez du contenu pertinent et engageant pour attirer et convertir votre audience." },
            { img: img6, title: "Design Graphique", subtitle: "", description: "Associez élégance et efficacité dans tous vos visuels pour renforcer l’identité de votre marque." },
            { img: img7, title: "Production Vidéo", subtitle: "", description: "Attirez et engagez votre public avec des vidéos professionnelles qui racontent l’histoire de votre marque." },
            { img: img8, title: "Consulting en Stratégie Digitale", subtitle: "", description: "Optimisez votre présence en ligne avec des conseils stratégiques adaptés à vos objectifs commerciaux." }
          ].map((service, index) => (
            <article key={index} className={`card ${isVisible ? 'animate__animated animate__fadeInDownBig' : ''}`}>
              <div className="temporary_text">
                <img src={service.img} alt="service" />
              </div>
              <div className="card_content">
                <span className="card_title">{service.title}</span>
                <span className="card_subtitle">{service.subtitle}</span>
                <p className="card_description">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
