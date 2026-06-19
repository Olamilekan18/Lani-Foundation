import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
  ArrowRight, 
  Award, 
  Building2, 
  Globe2, 
  HeartHandshake,
  ShieldCheck,
  BookOpen
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
  const whoWeAreRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const featuredArticles = [
    {
      id: 'connecting-the-campus',
      title: 'Connecting the Campus: Building Digital Bridges for Rural Communities',
      excerpt: "An inside look into LANI's computer literacy and hardware setup program helping students in remote communities transition to digital learning.",
      category: 'Education',
      date: 'June 12, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'beyond-balance-sheet',
      title: 'Beyond the Balance Sheet: The True Value of Systems Capacity in Local NGOs',
      excerpt: 'Why professional auditing models, template designs, and standard operating procedures are key to long-term community development success.',
      category: 'Systems & Capacity',
      date: 'May 28, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'pathways-home-migrants',
      title: 'Pathways Home: Successful Livelihood Integration for Returned Migrants',
      excerpt: 'How offering vocational startup grants, carpentry equipment, and micro-grants creates sustainable independence for migrants resettling in West African settings.',
      category: 'Livelihoods',
      date: 'April 15, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1464234471565-33b517abc292?q=80&w=800&auto=format&fit=crop',
    }
  ];

  // Set document title for SEO
  useEffect(() => {
    document.title = "LANI Foundation | Empowering Lives & Strengthening Communities";
  }, []);

  // Hero animations on load
  useGSAP(() => {
    if (!heroContentRef.current || !heroImageRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroContentRef.current!.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );
      
      gsap.fromTo(
        heroImageRef.current,
        { opacity: 0, scale: 0.95, x: 30 },
        { opacity: 1, scale: 1, x: 0, duration: 1.2, delay: 0.3, ease: 'power2.out' }
      );
    });

    return () => ctx.revert();
  }, { scope: heroRef });

  // Who We Are scroll reveal
  useGSAP(() => {
    if (!whoWeAreRef.current) return;
    
    gsap.fromTo(
      whoWeAreRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: whoWeAreRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );
  }, { scope: whoWeAreRef });

  // Mission Cards scroll reveals
  useGSAP(() => {
    if (!missionRef.current) return;

    const cards = missionRef.current.querySelectorAll('.premium-card');
    
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
          trigger: missionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: missionRef });

  // Scroll Triggered Timeline Progress Line & Milestones
  useGSAP(() => {
    if (!timelineRef.current || !timelineLineRef.current) return;

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

  // Call to action reveal
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

  // Articles scroll reveal
  useGSAP(() => {
    if (!articlesRef.current) return;
    
    gsap.fromTo(
      articlesRef.current.querySelectorAll('.article-card'),
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: articlesRef.current,
          start: 'top 85%',
        }
      }
    );
  }, { scope: articlesRef });

  const missionAreas = [
    {
      title: 'Protecting Vulnerable Children and Families',
      desc: 'We support safer environments for children and families by strengthening care systems, caregiver capacity, child welfare documentation, emergency preparedness, and education support for children in vulnerable settings.',
      icon: <ShieldCheck className="h-6 w-6" />,
      color: 'border-l-4 border-l-lani-primary',
    },
    {
      title: 'Empowering Youth and Women',
      desc: 'We support youth, women, and widows with skills, mentorship, livelihood pathways, entrepreneurship support, confidence-building, and access to opportunities that promote self-reliance.',
      icon: <Briefcase className="h-6 w-6" />,
      color: 'border-l-4 border-l-lani-green',
    },
    {
      title: 'Supporting Returned Migrants and Vulnerable Households',
      desc: 'We support reintegration, livelihood recovery, community support, and practical pathways for returned migrants and vulnerable households affected by poverty, displacement, exclusion, or unsafe migration risks.',
      icon: <HeartHandshake className="h-6 w-6" />,
      color: 'border-l-4 border-l-lani-emerald',
    },
    {
      title: 'Advancing Education and Literacy',
      desc: 'We promote literacy, learning resources, reading culture, non-formal education support, educator capacity, and mentorship so underserved learners can access stronger pathways to opportunity.',
      icon: <BookOpen className="h-6 w-6" />,
      color: 'border-l-4 border-l-lani-blue',
    },
    {
      title: 'Strengthening Institutions and Community Systems',
      desc: 'We help care structures, community organisations, educators, media actors, and public-facing institutions improve documentation, reporting, data practices, accountability, and service delivery.',
      icon: <Building2 className="h-6 w-6" />,
      color: 'border-l-4 border-l-lani-gold',
    },
    {
      title: 'Building Resilient Communities',
      desc: 'We work with partners and community actors to strengthen recovery, wellbeing, livelihoods, social justice, and local ownership so communities are better prepared to sustain change.',
      icon: <Users className="h-6 w-6" />,
      color: 'border-l-4 border-l-stone-400',
    },
  ];

  const historicMilestones = [
    {
      period: '2012–2013',
      title: 'Mapping of Children’s Homes, Lagos State',
      desc: 'We conducted comprehensive operational mapping and structural field assessment of orphanage and care homes across Lagos State. The work gathered granular data to identify infrastructure gaps, resource shortfalls, caregiver needs, and the realities of institutionalised children.',
      color: 'bg-lani-primary',
    },
    {
      period: '2013',
      title: 'Caregiver CPR, First Aid & Emergency Training',
      desc: 'We designed and implemented professional training in CPR, basic first aid, and disaster preparedness for care-home staff. The intervention also included the distribution of emergency first-aid boxes across participating care settings.',
      color: 'bg-lani-green',
    },
    {
      period: '2013–2014',
      title: 'Disability-Sensitive Media Training',
      desc: 'We conducted specialised training for journalists and media professionals on disability-sensitive reporting, respectful terminology, ethical storytelling, and dignity-based public communication to challenge stigma and harmful narratives.',
      color: 'bg-lani-emerald',
    },
    {
      period: '2016–2019',
      title: 'Orphanage Library and Literacy Initiatives',
      desc: 'We launched education enrichment initiatives, including a major library setup project at Home of God’s Grace Mission Orphanage and book donations at Agnus Dei Orphanage. We also conducted reading sessions to support long-term learning culture.',
      color: 'bg-lani-blue',
    },
    {
      period: '2020',
      title: 'COVID-19 Risk Communication & Rebuild Calabar',
      desc: 'We deployed risk communication training frameworks for journalists to support responsible reporting, and participated as a founding coalition partner in the post-crisis Rebuild Calabar Initiative supporting local economic recovery.',
      color: 'bg-lani-gold',
    },
    {
      period: '2021–Present',
      title: 'Systems Strengthening and Process Reform',
      desc: 'We have focused on supporting informal care structures and community organisations to move toward more standardised, transparent, and audit-ready service models. This includes data collection, indicators, and impact templates.',
      color: 'bg-stone-400',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section 
        ref={heroRef} 
        className="relative overflow-hidden bg-gradient-to-b from-[#fdfbf7] via-[#f7f4ed] to-[#fdfbf7] py-20 lg:py-28"
      >
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-lani-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-lani-green/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 grid gap-16 lg:grid-cols-12 items-center text-left">
          {/* Hero Content */}
          <div ref={heroContentRef} className="lg:col-span-6 flex flex-col gap-6">
            <span className="eyebrow">Lani Foundation • Member of LANI Group</span>
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-lani-navy tracking-tight leading-[1.1]">
              Honouring a Legacy. <span className="text-lani-primary">Empowering Lives.</span> Strengthening Communities.
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              LANI Foundation works with communities, institutions, and partners to protect vulnerable people, expand opportunity, strengthen systems, and support sustainable development. We turn compassion into structured action by delivering inclusive programmes.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/get-involved" className="btn-primary">
                Partner With Us
                <HeartHandshake className="h-4 w-4" />
              </Link>
              <Link to="/initiatives" className="btn-secondary">
                View Our Programmes
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Hero Composite Image */}
          <div ref={heroImageRef} className="lg:col-span-6 relative">
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-lani-primary/30 to-lani-green/10 blur-xl opacity-75" />
              
              <div className="relative overflow-hidden rounded-3xl border border-stone-200/50 bg-white p-3.5 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80" 
                  alt="LANI Foundation Community Impact" 
                  className="h-[380px] lg:h-[460px] w-full rounded-2xl object-cover shadow-inner filter sepia-[0.15] brightness-95"
                />
                
                {/* Embedded Stats Banner */}
                <div className="absolute bottom-8 left-8 right-8 rounded-xl border border-white/20 bg-white/80 backdrop-blur-md p-4 shadow-lg text-left flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500">Focus Areas</span>
                    <strong className="text-sm font-bold text-lani-navy">8 Connected Domains</strong>
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
              label="People Supported" 
              icon={<Users className="h-5 w-5" />} 
            />
            <ImpactCounter 
              target={10} 
              suffix="+" 
              label="Delivered Interventions" 
              icon={<Briefcase className="h-5 w-5" />} 
            />
            <ImpactCounter 
              target={50} 
              suffix="+" 
              label="Partner Care Homes & Orgs" 
              icon={<Building2 className="h-5 w-5" />} 
            />
            <ImpactCounter 
              target={14} 
              suffix="" 
              label="Years of Philanthropy" 
              icon={<Globe2 className="h-5 w-5" />} 
            />
          </div>
        </div>
      </section>

      {/* NEW: WHO WE ARE SECTION */}
      <section ref={whoWeAreRef} className="py-20 bg-white border-b border-stone-100 text-left">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <span className="eyebrow mx-auto md:mx-0">Who We Are</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-lani-navy tracking-tight">
              The Social Impact Arm of LANI Group
            </h2>
            <div className="h-1 w-20 bg-lani-primary rounded-full mx-auto md:mx-0 -mt-2 mb-4" />
            
            <p className="font-sans text-stone-700 text-base sm:text-lg leading-relaxed font-medium">
              LANI Foundation is a philanthropic, non-governmental, and social impact organisation committed to improving the wellbeing, dignity, protection, and opportunities of vulnerable and underserved populations.
            </p>
            <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed">
              We work with women, children, orphaned and vulnerable children, persons with disabilities, refugees, asylum seekers, returned migrants, widows, youth, caregivers, grassroots educators, community-based organisations, and underserved households. Our work moves beyond occasional charity by creating structured, evidence-informed interventions that respond to real needs and strengthen the systems that serve people.
            </p>
            <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed">
              Through education, livelihood support, advocacy, capacity building, child protection, reintegration support, community wellbeing, and institutional strengthening, we help people and organisations build resilience, agency, and pathways toward sustainable growth.
            </p>
            
            <div className="pt-4 flex justify-center md:justify-start">
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold text-lani-primary hover:text-lani-navy transition-colors group">
                Read our full story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR MISSION IN ACTION */}
      <section ref={missionRef} className="section text-center bg-stone-50/50">
        <span className="eyebrow">Our Mission in Action</span>
        <h2 className="mx-auto max-w-2xl font-heading text-3xl sm:text-4xl font-extrabold text-lani-navy tracking-tight mt-3">
          Structured Action for Community Transformation
        </h2>
        <p className="mx-auto max-w-xl mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
          Through evidence-informed planning and direct service delivery, we run programmes designed to create measurable, sustainable social value.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {missionAreas.map((area, idx) => (
            <div key={idx} className={`premium-card text-left ${area.color} flex flex-col justify-between`}>
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#9B5B2E]/10 text-lani-primary mb-6">
                  {area.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-lani-navy tracking-tight mb-3">
                  {area.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {area.desc}
                </p>
              </div>
              <Link 
                to="/initiatives" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-lani-primary hover:text-lani-navy transition-colors group mt-auto"
              >
                Explore programmes
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
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
              className="w-full h-full timeline-line origin-top bg-lani-primary"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          <div className="flex flex-col gap-16 relative">
            {historicMilestones.map((milestone, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`timeline-item ${isLeft ? 'item-left' : 'item-right'} flex flex-col md:flex-row items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  {isLeft ? null : <div className="hidden md:block w-1/2" />}
                  <div className={`absolute left-1/2 -translate-x-1/2 h-6 w-6 rounded-full border-4 border-white ${milestone.color} shadow-md z-10`} />
                  <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} text-center`}>
                    <div className="inline-block bg-white border border-stone-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative max-w-md text-left">
                      <span className="font-heading text-xl font-black text-lani-primary">{milestone.period}</span>
                      <h3 className="font-heading text-base font-bold text-lani-navy mt-1">{milestone.title}</h3>
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-2">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                  {isLeft ? <div className="hidden md:block w-1/2" /> : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5.5 LATEST ARTICLES SECTION */}
      <section ref={articlesRef} className="section bg-stone-50/40 border-t border-b border-stone-100 text-left">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="eyebrow">Insights & Impact</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-lani-navy tracking-tight mt-3">
                Latest Research & Stories
              </h2>
              <p className="text-stone-600 text-sm max-w-xl mt-2">
                Read about our recent programmatic findings, capacity strengthening milestones, and stories from the field.
              </p>
            </div>
            <Link 
              to="/articles" 
              className="inline-flex items-center gap-2 text-sm font-bold text-lani-primary hover:text-lani-primary/80 transition-colors group shrink-0"
            >
              View All Articles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredArticles.map((art) => (
              <article 
                key={art.id} 
                className="article-card bg-white rounded-3xl border border-stone-150 overflow-hidden shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-stone-100">
                    <img 
                      src={art.image} 
                      alt={art.title} 
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur border border-stone-200/40 text-lani-navy text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                      {art.category}
                    </span>
                  </div>

                  <div className="p-6">
                     <div className="flex items-center gap-3 text-stone-400 text-[11px] mb-2.5">
                       <span>{art.date}</span>
                       <span>•</span>
                       <span>{art.readTime}</span>
                     </div>
                     <h3 className="font-heading text-base font-bold text-lani-navy leading-snug mb-2 hover:text-lani-primary transition-colors">
                       <Link to={`/articles`}>{art.title}</Link>
                     </h3>
                     <p className="text-stone-500 text-xs leading-relaxed line-clamp-3">
                       {art.excerpt}
                     </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-stone-100 mt-2">
                  <Link 
                    to={`/articles`} 
                    className="text-xs font-bold text-lani-primary hover:underline flex items-center gap-1"
                  >
                    Read Article
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section ref={ctaRef} className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12 text-center">
        <div className="bg-gradient-to-br from-lani-navy to-stone-900 rounded-3xl p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-stone-800 text-white flex flex-col items-center">
          <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-lani-primary/20 blur-2xl" />
          <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-lani-green/20 blur-2xl" />

          <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#d69f7e] ring-1 ring-white/10 bg-white/5 mb-6">
            Get Involved Today
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl">
            Be a Catalyst for Social Transformation
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Partner with LANI Foundation to support children, women, youth, returned migrants, vulnerable households, caregivers, educators, and community structures. Your support can help turn compassion into practical action and practical action into long-term transformation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/get-involved" className="btn-primary">
              Partner With Us
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
