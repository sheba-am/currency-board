import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import logoImg from '@/public/logo.png';
import instagramIcon from '@/public/instagram-icon.png';
import twitterIcon from '@/public/twitter-icon.png';
import facebookIcon from '@/public/facebook-icon.png';
import ToggleButton from './ToggleButton';

export default function DesktopFooter() {
  return (
    <footer className="pt-5 pb-3 d-none d-lg-flex">
      <Container>
        <Row className="mb-4">
          {/* Left: Logo + Mode Toggle */}
          <Col md={4}>
            <div className=' mb-3'>
              <Image
                src={logoImg}
                alt="logo Section"
              />
            </div>
            {/* <Button variant="outline-secondary" size="sm">Toggle Light/Dark</Button> */}
            <ToggleButton />
          </Col>

          {/* Middle: Links */}
          <Col md={4}>
            <Row>
              <Col>
                <ul className="list-unstyled">
                  <li><a href="#pricing" className="custom-footer">Pricing</a></li>
                  <li><a href="#how-it-works" className="custom-footer">How it Works</a></li>
                  <li><a href="#faq" className="custom-footer">FAQ</a></li>
                </ul>
              </Col>
              <Col>
                <ul className="list-unstyled">
                  <li><a href="/currencies" className="custom-footer">Currencies</a></li>
                  <li><a href="#" className="custom-footer">Contact</a></li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Right: Socials */}
          <Col md={4} className="d-flex align-items-center justify-content-end">
            {/* <a href="#" className="text-dark me-3">🌐</a>
            <a href="#" className="text-dark me-3">🐦</a>
            <a href="#" className="text-dark">📸</a> */}

            <Image
              src={instagramIcon}
              alt="socials"
              className='mx-3'
            />
            <Image
              src={twitterIcon}
              alt="socials"
              className='mx-3'
            />
            <Image
              src={facebookIcon}
              alt="socials"
              className='mx-3'
            />
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <small className="text-muted">Made by Saba</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
