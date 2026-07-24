import { useRef, useEffect, useState } from 'react';
import { Target, Eye, ShieldCheck, Heart, User, CheckCircle2, Award, Users, Scale, Star, HelpingHand, X, Maximize2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import aniBasseyImg from '../assets/ani-charles-bassey.png';
import luqmanImg from '../assets/luqman-musah-ozekhome.jpg';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);

  const [selectedMember, setSelectedMember] = useState<(typeof team)[0] | null>(null);

  // Set document title for SEO
  useEffect(() => {
    document.title = "About LANI Foundation | Social Impact Arm of LANI Group";
  }, []);

  // Close modal on Escape key press and manage body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
      }
    };

    if (selectedMember) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedMember]);

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
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 85%',
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
      desc: 'We cultivate personal agency and support beneficiaries to move from dependency to self-reliance.',
      icon: <HelpingHand className="h-5 w-5" />,
    },
    {
      title: 'Compassion',
      desc: 'We deliver practical, empathetic actions shaped around real-life human needs.',
      icon: <Heart className="h-5 w-5" />,
    },
    {
      title: 'Integrity',
      desc: 'We uphold financial transparency, sound governance, ethical conduct, and strict accountability.',
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      title: 'Inclusivity',
      desc: 'We design frameworks that deliberately reduce barriers for excluded and underserved groups.',
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: 'Collaboration',
      desc: 'We leverage collective intelligence through partnerships across communities, government, civil society, media, and the private sector.',
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      title: 'Innovation',
      desc: 'We embrace process improvements, adaptive tools, and dynamic delivery models that improve outcomes.',
      icon: <Star className="h-5 w-5" />,
    },
    {
      title: 'Sustainability',
      desc: 'We structure interventions to build local ownership and self-perpetuating community systems.',
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: 'Advocacy',
      desc: 'We give voice to underrepresented populations and work to change harmful narratives and practices.',
      icon: <Scale className="h-5 w-5" />,
    },
    {
      title: 'Respect',
      desc: 'We treat community actors, caregivers, beneficiaries, and institutional partners as active contributors to growth.',
      icon: <User className="h-5 w-5" />,
    },
  ];

  const team = [
    {
      id: 'ani-charles-bassey',
      name: 'Ani Charles Bassey-Eyo',
      role: 'Founder & Chairman',
      shortBio: 'Visionary entrepreneur and CEO of LANI Group. Committed to structural advocacy, taxation studies funding, and social reintegration across Nigeria.',
      fullBio: [
        "Ani Charles Bassey-Eyo is the Chief Executive Officer (CEO) of LANI Group, where he provides strategic leadership across all subsidiaries, spanning consulting, merchandising, food processing, technology, travel, and philanthropy. With over 20 years of experience in finance, management consulting, and corporate strategy, Ani brings deep expertise in business transformation, sustainability advisory, and market systems development.",
        "Prior to founding LANI Group, he worked in finance, treasury, and advisory roles across leading multinational and regional institutions. He holds a BSc in Accounting and Finance from the University of Hull, and pursued postgraduate studies in International Tax Law at Queen Mary and Westfield College, University of London. Ani is a Chartered Accountant and Corporate Treasurer, and a fellow or associate of ACCA, ICAN, CITN, and ACT (UK).",
        "He is passionate about building resilient African enterprises, advancing sustainable development, and promoting youth empowerment across the continent."
      ],
      image: aniBasseyImg,
    },
    {
      id: 'luqman-musah-ozekhome',
      name: 'Luqman Musah Ozekhome',
      role: 'Programme Officer, LANI Foundation',
      shortBio: 'Supports the planning, coordination, implementation, and monitoring of community development, economic empowerment, and social impact initiatives.',
      fullBio: [
        "Luqman Musah Ozekhome is the Programme Officer, LANI Foundation, the philanthropic arm of LANI Group, where he supports the planning, coordination, implementation, and monitoring of community development, economic empowerment, and social impact initiatives.",
        "With over five years of experience in livelihoods programming, entrepreneurship support, vocational skills development, and community-based interventions, Luqman brings expertise in programme management, stakeholder engagement, beneficiary support, and sustainable socio-economic development.",
        "Prior to joining LANI Foundation, he worked across livelihood and reintegration programmes supporting vulnerable populations, including returnees, migrants, women, youth, and underserved communities through skills development, business support, and income-generating initiatives.",
        "He holds a Higher National Diploma (HND) in Business Administration and Management from Federal Polytechnic Auchi and has completed professional training in Financial Literacy, MSME Training of Trainers, Mental Health and Psychosocial Support (MHPSS), Psychological First Aid (PFA), and Sustainable Socio-Economic Reintegration, including programmes delivered by GIZ/GOPA and the International Organization for Migration (IOM).",
        "Luqman is passionate about strengthening community resilience, expanding economic opportunities, and driving sustainable development outcomes through innovative and people-centred programmes."
      ],
      image: luqmanImg,
    },
    {
      id: 'philip-uwumarogie',
      name: 'Philip Uwumarogie',
      role: 'Chief Operating Officer',
      shortBio: 'Operations strategist leading program implementations. Coordinates field officers, sustainability audits, and community outreach campaigns.',
      fullBio: [
        "Philip Uwumarogie is an operations strategist leading program implementations. Coordinates field officers, sustainability audits, and community outreach campaigns.",
        "With a strong focus on field execution and continuous evaluation, Philip manages multi-partner operations to ensure transparent resource allocation and long-term project viability."
      ],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'olaniyi-omole',
      name: 'Olaniyi Omole',
      role: 'Head of Partnerships & Impact Programs',
      shortBio: 'Leads our university liaison campaigns, research grant screening, and builds corporate network alliances for program expansion.',
      fullBio: [
        "Olaniyi Omole leads our university liaison campaigns, research grant screening, and builds corporate network alliances for program expansion.",
        "He drives cross-sector collaborations with public institutions, civil society, and corporate partners to scale LANI Foundation's social impact projects."
      ],
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      
      {/* 1. HERO BANNER */}
      <section className="bg-stone-50 py-16 sm:py-24 border-b border-stone-200/30">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
          <div className="about-hero-text flex flex-col items-center gap-4">
            <span className="eyebrow">About LANI Foundation</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-lani-navy tracking-tight max-w-3xl">
              Building Systems That Work for People
            </h1>
            <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl mt-2">
              We are building systems that work for people through inclusive development, advocacy, capacity building, and stronger institutions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE & OUR STORY */}
      <section className="section grid gap-12 lg:grid-cols-2 text-left">
        <div className="flex flex-col gap-5">
          <span className="eyebrow">Who We Are</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-lani-navy tracking-tight">
            Our Identity & Core Mandate
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We are a mission-driven foundation working at the intersection of compassion, systems reform, community empowerment, and institutional accountability. We stand with vulnerable people not only by responding to urgent needs, but also by supporting the structures that determine whether people can live safely, learn effectively, access opportunities, and participate fully in society.
          </p>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Our identity is shaped by the belief that communities are not passive recipients of help; they are partners in transformation. We therefore work with caregivers, families, community leaders, social welfare actors, educators, media professionals, public institutions, NGOs, private-sector partners, and development organisations to co-create solutions that are locally relevant and socially durable.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <span className="eyebrow">Our Story</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-lani-navy tracking-tight">
            Our History of Development Action
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            LANI Foundation was established to convert compassion into organised development action. Recognizing that occasional relief or charity alone cannot solve systemic social problems, we set out to build programs that combine direct support to vulnerable populations with systems strengthening and capacity transfer for the institutions that serve them.
          </p>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Over the years, our interventions have evolved from child protection mapping and caregiver emergency training to comprehensive capacity building, gender inclusion advocacy, education and literacy initiatives, and process reform support for community-based organisations. By connecting grassroots realities with structured development action, we work to build local ownership and long-term resilience.
          </p>
        </div>
      </section>

      {/* 3. MISSION & VISION GRID */}
      <section className="section bg-stone-50/50 border-y border-stone-200/20 grid gap-12 md:grid-cols-2">
        {/* Mission card */}
        <div className="flex flex-col gap-5 p-8 sm:p-10 rounded-2xl bg-white border border-stone-100 shadow-sm text-left hover:shadow-md transition-shadow">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lani-primary/10 text-lani-primary">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-lani-navy tracking-tight">Our Mission</h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            To empower individuals and communities through education, entrepreneurship, mentorship, advocacy, capacity building, and institutional strengthening. We combine direct service delivery with strategic development and multi-stakeholder partnerships to generate measurable and lasting social value.
          </p>
        </div>

        {/* Vision card */}
        <div className="flex flex-col gap-5 p-8 sm:p-10 rounded-2xl bg-white border border-stone-100 shadow-sm text-left hover:shadow-md transition-shadow">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lani-green/10 text-lani-green">
            <Eye className="h-6 w-6" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-lani-navy tracking-tight">Our Vision</h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            To build a society where vulnerable people are protected, communities are empowered, and institutions are responsive enough to provide inclusive, effective, and sustainable support. We envision a future where no individual is left behind because of poverty, vulnerability, disability, displacement, gender, age, or social disadvantage.
          </p>
        </div>
      </section>

      {/* 4. OUR PURPOSE */}
      <section className="section text-left">
        <div className="mx-auto max-w-4xl flex flex-col gap-5">
          <span className="eyebrow">Our Purpose</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-lani-navy tracking-tight">
            Bridging Social Needs and Institutional Action
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Our purpose is to reduce vulnerability, expand opportunity, and strengthen the social systems that protect and empower people. We exist to make development more human-centred, more inclusive, and more responsive to the realities of underserved communities. We seek to close the gap between social needs and institutional action by translating insight into practical interventions, advocacy into policy attention, and compassion into structured programmes.
          </p>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We pursue a development model that recognises the connection between individual wellbeing and institutional capacity. Children require safer environments and responsive care systems. Women and widows require economic pathways, protection, and dignity. Persons with disabilities require inclusion, respectful representation, and accessible opportunities. Refugees and asylum seekers require protection, social support, and reintegration pathways. Communities require institutions that can plan, deliver, monitor, and sustain support effectively.
          </p>
        </div>
      </section>

      {/* 5. CORE VALUES (9 Values Grid) */}
      <section className="section bg-stone-50/50 border-t border-stone-200/20 text-center">
        <span className="eyebrow">Our Core Values</span>
        <h2 className="font-heading text-3xl font-extrabold text-lani-navy tracking-tight mt-3">
          Principles That Guide Our Work
        </h2>
        
        <div ref={valuesRef} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {values.map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-stone-100 shadow-sm flex flex-col gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lani-primary/10 text-lani-primary">
                {val.icon}
              </div>
              <h3 className="font-heading text-base font-bold text-lani-navy">
                {val.title}
              </h3>
              <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. COMMITMENT & LINK TO LANI GROUP */}
      <section className="section border-t border-stone-200/20 grid gap-12 lg:grid-cols-2 text-left bg-white">
        <div className="flex flex-col gap-5">
          <span className="eyebrow">Our Commitment</span>
          <h2 className="font-heading text-2xl font-extrabold text-lani-navy tracking-tight">
            To Vulnerable Communities
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We are committed to children, women, youth, widows, persons with disabilities, returned migrants, refugees, asylum seekers, caregivers, grassroots educators, community-based organisations, and underserved households. Our work centres dignity, protection, inclusion, and opportunity.
          </p>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We do not treat philanthropy as occasional charity or isolated relief. Instead, we design practical, sustainable, and inclusive actions that address both immediate human needs and the root causes of vulnerability. Our programmes combine direct support, advocacy, capacity building, mentorship, institutional strengthening, evidence-informed planning, and multi-stakeholder collaboration.
          </p>
        </div>

        <div className="flex flex-col gap-5 p-8 rounded-2xl bg-[#9B5B2E]/5 border border-[#9B5B2E]/10">
          <span className="eyebrow">Institutional Affiliation</span>
          <h2 className="font-heading text-2xl font-extrabold text-lani-navy tracking-tight">
            Member of LANI Group
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            LANI Foundation is a proud member of LANI Group, created to advance the Group’s commitment to sustainable philanthropy, inclusive development, institutional strengthening, and long-term community transformation. As the social impact and philanthropic arm of the Group, we convert compassion into structured development action by designing interventions that respond to real community needs while strengthening the systems that serve vulnerable people.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Our position within LANI Group enables us to draw on wider institutional knowledge, professional networks, development experience, and operational discipline. We use this advantage to build partnerships that connect grassroots realities with public institutions, private-sector actors, civil society organisations, and development stakeholders. Through this integrated approach, we pursue social value that is practical, accountable, measurable, and sustainable.
          </p>
        </div>
      </section>

      {/* 7. LEADERSHIP SECTION */}
      <section id="leadership" className="bg-[#fcfbf9] py-20 border-t border-stone-200/20 text-center">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <span className="eyebrow">Trustees & Leadership</span>
          <h2 className="font-heading text-3xl font-extrabold text-lani-navy tracking-tight mt-3 mb-16">
            Leading With Integrity & Purpose
          </h2>

          <div ref={leadershipRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {team.map((member, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedMember(member)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedMember(member)}
                tabIndex={0}
                role="button"
                aria-label={`View profile of ${member.name}`}
                className="group bg-white border border-stone-200/80 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-lani-primary/40 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-lani-primary"
              >
                <div>
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="h-60 w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-lani-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow">
                        <Maximize2 className="h-3.5 w-3.5" /> Read Full Profile
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-base font-extrabold text-lani-navy tracking-tight group-hover:text-lani-primary transition-colors">
                      {member.name}
                    </h3>
                    <span className="text-xs font-semibold text-lani-primary block mt-0.5">
                      {member.role}
                    </span>
                    <p className="text-stone-600 text-xs mt-3 leading-relaxed line-clamp-3">
                      {member.shortBio}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-stone-100 text-stone-600 text-[10px] font-bold">
                      <User className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">LANI Trustee</span>
                  </div>
                  <span className="text-xs font-bold text-lani-primary group-hover:translate-x-1 transition-transform">
                    View &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM MEMBER DETAIL MODAL POPUP */}
      {selectedMember && (
        <div 
          onClick={() => setSelectedMember(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-lani-navy/70 backdrop-blur-md transition-all duration-300"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-stone-200 text-left p-6 sm:p-8"
          >
            {/* Close X icon button */}
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-20 text-stone-400 hover:text-stone-800 bg-stone-100 hover:bg-stone-200 p-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-lani-primary"
              aria-label="Close profile modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Profile Header: Larger Image View & Bio Overview */}
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-6 pb-6 border-b border-stone-100">
              <div className="w-full sm:w-52 h-64 sm:h-60 shrink-0 rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-stone-50">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 pr-6">
                <span className="inline-flex items-center rounded-full bg-lani-primary/10 px-3 py-1 text-xs font-bold text-lani-primary uppercase tracking-wider mb-2">
                  LANI Leadership & Trustee
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-lani-navy tracking-tight">
                  {selectedMember.name}
                </h3>
                <p className="text-sm font-bold text-lani-primary mt-1">
                  {selectedMember.role}
                </p>
                <div className="mt-4 flex items-center gap-2 text-stone-500 text-xs">
                  <User className="h-4 w-4 text-lani-primary" />
                  <span className="font-semibold">Trustee & Executive Board</span>
                </div>
              </div>
            </div>

            {/* Extended Bio Text */}
            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              {selectedMember.fullBio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
