"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveDown, ShieldCheck, Crosshair, Cpu, Maximize2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Showroom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);
  const masterHingeRef = useRef<HTMLDivElement>(null);
  const leftCasingRef = useRef<HTMLDivElement>(null);
  const rightCasingRef = useRef<HTMLDivElement>(null);
  const internalGalleryRef = useRef<HTMLDivElement>(null);
  const centerPinRef = useRef<HTMLDivElement>(null);
  
  // New Refs for the overlay telemetries
  const telemetryLeftRef = useRef<HTMLDivElement>(null);
  const telemetryRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        }
      });

      // STAGE 1: Spin the hinge unit
      tl.to(masterHingeRef.current, {
        rotateY: 180,
        ease: "power1.inOut",
        duration: 1
      })
      // STAGE 2: Split the casing, rotate ambient doors, and fade out the center line pin
      .to(leftDoorRef.current, { rotateY: -90, transformOrigin: "left center", opacity: 0.15, ease: "power2.inOut" }, 1)
      .to(rightDoorRef.current, { rotateY: 90, transformOrigin: "right center", opacity: 0.15, ease: "power2.inOut" }, 1)
      .to(leftCasingRef.current, { x: "-105%", ease: "power2.inOut", duration: 1.5 }, 1)
      .to(rightCasingRef.current, { x: "105%", ease: "power2.inOut", duration: 1.5 }, 1)
      .to(centerPinRef.current, { opacity: 0, scaleY: 0, ease: "power2.inOut", duration: 0.5 }, 1)
      
      // NEW: Slide out the digital measurement labels alongside the leaves to fill the empty space
      .to(telemetryLeftRef.current, { x: "-60px", opacity: 1, ease: "power2.out" }, 1.1)
      .to(telemetryRightRef.current, { x: "60px", opacity: 1, ease: "power2.out" }, 1.1)
      
      // STAGE 3: Bring forward the full-screen gallery cleanly
      .fromTo(internalGalleryRef.current, 
        { opacity: 0, scale: 0.98 }, 
        { opacity: 1, scale: 1, ease: "power3.out", duration: 1 }, 
        1.2
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-[220vh] bg-[#111622]">
      <div className="h-screen w-full flex items-center justify-center overflow-hidden perspective-1000 relative">
        
        {/* Technical Structural CAD Blueprint Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,68,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,68,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Diagonal Technical Cross-Lines to fill empty negative space */}
        <div className="absolute w-[150%] h-[1px] bg-white/5 rotate-12 pointer-events-none" />
        <div className="absolute w-[150%] h-[1px] bg-white/5 -rotate-12 pointer-events-none" />

        {/* --- DYNAMIC TELEMETRY OVERLAYS (Fills the empty look during mid-scroll) --- */}
        <div ref={telemetryLeftRef} className="absolute left-[20%] top-[25%] opacity-0 z-20 pointer-events-none font-mono text-[10px] text-blue-400/80 bg-blue-950/30 border border-blue-500/20 p-3 backdrop-blur-xs hidden md:block space-y-1">
          <div className="flex items-center gap-1.5"><Crosshair className="w-3 h-3 text-[#0044FF]" /> <span>SYS_CALIBRATION: ACTIVE</span></div>
          <p>TOLERANCE: ±0.15mm</p>
          <p>AXIS_GAP: <span className="text-white font-bold animate-pulse">+520mm</span></p>
        </div>

        <div ref={telemetryRightRef} className="absolute right-[20%] bottom-[25%] opacity-0 z-20 pointer-events-none font-mono text-[10px] text-blue-400/80 bg-blue-950/30 border border-blue-500/20 p-3 backdrop-blur-xs hidden md:block space-y-1">
          <div className="flex items-center gap-1.5"><Cpu className="w-3 h-3 text-[#0044FF]" /> <span>STRESS_MATRIX: COMPILING</span></div>
          <p>LOAD_LIMIT: 160KG</p>
          <p>MATERIAL: SUS316 STEEL</p>
        </div>

        {/* --- FULL SCREEN REVEAL LAYERS --- */}
        <div 
          ref={internalGalleryRef} 
          className="absolute inset-0 w-full h-full z-10 opacity-0 bg-gradient-to-b from-[#111827] to-[#0F172A] p-8 lg:p-16 flex flex-col justify-between"
        >
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-[#0044FF] tracking-widest uppercase block font-bold">DRG Manufacturing Blueprint Core</span>
              <h2 className="text-xl lg:text-3xl font-black text-white tracking-tight mt-0.5">X-Ray Structural Analysis</h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-3 py-1">
              <ShieldCheck className="w-4 h-4" /> PASS // GRADE 4 VALIDATED
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto h-[55vh] max-w-7xl mx-auto w-full pointer-events-auto">
            <div className="relative h-full bg-slate-900 border border-white/5 rounded-xs overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=800&q=80" alt="Core Micro Bearings" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent p-4 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-[#0044FF] uppercase font-bold">Section A-A</span>
                <h4 className="text-sm font-bold text-white mt-0.5">Quad Anti-Friction Bearing Assembly</h4>
              </div>
            </div>

            <div className="relative h-full bg-slate-900 border border-white/5 rounded-xs overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80" alt="CNC Dimension Layout" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent p-4 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-[#0044FF] uppercase font-bold">Section B-C</span>
                <h4 className="text-sm font-bold text-white mt-0.5">±0.15mm CNC Machining Blueprint</h4>
              </div>
            </div>

            <div className="relative h-full bg-slate-900 border border-white/5 rounded-xs overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80" alt="Architectural Application View" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent p-4 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-[#0044FF] uppercase font-bold">Section D-D</span>
                <h4 className="text-sm font-bold text-white mt-0.5">Heavy Load On-Site Structural Installation</h4>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 border-t border-white/10 pt-4">
            <p>DRG HARDWARE INTERNATIONAL SPECIFICATION ARCHIVE v4.0</p>
            <p className="text-[#0044FF]">SYSTEM STATUS: ACTIVE</p>
          </div>
        </div>

        {/* --- FRONT LAYER: HINGE LEAVES & LASER-ETCHED PORTALS --- */}
        <div className="relative w-full h-full flex items-center justify-between px-12 z-20 pointer-events-none">
          {/* Enhanced Side Column with Machined Laser Details */}
          <div ref={leftDoorRef} className="hidden md:flex w-[12%] h-[65vh] bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-700 shadow-2xl items-center justify-center p-2 relative">
            <div className="absolute inset-2 border border-dashed border-white/5 pointer-events-none" />
            <span className="font-mono text-[8px] text-white/20 uppercase tracking-widest [writing-mode:vertical-lr]">DRG_FRAME_L</span>
          </div>

          <div ref={masterHingeRef} className="w-full md:w-[65%] h-[70vh] relative max-w-4xl bg-transparent flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
            
            <div ref={leftCasingRef} className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden border-r border-neutral-900 shadow-2xl bg-white" style={{ backfaceVisibility: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80" alt="DRG Leaf L" className="absolute top-0 left-0 h-full w-[200%] object-cover max-w-none" />
              <div className="absolute top-6 left-6 text-[#1A1A1A] font-mono text-[9px] tracking-widest font-bold border border-black/15 px-2 py-0.5 bg-white/80">
                DRG // AXIS_L
              </div>
            </div>

            <div ref={rightCasingRef} className="absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden border-l border-neutral-900 shadow-2xl bg-white" style={{ backfaceVisibility: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80" alt="DRG Leaf R" className="absolute top-0 right-0 h-full w-[200%] object-cover max-w-none" style={{ right: 0 }} />
              <div className="absolute bottom-6 right-6 text-[#1A1A1A] font-mono text-[9px] tracking-widest font-bold border border-black/15 px-2 py-0.5 bg-white/80">
                DRG // AXIS_R
              </div>
            </div>

            <div ref={centerPinRef} className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-2 bg-gradient-to-r from-neutral-600 via-neutral-300 to-neutral-800 z-30 shadow-xl origin-center" />
          </div>

          {/* Enhanced Right Column with Machined Laser Details */}
          <div ref={rightDoorRef} className="hidden md:flex w-[12%] h-[65vh] bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-700 shadow-2xl items-center justify-center p-2 relative">
            <div className="absolute inset-2 border border-dashed border-white/5 pointer-events-none" />
            <span className="font-mono text-[8px] text-white/20 uppercase tracking-widest [writing-mode:vertical-lr]">DRG_FRAME_R</span>
          </div>
        </div>

        <div className="absolute bottom-8 flex flex-col items-center gap-1 font-mono text-[9px] text-gray-400 tracking-[0.25em] z-40 bg-neutral-900/80 px-4 py-2 border border-white/5 rounded-full">
          <MoveDown className="w-3.5 h-3.5 text-[#0044FF] animate-bounce" />
          <span>SCROLL: ENGAGING 3D ROTATION & EXPANSION REVEAL</span>
        </div>
      </div>
    </div>
  );
}