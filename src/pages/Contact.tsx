import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Plus, Minus, Map } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mapZoom, setMapZoom] = useState(14);

  const containerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Entrance animations
  useGSAP(() => {
    gsap.fromTo(
      infoRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
    );
    gsap.fromTo(
      formRef.current!.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out', delay: 0.2 }
    );
  }, { scope: containerRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      
      {/* 1. HERO BANNER */}
      <section className="bg-stone-50 py-16 sm:py-20 border-b border-stone-200/30 text-left">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <span className="eyebrow">Contact Us</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-lani-navy tracking-tight mt-3">
            Let's Start a Conversation
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mt-4">
            Have questions about the AUB Prize eligibility, need details about our agricultural grants, or want to explore sponsorships? Send us a message or visit our Ikeja, Lagos office.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM SECTION */}
      <section className="section grid gap-12 lg:grid-cols-12 text-left">
        
        {/* Left Column: Coordinates & Map */}
        <div ref={infoRef} className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Info Card */}
          <div className="bg-white border border-stone-100 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
            <h3 className="font-heading text-xl font-bold text-lani-navy">
              Lani Foundation Headquarters
            </h3>

            <div className="flex flex-col gap-5 text-sm sm:text-base text-stone-600">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lani-primary/10 text-lani-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-bold text-lani-navy text-xs uppercase tracking-wider mb-0.5">Office Address</span>
                  <p className="text-xs sm:text-sm leading-relaxed">53B Adekunle Fajuyi Way, Ikeja G.R.A., Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lani-green/10 text-lani-green">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-bold text-lani-navy text-xs uppercase tracking-wider mb-0.5">Telephone</span>
                  <p className="text-xs sm:text-sm leading-relaxed">+234 807 577 4911</p>
                  <p className="text-xs sm:text-sm leading-relaxed text-stone-400 mt-0.5">+234 817 911 9814</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lani-blue/10 text-lani-blue">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-bold text-lani-navy text-xs uppercase tracking-wider mb-0.5">Email Support</span>
                  <p className="text-xs sm:text-sm leading-relaxed">info@lanifoundation.org</p>
                  <p className="text-xs sm:text-sm leading-relaxed text-stone-400 mt-0.5">enquiries@lanifoundation.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lani-gold/10 text-lani-gold">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-bold text-lani-navy text-xs uppercase tracking-wider mb-0.5">Working Hours</span>
                  <p className="text-xs sm:text-sm leading-relaxed">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-xs text-stone-400 mt-0.5">Closed on Weekends & Public Holidays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Map Widget Mockup (Visually Wowing) */}
          <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-stone-100 shadow-sm h-64 flex flex-col justify-between p-4">
            {/* Map Grid Background pattern using inline CSS */}
            <div 
              className="absolute inset-0 z-0 bg-white opacity-40" 
              style={{
                backgroundImage: 'radial-gradient(circle, #e2dcd0 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
            {/* Abstract Roads Mockup */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
              <div className="h-0.5 w-full bg-stone-300 absolute top-1/3 transform -rotate-12 border-b border-white" />
              <div className="h-0.5 w-full bg-stone-300 absolute top-2/3 transform rotate-6 border-b border-white" />
              <div className="w-0.5 h-full bg-stone-300 absolute left-1/3 transform rotate-45 border-r border-white" />
              <div className="w-0.5 h-full bg-stone-300 absolute left-2/3 transform -rotate-45 border-r border-white" />
            </div>

            {/* Map Header details */}
            <div className="relative z-10 flex justify-between items-start">
              <div className="rounded-lg border border-stone-200/50 bg-white/90 backdrop-blur p-2.5 shadow-sm text-left max-w-[200px]">
                <strong className="block text-[10px] font-bold text-lani-navy leading-none">Ikeja G.R.A.</strong>
                <span className="text-[8px] text-stone-500 font-semibold uppercase tracking-wider mt-0.5 block">Lagos, Nigeria</span>
              </div>
              
              {/* Map controls */}
              <div className="flex flex-col gap-1">
                <button 
                  onClick={() => setMapZoom(Math.min(18, mapZoom + 1))}
                  className="h-8 w-8 rounded-lg bg-white border border-stone-200 shadow-sm flex items-center justify-center text-stone-600 hover:bg-stone-50"
                  aria-label="Zoom in"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setMapZoom(Math.max(10, mapZoom - 1))}
                  className="h-8 w-8 rounded-lg bg-white border border-stone-200 shadow-sm flex items-center justify-center text-stone-600 hover:bg-stone-50"
                  aria-label="Zoom out"
                >
                  <Minus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Map center marker */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative flex flex-col items-center">
                {/* Pin shape */}
                <div className="h-8 w-8 rounded-full bg-lani-primary border-4 border-white flex items-center justify-center text-white shadow-lg animate-bounce">
                  <Map className="h-3.5 w-3.5" />
                </div>
                {/* Pulse ring */}
                <div className="absolute top-6 h-2 w-6 rounded-full bg-black/10 blur-[2px]" />
              </div>
            </div>

            {/* Map Footer status */}
            <div className="relative z-10 flex justify-between items-center bg-white/90 backdrop-blur border border-stone-200/40 rounded-xl p-2 px-3 text-[10px] shadow-sm">
              <span className="text-stone-500 font-medium">Zoom Level: {mapZoom}00m</span>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="font-bold text-lani-primary hover:underline uppercase tracking-wider text-[8px]"
              >
                Open Google Maps
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white border border-stone-100 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col gap-6"
          >
            <div className="border-b border-stone-100 pb-4">
              <h2 className="font-heading text-2xl font-bold text-lani-navy">Send an Enquiry</h2>
              <p className="text-stone-500 text-xs sm:text-sm mt-1">Fill out the form below, and we will get back to you shortly.</p>
            </div>

            {submitted && (
              <div className="flex gap-3 p-4 rounded-xl bg-lani-emerald/10 border border-lani-emerald/20 text-lani-emerald text-xs sm:text-sm font-semibold transition-all">
                <CheckCircle className="h-5 w-5 text-lani-emerald shrink-0 mt-0.5" />
                <div>
                  <span className="block text-lani-navy font-bold">Enquiry Sent!</span>
                  <p className="mt-0.5 text-stone-600 font-medium">Thank you. Your message has been routed to our secretariat. We will respond shortly.</p>
                </div>
              </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="form-field">
                <span>Full Name *</span>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ani Charles"
                />
              </div>

              <div className="form-field">
                <span>Email Address *</span>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@domain.com"
                />
              </div>
            </div>

            <div className="form-field">
              <span>Subject *</span>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. AUB Prize Sponsorship or Inquiry"
              />
            </div>

            <div className="form-field">
              <span>Message *</span>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..."
                className="p-3 border border-stone-200 rounded-lg outline-none text-sm min-h-[140px]"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-fit px-8 py-3 self-start flex items-center gap-2"
            >
              {submitting ? 'Sending Message...' : (
                <>
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>

      </section>

    </div>
  );
}
