import { Container, Row, Col, Button } from 'react-bootstrap';

export default function CallToActionSection() {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side */}
          <Col md={8}>
            <h2 className="fw-bold mb-3">Start Your Currency Journey Today</h2>
            <p className="mb-4">
              Join us for accurate, real-time currency data at your fingertips. Get started now to stay ahead in the market.
            </p>
          </Col>

          {/* Right Side */}
          <Col md={4} className="d-flex justify-content-center align-items-end">
            <Button variant="primary" size="lg" className="w-100">
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
