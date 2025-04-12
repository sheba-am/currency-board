'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import { Container} from 'react-bootstrap';

import slide1 from '../public/slider-1.png';
import slide2 from '../public/slider-2.png';
import slide3 from '../public/slider-3.png';

import Image from 'next/image';
import styles from '@/styles/ImageSlider.module.css';

const slides = [slide1, slide2, slide3];

export default function ImageSlider() {
  return (
    <section className="py-5">

            <Container>
              {/* Caption for Mobile (Before the Image) */}
              <div className="d-block d-md-none mb-3">
                <h3 className={`fw-bold mb-2 {styles.captionTitle}`}>Risk-free 30 day trial to level up your team’s productivity.</h3>
                <p className="text-muted">Get started now and take advantage of our 30-day free trial today. No credit card required.</p>
              </div>
            </Container>   
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

            {/* Image */}
            <Image
              src={slide}
              alt={`Slide ${idx + 1}`}
              className={styles.slideImage}
            />

            {/* Caption for Desktop (On Top of Image) */}
            <div className={`d-none d-md-block ${styles.captionOverlay}`}>
              <h3 className="fw-bold mb-4">Risk-free 30 day trial to level up your team’s productivity.</h3>
              <p className={styles.captionDescription}>Get started now and take advantage of our 30-day free trial today. No credit card required.</p>
            </div>

          </div>
        ))}

      </Carousel>
    </section>
  );
}
