import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import heroImage from "@/public/hero-image.png"; 
import { IoIosArrowForward } from "react-icons/io";

const HeroSection = () => {
  return (
    <section className="py-5 ">
      <Container>
        <Row className="align-items-center">
          {/* Text Side */}
          <Col md={6}>
            <h2 className="display-4 fw-bold text-primary main-blue">Manage your daily tasks better without all the stress</h2>
            <p className="lead text-secondary">
              Change the way you manage your tasks with our revolutionary project management technology.
            </p>
            <div className="d-flex flex-column flex-md-row gap-2 mt-3">
              <Button variant="primary" className="w-40 w-md-auto">Get Started <IoIosArrowForward  className="ms-2" /></Button>
              <Button variant="secondary" className="w-40 w-md-auto">Schedule a Demo</Button>
            </div>
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

export default HeroSection;
