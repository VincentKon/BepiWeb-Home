import React, { useEffect, useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    setActiveLink(location.pathname);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav id="navbar">
      {!isMobileMenuOpen && (
        <div className="hamburger" id='hamburger' onClick={toggleMobileMenu}>
          <GiHamburgerMenu size={30} color="#fff" />
        </div>
      )}

      <ul className={`desktop-menu ${scrolled ? 'scrolled' : ''}`}>
        <li><Link to="/" className={activeLink === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/about" className={activeLink === '/about' ? 'active' : ''}>About</Link></li>
        <li><Link to="/music-video" className={activeLink === '/music-video' ? 'active' : ''}>Music Video</Link></li>
        <li><Link to="/career" className={activeLink === '/career' ? 'active' : ''}>Career</Link></li>
        <li><Link to="/contact" className={activeLink === '/contact' ? 'active' : ''}>Contact</Link></li>
      </ul>

      <ul ref={mobileMenuRef} className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" className={activeLink === '/' ? 'active' : ''} onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to="/about" className={activeLink === '/about' ? 'active' : ''} onClick={closeMobileMenu}>About</Link></li>
        <li><Link to="/music-video" className={activeLink === '/music-video' ? 'active' : ''} onClick={closeMobileMenu}>Music Video</Link></li>
        <li><Link to="/career" className={activeLink === '/career' ? 'active' : ''} onClick={closeMobileMenu}>Career</Link></li>
        <li><Link to="/contact" className={activeLink === '/contact' ? 'active' : ''} onClick={closeMobileMenu}>Contact</Link></li>
        <li><div className="close" id='close' onClick={closeMobileMenu}>
          <IoMdClose size={40} color="#fff" />
        </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
