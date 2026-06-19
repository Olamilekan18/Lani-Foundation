import { useState, useRef, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, X, Sparkles, Filter, Newspaper } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: 'Education' | 'Systems & Capacity' | 'Livelihoods' | 'Child Protection';
  date: string;
  readTime: string;
  image: string;
  content: string;
}

const articlesData: Article[] = [
  {
    id: 'connecting-the-campus',
    title: 'Connecting the Campus: Building Digital Bridges for Rural Communities',
    excerpt: "An inside look into LANI's computer literacy and hardware setup program helping students in remote communities transition to digital learning.",
    category: 'Education',
    date: 'June 12, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    content: `
      Digital exclusion remains one of the largest hurdles to educational development in rural West African public schools. While urban centers thrive under digital infrastructure upgrades, thousands of children in outlying communities learn about computers solely from blackboard drawings.
      
      To bridge this divide, the LANI Foundation initiated the "Connecting the Campus" project. Over the past year, we have established three digital training hubs, donated over 60 laptops, and implemented a tailored digital literacy curriculum for underserved public schools.
      
      ### Impact Highlights
      * **60+ High-Performance Laptops** deployed to rural schools.
      * **1,200+ Students** receiving hands-on digital skills training weekly.
      * **12 Caregivers & Educators** certified as technology mentors to sustain local knowledge transfer.
      
      By introducing solar-powered learning hubs and partnering with regional education boards, LANI Foundation ensures that children, regardless of geographic constraints, can access modern research tools, develop vocational technology capabilities, and participate in the digital economy.
    `
  },
  {
    id: 'beyond-balance-sheet',
    title: 'Beyond the Balance Sheet: The True Value of Systems Capacity in Local NGOs',
    excerpt: 'Why professional auditing models, template designs, and standard operating procedures are key to long-term community development success.',
    category: 'Systems & Capacity',
    date: 'May 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    content: `
      In the development sector, success is frequently measured by immediate deliverables: the number of food packs distributed, wells dug, or scholarships awarded. While these inputs are vital, the long-term impact of community organizations is frequently determined by their systems capacity.
      
      LANI Foundation's "Systems & Capacity Strengthening" initiative focuses on training smaller, community-based organisations (CBOs) to adopt audit-ready practices. By refining internal governance templates, operational manuals, and financial trackers, we help local NGOs lock in funding and expand operations.
      
      ### The Pillars of NGO Systemization
      1. **Standardized Operations**: Creating replicable manuals for programs and finance.
      2. **Audit Readiness**: Preparing templates that align with international donor compliance requirements.
      3. **Transparent Reporting**: Designing data dashboards that keep stakeholder confidence high.
      
      When a local grassroots initiative transitions to a formalized, structured model, its capacity to manage funds increases by over 40%, paving the way for durable, long-term community partnerships.
    `
  },
  {
    id: 'pathways-home-migrants',
    title: 'Pathways Home: Successful Livelihood Integration for Returned Migrants',
    excerpt: 'How offering vocational startup grants, carpentry equipment, and micro-grants creates sustainable independence for migrants resettling in West Africa.',
    category: 'Livelihoods',
    date: 'April 15, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1464234471565-33b517abc292?q=80&w=800&auto=format&fit=crop',
    content: `
      Resettling after returning from forced migration is an emotional and economic journey. Without stable pathways to livelihood creation, returned migrants face severe vulnerability and pressure to embark on unsafe journeys again.
      
      LANI Foundation's Social Inclusion program focuses on structured economic reintegration. By matching returned migrants with vocational experts and providing customized setup grants, we help individuals establish sustainable livelihoods in trades ranging from climate-smart agriculture to wood crafts.
      
      ### Vocational Integration Results
      * **Startup Grants Provided**: Micro-capital kits that cover tool purchases and rent for workshops.
      * **Business Mentorship**: 6 months of coaching on marketing, supply chain, and local finance.
      * **Cooperative Building**: Encouraging returnees to pool resources for shared workshops to lower overhead costs.
      
      Economic security is the ultimate shield against irregular migration, and by funding local setups, LANI Foundation empowers young adults to build stable futures in their home communities.
    `
  },
  {
    id: 'strengthening-the-shield',
    title: 'Strengthening the Shield: Community-Led Child Protection Audits',
    excerpt: "How educating community structures and implementing safety audits inside local children's care homes is actively saving vulnerable lives.",
    category: 'Child Protection',
    date: 'March 20, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
    content: `
      Child protection is not simply a legislative concept; it requires real-world physical and operational shields inside children's care centers, schools, and foster systems.
      
      LANI Foundation's Child Protection division operates direct interventions to raise safety standards in care homes. This includes performing complete safety mappings, conducting first-aid certifications for caregivers, and funding the installation of safety kits.
      
      ### Core Program Components
      * **Emergency Safety Mapping**: Helping care homes establish clearly visible evacuation maps and fire safety systems.
      * **Caregiver Safeguarding Workshops**: Equipping staff with child rights guidelines, trauma-informed support practices, and emotional safety skills.
      * **Continuous Auditing**: Semi-annual reviews to identify and address security/sanitation risks inside community spaces.
      
      Empowering communities with localized training transforms protection protocols from dry text into active, life-saving practices.
    `
  }
];

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Set document title for SEO
  useEffect(() => {
    document.title = "Articles & News | LANI Foundation";
  }, []);

  // Filter categories list
  const categories = ['All', 'Education', 'Systems & Capacity', 'Livelihoods', 'Child Protection'];

  const filteredArticles = selectedCategory === 'All'
    ? articlesData
    : articlesData.filter(art => art.category === selectedCategory);

  // Grid fade-in transition on filter change
  useGSAP(() => {
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
    );
  }, { dependencies: [selectedCategory], scope: gridRef });

  // Modal expand animations
  useGSAP(() => {
    if (activeArticle && modalRef.current && modalContentRef.current) {
      gsap.to(modalRef.current, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.3,
      });
      gsap.fromTo(
        modalContentRef.current,
        { scale: 0.9, y: 40, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    } else if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.3,
      });
    }
  }, { dependencies: [activeArticle], scope: modalRef });

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      
      {/* 1. HERO HEADER */}
      <section className="bg-stone-50 py-16 sm:py-20 border-b border-stone-200/30 text-left">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <span className="eyebrow flex items-center gap-1.5">
            <Newspaper className="h-3.5 w-3.5" />
            Insights & Impact
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-lani-navy tracking-tight mt-3">
            Lani Articles & Research
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mt-4">
            Explore stories of impact, policy briefs, NGO capacity research, and development studies from our initiatives in local communities.
          </p>
        </div>
      </section>

      {/* 2. CATEGORIES FILTER BAR */}
      <section className="bg-white border-b border-stone-100 py-6 text-left">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-stone-500 text-sm font-semibold">
            <Filter className="h-4 w-4 text-lani-primary" />
            <span>Filter Category:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                  selectedCategory === cat
                    ? 'bg-lani-primary border-lani-primary text-white shadow-sm'
                    : 'bg-stone-50 hover:bg-stone-100/60 border-stone-200/60 text-stone-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ARTICLES GRID */}
      <section className="section py-16 bg-stone-50/20">
        <div 
          ref={gridRef} 
          className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 grid gap-8 md:grid-cols-2"
        >
          {filteredArticles.map(art => (
            <article 
              key={art.id} 
              className="bg-white rounded-3xl border border-stone-150 overflow-hidden shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur border border-stone-200/40 text-lani-navy text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {art.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6 sm:p-8 text-left">
                  <div className="flex items-center gap-4 text-stone-400 text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-lani-navy leading-snug mb-3 hover:text-lani-primary transition-colors cursor-pointer" onClick={() => setActiveArticle(art)}>
                    {art.title}
                  </h3>
                  
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:px-8 sm:pb-8 pt-0 text-left border-t border-stone-100 mt-4 flex items-center justify-between">
                <button
                  onClick={() => setActiveArticle(art)}
                  className="text-xs font-bold text-lani-primary hover:text-lani-primary/80 transition-colors flex items-center gap-1.5"
                >
                  Read Full Article
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. DETAIL READING DIALOG (GSAP CONTROLLED OVERLAY) */}
      <div 
        ref={modalRef}
        style={{ opacity: 0, pointerEvents: 'none' }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
      >
        {/* Modal Outer backdrop close click */}
        <div className="absolute inset-0" onClick={() => setActiveArticle(null)} />

        <div 
          ref={modalContentRef}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 sm:p-10 bg-white border border-stone-100 rounded-3xl shadow-2xl flex flex-col z-10"
        >
          {activeArticle && (
            <>
              {/* Header metadata */}
              <div className="flex items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-lani-primary bg-lani-primary/10 px-3 py-1 rounded-full">
                    {activeArticle.category}
                  </span>
                  <div className="flex items-center gap-4 text-stone-400 text-xs mt-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {activeArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {activeArticle.readTime}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="h-8 w-8 flex items-center justify-center rounded-lg border border-stone-200 hover:bg-stone-50 text-stone-500 hover:text-stone-700 transition-colors"
                  aria-label="Close article"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Title */}
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-lani-navy leading-snug text-left mb-6">
                {activeArticle.title}
              </h2>

              {/* Hero Image inside */}
              <div className="w-full h-64 sm:h-80 overflow-hidden rounded-2xl bg-stone-150 mb-8 shadow-sm">
                <img 
                  src={activeArticle.image} 
                  alt={activeArticle.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rich text article content */}
              <div className="text-stone-700 text-sm sm:text-base leading-relaxed text-left flex flex-col gap-5 pr-2">
                {activeArticle.content.split('\n\n').map((paragraph, pIdx) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;
                  
                  // Check if header markdown
                  if (trimmed.startsWith('###')) {
                    return (
                      <h3 key={pIdx} className="font-heading text-lg sm:text-xl font-bold text-lani-navy mt-4 mb-1">
                        {trimmed.replace('###', '').trim()}
                      </h3>
                    );
                  }
                  
                  // Check if numbered list item
                  if (trimmed.includes('1. ') || trimmed.includes('2. ') || trimmed.includes('3. ')) {
                    return (
                      <div key={pIdx} className="pl-4 flex flex-col gap-2 my-2 border-l-2 border-lani-primary/30">
                        {trimmed.split('\n').map((li, liIdx) => (
                          <p key={liIdx} className="text-stone-600 text-sm">
                            {li.trim()}
                          </p>
                        ))}
                      </div>
                    );
                  }

                  // Check if list item markdown
                  if (trimmed.startsWith('*')) {
                    return (
                      <ul key={pIdx} className="list-disc pl-5 flex flex-col gap-1.5 text-stone-600 my-2 text-sm sm:text-base">
                        {trimmed.split('\n').map((li, liIdx) => (
                          <li key={liIdx}>
                            {li.replace('*', '').trim()}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  return (
                    <p key={pIdx}>
                      {trimmed}
                    </p>
                  );
                })}
              </div>

              <div className="border-t border-stone-100 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-stone-400 text-xs font-semibold">
                  <Sparkles className="h-4 w-4 text-lani-gold" />
                  <span>Empowering communities, sustaining futures.</span>
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="btn-primary py-2.5 px-6 text-xs justify-center w-full sm:w-auto"
                >
                  Close Article
                </button>
              </div>
            </>
          )}
        </div>
      </div>

    </div>
  );
}
