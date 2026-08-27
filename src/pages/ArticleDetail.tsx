import { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Sparkles, BookOpen, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
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

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const backBtnRef = useRef<HTMLAnchorElement>(null);

  // Collect all unique images for this article
  const allImages = article
    ? Array.from(new Set([article.image, ...(article.gallery || [])]))
    : [];

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

  // Keyboard navigation & lock scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex(prev => (prev !== null ? (prev - 1 + allImages.length) % allImages.length : null));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex(prev => (prev !== null ? (prev + 1) % allImages.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxIndex, allImages.length]);

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

      {/* Hero Image - Clickable for Full View */}
      <div 
        onClick={() => setLightboxIndex(0)}
        className="w-full h-[320px] sm:h-[460px] overflow-hidden rounded-3xl bg-stone-100 mb-10 shadow-md relative group cursor-zoom-in flex justify-center items-center"
      >
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-stone-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-stone-900/80 backdrop-blur text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border border-white/20">
            <Maximize2 className="h-3.5 w-3.5 text-lani-gold" />
            Click to view in full
          </span>
        </div>
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
            case 'image': {
              const imgUrl = block.items[1];
              const imgIdx = allImages.indexOf(imgUrl) !== -1 ? allImages.indexOf(imgUrl) : 0;
              return (
                <div key={idx} className="my-8 flex flex-col gap-3">
                  <div 
                    onClick={() => setLightboxIndex(imgIdx)}
                    className="w-full overflow-hidden rounded-3xl bg-stone-50 border border-stone-200/40 shadow-sm max-h-[520px] flex justify-center items-center cursor-zoom-in group relative"
                  >
                    <img 
                      src={imgUrl} 
                      alt={block.items[0]} 
                      className="max-w-full max-h-[520px] h-auto w-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-stone-900/80 backdrop-blur text-white text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-white/20">
                        <Maximize2 className="h-3 w-3 text-lani-gold" />
                        View Full
                      </span>
                    </div>
                  </div>
                  {block.items[0] && (
                    <span className="text-xs text-stone-500 font-medium pl-2 text-center">
                      {block.items[0]}
                    </span>
                  )}
                </div>
              );
            }
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
          
          {article.video ? (
            <div className="grid gap-8 md:grid-cols-2">
              {/* Video Player Card */}
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
                  {article.videoCaption || 'Watch video coverage.'}
                </span>
              </div>

              {/* Gallery Images Card (when paired with video) */}
              {article.gallery && article.gallery.length > 0 && (
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                    {article.gallery.map((img, idx) => {
                      const imgIdx = allImages.indexOf(img) !== -1 ? allImages.indexOf(img) : idx;
                      return (
                        <div 
                          key={idx} 
                          onClick={() => setLightboxIndex(imgIdx)}
                          className="relative overflow-hidden rounded-3xl bg-stone-100 aspect-video shadow-premium group border border-stone-200/80 cursor-zoom-in"
                        >
                          <img 
                            src={img} 
                            alt={`Event Highlight ${idx + 1}`} 
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md border border-white/20">
                              <Maximize2 className="h-3 w-3 text-lani-gold" />
                              View Full
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <span className="text-xs text-stone-500 font-medium pl-2">
                    {article.galleryCaption || article.galleryDescription || 'Event and outreach photo highlights.'}
                  </span>
                </div>
              )}
            </div>
          ) : (
            /* Standalone Full-Width Gallery */
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {article.gallery?.map((img, idx) => {
                  const imgIdx = allImages.indexOf(img) !== -1 ? allImages.indexOf(img) : idx;
                  return (
                    <div 
                      key={idx} 
                      onClick={() => setLightboxIndex(imgIdx)}
                      className="relative overflow-hidden rounded-2xl bg-stone-100 aspect-[4/3] shadow-premium group border border-stone-200/80 cursor-zoom-in"
                    >
                      <img 
                        src={img} 
                        alt={`Outreach Highlight ${idx + 1}`} 
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md border border-white/20">
                          <Maximize2 className="h-3 w-3 text-lani-gold" />
                          View Full
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <span className="text-xs text-stone-500 font-medium pl-2 mt-2">
                {article.galleryCaption || article.galleryDescription || 'Event and outreach photo highlights. (Click any photo to view full resolution)'}
              </span>
            </div>
          )}
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 select-none"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div 
            className="flex items-center justify-between w-full max-w-7xl mx-auto z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 text-white">
              <span className="text-xs font-mono font-bold bg-white/10 px-3 py-1.5 rounded-full border border-white/10 text-stone-200">
                {lightboxIndex + 1} / {allImages.length}
              </span>
              <span className="text-xs text-stone-300 font-medium hidden sm:inline-block max-w-md truncate">
                {article.title}
              </span>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10 flex items-center justify-center"
              aria-label="Close fullscreen view"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Main Stage */}
          <div 
            className="relative flex-1 flex items-center justify-center my-2 max-w-7xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev button */}
            {allImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(prev => (prev !== null ? (prev - 1 + allImages.length) % allImages.length : 0));
                }}
                className="absolute left-2 sm:left-4 z-10 p-3 sm:p-4 rounded-full bg-stone-900/80 hover:bg-white/20 text-white transition-all border border-white/10 shadow-lg backdrop-blur"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Current Full Image */}
            <div className="max-h-[75vh] max-w-full flex items-center justify-center p-2">
              <img
                src={allImages[lightboxIndex]}
                alt={`${article.title} - photo ${lightboxIndex + 1}`}
                className="max-h-[75vh] max-w-full object-contain rounded-2xl shadow-2xl transition-all duration-300"
              />
            </div>

            {/* Next button */}
            {allImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(prev => (prev !== null ? (prev + 1) % allImages.length : 0));
                }}
                className="absolute right-2 sm:right-4 z-10 p-3 sm:p-4 rounded-full bg-stone-900/80 hover:bg-white/20 text-white transition-all border border-white/10 shadow-lg backdrop-blur"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Bottom Thumbnails */}
          {allImages.length > 1 && (
            <div 
              className="w-full max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-2 px-4 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all ${
                    lightboxIndex === idx
                      ? 'border-lani-primary ring-2 ring-lani-primary/40 scale-105 opacity-100'
                      : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          )}
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
