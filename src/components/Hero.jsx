import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ContactModal from "./ContactFormModal";
import { objectives } from '../constants';

const Hero = () => {
  const [showContact, setShowContact] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % objectives.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".fade-in"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }
  }, [currentImageIndex]);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-12 px-4 overflow-hidden">
      {/* Background Slideshow */}
      {objectives.map((img, index) => (
        <img
          key={index}
          src={img.image}
          alt={`bg-${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Hero content */}
      <div ref={heroRef} className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="fade-in">
          <TextGenerateEffect
            className="text-5xl sm:text-7xl lg:text-8xl text-center tracking-wide font-bold"
            words="Mentoring Minds, Building Futures."
          />
        </div>

        <p className="fade-in mt-10 text-lg text-center text-neutral-200 max-w-4xl font-bold">
          We are a grassroots foundation committed to unlocking potential in under-resourced communities...
        </p>

        <div className="fade-in flex justify-center my-10 gap-4 font-bold">
          <a href="#about" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-3 border rounded-md text-white">
            Read More
          </a>
          <button
            onClick={() => setShowContact(true)}
            className="py-3 px-4 border rounded-md text-white font-bold"
          >
            Contact Us
          </button>
        </div>

        <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
      </div>
    </div>
  );
};

export default Hero;