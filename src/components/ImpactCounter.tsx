import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
}

export default function ImpactCounter({ target, duration = 2, suffix = '', label, icon }: CounterProps) {
  const countRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!countRef.current) return;

    const obj = { val: 0 };
    
    gsap.to(obj, {
      val: target,
      duration: duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.innerText = Math.floor(obj.val).toLocaleString();
        }
      },
    });
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className="flex flex-col items-center p-6 text-center bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md hover:border-lani-primary/10 transition-all duration-300"
    >
      {icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lani-primary/10 text-lani-primary mb-4">
          {icon}
        </div>
      )}
      <div className="flex items-baseline font-heading text-4xl sm:text-5xl font-extrabold text-lani-navy tracking-tight">
        <span ref={countRef}>0</span>
        {suffix && <span className="text-lani-primary ml-0.5">{suffix}</span>}
      </div>
      <span className="mt-2 text-sm font-semibold text-stone-500 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
