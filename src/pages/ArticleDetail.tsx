import { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Sparkles, BookOpen } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { articlesData } from '../data/articles';

gsap.registerPlugin(useGSAP);

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = articlesData.find(art => art.id === id);

  const containerRef = useRef<HTMLDivElement>(null);
  const backBtnRef = useRef<HTMLAnchorElement>(null);

  // Redirect if not found
  useEffect(() => {
    if (!article) {
      navigate('/articles');
    }
  }, [article, navigate]);

  // Set document title for SEO
  useEffect(() => {
    if (article) {
      document.title = `${article.title} | LANI Foundation`;
    }
  }, [article]);

  // Page entry animations
  useGSAP(() => {
    if (!containerRef.current) return;
    
    const elements = containerRef.current.children;
    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' }
    );
  }, { scope: containerRef });

  if (!article) return null;

  return (
    <div ref={containerRef} className="mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:px-12 text-left">
      
      {/* Back button */}
      <div className="mb-8">
        <Link
          ref={backBtnRef}
          to="/articles"
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-lani-primary hover:text-lani-primary/80 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Articles
        </Link>
      </div>

      {/* Category and date details */}
      <div className="flex items-center gap-3.5 mb-4">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-lani-primary bg-lani-primary/10 px-3.5 py-1 rounded-full">
          {article.category}
        </span>
        <div className="flex items-center gap-4 text-stone-400 text-xs">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {article.readTime}
          </span>
        </div>
      </div>

      {/* Main Title */}
      <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-lani-navy leading-snug tracking-tight mb-8">
        {article.title}
      </h1>

      {/* Hero Image */}
      <div className="w-full h-[250px] sm:h-[400px] overflow-hidden rounded-3xl bg-stone-150 mb-10 shadow-md">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content layout */}
      <div className="prose prose-stone max-w-none text-stone-700 text-sm sm:text-base leading-relaxed flex flex-col gap-6 pr-2">
        {article.content.split('\n\n').map((paragraph, pIdx) => {
          const trimmed = paragraph.trim();
          if (!trimmed) return null;
          
          // Header markdown
          if (trimmed.startsWith('###')) {
            return (
              <h2 key={pIdx} className="font-heading text-xl sm:text-2xl font-extrabold text-lani-navy mt-6 mb-2">
                {trimmed.replace('###', '').trim()}
              </h2>
            );
          }
          
          // Numbered lists
          if (trimmed.includes('1. ') || trimmed.includes('2. ') || trimmed.includes('3. ')) {
            return (
              <div key={pIdx} className="pl-4 flex flex-col gap-2 my-2 border-l-2 border-lani-primary/30">
                {trimmed.split('\n').map((li, liIdx) => (
                  <p key={liIdx} className="text-stone-600 text-sm sm:text-base">
                    {li.trim()}
                  </p>
                ))}
              </div>
            );
          }

          // Bullet points
          if (trimmed.startsWith('*')) {
            return (
              <ul key={pIdx} className="list-disc pl-5 flex flex-col gap-2 text-stone-600 my-2 text-sm sm:text-base">
                {trimmed.split('\n').map((li, liIdx) => (
                  <li key={liIdx}>
                    {li.replace('*', '').trim()}
                  </li>
                ))}
              </ul>
            );
          }

          return (
            <p key={pIdx} className="leading-relaxed">
              {trimmed}
            </p>
          );
        })}
      </div>

      {/* Footer support card */}
      <div className="border-t border-stone-100 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-stone-400 text-xs font-semibold">
          <Sparkles className="h-4 w-4 text-lani-gold" />
          <span>Empowering communities, sustaining futures.</span>
        </div>
        
        <Link 
          to="/get-involved"
          className="btn-primary py-3 px-8 text-xs justify-center w-full sm:w-auto flex items-center gap-2"
        >
          <BookOpen className="h-4 w-4" />
          Support Our Thematic Focus
        </Link>
      </div>

    </div>
  );
}
