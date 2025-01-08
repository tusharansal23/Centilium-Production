import React, { useState, useEffect } from 'react';
import s1 from '../images/s1.png';
import s2 from '../images/s2.png';
import s3 from '../images/s3.png';
import s4 from '../images/s4.png';
import '../css/Collage.css';

const HomepageService = () => {
  const [positions, setPositions] = useState([]);
  const [zoomIndex, setZoomIndex] = useState(null); // Index for the zoom effect

  const images = [s1, s2, s3, s4];
  const texts = [
    `During the initial phases of establishing a company, 
    the most critical aspect revolves around the development 
    of a well-crafted business plan.`,
    `Seeking to work and reside in Canada? 
    Look no further than Centilium Immigration, 
    your trusted partner for all immigration-related matters.`,
    `Every year, countless individuals flock to Canada, 
    whether to reunite with loved ones or to immerse themselves in the breathtaking beauty of its landscapes. 
    Canadian visa categories typically grant a maximum stay of six months within the country's borders.`,
    `Are you aspiring to pursue education in one of the world's most intellectually advanced destinations? 
    Look no further than Canada, a country renowned for its welcoming and inclusive environment for 
    international graduates.`
  ];
  const heading = [
    "BUSINESS VISA",
    "WORK VISA",
    "TOURIST VISA",
    "STUDENT VISA"
  ];

  useEffect(() => {
    // Set initial random positions
    const generateRandomPositions = () => {
      const newPositions = images.map(() => ({
        top: `${Math.floor(Math.random() * 80)}%`,
        left: `${Math.floor(Math.random() * 80)}%`
      }));
      setPositions(newPositions);
    };

    generateRandomPositions();

    // Interval to update positions and trigger zoom effect in sequence
    const interval = setInterval(() => {
      generateRandomPositions();
      setZoomIndex((prevZoomIndex) => (prevZoomIndex + 1) % images.length); // Cycle through images for zoom
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container collage-container bg-light rounded p-3">
      {/* Image Carousel */}
      <div className="collage-carousel">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Img ${index + 1}`}
            className={`collage-carousel-image ${index === zoomIndex ? 'zoom' : ''}`}
            style={{
              top: positions[index]?.top,
              left: positions[index]?.left
            }}
          />
        ))}
      </div>

      {/* Text associated with focused image */}
      <div className='collage-text-box'>
        <div className='collage-heading'>
          <h2>{heading[zoomIndex]}</h2>
        </div>
        <div className="image-text py-3 px-3">
          <p>{texts[zoomIndex]}</p>
        </div>
        <div className='collage-button py-3 px-3'>
          <a href="#" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Learn More About Our Services</a>
        </div>
      </div>
    </div>
  );
};

export default HomepageService;
