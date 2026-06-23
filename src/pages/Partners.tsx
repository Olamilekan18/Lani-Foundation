import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Globe2, 
  Users, 
  HeartHandshake, 
  BookOpen, 
  Search,
  ArrowRight,
  FileText,
  Accessibility,
  ShieldCheck,
  Activity
} from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface PartnerActor {
  name: string;
  project: string;
  whatWeDid: string;
}

interface PartnerCategoryInfo {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  icon: React.ReactNode;
  actors: PartnerActor[];
}

const extendedOrganizations = [
  {
    name: 'International Organization for Migration (IOM - UN Migration)',
    sector: 'Development & Reintegration',
    icon: <Globe2 className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'Department for International Development (DFID - UK)',
    sector: 'International Development',
    icon: <Globe2 className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'Breakthrough Action-Nigeria (BA-N)',
    sector: 'Public Health Advocacy',
    icon: <Users className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'Lagos State Ministry of Youth & Social Development',
    sector: 'Government Agency',
    icon: <Building2 className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'Cross River State Ministry of Social Welfare',
    sector: 'Government Agency',
    icon: <Building2 className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'Cross River State Office of the Public Defendant',
    sector: 'Government Agency',
    icon: <Building2 className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'Nigeria Centre for Disease Control (NCDC)',
    sector: 'Public Health & Safety',
    icon: <ShieldCheck className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'Red Cross Society',
    sector: 'Emergency Response & Safety',
    icon: <Activity className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'Home of God’s Grace Mission Orphanage (Agbowa)',
    sector: 'Social Care & Welfare',
    icon: <HeartHandshake className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'Agnus Dei Orphanage Home (Okota)',
    sector: 'Social Care & Welfare',
    icon: <HeartHandshake className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'St. Joseph Choir of St. Jude Catholic Church (Mafoluko)',
    sector: 'Faith-Based & Community',
    icon: <Users className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'Joint National Association of Persons with Disabilities (JONAPWD)',
    sector: 'Social Inclusion Advocacy',
    icon: <Accessibility className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'West African Disability Coalitions',
    sector: 'Social Inclusion Advocacy',
    icon: <Accessibility className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'Federal Radio Corporation of Nigeria (FRCN)',
    sector: 'Media & Broadcasting',
    icon: <Users className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'West African Press Corps & Local Media Houses',
    sector: 'Media & Journalism',
    icon: <Users className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'Redeemed Christian Church of God (Rose of Sharon Parish)',
    sector: 'Faith-Based & Capacity',
    icon: <BookOpen className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'Grassroots Non-Formal Education Units',
    sector: 'Capacity Building',
    icon: <BookOpen className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'Local Caregiver Networks',
    sector: 'Capacity Building',
    icon: <BookOpen className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'LANI Group',
    sector: 'Strategic Partner',
    icon: <Building2 className="h-5 w-5 text-lani-primary" />
  },
  {
    name: 'LANI Consulting',
    sector: 'Strategic Partner',
    icon: <Building2 className="h-5 w-5 text-lani-primary" />
  }
];

export default function Partners() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const gridRef = useRef<HTMLDivElement>(null);

  // Set document title for SEO
  useEffect(() => {
    document.title = "Partners & Client Network | Work With LANI Foundation";
  }, []);

  // GSAP animation on filter change
  useGSAP(() => {
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
    );
  }, [filter, searchQuery]);

  const categories = [
    { id: 'all', name: 'All Networks' },
    { id: 'strategic-dev', name: 'Strategic & Dev' },
    { id: 'public-govt', name: 'Government & Public' },
    { id: 'care-welfare', name: 'Care Homes & Schools' },
    { id: 'advocacy-media', name: 'Advocacy & Media' },
    { id: 'education-training', name: 'Capacity Building' },
    { id: 'icd-network', name: 'Disability & ICD' },
  ];

  const partnersData: PartnerCategoryInfo[] = [
    {
      id: 'strategic-dev',
      name: 'Strategic & Development Partners',
      tagline: 'International agencies and corporate group networks',
      desc: 'We collaborate with multilateral institutions and corporate networks to deliver scalable interventions in livelihoods, reintegration, and capacity baseline building.',
      icon: <Globe2 className="h-6 w-6" />,
      actors: [
        {
          name: 'International Organization for Migration (IOM)',
          project: 'MPRRSSA Reintegration Project',
          whatWeDid: 'Collaborated through LANI Group/LANI Consulting to design and set up income-generating activities, micro-grant support, and pathways to economic self-reliance for returned migrants.'
        },
        {
          name: 'LANI Group & LANI Consulting',
          project: 'Systems Strengthening & Process Reform',
          whatWeDid: 'Partnered to build standard, transparent, and audit-ready service models for grassroots care structures, utilizing group resources to transfer project indicators and data templates.'
        }
      ]
    },
    {
      id: 'public-govt',
      name: 'Government & Public Institutions',
      tagline: 'State ministries and public safety net agencies',
      desc: 'We engage public institutions to align grassroots community assessments with national development priorities and government social welfare services.',
      icon: <Building2 className="h-6 w-6" />,
      actors: [
        {
          name: 'Lagos State Ministry of Youth & Social Development',
          project: 'Operational Mapping of Children’s Homes',
          whatWeDid: 'Conducted a comprehensive field assessment of orphanage and care environments across Lagos State to gather evidence on infrastructure gaps, caregiver needs, and welfare conditions.'
        },
        {
          name: 'Cross River State Government Agencies',
          project: 'Rebuild Calabar Initiative',
          whatWeDid: 'Participated as a founding coalition partner in post-crisis community recovery (Rebuild Calabar), supporting local economic rebuilding, infrastructure rehabilitation, and community resilience.'
        }
      ]
    },
    {
      id: 'care-welfare',
      name: 'Care Homes & Social Welfare Institutions',
      tagline: 'Child protection centers and literacy spaces',
      desc: 'We work closely with frontline care facilities to implement safe growth environments, educator preparation workshops, and literacy advancement centers.',
      icon: <HeartHandshake className="h-6 w-6" />,
      actors: [
        {
          name: 'Home of God’s Grace Mission Orphanage',
          project: 'Orphanage Library & Literacy Initiative',
          whatWeDid: 'Launched an education enrichment campaign that established a fully equipped library and reading circles for children aged 3 to 18 years to foster a learning culture.'
        },
        {
          name: 'Agnus Dei Orphanage',
          project: 'Educational Book Donation Drive',
          whatWeDid: 'Delivered targeted curriculum-based learning materials and hosted community reading sessions to improve educational accessibility for institutionalized learners.'
        },
        {
          name: 'St. Joseph Choir of St. Jude Catholic Church',
          project: 'Agnus Dei Orphanage Support',
          whatWeDid: 'Partnered with LANI Foundation to donate educational books and support materials to Agnus Dei Orphanage Home in Okota, Lagos.'
        }
      ]
    },
    {
      id: 'advocacy-media',
      name: 'Advocacy, Media & Civil Society',
      tagline: 'Advocacy networks and risk communicators',
      desc: 'We train journalists, advocacy organizations, and media professionals to promote dignity-based terminology, inclusion dialogs, and accurate public health information.',
      icon: <Users className="h-6 w-6" />,
      actors: [
        {
          name: 'West African Press Corps & Local Media Houses',
          project: 'Disability-Sensitive Media Training',
          whatWeDid: 'Trained journalists on respectful reporting terminology to combat exclusion and challenge stigma against persons with disabilities.'
        },
        {
          name: 'Breakthrough Action-Nigeria, NCDC & FRCN',
          project: 'COVID-19 Risk Communication Campaigns',
          whatWeDid: 'Trained over 100 media reporters (mostly FRCN staff) on effective and factual reporting to improve compliance with safety directives in grassroots communities.'
        }
      ]
    },
    {
      id: 'education-training',
      name: 'Education & Capacity Building Partners',
      tagline: 'Grassroots training centers and educator networks',
      desc: 'We partner with non-formal education units and instructor circles to build caregiver capacities and modern classroom support tracking systems.',
      icon: <BookOpen className="h-6 w-6" />,
      actors: [
        {
          name: 'Grassroots Non-Formal Education Units',
          project: 'Train-the-Trainer Educational Workshop',
          whatWeDid: 'Delivered intensive workshops for grassroots instructors on modern classroom management, child-centered teaching methodologies, and emotional support tracking.'
        },
        {
          name: 'Local Caregiver Networks & Red Cross',
          project: 'Caregiver BLS, CPR & First Aid Training',
          whatWeDid: 'Partnered with the Red Cross and Cross River State Ministry of Social Welfare to provide Basic Life Support (BLS) and CPR training for caregivers and distribute emergency response boxes.'
        },
        {
          name: 'RCCG, Rose of Sharon Parish staff',
          project: 'Teacher Capacity Building Workshop',
          whatWeDid: 'Trained Sunday school teachers and parish staff on effective classroom management and child support tracking methods.'
        }
      ]
    },
    {
      id: 'icd-network',
      name: 'International Conference on Disabilities (ICD)',
      tagline: 'West African regional disability inclusion network',
      desc: 'We served as a strategic partner and facilitator for the landmark International Conference on Disabilities in West Africa, driving policy dialogs and multi-sector advocacy.',
      icon: <Accessibility className="h-6 w-6" />,
      actors: [
        {
          name: 'Department for International Development (DFID)',
          project: 'ICD Lagos 2015 Conference',
          whatWeDid: 'Partnered to organize the first International Conference on Disabilities in West Africa, addressing inclusion barriers and aligning policy conversations.'
        },
        {
          name: 'West African Disability Coalitions & JONAPWD',
          project: 'Regional Policy Dialogue',
          whatWeDid: 'Aligned regional dialogue on health, education, and livelihood policies for persons with disabilities to tackle systemic exclusion.'
        }
      ]
    }
  ];

  const filteredPartners = partnersData.filter(item => {
    const matchesFilter = filter === 'all' || item.id === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.actors.some(actor => 
                            actor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            actor.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            actor.whatWeDid.toLowerCase().includes(searchQuery.toLowerCase())
                          );
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-20">
      {/* HERO BANNER */}
      <section className="bg-white border-b border-stone-200/50 py-16 sm:py-20 text-left">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="eyebrow">Strategic Alliances</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-lani-navy tracking-tight mt-3">
              Partners & Client Network
            </h1>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-4">
              Partnership is central to how we deliver impact. LANI Foundation works with public institutions, care settings, development agencies, and civil society organizations who share our commitment to dignity, accountability, and sustainable social impact.
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH AND FILTER */}
      <section className="py-8 bg-stone-100/50 border-b border-stone-200/30">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  filter === cat.id
                    ? 'bg-lani-primary text-white shadow-sm'
                    : 'bg-white border border-stone-250 text-stone-500 hover:bg-stone-50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search by partner or project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-stone-250 rounded-full pl-9 pr-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-lani-primary focus:border-lani-primary"
            />
          </div>
        </div>
      </section>

      {/* PARTNER DIRECTORY GRID */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {filteredPartners.length > 0 ? (
            <div ref={gridRef} className="grid gap-8 md:grid-cols-2">
              {filteredPartners.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="h-12 w-12 rounded-2xl bg-lani-primary/10 text-lani-primary flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-bold text-lani-navy leading-tight">
                          {item.name}
                        </h3>
                        <span className="text-[10px] text-stone-400 font-extrabold uppercase tracking-wider block mt-0.5">
                          {item.tagline}
                        </span>
                      </div>
                    </div>

                    <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="border-t border-stone-100 pt-5">
                      <h4 className="text-[10px] font-black text-lani-navy uppercase tracking-widest mb-4 flex items-center gap-1.5">
                        <FileText className="h-3.5 w-3.5 text-lani-primary" />
                        Collaboration & Work Details:
                      </h4>
                      <div className="space-y-4">
                        {item.actors.map((actor, idx) => (
                          <div key={idx} className="bg-stone-50/60 rounded-2xl p-4 border border-stone-100 text-left">
                            <h5 className="text-xs font-bold text-lani-navy flex flex-wrap justify-between items-center gap-2">
                              <span>{actor.name}</span>
                              <span className="text-[9px] bg-white border border-stone-200 text-lani-primary font-bold px-2 py-0.5 rounded-full uppercase">
                                {actor.project}
                              </span>
                            </h5>
                            <p className="text-stone-600 text-xs leading-relaxed mt-2">
                              {actor.whatWeDid}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-stone-100/50">
                    <Link
                      to="/get-involved?tab=partner"
                      className="text-xs font-bold text-lani-primary hover:underline inline-flex items-center gap-1.5"
                    >
                      Propose Partnership
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white border border-stone-200 rounded-3xl shadow-sm">
              <Building2 className="h-12 w-12 text-stone-300 mx-auto mb-4" />
              <h3 className="font-heading text-lg font-bold text-lani-navy">No partner categories found</h3>
              <p className="text-stone-500 text-xs sm:text-sm mt-1">Try resetting your filters or adjusting your search term.</p>
              <button 
                onClick={() => { setFilter('all'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 bg-lani-primary text-white text-xs font-bold rounded-full hover:bg-lani-navy transition-colors"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* EXTENDED ORGANIZATION NETWORK */}
      <section className="py-20 bg-stone-100/50 border-t border-stone-200/30">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
          <span className="eyebrow mx-auto">Collaborative Network</span>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-lani-navy tracking-tight mt-3">
            Organizations We Have Collaborated With
          </h2>
          <p className="mx-auto max-w-2xl mt-4 text-stone-600 text-xs sm:text-sm leading-relaxed mb-12">
            Over the years, LANI Foundation and our parent LANI Group have partnered with diverse public institutions, international development agencies, faith-based organizations, and civil society groups to deliver transparent, verify-friendly, and sustainable development outcomes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-left">
            {extendedOrganizations.map((org, index) => (
              <div 
                key={index}
                className="bg-white border border-stone-200/60 rounded-2xl p-5 hover:border-lani-primary/30 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="h-10 w-10 rounded-xl bg-stone-50 text-stone-500 flex items-center justify-center shrink-0 border border-stone-100 group-hover:bg-lani-primary/10 group-hover:text-lani-primary transition-colors">
                  {org.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-lani-navy leading-snug group-hover:text-lani-primary transition-colors">
                    {org.name}
                  </h4>
                  <span className="text-[9px] text-stone-400 font-extrabold uppercase tracking-wider block mt-1">
                    {org.sector}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center mt-10">
        <div className="bg-lani-navy rounded-3xl p-10 sm:p-14 relative overflow-hidden shadow-2xl border border-stone-800 text-white flex flex-col items-center">
          <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-lani-primary/20 blur-2xl" />
          
          <span className="inline-flex items-center rounded-full px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#d69f7e] ring-1 ring-white/10 bg-white/5 mb-4">
            Joint Social Responsibility
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-xl">
            Partner With LANI Foundation
          </h2>
          <p className="mt-3 text-stone-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
            We welcome collaborations that advance child protection, education, social inclusion, livelihood development, humanitarian support, systems strengthening, and advocacy. Work with us to deliver transparent, verify-friendly, and sustainable development outcomes.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Link to="/get-involved" className="btn-primary">
              Submit Partner Proposal
            </Link>
            <Link to="/contact" className="btn-secondary border-white/10 bg-white/5 text-white hover:bg-white/10">
              Contact Collaboration Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
