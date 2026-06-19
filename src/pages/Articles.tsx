import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Filter, Newspaper } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { articlesData } from '../data/articles';

gsap.registerPlugin(useGSAP);

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
            Explore stories of impact, policy briefs, NGO capacity research, and development studies from our thematic focus areas in local communities.
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
                  <Link to={`/articles/${art.id}`}>
                    <img 
                      src={art.image} 
                      alt={art.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
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

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-lani-navy leading-snug mb-3 hover:text-lani-primary transition-colors cursor-pointer">
                    <Link to={`/articles/${art.id}`}>{art.title}</Link>
                  </h3>
                  
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:px-8 sm:pb-8 pt-0 text-left border-t border-stone-100 mt-4 flex items-center justify-between">
                <Link
                  to={`/articles/${art.id}`}
                  className="text-xs font-bold text-lani-primary hover:text-lani-primary/80 transition-colors flex items-center gap-1.5"
                >
                  Read Full Article
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
