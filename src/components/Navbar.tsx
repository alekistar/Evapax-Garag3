import { Menu, X, Wrench, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <Wrench className="text-orange" size={28} />
          <span>Evapax Garag3</span>
        </a>

        <div className="nav-links desktop-only">
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#testimonials">Reviews</a>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a href="#booking" className="btn-primary">Book Now</a>
        </div>

        <div className="nav-actions mobile-only">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
          <a href="#booking" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>Book Now</a>
        </div>
      )}
    </nav>
  );
}
