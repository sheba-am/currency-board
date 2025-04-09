
import { Carousel, Container } from 'react-bootstrap';
import Image from 'next/image';
import slide1 from '../public/slider-1.png';
import slide2 from '../public/slider-2.png';
import slide3 from '../public/slider-3.png';

export default function ImageSlider() {
  return (
    <section className="py-5">
      <Container>
        <Carousel
          indicators
          interval={4000}
          fade={true}
          className="custom-carousel"
        >
          {[slide1, slide2, slide3].map((slide, idx) => (
            <Carousel.Item key={idx}>
              <div className="position-relative">
                <Image
                  src={slide}
                  alt={`Slide ${idx + 1}`}
                  className="d-block w-100 rounded"
                  style={{ height: '450px', objectFit: 'cover', opacity: 0.6 }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Slide Title {idx + 1}</h3>
                  <p>Some text describing the slide.</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
