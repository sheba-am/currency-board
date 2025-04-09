import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import heroImage from "@/public/currency-hero.png"; 

const CurrenciesHeroSection = () => {
  return (
    <section className="py-5 ">
      <Container>
        <Row className="align-items-center">
          {/* Text Side */}
          <Col md={6}>
            <h1 className="display-4 fw-bold text-primary">Main header</h1>
            <p className="lead text-secondary">
              Get real-time updates on currencies.
            </p>
          </Col>

          {/* Image Side */}
          <Col md={6} className="text-center">
            <Image
              src={heroImage}
              alt="Crypto Hero"
              className="img-fluid rounded"
              width={500}
              height={500}
              priority
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CurrenciesHeroSection;
