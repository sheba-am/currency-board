
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Image from 'next/image';
import logoImg from '@/public/logo.png'; 

export default function MainNavbar() {
  return (
    <Navbar expand="lg" className=" py-3">
      <Container>
        {/* Left: Logo */}
        <Navbar.Brand href="#">
        <Image
              src={logoImg}
              alt="logo Section"
            />          
        </Navbar.Brand>

        {/* Middle: Nav Links */}
        <Nav className="mx-auto">
          <Nav.Link href="#pricing" className="mx-2">Pricing</Nav.Link>
          <Nav.Link href="#how-it-works" className="mx-2">How it Works</Nav.Link>
          <Nav.Link href="#faq" className="mx-2">FAQ</Nav.Link>
          <Nav.Link href="/currencies" className="mx-2">Currencies</Nav.Link>
        </Nav>

        {/* Right: Buttons */}
        <div className="d-flex">
          <Button variant="outline-primary" className="me-2">Sign In</Button>
          <Button variant="primary">Get Started</Button>
        </div>
      </Container>
    </Navbar>
  );
}
