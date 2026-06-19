import { useState, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Briefcase, Leaf, Activity, Users, Award, Calendar, BookOpen, AlertCircle, FileText, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface Project {
  title: string;
  category: string;
  desc: string;
  impact: string;
  icon: React.ReactNode;
  tag: string;
}

export default function Initiatives() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get('focus') || 'all';
  const [filter, setFilter] = useState(initialFilter);
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'education', name: 'Education' },
    { id: 'entrepreneurship', name: 'Entrepreneurship' },
    { id: 'sustainability', name: 'Climate & Sustainability' },
    { id: 'health', name: 'Health & Advocacy' },
    { id: 'reintegration', name: 'Social Reintegration' },
  ];

  const projects: Project[] = [
    {
      title: 'Angeline Uyi Bassey (AUB) Prize',
      category: 'education',
      tag: 'Academic Funding',
      desc: 'Annual research award backing university students who analyze taxation, policy, and natural resource extraction legalities in Africa.',
      impact: '₦5.0M awarded annually, supporting 3 winning research cohorts.',
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: 'Lani Agro-Grants',
      category: 'entrepreneurship',
      tag: 'Grassroots Support',
      desc: 'Direct seed-grants and equipment funding for smallholder farmers and agricultural co-operatives in rural Lagos and Delta states.',
      impact: 'Over 120 small farms equipped with irrigation toolkits.',
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      title: 'Youth Solar Technical Hubs',
      category: 'sustainability',
      tag: 'Green Careers',
      desc: 'Vocational training centers providing tuition-free installation, operation, and maintenance courses for solar grids in off-grid villages.',
      impact: '180+ certified young solar technicians launched in 2024.',
      icon: <Leaf className="h-6 w-6" />,
    },
    {
      title: 'Community Reforestation Campaign',
      category: 'sustainability',
      tag: 'Climate Action',
      desc: 'Organized tree planting exercises and soil rehabilitation projects, raising community consciousness on climate-related erosion.',
      impact: '5,000+ local tree seedlings planted in coastal erosion zones.',
      icon: <Leaf className="h-6 w-6" />,
    },
    {
      title: 'Maternal Health Funding Network',
      category: 'health',
      tag: 'Healthcare Aid',
      desc: 'Co-funding emergency clinical aid, post-natal supplies, and safe birth training workshops for rural healthcare practitioners.',
      impact: 'Supported 1,400 safe deliveries across 18 community clinics.',
      icon: <Activity className="h-6 w-6" />,
    },
    {
      title: 'Youth Re-integration & Skills Center',
      category: 'reintegration',
      tag: 'Vocational Training',
      desc: 'Rehabilitation support paired with technical tailoring, wood-craft, and digital literacy training for displaced or vulnerable youths.',
      impact: '85% graduation-to-employment rate for program graduates.',
      icon: <Users className="h-6 w-6" />,
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Animate grid list transitions on filter change
  useGSAP(() => {
    if (!gridRef.current) return;
    
    // Animate items out
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, scale: 0.9, y: 15 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' }
    );
  }, { dependencies: [filter], scope: gridRef });

  const handleFilterChange = (catId: string) => {
    setFilter(catId);
    setSearchParams({ focus: catId });
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO */}
      <section className="bg-stone-50 py-16 sm:py-20 border-b border-stone-200/30 text-left">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <span className="eyebrow">Our Initiatives</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-lani-navy tracking-tight mt-3">
            Structured Channels of Social Change
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mt-4">
            We focus on five pillars of intervention, managing active projects that bridge socioeconomic gaps, finance research, and advocate for climate safety.
          </p>
        </div>
      </section>

      {/* 2. FILTERABLE DIRECTORY */}
      <section className="section text-left">
        {/* Tab triggers */}
        <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 ${
                filter === cat.id
                  ? 'bg-lani-primary text-white shadow-sm'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Project grid (GSAP animated) */}
        <div ref={gridRef} className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((proj, idx) => (
            <div key={idx} className="premium-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-bold text-stone-500 uppercase tracking-wider">
                    {proj.tag}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-50 text-lani-primary border border-stone-100">
                    {proj.icon}
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-lani-navy tracking-tight mb-2">
                  {proj.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {proj.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-stone-50 text-xs text-stone-500">
                <span className="block font-bold text-lani-navy uppercase tracking-wider text-[9px] mb-1">Impact Highlight</span>
                <p className="font-medium text-stone-600 leading-snug">{proj.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. AUB PRIZE SCHOLARSHIP DOCUMENTATION SECTION */}
      <section className="bg-stone-50 border-t border-stone-200/40 py-20 text-left">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 grid gap-12 lg:grid-cols-12">
          
          {/* Main Info Column */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#9B5B2E] ring-1 ring-[#9B5B2E]/20 bg-[#9B5B2E]/5 w-fit">
              AUB Prize Guidelines
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-lani-navy tracking-tight">
              Angeline Uyi Bassey Research Grant Guidelines
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              The Angeline Uyi Bassey (AUB) Prize is a research-focused grant that finances academic projects targeting local taxation solutions, industrial regulations, and resource policy transparency in Nigeria. It seeks to support scholars who want to influence structural socio-economic development.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 mt-4">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lani-primary/10 text-lani-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-lani-navy">Focus Research Areas</h4>
                  <p className="text-stone-500 text-xs sm:text-sm mt-1 leading-relaxed">
                    Taxation administration models, extractive industry governance, oil & gas environmental laws, and grassroots community wealth retention systems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lani-green/10 text-lani-green">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-lani-navy">Submission Format</h4>
                  <p className="text-stone-500 text-xs sm:text-sm mt-1 leading-relaxed">
                    A comprehensive project proposal (max 3,000 words), literature review, methodology, budget schedule, and curriculum vitae of academic supervisor.
                  </p>
                </div>
              </div>
            </div>

            {/* Timelines list */}
            <div className="mt-8 p-6 bg-white border border-stone-200/60 rounded-2xl shadow-sm">
              <h3 className="font-heading text-lg font-bold text-lani-navy mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-lani-primary" />
                2026-2027 Award Timeline
              </h3>
              <div className="grid gap-4 sm:grid-cols-3 text-xs">
                <div className="border-r border-stone-100 last:border-r-0 pr-4">
                  <span className="block text-stone-400 font-bold uppercase tracking-wider text-[9px]">Proposal Call</span>
                  <strong className="block text-lani-navy text-sm font-bold mt-1">July 1, 2026</strong>
                  <span className="text-stone-500 mt-0.5 block">Application portal opens.</span>
                </div>
                <div className="border-r border-stone-100 last:border-r-0 pr-4">
                  <span className="block text-stone-400 font-bold uppercase tracking-wider text-[9px]">Deadline</span>
                  <strong className="block text-lani-navy text-sm font-bold mt-1">October 15, 2026</strong>
                  <span className="text-stone-500 mt-0.5 block">Proposal upload closes.</span>
                </div>
                <div>
                  <span className="block text-stone-400 font-bold uppercase tracking-wider text-[9px]">Award Announcement</span>
                  <strong className="block text-lani-primary text-sm font-bold mt-1">December 10, 2026</strong>
                  <span className="text-stone-500 mt-0.5 block">Winners awarded at the Annual Lani Gala.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility Card */}
          <div className="lg:col-span-4 flex items-start">
            <div className="w-full rounded-2xl border border-stone-200 bg-white p-8 shadow-sm flex flex-col gap-6">
              <h3 className="font-heading text-lg font-bold text-lani-navy flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-lani-primary" />
                Eligibility Criteria
              </h3>
              
              <ul className="flex flex-col gap-4 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-lani-primary shrink-0 mt-2" />
                  <span>Must be a registered undergraduate (final year) or graduate student in an accredited African University.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-lani-primary shrink-0 mt-2" />
                  <span>Research must focus on West African policy issues, preferably relating to Nigeria.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-lani-primary shrink-0 mt-2" />
                  <span>Minimum GPA of 3.5 / 5.0 (or equivalent Second Class Upper division).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-lani-primary shrink-0 mt-2" />
                  <span>Recommendation letter from academic advisor or department head.</span>
                </li>
              </ul>

              <Link 
                to="/get-involved?apply=aub-prize" 
                className="btn-primary w-full justify-center text-center mt-4"
              >
                Submit Proposal
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
