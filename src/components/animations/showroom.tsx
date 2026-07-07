"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveDown, Shield, Cpu, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Showroom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);
  
  // New references to handle the internal structural split
  const leftCasingRef = useRef<HTMLDivElement>(null);
  const rightCasingRef = useRef<HTMLDivElement>(null);
  const internalGalleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      // Simultaneous Timeline Actions: Open outer portal doors AND split the core hinge casing
      tl.to(leftDoorRef.current, { rotateY: -85, transformOrigin: "left center", opacity: 0.1, ease: "power1.inOut" }, 0)
        .to(rightDoorRef.current, { rotateY: 85, transformOrigin: "right center", opacity: 0.1, ease: "power1.inOut" }, 0)
        // Mechanics: Outer casings slide away outward to 100% of their width
        .to(leftCasingRef.current, { x: "-100%", ease: "power2.inOut" }, 0)
        .to(rightCasingRef.current, { x: "100%", ease: "power2.inOut" }, 0)
        // Reveal: Fade and scale up the hidden nested internal asset pictures
        .fromTo(internalGalleryRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, ease: "power2.inOut" }, 0.2);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-[#F4F5F6]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-1000">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />

        <div className="relative w-full max-w-6xl h-[65vh] flex items-center justify-between px-6 z-20">
          
          {/* Left Room Portal */}
          <div ref={leftDoorRef} className="hidden md:block w-[20%] h-full bg-gradient-to-br from-gray-300 to-gray-400 border-r border-gray-400 shadow-xl rounded-sm" />

          {/* --- THE MASTER KINETIC SPLIT SHOWCASE BOX --- */}
          <div className="w-full md:w-[50%] h-full bg-white border border-gray-200 shadow-2xl rounded-sm relative overflow-hidden p-6 flex flex-col justify-between">
            
            <div className="relative flex-grow bg-[#111827] rounded-sm overflow-hidden border border-gray-300">
              
              {/* INSIDE LAYER: Revealed Gallery of Multiple Hardware Perspectives */}
              <div ref={internalGalleryRef} className="absolute inset-0 p-3 grid grid-cols-3 gap-2 opacity-0 bg-slate-950">
                <div className="relative h-full border border-blue-900/50 rounded-xs overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=300&q=80" alt="Core Processing" className="w-full h-full object-cover mix-blend-luminosity" />
                  <span className="absolute bottom-1 left-1 bg-black/80 text-[7px] font-mono text-blue-400 px-1 rounded-xs">Core</span>
                </div>
                <div className="relative h-full border border-blue-900/50 rounded-xs overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=300&q=80" alt="CAD Specs" className="w-full h-full object-cover mix-blend-luminosity" />
                  <span className="absolute bottom-1 left-1 bg-black/80 text-[7px] font-mono text-blue-400 px-1 rounded-xs">Specs</span>
                </div>
                <div className="relative h-full border border-blue-900/50 rounded-xs overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=300&q=80" alt="Assembly" className="w-full h-full object-cover mix-blend-luminosity" />
                  <span className="absolute bottom-1 left-1 bg-black/80 text-[7px] font-mono text-blue-400 px-1 rounded-xs">Assembled</span>
                </div>
                <div className="col-span-3 text-center border-t border-blue-900/30 pt-1">
                  <p className="font-mono text-[8px] text-blue-400 tracking-widest">DRG LAB SHOWROOM KINETIC LINK INITIATED</p>
                </div>
              </div>

              {/* SLIDING CASING LEAF A (Left Side Cover) */}
              <div ref={leftCasingRef} className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden z-20 border-r border-black/20">
                <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" alt="Hinge" className="absolute top-0 left-0 h-full w-[200%] object-cover max-w-none" />
              </div>

              {/* SLIDING CASING LEAF B (Right Side Cover) */}
              <div ref={rightCasingRef} className="absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden z-20 border-l border-white/10">
                <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" alt="Hinge" className="absolute top-0 right-0 h-full w-[200%] object-cover max-w-none" style={{ right: 0 }} />
              </div>
            </div>

            {/* Bottom Text Metadata Details */}
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
              <div>
                <span className="font-mono text-[9px] font-bold text-[#0044FF] uppercase tracking-wider block">DRG SYSTEMS MATRIX</span>
                <h3 className="font-sans text-sm font-black text-[#1A1A1A] tracking-tight">Kinetic Showroom Module</h3>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center gap-1 text-[9px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  <Activity className="w-3 h-3" /> Live Sync
                </span>
              </div>
            </div>

          </div>

          {/* Right Room Portal */}
          <div ref={rightDoorRef} className="hidden md:block w-[20%] h-full bg-gradient-to-bl from-gray-300 to-gray-400 border-l border-gray-400 shadow-xl rounded-sm" />

        </div>

        {/* Informational Guidance Tag */}
        <div className="absolute bottom-8 flex flex-col items-center gap-1 font-mono text-[9px] text-gray-500 tracking-widest">
          <MoveDown className="w-3 h-3 text-[#0044FF] animate-bounce" />
          <span>SCROLL DOWN SLOWLY TO SEPARATE HINGE LEAVES</span>
        </div>
      </div>
    </div>
  );
}