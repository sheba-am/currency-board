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
              className="rounded-circle img-fluid"
              width={400}
              height={400}
              sizes="(min-width: 768px) 400px, 100vw"
              style={{ objectFit: 'cover', objectPosition: 'center', boxShadow: "-31px 3px 84px -37px #7737FF40" }}
            />
          </Col>

          {/* Text on the Right */}
          <Col lg={6}>
            <h2 className="fw-bold mt-3 mb-3 main-purple">Revolutionize your workflow</h2>
              {/* <div className='d-flex text-wrap w-100'> */}
                <p className=" mb-4 custom-text-secondary">
                  We have designed our app for increased efficiency and it will help you to start getting more things done.
                </p>
              {/* </div> */}
              <div className='d-flex justify-content-end'>
                <Button variant="tertiary">
                  Learn More <IoIosArrowForward   />
                </Button>
              </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
}
