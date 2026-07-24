import { useRef, useEffect } from 'react';
import { Target, Eye, ShieldCheck, Heart, User, CheckCircle2, Award, Users, Scale, Star, HelpingHand } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import aniBasseyImg from '../assets/ani-charles-bassey.png';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);

  // Set document title for SEO
  useEffect(() => {
    document.title = "About LANI Foundation | Social Impact Arm of LANI Group";
  }, []);

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
      name: 'Ani Charles Bassey-Eyo',
      role: 'Founder & Chairman',
      bio: 'Visionary entrepreneur and CEO of LANI Group. Committed to structural advocacy, taxation studies funding, and social reintegration across Nigeria.',
      image: aniBasseyImg,
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
      bio: 'Leads our university liaison campaigns, research grant screening, and builds corporate network alliances for program expansion.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
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
