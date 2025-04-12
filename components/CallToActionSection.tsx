import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoIosArrowForward } from "react-icons/io";

export default function CallToActionSection() {
  return (
    <section className="py-5 callAction ">
      <Container className="d-flex px-5 py-5 custom-bg-blue">
        <Row className="align-items-center">
          {/* Left Side */}
          <Col md={8}>
            <h2 className="fw-bold mb-4 title-main-blue">Risk-free 30 day trial to <span className="text-green">level up</span> your team’s productivity.</h2>
            <p className="mb-4 des-blue">
              Get started now and take advantage of our 30 day free trial today. No credit card required.
            </p>
          </Col>

          {/* Right Side */}
          <Col md={4} className="d-flex justify-content-center align-items-end mt-5">
            <Button variant="primary" className="w-60">
              Get Started <IoIosArrowForward className="ms-2" />
            </Button>
          </Col>
        </Row>
      </Container>

    </section>
  );
}
