import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import logoImg from '../assets/Lani-Founation Emblem.png';

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Animate mobile menu open/close
  useGSAP(() => {
    if (isOpen && menuRef.current) {
      // Open animation
      gsap.to(menuRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power3.out',
        pointerEvents: 'auto',
      });
      // Stagger items inside
      if (menuItemsRef.current) {
        gsap.fromTo(
          menuItemsRef.current.children,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, delay: 0.1, ease: 'power2.out' }
        );
      }
    } else if (menuRef.current) {
      // Close animation
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power3.in',
        pointerEvents: 'none',
      });
    }
  }, { dependencies: [isOpen], scope: menuRef });

  // Initial load navbar fade-in
  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, { scope: navRef });

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Thematic Focus', path: '/thematic-focus' },
    { name: 'Articles & Impact', path: '/articles' },
    { name: 'Partners', path: '/partners' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      ref={navRef}
      className="sticky top-0 z-50 w-full border-b border-stone-200/40 bg-white/70 backdrop-blur-md transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={logoImg} alt="LANI Foundation Logo" className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-heading text-lg font-extrabold tracking-tight text-lani-navy leading-none">
                LANI
              </span>
              <span className="font-sans text-xs font-semibold tracking-widest text-lani-primary uppercase mt-0.5">
                Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-lani-primary ${
                    isActive ? 'text-lani-primary relative after:absolute after:-bottom-[29px] after:left-0 after:h-[3px] after:w-full after:bg-lani-primary after:rounded-t-full' : 'text-stone-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Call to action & mobile menu toggle */}
          <div className="flex items-center gap-4">
            <Link 
              to="/get-involved" 
              className="hidden sm:inline-flex btn-primary min-h-[40px] px-5 py-2 text-xs"
            >
              <Heart className="h-4 w-4 fill-white/10" />
              Support Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 text-stone-600 transition-colors hover:bg-stone-50 md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (GSAP controlled) */}
      <div
        ref={menuRef}
        style={{ opacity: 0, transform: 'translateY(-20px)', pointerEvents: 'none' }}
        className="absolute left-0 top-[81px] w-full border-b border-stone-200/80 bg-white/95 backdrop-blur-lg shadow-xl md:hidden"
      >
        <div ref={menuItemsRef} className="flex flex-col gap-4 px-6 py-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-base font-bold transition-all duration-200 py-1.5 ${
                  isActive ? 'text-lani-primary border-l-4 border-l-lani-primary pl-3' : 'text-stone-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          <div className="pt-4 border-t border-stone-100 flex flex-col gap-3">
            <Link 
              to="/get-involved" 
              className="btn-primary w-full justify-center"
            >
              <Heart className="h-4 w-4 fill-white/10" />
              Support Lani Foundation
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary w-full justify-center"
            >
              Contact Office
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
