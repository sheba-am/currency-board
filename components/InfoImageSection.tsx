import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import infoImg from '../public/info-image-1.png'; 
import { IoIosArrowForward } from "react-icons/io";

export default function InfoImageSection() {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          {/* Image on the Left */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <Image
              src={infoImg}
              alt="Info Section"
              className="rounded-circle"
              width={350}
              height={350}
              style={{ objectFit: 'cover' }}
            />
          </Col>

          {/* Text on the Right */}
          <Col md={6}>
            <h2 className="fw-bold mb-3">Info Title 1</h2>
            <p className="text-muted mb-4">
                We have designed our app for increased efficiency and it will help you to start getting more things done.
            </p>
            <div className='d-flex justify-content-end'>
              <Button variant="secondary">
                Learn More <IoIosArrowForward  className="ms-2" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
