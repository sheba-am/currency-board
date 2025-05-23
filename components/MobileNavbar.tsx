import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/MobileNavbar.module.css";
import {Button, Navbar} from 'react-bootstrap';
import logoImg from '@/public/logo.png'; 
import menuIcon from '@/public/menu.png'; 
import closeIcon from '@/public/close.png'; 
import { useTheme } from '@/contexts/ThemeContext';

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();


  const handleMenuItemClick = () => {
    setMenuOpen(false); // Close menu when any item is clicked
  };  
  return (
    <div className={`d-lg-none`}>
      {/* Top bar */}
      <nav className="d-flex justify-content-between align-items-center px-3 py-2">
        <Navbar.Brand  href="/" >
          <Image src={logoImg} alt="Logo" />
        </Navbar.Brand>
        <Button variant="link" onClick={() => setMenuOpen(true)}>
          {/* <span style={{ fontSize: "2rem" }}>&#9776;</span> */}
          <Image src={menuIcon} alt="menu Icon" />

        </Button>
      </nav>

      {/* Fullscreen Menu */}
        <div className={` ${menuOpen ? styles.show : ""} ${isDarkMode ? styles.fullscreenMenuDark : styles.fullscreenMenuLight}`}>
          <div className="d-flex justify-content-between align-items-center px-3 py-2">
            <Image src={logoImg} alt="logo" />
            <Button variant="link" onClick={() => setMenuOpen(false)} className="text-black">
              {/* <span style={{ fontSize: "2rem" }}>&times;</span> */}
              <Image src={closeIcon} alt="close Icon" />
            </Button>
          </div>
          <div className="px-4 mt-5">
            <Link href="#pricing" className={styles.navLink} onClick={handleMenuItemClick}>Pricing</Link>
            <Link href="#how" className={styles.navLink} onClick={handleMenuItemClick}>How it works</Link>
            <Link href="#faq" className={styles.navLink} onClick={handleMenuItemClick}>FAQ</Link>
            <Link href="/currencies" className={`${styles.navLink} ${styles.green}`} onClick={handleMenuItemClick}>Currencies</Link>
          </div>
          <div className="position-absolute bottom-0 w-100 p-4 text-center">
            <Button variant="primary-2" className="w-100 mb-2">Get Started</Button>
            <Button variant="tertiary" className="w-100">Sign In</Button>
          </div>
        </div>
      
    </div>
  );
}
