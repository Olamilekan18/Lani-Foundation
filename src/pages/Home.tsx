import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Leaf, 
  Briefcase, 
  Activity, 
  Users, 
  ArrowRight, 
  Award, 
  Building2, 
  Globe2, 
  HeartHandshake 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ImpactCounter from '../components/ImpactCounter';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const focusRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Hero animations on load
  useGSAP(() => {
    if (!heroContentRef.current || !heroImageRef.current) return;
    
    const ctx = gsap.context(() => {
      // Fade in main elements
      gsap.fromTo(
        heroContentRef.current!.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );
      
      // Slide and scale hero images
      gsap.fromTo(
        heroImageRef.current,
        { opacity: 0, scale: 0.95, x: 30 },
        { opacity: 1, scale: 1, x: 0, duration: 1.2, delay: 0.3, ease: 'power2.out' }
      );
    });

    return () => ctx.revert();
  }, { scope: heroRef });

  // Focus Cards scroll reveals
  useGSAP(() => {
    if (!focusRef.current) return;

    const cards = focusRef.current.querySelectorAll('.premium-card');
    
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: focusRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: focusRef });

  // Scroll Triggered Timeline Progress Line & Milestones
  useGSAP(() => {
    if (!timelineRef.current || !timelineLineRef.current) return;

    // Draw the line down as the user scrolls
    gsap.fromTo(
      timelineLineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 40%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );

    // Animate each timeline card individually as they enter
    const items = timelineRef.current.querySelectorAll('.timeline-item');
    items.forEach((item) => {
      const isLeft = item.classList.contains('item-left');
      gsap.fromTo(
        item,
        { 
          opacity: 0, 
          x: isLeft ? -50 : 50 
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, { scope: timelineRef });

  // Call to action hover glow
  useGSAP(() => {
    if (!ctaRef.current) return;
    
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
        }
      }
    );
  }, { scope: ctaRef });

  const focusAreas = [
    {
      title: 'Educational Excellence',
      desc: 'Advancing research and funding student education. Home of the prestigious Angeline Uyi Bassey (AUB) Prize.',
      icon: <GraduationCap className="h-6 w-6" />,
      color: 'border-l-4 border-l-lani-primary',
    },
    {
      title: 'Entrepreneurship & Grants',
      desc: 'Supporting innovators, micro-enterprises, and smallholder farmers with early-stage business grants and mentorship.',
      icon: <Briefcase className="h-6 w-6" />,
      color: 'border-l-4 border-l-lani-green',
    },
    {
      title: 'Climate & Sustainability',
      desc: 'Promoting reforestation, solar energy advocacy, and green-economy skills for youths across Nigeria.',
      icon: <Leaf className="h-6 w-6" />,
      color: 'border-l-4 border-l-lani-emerald',
    },
    {
      title: 'Health & Advocacy',
      desc: 'Running community outreach clinics, health advocacy, and maternal health funding for under-resourced communities.',
      icon: <Activity className="h-6 w-6" />,
      color: 'border-l-4 border-l-lani-blue',
    },
    {
      title: 'Social Reintegration',
      desc: 'Empowering displaced youth and vulnerable demographics with skills and pathways to build sustainable livelihoods.',
      icon: <Users className="h-6 w-6" />,
      color: 'border-l-4 border-l-lani-gold',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section 
        ref={heroRef} 
        className="relative overflow-hidden bg-gradient-to-b from-[#fdfbf7] via-[#f7f4ed] to-[#fdfbf7] py-20 lg:py-28"
      >
        {/* Subtle abstract backdrop */}
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-lani-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-lani-green/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 grid gap-16 lg:grid-cols-12 items-center text-left">
          {/* Hero Content */}
          <div ref={heroContentRef} className="lg:col-span-7 flex flex-col gap-6">
            <span className="eyebrow">Lani Foundation • Impact & Advocacy</span>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-lani-navy tracking-tight leading-[1.1]">
              Empowering <span className="text-lani-primary">Communities</span>, Sustaining Our <span className="text-lani-green">Future</span>.
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              We are the non-profit arm of LANI Group, dedicated to driving social transformation across Africa through targeted programs in education, youth entrepreneurship, health, and climate advocacy.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/get-involved" className="btn-primary">
                Partner With Us
                <HeartHandshake className="h-4 w-4" />
              </Link>
              <Link to="/initiatives" className="btn-secondary">
                View Initiatives
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Hero Composite Image (Visually Wowing) */}
          <div ref={heroImageRef} className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-[400px] sm:max-w-[450px]">
              {/* Back card border effect */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-lani-primary/30 to-lani-green/10 blur-xl opacity-75" />
              
              {/* Main Image Frame */}
              <div className="relative overflow-hidden rounded-3xl border border-stone-200/50 bg-white p-3.5 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80" 
                  alt="Community Sustainability and Empowerment" 
                  className="h-80 w-full rounded-2xl object-cover shadow-inner filter sepia-[0.15] brightness-95"
                />
                
                {/* Embedded Stats Banner */}
                <div className="absolute bottom-8 left-8 right-8 rounded-xl border border-white/20 bg-white/80 backdrop-blur-md p-4 shadow-lg text-left flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500">AUB Prize Funding</span>
                    <strong className="text-lg font-bold text-lani-navy">₦5,000,000+ Yearly</strong>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lani-primary text-white">
                    <Award className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-stone-50 py-16 border-y border-stone-200/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ImpactCounter 
              target={15000} 
              suffix="+" 
              label="Students Impacted" 
              icon={<GraduationCap className="h-5 w-5" />} 
            />
            <ImpactCounter 
              target={250} 
              suffix="+" 
              label="Business Grants Given" 
              icon={<Briefcase className="h-5 w-5" />} 
            />
            <ImpactCounter 
              target={45} 
              suffix="+" 
              label="Communities Reached" 
              icon={<Building2 className="h-5 w-5" />} 
            />
            <ImpactCounter 
              target={12} 
              suffix="" 
              label="Annual Impact Projects" 
              icon={<Globe2 className="h-5 w-5" />} 
            />
          </div>
        </div>
      </section>

      {/* 3. FOCUS AREAS */}
      <section ref={focusRef} className="section text-center">
        <span className="eyebrow">Our Focus Areas</span>
        <h2 className="mx-auto max-w-2xl font-heading text-3xl sm:text-4xl font-extrabold text-lani-navy tracking-tight mt-3">
          Strategic Channels of Community Empowerment
        </h2>
        <p className="mx-auto max-w-xl mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
          Through advocacy, direct grants, and structural aid, we tackle societal barriers to enable growth and long-term climate resilience.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, idx) => (
            <div key={idx} className={`premium-card text-left ${area.color} flex flex-col justify-between`}>
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#9B5B2E]/10 text-lani-primary mb-6">
                  {area.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-lani-navy tracking-tight mb-3">
                  {area.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {area.desc}
                </p>
              </div>
              <Link 
                to={`/initiatives?focus=${area.title.split(' ')[0].toLowerCase()}`} 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-lani-primary hover:text-lani-navy transition-colors group"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. AUB PRIZE SPOTLIGHT */}
      <section className="bg-lani-navy text-white relative overflow-hidden py-20 lg:py-24">
        {/* Glow decoration */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-lani-primary/20 blur-[100px]" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 grid gap-12 lg:grid-cols-12 items-center text-left">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#d69f7e] ring-1 ring-[#d69f7e]/30 bg-[#d69f7e]/10 w-fit">
              Featured Program
            </span>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              The Angeline Uyi Bassey (AUB) Prize
            </h2>
            
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              Honoring the legacy of the late Angeline Uyi Bassey, this annual award supports outstanding undergraduate and graduate researchers in Taxation, Law, and Extractive Industries. We fund research that generates local policy solutions for economic growth in Africa.
            </p>

            <div className="flex gap-4 pt-2">
              <Link to="/initiatives" className="btn-primary bg-gradient-to-r from-lani-primary to-lani-gold hover:from-lani-gold hover:to-lani-primary text-white border-0 shadow-lg">
                View Prize Guidelines
              </Link>
              <Link to="/get-involved" className="btn-secondary border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40">
                Partner as Sponsor
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative rounded-2xl border border-white/15 bg-white/5 p-8 shadow-2xl backdrop-blur-sm max-w-xs text-center flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lani-primary/20 text-lani-primary ring-4 ring-lani-primary/10 mb-6">
                <Award className="h-8 w-8 text-[#d69f7e]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">Research Grants</h3>
              <p className="text-stone-400 text-xs leading-relaxed mb-6">
                Direct funding, professional mentorship, and publishing assistance for award winners.
              </p>
              <div className="w-full pt-4 border-t border-white/10 flex justify-between text-xs font-bold">
                <span className="text-stone-400">Status</span>
                <span className="text-lani-emerald">Open for Proposals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TIMELINE SECTION */}
      <section ref={timelineRef} className="section text-center">
        <span className="eyebrow">Our Milestones</span>
        <h2 className="mx-auto max-w-2xl font-heading text-3xl sm:text-4xl font-extrabold text-lani-navy tracking-tight mt-3">
          Our Journey of Institutional Impact
        </h2>
        <p className="mx-auto max-w-xl mt-4 text-stone-600 text-sm sm:text-base leading-relaxed mb-16">
          Since our establishment, we have consistently expanded our reach to create sustainable value for communities.
        </p>

        {/* Timeline body */}
        <div className="relative mx-auto max-w-4xl py-8">
          {/* Vertical progress line */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-stone-200 rounded-full overflow-hidden">
            <div 
              ref={timelineLineRef}
              className="w-full h-full timeline-line origin-top"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          <div className="flex flex-col gap-16 relative">
            
            {/* Milestone 1: 2021 */}
            <div className="timeline-item item-left flex flex-col md:flex-row items-center md:justify-start">
              <div className="w-full md:w-1/2 md:pr-12 md:text-right text-center">
                <div className="inline-block bg-white border border-stone-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative max-w-md">
                  <span className="font-heading text-2xl font-black text-lani-primary">2021</span>
                  <h3 className="font-heading text-lg font-bold text-lani-navy mt-1">Foundation Inception</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-2">
                    Lani Foundation is officially registered as the social responsibility arm of LANI Group, setting core values in education, health, and advocacy.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 h-6 w-6 rounded-full border-4 border-white bg-lani-primary shadow-md z-10" />
              <div className="hidden md:block w-1/2" />
            </div>

            {/* Milestone 2: 2022 */}
            <div className="timeline-item item-right flex flex-col md:flex-row items-center md:justify-end">
              <div className="hidden md:block w-1/2" />
              <div className="absolute left-1/2 -translate-x-1/2 h-6 w-6 rounded-full border-4 border-white bg-lani-green shadow-md z-10" />
              <div className="w-full md:w-1/2 md:pl-12 md:text-left text-center">
                <div className="inline-block bg-white border border-stone-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative max-w-md">
                  <span className="font-heading text-2xl font-black text-lani-green">2022</span>
                  <h3 className="font-heading text-lg font-bold text-lani-navy mt-1">AUB Prize Inauguration</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-2">
                    Successfully launched the Angeline Uyi Bassey (AUB) Prize, awarding research grants to students in taxation and extractive policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone 3: 2023 */}
            <div className="timeline-item item-left flex flex-col md:flex-row items-center md:justify-start">
              <div className="w-full md:w-1/2 md:pr-12 md:text-right text-center">
                <div className="inline-block bg-white border border-stone-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative max-w-md">
                  <span className="font-heading text-2xl font-black text-lani-emerald">2023</span>
                  <h3 className="font-heading text-lg font-bold text-lani-navy mt-1">Climate Sustainability Advocacy</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-2">
                    Kicked off our Reforestation and Solar Skills project in coastal communities, training 300+ youths in eco-friendly technical roles.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 h-6 w-6 rounded-full border-4 border-white bg-lani-emerald shadow-md z-10" />
              <div className="hidden md:block w-1/2" />
            </div>

            {/* Milestone 4: 2025 */}
            <div className="timeline-item item-right flex flex-col md:flex-row items-center md:justify-end">
              <div className="hidden md:block w-1/2" />
              <div className="absolute left-1/2 -translate-x-1/2 h-6 w-6 rounded-full border-4 border-white bg-lani-gold shadow-md z-10" />
              <div className="w-full md:w-1/2 md:pl-12 md:text-left text-center">
                <div className="inline-block bg-white border border-stone-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative max-w-md">
                  <span className="font-heading text-2xl font-black text-lani-gold">2025</span>
                  <h3 className="font-heading text-lg font-bold text-lani-navy mt-1">Nationwide Expansion</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-2">
                    Expanded micro-grants to smallholder farmers and small business founders, covering 6 geo-political zones in Nigeria.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section ref={ctaRef} className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12 text-center">
        <div className="bg-gradient-to-br from-lani-navy to-stone-900 rounded-3xl p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-stone-800 text-white flex flex-col items-center">
          {/* Decorative gradients */}
          <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-lani-primary/20 blur-2xl" />
          <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-lani-green/20 blur-2xl" />

          <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#d69f7e] ring-1 ring-white/10 bg-white/5 mb-6">
            Get Involved Today
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl">
            Be a Catalyst for Social Transformation
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl">
            Whether you volunteer, sponsor a research paper for the AUB Prize, or fund a community solar grid, your partnership drives sustainable development.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/get-involved" className="btn-primary bg-gradient-to-r from-lani-primary to-lani-green border-0">
              Support Our Projects
            </Link>
            <Link to="/contact" className="btn-secondary border-white/10 bg-white/5 text-white hover:bg-white/10">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
