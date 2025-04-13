import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import feature1 from '@/public/feature-1.png';
import feature2 from '@/public/feature-2.png';
import feature3 from '@/public/feature-3.png';

const features = [
  {
    img: feature1,
    title: 'Transparent Pricing',
    description: 'Short description of feature one.',
  },
  {
    img: feature2,
    title: 'Easy Integrations',
    description: 'Short description of feature two.',
  },
  {
    img: feature3,
    title: 'Superb Efficiency',
    description: 'Short description of feature three.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-5 text-center">
      <Container>
        {/* Title */}
        <div className='d-flex justify-content-center feature-section'>
          <h2 className="fw-bold mb-3">Get more done in <span className='text-green'>less time</span></h2>
        </div>

        {/* Description */}
        <p className="custom-text-muted mb-5">
          Simple, fast, effortlessly.
        </p>

        {/* Features */}
        <Row>
          {features.map((feature, idx) => (
            <Col key={idx} md={4} className="mb-4">
              <div className="d-flex align-items-center justify-content-center">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  className="me-3"
                />
                <div className="text-start">
                  <h5 className="mb-1">{feature.title}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
