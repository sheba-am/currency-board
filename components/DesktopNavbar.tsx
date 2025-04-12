import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Image from 'next/image';
import logoImg from '@/public/logo.png'; 

export default function DesktopNavbar() {
  return (
    <Navbar expand="lg" className=" py-3 d-none d-md-flex">
      <Container>
        {/* Left: Logo */}
        <Navbar.Brand href="/">
        <Image
              src={logoImg}
              alt="logo Section"
            />          
        </Navbar.Brand>

        {/* Middle: Nav Links */}
        <Nav>
          <Nav.Link href="#pricing" className="mx-2 custom-nav-link">Pricing</Nav.Link>
          <Nav.Link href="#how-it-works" className="mx-2 custom-nav-link">How it Works</Nav.Link>
          <Nav.Link href="#faq" className="mx-2 custom-nav-link">FAQ</Nav.Link>
          <Nav.Link href="/currencies" className="mx-2 custom-nav-link text-green">Currencies</Nav.Link>
        </Nav>

        {/* Right: Buttons */}
        <div className="d-flex">
          <Button variant="tertiary" className="me-2">Sign In</Button>
          <Button variant="primary-2">Get Started</Button>
        </div>
      </Container>
    </Navbar>
  );
}
