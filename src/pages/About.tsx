import { useRef } from 'react';
import { Target, Eye, ShieldCheck, Heart, User, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);

  // Staggered reveals on page load
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.about-hero-text > *',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
  }, { scope: containerRef });

  // Scroll triggers for values cards
  useGSAP(() => {
    if (!valuesRef.current) return;
    gsap.fromTo(
      valuesRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 80%',
        },
      }
    );
  }, { scope: valuesRef });

  // Leadership grid scroll reveals
  useGSAP(() => {
    if (!leadershipRef.current) return;
    gsap.fromTo(
      leadershipRef.current.children,
      { opacity: 0, scale: 0.95, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: leadershipRef.current,
          start: 'top 80%',
        },
      }
    );
  }, { scope: leadershipRef });

  const values = [
    {
      title: 'Empowerment',
      desc: 'We focus on building capabilities rather than dependency, helping individuals take charge of their future.',
      icon: <Heart className="h-6 w-6" />,
    },
    {
      title: 'Sustainability',
      desc: 'Every program is designed with environmental responsibility and long-term socio-economic resilience in mind.',
      icon: <ShieldCheck className="h-6 w-6" />,
    },
    {
      title: 'Transparency',
      desc: 'We maintain the highest standards of governance, tracking and reporting every Naira spent and impact made.',
      icon: <CheckCircle2 className="h-6 w-6" />,
    },
  ];

  const team = [
    {
      name: 'Ani Charles Bassey-Eyo',
      role: 'Founder & Chairman',
      bio: 'Visionary entrepreneur and CEO of LANI Group. Committed to structural advocacy, taxation studies funding, and social reintegration across Nigeria.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Luqman Musah Ozekhome',
      role: 'Executive Director & Trustee',
      bio: 'Brings decades of legal and management advisory experience. Spearheads foundation compliance, governance, and structural program integrity.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Philip Uwumarogie',
      role: 'Chief Operating Officer',
      bio: 'Operations strategist leading program implementations. Coordinates field officers, sustainability audits, and community outreach campaigns.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Olaniyi Omole',
      role: 'Head of Partnerships & Impact Programs',
      bio: 'Leads our university liaison campaigns, AUB Prize applications screening, and builds corporate network alliances for program expansion.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      
      {/* 1. HERO BANNER */}
      <section className="bg-stone-50 py-16 sm:py-24 border-b border-stone-200/30">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
          <div className="about-hero-text flex flex-col items-center gap-4">
            <span className="eyebrow">About Us</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-lani-navy tracking-tight max-w-3xl">
              Who We Are & What Drives Us
            </h1>
            <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mt-2">
              Lani Foundation is the non-profit subsidiary of LANI Group. Founded on the values of community empowerment, we build scalable solutions for sustainable development, academic support, and economic growth in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION GRID */}
      <section className="section grid gap-12 md:grid-cols-2">
        {/* Mission card */}
        <div className="flex flex-col gap-5 p-8 sm:p-10 rounded-2xl bg-white border border-stone-100 shadow-sm text-left hover:shadow-md transition-shadow">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lani-primary/10 text-lani-primary">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-lani-navy tracking-tight">Our Mission</h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            To catalyze sustainable socio-economic development across Africa by removing educational barriers, empowering early-stage entrepreneurs, nurturing climate literacy, and reinforcing advocacy networks in local communities.
          </p>
        </div>

        {/* Vision card */}
        <div className="flex flex-col gap-5 p-8 sm:p-10 rounded-2xl bg-white border border-stone-100 shadow-sm text-left hover:shadow-md transition-shadow">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lani-green/10 text-lani-green">
            <Eye className="h-6 w-6" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-lani-navy tracking-tight">Our Vision</h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We envision an inclusive, climate-resilient, and self-sustaining Africa where every young mind is educated, every grassroots innovator has funding access, and vulnerable populations can live healthy, dignifying lives.
          </p>
        </div>
      </section>

      {/* 3. FOUNDER FOCUS */}
      <section className="bg-stone-50 py-20 border-y border-stone-200/30">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 grid gap-12 lg:grid-cols-12 items-center text-left">
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative overflow-hidden rounded-3xl border border-stone-200 shadow-xl max-w-sm">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" 
                alt="Ani Charles Bassey-Eyo" 
                className="h-96 w-full object-cover filter brightness-95"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-white/85 backdrop-blur-md p-4 shadow-lg">
                <strong className="block text-sm font-bold text-lani-navy">Ani Charles Bassey-Eyo</strong>
                <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider">Founder, Lani Group & Foundation</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="eyebrow">Founder's Vision</span>
            <h2 className="font-heading text-3xl font-extrabold text-lani-navy tracking-tight leading-snug">
              "Development is only sustainable when it is locally funded and locally owned."
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              At Lani Group, we have always believed in active partnership for African progress. Through Lani Foundation, we take that corporate mandate further. Our goal is to run structured, impactful, and accountable programs that change real lives. 
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Whether through the Angeline Uyi Bassey (AUB) Prize funding taxation policy studies, or our eco-enterprise solar hubs, we build structures that allow African youths to innovate. We believe that by lifting others up, we build a legacy of economic stability and growth.
            </p>
            <div className="pt-2">
              <span className="block font-heading text-lg font-black text-lani-navy">Ani Charles Bassey-Eyo</span>
              <span className="text-xs font-semibold text-stone-500">Founder & CEO, LANI Group</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="section text-center">
        <span className="eyebrow">Our Values</span>
        <h2 className="font-heading text-3xl font-extrabold text-lani-navy tracking-tight mt-3">
          Principles that Guide Our Work
        </h2>
        
        <div ref={valuesRef} className="mt-12 grid gap-8 md:grid-cols-3 text-left">
          {values.map((val, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white border border-stone-100 shadow-sm flex flex-col gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lani-primary/10 text-lani-primary">
                {val.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-lani-navy">
                {val.title}
              </h3>
              <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LEADERSHIP SECTION */}
      <section id="leadership" className="bg-[#fcfbf9] py-20 border-t border-stone-200/20 text-center">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <span className="eyebrow">Trustees & Leadership</span>
          <h2 className="font-heading text-3xl font-extrabold text-lani-navy tracking-tight mt-3 mb-16">
            Leading with Integrity & Purpose
          </h2>

          <div ref={leadershipRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white border border-stone-100 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="h-56 w-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="p-6">
                    <h3 className="font-heading text-base font-extrabold text-lani-navy tracking-tight">
                      {member.name}
                    </h3>
                    <span className="text-xs font-semibold text-lani-primary block mt-0.5">
                      {member.role}
                    </span>
                    <p className="text-stone-500 text-xs mt-3 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-stone-50/50 flex gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-stone-100 text-stone-500 text-[10px] font-bold">
                    <User className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[10px] font-bold text-stone-400 self-center uppercase tracking-wider">Lani Trustee</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
