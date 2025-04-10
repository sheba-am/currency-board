'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles

import slide1 from '../public/slider-1.png';
import slide2 from '../public/slider-2.png';
import slide3 from '../public/slider-3.png';

import Image from 'next/image';
import styles from '@/styles/ImageSlider.module.css';

const slides = [slide1, slide2, slide3];

export default function ImageSlider() {
  return (
    <section className="py-5">
      <Carousel
        showThumbs={false} // Disable thumbnails
        infiniteLoop={true} // Loop the carousel
        centerMode={true} // Center the active slide
        dynamicHeight={false} // Keep the height constant
        emulateTouch={true} // Allow touch interaction
        centerSlidePercentage={80} // Show part of the next slide on each side
        interval={3000} // Slide change interval in milliseconds
        transitionTime={500} // Slide transition time in milliseconds
        showStatus={false} // Hide the 1 of 3 text
        showArrows={false} // Show navigation arrows 
      >
        {slides.map((slide, idx) => (
          <div key={idx} className={styles.slideItem}>
            <div className={styles.captionOverlay}>
              <h3>Slide Title {idx + 1}</h3>
              <p>Some text describing the slide.</p>
            </div>
            <Image
              src={slide}
              alt={`Slide ${idx + 1}`}
              className={styles.slideImage}
              style={{ width: '100%', height: '450px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}
