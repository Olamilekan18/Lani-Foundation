import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Activity, Users, Award, BookOpen, ShieldCheck, HeartHandshake, Building2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface Project {
  title: string;
  category: string;
  tag: string;
  period: string;
  desc: string;
  impact: string;
  icon: React.ReactNode;
}

export default function ThematicFocus() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get('focus') || 'all';
  const [filter, setFilter] = useState(initialFilter);
  const gridRef = useRef<HTMLDivElement>(null);

  // Set document title for SEO
  useEffect(() => {
    document.title = "What We Do | LANI Foundation Thematic Focus";
  }, []);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'child-protection', name: 'Child Protection' },
    { id: 'inclusion', name: 'Social Inclusion' },
    { id: 'education', name: 'Education & Literacy' },
    { id: 'systems-strengthening', name: 'Systems & Capacity' },
    { id: 'migration', name: 'Migration & Livelihoods' },
  ];

  const projects: Project[] = [
    {
      title: 'Mapping of Children’s Homes, Lagos State',
      category: 'child-protection',
      tag: 'BELONG / Evidence',
      period: '2012–2013',
      desc: 'We conducted comprehensive operational mapping and structural field assessment of orphanage and care homes across Lagos State. The work gathered granular data to identify infrastructure gaps, resource shortfalls, caregiver needs, and the realities of institutionalised children, helping to reduce assumption-based programming.',
      impact: 'Generated evidence to guide more informed child welfare programming across Lagos State.',
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: 'Caregiver CPR, First Aid & Emergency Training',
      category: 'child-protection',
      tag: 'BELONG / Capacity',
      period: '2013',
      desc: 'We designed and implemented professional training in CPR, basic first aid, and disaster preparedness for care-home staff. The intervention also included the distribution of emergency first-aid boxes across participating care settings.',
      impact: 'Improved emergency preparedness and safety responses among care-home staff.',
      icon: <ShieldCheck className="h-6 w-6" />,
    },
    {
      title: 'Disability-Sensitive Media Training',
      category: 'inclusion',
      tag: 'ENHANCE / Advocacy',
      period: '2013–2014',
      desc: 'We conducted specialised training for journalists and media professionals on disability-sensitive reporting, respectful terminology, ethical storytelling, and dignity-based public communication to challenge stigma and harmful narratives.',
      impact: 'Trained journalists and media actors to promote respectful, dignity-based public communication.',
      icon: <Activity className="h-6 w-6" />,
    },
    {
      title: 'International Conference on Disabilities',
      category: 'inclusion',
      tag: 'ENHANCE / Alliances',
      period: '2014–2015',
      desc: 'We served as a strategic partner and facilitator for a landmark international conference on intellectual and developmental disabilities in West Africa, supporting multi-sector engagement across education, health, livelihood, and policy conversations.',
      impact: 'Facilitated regional policy dialogue on disability-sensitive welfare systems.',
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      title: 'Orphanage Library and Literacy Initiatives',
      category: 'education',
      tag: 'BELONG / EMPOWER',
      period: '2016–2019',
      desc: 'We launched education enrichment initiatives, including a major library setup project at Home of God’s Grace Mission Orphanage and book donations at Agnus Dei Orphanage. We also conducted reading sessions to support long-term learning culture.',
      impact: 'Established reading libraries and delivered educational book donations for underserved learners.',
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: 'Train-the-Trainer Educational Workshop',
      category: 'education',
      tag: 'ENHANCE / Support',
      period: '2017',
      desc: 'We implemented intensive capacity-building workshops for grassroots instructors, non-formal educators, and care instructors, covering modern classroom management, child-centred teaching methodologies, and emotional support tracking models.',
      impact: 'Empowered grassroots instructors and care instructors with child-centred teaching models.',
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: 'COVID-19 Risk Communication Campaign',
      category: 'systems-strengthening',
      tag: 'ENHANCE / Public Health',
      period: '2020',
      desc: 'We responded to the public health crisis by deploying risk communication training frameworks for journalists and community communicators, supporting responsible reporting, reducing misinformation, and minimising panic.',
      impact: 'Trained media and community actors to manage risk communication and panic.',
      icon: <Activity className="h-6 w-6" />,
    },
    {
      title: 'Rebuild Calabar Initiative',
      category: 'systems-strengthening',
      tag: 'ENHANCE / Recovery',
      period: '2020',
      desc: 'We participated as a founding coalition partner in a post-crisis community recovery effort in Calabar, supporting coordination for local economic rebuilding, infrastructure rehabilitation, and community resilience.',
      impact: 'Supported multi-stakeholder coordination for post-crisis local rehabilitation in Cross River State.',
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      title: 'Systems Strengthening and Process Reform',
      category: 'systems-strengthening',
      tag: 'ENHANCE / Systems',
      period: '2021–Present',
      desc: 'We have focused on supporting informal care structures and community organisations to move toward more standardised, transparent, and audit-ready service models. This includes data collection, indicators, and impact measurement templates.',
      impact: 'Embedded standardised, transparent, and audit-ready data tracking systems in community organisations.',
      icon: <ShieldCheck className="h-6 w-6" />,
    },
    {
      title: 'Wider LANI Group Experience: IOM/MPRRSSA Returned Migrant Income-Generating Activities',
      category: 'migration',
      tag: 'EMPOWER / Reintegration',
      period: 'Wider Group',
      desc: 'Through our wider LANI Group institutional capacity, we contributed to migration and reintegration-focused work, including LANI Consulting’s engagement with the International Organization for Migration (IOM) on the MPRRSSA project, supporting the setting up of income-generating activities for returned migrants.',
      impact: 'Helped returned migrants establish viable livelihood activities and reduce re-migration risks.',
      icon: <HeartHandshake className="h-6 w-6" />,
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Animate grid list transitions on filter change
  useGSAP(() => {
    if (!gridRef.current) return;
    
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
          <span className="eyebrow">What We Do</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-lani-navy tracking-tight mt-3">
            Delivering Impactful & Sustainable Interventions
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mt-4">
            We focus on structured, evidence-informed interventions across child protection, social inclusion, quality education, systems strengthening, and migration support.
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
                  <span className="text-[10px] font-bold text-stone-400 bg-stone-50 px-2 py-1 rounded border border-stone-100">
                    {proj.period}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-lani-navy tracking-tight mb-2">
                  {proj.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {proj.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-stone-50 text-xs text-stone-500 mt-auto">
                <span className="block font-bold text-lani-navy uppercase tracking-wider text-[9px] mb-1">Impact Highlight</span>
                <p className="font-medium text-stone-600 leading-snug">{proj.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
