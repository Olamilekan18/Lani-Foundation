import { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Sparkles, BookOpen } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { articlesData } from '../data/articles';

gsap.registerPlugin(useGSAP);

function renderTextWithBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-extrabold text-lani-navy">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

interface MarkdownBlock {
  type: 'paragraph' | 'heading' | 'bullet-list' | 'numbered-list' | 'pull-quote' | 'image';
  items: string[];
}

function parseMarkdown(content: string): MarkdownBlock[] {
  const lines = content.split('\n');
  const blocks: MarkdownBlock[] = [];
  let currentBlock: MarkdownBlock | null = null;
  
  for (let line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (currentBlock) {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      continue;
    }
    
    if (trimmed.startsWith('###')) {
      if (currentBlock) {
        blocks.push(currentBlock);
      }
      blocks.push({ type: 'heading', items: [trimmed.replace('###', '').trim()] });
      currentBlock = null;
    } else if (trimmed.startsWith('>')) {
      if (currentBlock) {
        blocks.push(currentBlock);
      }
      blocks.push({ type: 'pull-quote', items: [trimmed.replace(/^>\s*/, '').trim()] });
      currentBlock = null;
    } else if (trimmed.startsWith('![')) {
      const match = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (match) {
        if (currentBlock) {
          blocks.push(currentBlock);
        }
        blocks.push({ type: 'image', items: [match[1], match[2]] });
        currentBlock = null;
      } else {
        if (currentBlock && currentBlock.type !== 'paragraph') {
          blocks.push(currentBlock);
          currentBlock = null;
        }
        if (!currentBlock) {
          currentBlock = { type: 'paragraph', items: [] };
        }
        currentBlock.items.push(trimmed);
      }
    } else if (trimmed.startsWith('*')) {
      if (currentBlock && currentBlock.type !== 'bullet-list') {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      if (!currentBlock) {
        currentBlock = { type: 'bullet-list', items: [] };
      }
      currentBlock.items.push(trimmed.replace(/^\*\s*/, ''));
    } else if (/^\d+\.\s+/.test(trimmed)) {
      if (currentBlock && currentBlock.type !== 'numbered-list') {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      if (!currentBlock) {
        currentBlock = { type: 'numbered-list', items: [] };
      }
      currentBlock.items.push(trimmed.replace(/^\d+\.\s+/, ''));
    } else {
      if (currentBlock && currentBlock.type !== 'paragraph') {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      if (!currentBlock) {
        currentBlock = { type: 'paragraph', items: [] };
      }
      currentBlock.items.push(trimmed);
    }
  }
  
  if (currentBlock) {
    blocks.push(currentBlock);
  }
  
  return blocks;
}

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
          Back to Articles & Impact
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
      <div className="w-full max-h-[550px] overflow-hidden rounded-3xl bg-stone-50 mb-10 shadow-md flex justify-center">
        <img 
          src={article.image} 
          alt={article.title} 
          className="max-w-full max-h-[550px] h-auto w-auto object-contain"
        />
      </div>

      {/* Content layout */}
      <div className="prose prose-stone max-w-none text-stone-700 text-sm sm:text-base leading-relaxed flex flex-col gap-6 pr-2">
        {parseMarkdown(article.content).map((block, idx) => {
          switch (block.type) {
            case 'heading':
              return (
                <h2 key={idx} className="font-heading text-xl sm:text-2xl font-extrabold text-lani-navy mt-6 mb-2">
                  {renderTextWithBold(block.items[0])}
                </h2>
              );
            case 'bullet-list':
              return (
                <ul key={idx} className="list-disc pl-5 flex flex-col gap-2 text-stone-600 my-2 text-sm sm:text-base text-left">
                  {block.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      {renderTextWithBold(item)}
                    </li>
                  ))}
                </ul>
              );
            case 'numbered-list':
              return (
                <ol key={idx} className="list-decimal pl-5 flex flex-col gap-2 text-stone-600 my-2 text-sm sm:text-base text-left">
                  {block.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      {renderTextWithBold(item)}
                    </li>
                  ))}
                </ol>
              );
            case 'pull-quote':
              return (
                <div key={idx} className="my-10 px-8 py-10 border-l-4 border-lani-primary bg-stone-50 rounded-r-3xl relative overflow-hidden shadow-sm">
                  <div className="absolute -top-6 -left-2 text-stone-200/40 text-8xl font-serif select-none pointer-events-none">“</div>
                  <blockquote className="font-heading text-lg sm:text-xl font-bold italic text-lani-navy relative z-10 leading-relaxed text-left">
                    {renderTextWithBold(block.items[0])}
                  </blockquote>
                </div>
              );
            case 'image':
              return (
                <div key={idx} className="my-8 flex flex-col gap-3">
                  <div className="w-full overflow-hidden rounded-3xl bg-stone-50 border border-stone-200/40 shadow-sm max-h-[500px] flex justify-center">
                    <img 
                      src={block.items[1]} 
                      alt={block.items[0]} 
                      className="max-w-full max-h-[500px] h-auto w-auto object-contain"
                    />
                  </div>
                  {block.items[0] && (
                    <span className="text-xs text-stone-500 font-medium pl-2 text-center">
                      {block.items[0]}
                    </span>
                  )}
                </div>
              );
            case 'paragraph':
            default:
              return block.items.map((paragraphText, pIdx) => (
                <p key={`${idx}-${pIdx}`} className="leading-relaxed text-left">
                  {renderTextWithBold(paragraphText)}
                </p>
              ));
          }
        })}
      </div>

      {/* Video & Media Gallery */}
      {(article.video || (article.gallery && article.gallery.length > 0)) && (
        <div className="mt-12 pt-10 border-t border-stone-200/50">
          <h3 className="font-heading text-2xl font-black text-lani-navy mb-6">
            Media & Event Highlights
          </h3>
          
          <div className={`grid gap-8 ${article.video ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
            {/* Video Player Card */}
            {article.video && (
              <div className="flex flex-col gap-3">
                <div className="relative overflow-hidden rounded-3xl bg-stone-950 aspect-video shadow-premium border border-stone-200/80 group">
                  <video 
                    src={article.video} 
                    controls 
                    className="w-full h-full object-cover"
                    poster={article.image}
                  />
                </div>
                <span className="text-xs text-stone-500 font-medium pl-2">
                  Watch highlight coverage from the induction ceremony.
                </span>
              </div>
            )}

            {/* Gallery Images Card */}
            {article.gallery && article.gallery.length > 0 && (
              <div className="flex flex-col gap-3">
                <div className={`grid gap-4 h-full ${article.video ? 'grid-cols-1' : 'grid-cols-2'}`}>
                  {article.gallery.map((img, idx) => (
                    <div key={idx} className="relative overflow-hidden rounded-3xl bg-stone-100 aspect-video shadow-premium group border border-stone-200/80">
                      <img 
                        src={img} 
                        alt={`Event Highlight ${idx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-xs text-stone-500 font-medium pl-2">
                  {article.galleryDescription || "Photos from the event highlights."}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

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
