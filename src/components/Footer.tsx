import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Send, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-lani-navy text-stone-300 border-t border-stone-800">
      {/* Top CTA Banner */}
      <div className="border-b border-stone-800 bg-gradient-to-r from-[#9B5B2E]/10 via-transparent to-[#9B5B2E]/5">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="font-heading text-xl font-bold text-white tracking-tight">
              Ready to make an impact?
            </h3>
            <p className="mt-1 text-sm text-stone-400 max-w-xl">
              Join Lani Foundation in empowering communities, advocating for climate sustainability, and funding educational excellence.
            </p>
          </div>
          <div className="flex gap-4 w-full sm:w-auto">
            <Link to="/get-involved" className="btn-primary flex-1 sm:flex-initial text-center py-2 px-6">
              Become a Partner
            </Link>
            <button 
              onClick={scrollToTop}
              className="icon-button border-stone-700 bg-stone-900 text-stone-400 hover:text-white"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lani-primary text-white">
                <Globe className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-base font-extrabold tracking-tight text-white leading-none">
                  LANI
                </span>
                <span className="font-sans text-[10px] font-bold tracking-widest text-[#d69f7e] uppercase mt-0.5">
                  Foundation
                </span>
              </div>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed">
              The social impact and non-profit arm of LANI Group. Dedicated to empowering communities through education, entrepreneurship, climate advocacy, and social development.
            </p>
            {/* Contact details */}
            <div className="flex flex-col gap-3 text-sm text-stone-400">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-lani-primary shrink-0 mt-0.5" />
                <span>53B Adekunle Fajuyi Way, Ikeja G.R.A., Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-lani-primary shrink-0" />
                <span>+234 807 577 4911</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-lani-primary shrink-0" />
                <span>info@lanifoundation.org</span>
              </div>
            </div>
          </div>

          {/* Directory Links */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">About Our Work</Link>
                </li>
                <li>
                  <Link to="/initiatives" className="hover:text-white transition-colors">Our Initiatives</Link>
                </li>
                <li>
                  <Link to="/about#leadership" className="hover:text-white transition-colors">Leadership Team</Link>
                </li>
                <li>
                  <Link to="/get-involved" className="hover:text-white transition-colors">Volunteer Opportunities</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">Office Location</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
                Initiatives
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                <li>
                  <Link to="/initiatives?focus=education" className="hover:text-white transition-colors">AUB Prize & Education</Link>
                </li>
                <li>
                  <Link to="/initiatives?focus=entrepreneurship" className="hover:text-white transition-colors">Entrepreneurship Support</Link>
                </li>
                <li>
                  <Link to="/initiatives?focus=sustainability" className="hover:text-white transition-colors">Climate & Sustainability</Link>
                </li>
                <li>
                  <Link to="/initiatives?focus=advocacy" className="hover:text-white transition-colors">Health & Social Advocacy</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="mt-4 text-sm text-stone-400 leading-relaxed">
              Subscribe to stay updated on our impact programs, stories, and application calls.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 relative flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full h-11 bg-stone-900 border border-stone-800 rounded-lg pl-4 pr-12 text-sm text-white focus:outline-none focus:border-lani-primary placeholder:text-stone-600"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 h-9 w-9 flex items-center justify-center rounded-md bg-lani-primary text-white transition-transform hover:scale-105 active:scale-95"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-xs text-lani-emerald font-semibold transition-all">
                Thank you! You've subscribed successfully.
              </p>
            )}

            {/* Social handles */}
            <div className="mt-8 flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="h-9 w-9 rounded-lg border border-stone-800 bg-stone-900 flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="h-9 w-9 rounded-lg border border-stone-800 bg-stone-900 flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="h-9 w-9 rounded-lg border border-stone-800 bg-stone-900 flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Lani Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
