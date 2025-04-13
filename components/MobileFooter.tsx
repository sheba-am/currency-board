import Image from "next/image";
import { Container, Button } from "react-bootstrap";
import logoImg from '@/public/logo.png';
import instagramIcon from '@/public/instagram-icon.png';
import twitterIcon from '@/public/twitter-icon.png';
import facebookIcon from '@/public/facebook-icon.png';
import ToggleButton from "./ToggleButton";
export default function MobileFooter() {
  return (
    <footer className="d-lg-none custom-footer py-4">
      <Container className="px-3">
        {/* Logo */}
        <div className="mb-3 d-flex justify-content-center" >
          <Image src={logoImg} alt="Logo" />
        </div>

        {/* Navigation links */}
        <div className="flex-column justify-content-center mb-3 ms-6">
          <a href="#pricing" className="d-block mb-2">Pricing</a>
          <a href="#how" className="d-block mb-2">How it works</a>
          <a href="#faq" className="d-block mb-2">FAQ</a>
          <a href="#terms" className="d-block mb-2">Terms of Service</a>
          <a href="#privacy" className="d-block mb-2">Privacy Policy</a>
        </div>

        {/* Social icons */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a href="#"><Image src={instagramIcon} alt="instagram" /></a>
          <a href="#"><Image src={twitterIcon} alt="Twitter" /></a>
          <a href="#"><Image src={facebookIcon} alt="facebook"/></a>
        </div>

        {/* Dark/Light toggle */}
        <div className="d-flex justify-content-center mb-3">
          <ToggleButton />
        </div>

        {/* Footer note */}
        <small className="d-flex justify-content-center text-muted">Made by Saba</small>
      </Container>
    </footer>
  );
}
