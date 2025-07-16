import React, { useState, useEffect, useRef } from 'react';
import { Typography } from "@material-tailwind/react";

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Children learning in a classroom setting',
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Medical professional assisting a patient',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Group of people participating in a workshop',
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/6646912/pexels-photo-6646912.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Volunteers distributing food to community members',
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Construction workers building a community structure',
    },
  ];

  const imagesReverse = [
    {
      id: 6,
      src: 'https://images.pexels.com/photos/6290976/pexels-photo-6290976.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Group of volunteers planting trees',
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/7688160/pexels-photo-7688160.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Community members attending an outdoor event',
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/2642507/pexels-photo-2642507.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'People participating in a charity run',
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/6325986/pexels-photo-6325986.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Adults and children engaged in an art activity',
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/6208084/pexels-photo-6208084.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Volunteers cleaning up a local park',
    },
  ];

const AnimatedGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollWrapperRef = useRef(null);
  const scrollWrapperReverseRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedImage]);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <section id="gallery" className="min-h-screen py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <Typography
          variant="h2"
          color="blue-gray"
          className="text-center mb-16 relative font-bold text-4xl"
        >
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Our Impact in Action
          </span>
          <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-orange-500 transform -translate-x-1/2 mt-2"></span>
        </Typography>

        {/* First Row */}
        <div className="continuous-scroll-container bg-gray-400 rounded-xl shadow-inner">
          <div ref={scrollWrapperRef} className="scroll-wrapper">
            {[...images, ...images].map((image, index) => (
              <div
                key={`${image.id}-${index}-row1`}
                className="scroll-item"
                onClick={() => openModal(image)}
              >
                <img
                  loading="lazy"
                  src={image.src}
                  alt={image.alt}
                  className="scroll-item-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/800x500/CCCCCC/666666?text=Image+Error';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="continuous-scroll-container bg-gray-400 rounded-xl shadow-inner mt-10">
          <div ref={scrollWrapperReverseRef} className="scroll-wrapper-reverse">
            {[...imagesReverse, ...imagesReverse].map((image, index) => (
              <div
                key={`${image.id}-${index}-row2`}
                className="scroll-item"
                onClick={() => openModal(image)}
              >
                <img
                  loading="lazy"
                  src={image.src}
                  alt={image.alt}
                  className="scroll-item-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/800x500/CCCCCC/666666?text=Image+Error';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-white bg-red-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold hover:bg-red-700 transition"
              onClick={closeModal}
              aria-label="Close image view"
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="object-contain w-full h-full max-h-[90vh]"
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default AnimatedGallery;
