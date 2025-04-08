import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import feature1 from '@/public/feature-1.png';
import feature2 from '@/public/feature-2.png';
import feature3 from '@/public/feature-3.png';

const features = [
  {
    img: feature1,
    title: 'Feature One',
    description: 'Short description of feature one.',
  },
  {
    img: feature2,
    title: 'Feature Two',
    description: 'Short description of feature two.',
  },
  {
    img: feature3,
    title: 'Feature Three',
    description: 'Short description of feature three.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-5 text-center">
      <Container>
        {/* Title */}
        <h2 className="fw-bold mb-3">Why Choose Us</h2>

        {/* Description */}
        <p className="text-muted mb-5">
            Short description of feature.
        </p>

        {/* Features */}
        <Row>
          {features.map((feature, idx) => (
            <Col key={idx} md={4} className="mb-4">
              <div className="d-flex align-items-center justify-content-center">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={50}
                  height={50}
                  className="me-3"
                />
                <div className="text-start">
                  <h5 className="mb-1">{feature.title}</h5>
                  <p className="text-muted small mb-0">{feature.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
