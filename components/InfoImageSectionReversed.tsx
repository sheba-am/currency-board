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
          <Col md={6} className="text-center mb-4 mb-md-0  order-1 order-lg-2">

            <Image
              src={infoImg2}
              alt="Info Section"
              className="rounded-circle img-fluid"
              width={400}
              height={400}
              sizes="(min-width: 768px) 400px, 100vw"
              style={{ objectFit: 'cover', objectPosition: 'center', boxShadow: "-31px 3px 84px -37px #7737FF40" }}
            />
          </Col>
          {/* Text on the bottom for mobile, left for desktop */}
          <Col lg={6} className="order-2 order-lg-1">
            <h2 className="fw-bold mt-3 mb-3 main-orange">Free template library included</h2>
            <p className="custom-text-secondary mb-4">
              We have designed our app for increased efficiency and it will help you to start getting more things done.
            </p>
            <div className="d-flex justify-content-end">
              <Button variant="tertiary">
                Learn More <IoIosArrowForward className="ms-2" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
