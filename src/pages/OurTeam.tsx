import { useRef, useEffect, useState } from 'react';
import { User, X, Maximize2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import nowoolaImg from '../assets/nowoola-enoch-ayomide.jpg';
import luqmanImg from '../assets/luqman-musah-ozekhome.jpg';
import estherImg from '../assets/esther-okpong.jpg';
import olabisiImg from '../assets/olabisi-oyeduntan.jpg';
import barnabasImg from '../assets/barnabas-noma-idahosa.jpg';
import olamilekanImg from '../assets/olamilekan-kareem.jpg';
import kehindeImg from '../assets/kehinde-ayandiran.jpg';
import faithImg from '../assets/faith-timothy.jpg';

type TeamMember = {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string[];
  image: string;
};

export default function OurTeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Set document title for SEO
  useEffect(() => {
    document.title = "Our Team | LANI Foundation";
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

  // Staggered hero and cards reveal on load
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.team-hero-text > *',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
    if (teamRef.current) {
      tl.fromTo(
        teamRef.current.children,
        { opacity: 0, scale: 0.96, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
        '-=0.3'
      );
    }
  }, { scope: containerRef });


  const team: TeamMember[] = [
    {
      id: 'luqman-musah-ozekhome',
      name: 'Luqman Musah Ozekhome',
      role: 'Programme Officer',
      shortBio: 'Supports the planning, coordination, implementation, and monitoring of community development, economic empowerment, and social impact initiatives.',
      fullBio: [
        "Luqman Musah Ozekhome is the Programme Officer at LANI Group, where he supports the planning, coordination, implementation, and monitoring of community development, economic empowerment, and social impact initiatives.",
        "With over five years of experience in livelihoods programming, entrepreneurship support, vocational skills development, and community-based interventions, Luqman brings expertise in programme management, stakeholder engagement, beneficiary support, and sustainable socio-economic development.",
        "Prior to joining LANI Group, he worked across livelihood and reintegration programmes supporting vulnerable populations, including returnees, migrants, women, youth, and underserved communities through skills development, business support, and income-generating initiatives.",
        "He holds a Higher National Diploma (HND) in Business Administration and Management from Federal Polytechnic Auchi and has completed professional training in Financial Literacy, MSME Training of Trainers, Mental Health and Psychosocial Support (MHPSS), Psychological First Aid (PFA), and Sustainable Socio-Economic Reintegration, including programmes delivered by GIZ/GOPA and the International Organization for Migration (IOM).",
        "Luqman is passionate about strengthening community resilience, expanding economic opportunities, and driving sustainable development outcomes through innovative and people-centred programmes."
      ],
      image: luqmanImg,
    },
    {
      id: 'esther-okpong',
      name: 'Esther Okpong',
      role: 'Accountant',
      shortBio: 'Finance and accounting professional specializing in financial reporting, budgeting, tax compliance, and automated AI-driven financial workflows.',
      fullBio: [
        "Esther Okpong is a Finance and Accounting professional specializing in the intersection of finance, technology, data, and business operations. Currently serving as the Accountant at LANI Group, she manages financial reporting, cash management, budgeting, and tax compliance to support executive decision-making.",
        "Esther's diverse background includes managing blockchain and digital asset transactions at CratD2C and streamlining commercial workflows at CrownCrystal Technology. Her professional experience spans traditional corporate finance as well as emerging digital environments.",
        "As an Accountant at CratD2C Decentralized Autonomous Smartchain, she managed and reconciled over 20,000 monthly blockchain and digital asset transactions, prepared financial reports and cash flow analyses, and supported the strengthening of financial controls and reporting accuracy.",
        "A proponent of AI-driven finance, she has designed automation workflows that cut manual data processing by 40%. Certified in data analysis and visualization, Esther leverages financial controls, risk management, and innovative technology to drive operational efficiency and sustainable business growth."
      ],
      image: estherImg,
    },
    {
      id: 'olabisi-oyeduntan',
      name: 'Olabisi Oyeduntan',
      role: 'Media & Communications Professional',
      shortBio: 'Media and communications strategist driving internal and external brand visibility, multi-platform communications architecture, and performance marketing.',
      fullBio: [
        "Olabisi Oyeduntan is a dynamic and results-driven Media and Communications Professional with a proven track record of elevating brand visibility, managing high-profile event coverage, and designing data-backed marketing strategies.",
        "Currently driving comprehensive internal and external media initiatives at LANI Group, she brings specialized expertise in digital strategy, conversion funnel optimization, and cross-channel content development.",
        "She excels in multi-platform communications architecture and strategic content blueprinting, designing tailored weekly media campaigns that effectively engage diverse corporate business verticals.",
        "Complementing her communication skills is deep expertise in performance marketing and data diagnostics. She designs targeted paid ad campaigns across Meta and Google to maximize lead generation and return on investment, leveraging revamped email marketing sequences and long-term SEO roadmaps to support sustainable organizational growth."
      ],
      image: olabisiImg,
    },
    {
      id: 'faith-timothy',
      name: 'Faith Timothy',
      role: 'Software Engineer & Systems Administrator',
      shortBio: 'Full-stack software engineer and systems administrator managing enterprise cloud environments, internal automation workflows, and responsive web applications at LANI.',
      fullBio: [
        "Faith Timothy is a versatile and impact-driven Full-Stack Software Engineer and Systems Administrator currently serving as Tech Intern at LANI, where he administers enterprise cloud environments and develops custom digital tools to enhance operational efficiency.",
        "At LANI, he manages Microsoft 365 enterprise infrastructure for active users—overseeing account provisioning, directory security policies, and license allocation—while designing custom Power Apps and automated workflows that streamline cross-functional business processes.",
        "His engineering expertise spans JavaScript (ES6+), TypeScript, Node.js, Python, PostgreSQL, and RESTful API architecture. He actively builds responsive web applications and internal tools, having contributed to the development of the LANI Foundation website and designed digital platforms including the LANI Creatives Agency Studio web experience.",
        "Beyond backend systems and cloud administration, Faith integrates UI/UX product design principles using Figma design systems and auto-layout component architectures. Currently pursuing a Bachelor's Degree in Computer Science at the University of Uyo, he holds industry certifications from IBM SkillsBuild, Cisco Networking Academy, and Tech Sphere Academy."
      ],
      image: faithImg,
    },
    {
      id: 'olamilekan-kareem',
      name: 'Olamilekan Kareem',
      role: 'Software Developer',
      shortBio: 'Full-stack developer specializing in modern web architecture, secure API systems, and digital platforms across LANI Group.',
      fullBio: [
        "Olamilekan Kareem is a Full-Stack Software Developer with proven experience architecting and shipping production web applications, secure API layers, and fintech platforms from the ground up.",
        "At LANI Group Consulting, he has led the design and deployment of key digital platforms across the group's business expressions, including the corporate LANI Group portal, LANI Creatives, and the LANI Academy learning management system.",
        "His technical expertise spans React.js, Node.js, Express, Python, MongoDB, and modern cloud deployment, with a core focus on high performance, intuitive user experience, and scalable backend infrastructure.",
        "Currently completing his B.Tech in Computer Science with Mathematics at Obafemi Awolowo University, Olamilekan continues to advance his work in data science, artificial intelligence, and building technology systems that drive organizational impact."
      ],
      image: olamilekanImg,
    },
    {
      id: 'barnabas-noma-idahosa',
      name: 'Barnabas Noma-Idahosa',
      role: 'Visual Designer & Creative Professional',
      shortBio: 'Combines creative thinking, design, and strategy across brand identity, digital content, and visual communication to help organisations build strong identities.',
      fullBio: [
        "Barnabas Noma-Idahosa is a Visual Designer and Creative Professional with 5 years of experience working across brand identity, visual communication, digital content, social media, and creative direction. Having worked with 50+ brands, he combines creative thinking, design, and strategy to help organisations communicate effectively, build stronger visual identities, and connect meaningfully with their audiences. He holds a B.Eng. in Computer Engineering and has experience spanning corporate, creative, digital, and social-impact environments.",
        "His approach to design goes beyond making things look good. He takes time to understand the idea, the audience, and the purpose behind each project, translating them into visual experiences that are clear, engaging, and intentional. From developing brand identities and campaigns to creating digital content and directing visual communication, Barnabas brings together design, storytelling, and strategy to turn ideas into work that communicates, connects, and leaves a lasting impression."
      ],
      image: barnabasImg,
    },
    {
      id: 'kehinde-ayandiran',
      name: 'Kehinde Ayandiran',
      role: 'Corps Member',
      shortBio: 'Dedicated professional supporting recruitment coordination, administrative operations, training logistics, and stakeholder engagement.',
      fullBio: [
        "Kehinde Ayandiran is a dedicated and results-oriented Corps Member with experience in recruitment coordination, administrative support, training management, stakeholder engagement, and organizational administration.",
        "He has demonstrated the ability to support organizational operations through candidate sourcing, interview coordination, training logistics, documentation, and effective communication with internal and external stakeholders.",
        "Skilled in communication, data management, report preparation, training administration, and digital collaboration, Kehinde contributes to the efficient execution of capacity-building, human resource, and organizational development initiatives.",
        "He is proficient in Microsoft Office Suite, Google Workspace, Microsoft Teams, and other digital productivity tools, passionate about driving operational excellence, fostering productive relationships, and delivering value-based solutions that contribute to organizational success."
      ],
      image: kehindeImg,
    },
    {
      id: 'nowoola-enoch-ayomide',
      name: 'Nowoola Enoch Ayomide',
      role: 'LANI Trainee',
      shortBio: 'Supports consulting assignments, training programmes, project coordination, and stakeholder engagement with expertise in tender research and operational support.',
      fullBio: [
        "Nowoola Enoch Ayomide is a LANI Trainee with experience supporting consulting assignments, training programmes, project coordination, and stakeholder engagement.",
        "He has practical expertise in tender research, opportunity tracking, report preparation, training administration, and operational support.",
        "Skilled in communication, project monitoring, and digital collaboration, he contributes to the efficient delivery of consulting and capacity-building initiatives.",
        "Proficient in Microsoft Office, Google Workspace, and Canva, he is committed to continuous learning, professional excellence, and delivering value-driven solutions to clients and organizations."
      ],
      image: nowoolaImg,
    },
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">

      {/* HERO BANNER */}
      <section className="bg-stone-50 py-16 sm:py-24 border-b border-stone-200/30">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
          <div className="team-hero-text flex flex-col items-center gap-4">
            <span className="eyebrow">Our Team</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-lani-navy tracking-tight max-w-3xl">
              The People Behind the Mission
            </h1>
            <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl mt-2">
              Meet the dedicated professionals who drive our consulting, training, and development programmes across communities.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="bg-[#fcfbf9] py-20 border-t border-stone-200/20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div ref={teamRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left">
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
                      className="h-60 w-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
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
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">LANI Team</span>
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

            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-6 pb-6 border-b border-stone-100">
              <div className="w-full sm:w-52 h-64 sm:h-60 shrink-0 rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-stone-50">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 pr-6">
                <span className="inline-flex items-center rounded-full bg-lani-primary/10 px-3 py-1 text-xs font-bold text-lani-primary uppercase tracking-wider mb-2">
                  LANI Team Member
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-lani-navy tracking-tight">
                  {selectedMember.name}
                </h3>
                <p className="text-sm font-bold text-lani-primary mt-1">
                  {selectedMember.role}
                </p>
                <div className="mt-4 flex items-center gap-2 text-stone-500 text-xs">
                  <User className="h-4 w-4 text-lani-primary" />
                  <span className="font-semibold">Team Member</span>
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
