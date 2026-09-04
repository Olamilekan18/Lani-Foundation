import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ArrowRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import logoImg from '../assets/Lani-Founation Emblem.png';

gsap.registerPlugin(useGSAP);

type NavItem = {
  name: string;
  path: string;
  children?: { name: string; path: string }[];
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
    setMobileAboutOpen(false);
  }, [location]);

  // Animate mobile menu open/close
  useGSAP(() => {
    if (isOpen && menuRef.current) {
      gsap.to(menuRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power3.out',
        pointerEvents: 'auto',
      });
      if (menuItemsRef.current) {
        gsap.fromTo(
          menuItemsRef.current.children,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, delay: 0.1, ease: 'power2.out' }
        );
      }
    } else if (menuRef.current) {
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

  const navLinks: NavItem[] = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about',
      children: [
        { name: 'About LANI', path: '/about' },
        { name: 'Our Team', path: '/our-team' },
      ],
    },
    { name: 'Thematic Focus', path: '/thematic-focus' },
    { name: 'Articles & Impact', path: '/articles' },
    { name: 'Partners', path: '/partners' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Contact', path: '/contact' },
  ];

  const isAboutActive = location.pathname === '/about' || location.pathname === '/our-team';

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
            {navLinks.map((link) =>
              link.children ? (
                /* About Us with dropdown */
                <div key={link.path} className="relative group">
                  <NavLink
                    to={link.path}
                    className={`text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-lani-primary flex items-center gap-1 ${
                      isAboutActive ? 'text-lani-primary relative after:absolute after:-bottom-[29px] after:left-0 after:h-[3px] after:w-full after:bg-lani-primary after:rounded-t-full' : 'text-stone-600'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </NavLink>

                  {/* Dropdown popup */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-white rounded-xl border border-stone-200/80 shadow-xl py-2 min-w-[180px] overflow-hidden">
                      {/* Tiny arrow */}
                      <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-l border-t border-stone-200/80 rotate-45" />
                      {link.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          className={({ isActive }) =>
                            `block px-5 py-2.5 text-sm font-semibold transition-all duration-150 ${
                              isActive
                                ? 'text-lani-primary bg-lani-primary/5'
                                : 'text-stone-600 hover:text-lani-primary hover:bg-stone-50'
                            }`
                          }
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
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
              )
            )}
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
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.path}>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className={`text-base font-bold transition-all duration-200 py-1.5 flex items-center gap-1.5 w-full text-left ${
                    isAboutActive ? 'text-lani-primary border-l-4 border-l-lani-primary pl-3' : 'text-stone-600'
                  }`}
                >
                  {link.name}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileAboutOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-stone-200 pl-4">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          `text-sm font-semibold transition-all duration-200 py-1 ${
                            isActive ? 'text-lani-primary' : 'text-stone-500 hover:text-lani-primary'
                          }`
                        }
                      >
                        {child.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
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
            )
          )}
          
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
