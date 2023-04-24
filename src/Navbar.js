import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('section1');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const linkClass = (section) =>
    `px-4 cursor-pointer text-white font-bold ${
      activeLink === section ? 'text-decoration-line: underline' : ''
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full py-4 transition duration-300 ease-in-out z-50 ${
        isScrolled ? 'bg-gray-800 shadow-md' : ''
      }`}
    >
      <div className="container mx-auto font-serif">
        <div className="flex justify-between items-center px-6 md:px-8 lg:px-16">
          <div className="text-2xl font-bold text-white">Taha Ahmed</div>
          <nav className="flex space-x-4">
            <Link
              className={linkClass('section1')}
              to="section1"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              onSetActive={() => handleSetActive('section1')}
            >
              Home
            </Link>
            <Link
              className={linkClass('section2')}
              to="section2"
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              onSetActive={() => handleSetActive('section2')}
            >
              Skills
            </Link>
            <Link
              className={linkClass('section3')}
              to="section3"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              onSetActive={() => handleSetActive('section3')}
            >
              Experiences
            </Link>
            <Link
              className={linkClass('projects')}
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              onSetActive={() => handleSetActive('projects')}
            >
              Projects 
            </Link>
            <Link
              className={linkClass('section4')}
              to="section4"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              onSetActive={() => handleSetActive('section4')}
            >
              Contact 
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
