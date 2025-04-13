import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import heroImage from "@/public/currency-hero.png"; 

const CurrenciesHeroSection = () => {
  return (
    <section className="py-5" style={{backgroundColor: "#DECBE9", minHeight:"70vh"}}>
      <Container>
        <Row className="align-items-center">
          {/* Text Side */}
          <Col md={6}>
            <h1 className="custom-black-title fw-bold text-black mb-3">Today’s Cryptocurrency prices </h1>
            <blockquote className="lead custom-black-des">
              The global crypto market cap is<span className="custom-black-bold-des "> $1.86T</span>
            </blockquote>
          </Col>

          {/* Image Side */}
          <Col xs={12} md={6} className="text-center">
            <Image
              src={heroImage}
              alt="Crypto Hero"
              className="img-fluid rounded"
              width={500}
              height={500}
              priority
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CurrenciesHeroSection;
