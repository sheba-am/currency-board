import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import infoImg2 from '../public/info-image-2.png'; 
import { IoIosArrowForward } from "react-icons/io";

export default function InfoImageSectionReversed() {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          {/* Image on top for mobile, right for desktop */}
          <Col md={6} className="text-center order-1 order-md-2 mt-4 mt-md-0">
            <Image
              src={infoImg2}
              alt="Info Section Reversed"
              className="rounded-circle"
              width={350}
              height={350}
              style={{ objectFit: 'cover' }}
            />
          </Col>

          {/* Text on the bottom for mobile, left for desktop */}
          <Col md={6} className="order-2 order-md-1">
            <h2 className="fw-bold mb-3">info second</h2>
            <p className="text-muted mb-4">
              We have designed our app for increased efficiency and it will help you to start getting more things done.
            </p>
            <div className="d-flex justify-content-end">
              <Button variant="secondary">
                Learn More <IoIosArrowForward className="ms-2" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
