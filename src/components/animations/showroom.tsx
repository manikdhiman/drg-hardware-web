"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveDown, ShieldCheck, Crosshair, Binary } from "lucide-react";

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
          pinSpacing: true, // Forces clear documentation boundary computation
          invalidateOnRefresh: true,
        }
      });

      // STAGE 1: Spin the hinge
      tl.to(masterHingeRef.current, {
        rotateY: 180,
        ease: "power1.inOut",
        duration: 1
      })
      // STAGE 2: Split leaves and dissolve central pin line
      .to(leftDoorRef.current, { rotateY: -90, transformOrigin: "left center", opacity: 0.15, ease: "power2.inOut" }, 1)
      .to(rightDoorRef.current, { rotateY: 90, transformOrigin: "right center", opacity: 0.15, ease: "power2.inOut" }, 1)
      .to(leftCasingRef.current, { x: "-105%", ease: "power2.inOut", duration: 1.5 }, 1)
      .to(rightCasingRef.current, { x: "105%", ease: "power2.inOut", duration: 1.5 }, 1)
      .to(centerPinRef.current, { opacity: 0, scaleY: 0, ease: "power2.inOut", duration: 0.5 }, 1)
      
      .to(telemetryLeftRef.current, { x: "-30px", opacity: 1, ease: "power1.out" }, 1.05)
      .to(telemetryRightRef.current, { x: "30px", opacity: 1, ease: "power1.out" }, 1.05)
      
      // STAGE 3: Bring forward the full-screen gallery early so it fills the screen perfectly
      .fromTo(internalGalleryRef.current, 
        { opacity: 0, scale: 0.97 }, 
        { opacity: 1, scale: 1, ease: "power2.out", duration: 1.2 }, 
        1.05
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // Tightened height parameter to prevent trailing blank space gaps on the page stack
    <div ref={containerRef} className="relative h-[200vh] bg-[#111317] w-full">
      <div className="h-screen w-full flex items-center justify-center overflow-hidden perspective-1000 relative">
        
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="absolute w-[160%] h-[1px] bg-white/5 rotate-[15deg] pointer-events-none" />
        <div className="absolute w-[160%] h-[1px] bg-white/5 -rotate-[15deg] pointer-events-none" />

        {/* Telemetry Labels */}
        <div ref={telemetryLeftRef} className="absolute left-[18%] top-[28%] opacity-0 z-20 pointer-events-none font-mono text-[10px] text-gray-400 bg-[#1A1D24]/80 border border-white/10 p-4 backdrop-blur-md hidden md:block space-y-1 shadow-2xl rounded-xs">
          <div className="flex items-center gap-1.5 border-b border-white/5 pb-1 mb-1"><Crosshair className="w-3 h-3 text-gray-300" /> <span className="text-white font-bold">CNC_AXIS_L: LOCKED</span></div>
          <p>SPEC LIMIT: ±0.15mm COMPLIANT</p>
          <p>KINETIC CLEARANCE: <span className="text-gray-300 font-bold animate-pulse">TRUE HARDWARE FIT</span></p>
        </div>

        <div ref={telemetryRightRef} className="absolute right-[18%] bottom-[28%] opacity-0 z-20 pointer-events-none font-mono text-[10px] text-gray-400 bg-[#1A1D24]/80 border border-white/10 p-4 backdrop-blur-md hidden md:block space-y-1 shadow-2xl rounded-xs">
          <div className="flex items-center gap-1.5 border-b border-white/5 pb-1 mb-1"><Binary className="w-3 h-3 text-gray-300" /> <span className="text-white font-bold">METRIC MATRIX: OK</span></div>
          <p>MATERIAL BASE: SUS316 STAINLESS</p>
          <p>LOAD PARAMETER: <span className="text-emerald-400 font-bold">160KG CAPACITY</span></p>
        </div>

        {/* --- REVEAL LAYER --- */}
        <div 
          ref={internalGalleryRef} 
          className="absolute inset-0 w-full h-full z-10 opacity-0 bg-gradient-to-b from-[#16181D] to-[#0E1013] p-8 lg:p-16 flex flex-col justify-between"
        >
          <div className="flex justify-between items-center border-b border-white/5 pb-4">
            <div>
              <span className="text-xs font-mono text-gray-400 tracking-[0.2em] uppercase block font-bold">DRG AUTOMATED PRODUCTION BLUEPRINT</span>
              <h2 className="text-xl lg:text-3xl font-black text-white tracking-tight mt-0.5">High-Precision Hardware Layout</h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-900/40 px-3 py-1 rounded-xs font-bold">
              <ShieldCheck className="w-4 h-4" /> LAB PASS // CE GRADE 4
            </div>
          </div>

          {/* Symmetrical Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto h-[55vh] max-w-7xl mx-auto w-full pointer-events-auto">
            <div className="relative h-full bg-[#1E222B] border border-white/5 rounded-xs overflow-hidden group shadow-lg">
              <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=800&q=80" alt="Core Processing Bearings" className="w-full h-full object-cover filter brightness-90 grayscale hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1013] via-[#0E1013]/20 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[9px] font-mono text-gray-400 uppercase font-bold tracking-widest">Section A-A // Core Link</span>
                <h4 className="text-sm font-bold text-white mt-0.5 tracking-tight">Quad Anti-Friction Bearing Assembly</h4>
              </div>
            </div>

            <div className="relative h-full bg-[#1E222B] border border-white/5 rounded-xs overflow-hidden group shadow-lg">
              <img src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80" alt="CNC Machining Specs" className="w-full h-full object-cover filter brightness-90 grayscale hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1013] via-[#0E1013]/20 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[9px] font-mono text-gray-400 uppercase font-bold tracking-widest">Section B-C // Technical</span>
                <h4 className="text-sm font-bold text-white mt-0.5 tracking-tight">±0.15mm Symmetrical CNC Blueprints</h4>
              </div>
            </div>

            <div className="relative h-full bg-[#1E222B] border border-white/5 rounded-xs overflow-hidden group shadow-lg">
              <img src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80" alt="On Site Architectural Hinge Application" className="w-full h-full object-cover filter brightness-90 grayscale hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1013] via-[#0E1013]/20 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[9px] font-mono text-gray-400 uppercase font-bold tracking-widest">Section D-D // Installation</span>
                <h4 className="text-sm font-bold text-white mt-0.5 tracking-tight">Heavy Load Architectural Application</h4>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 border-t border-white/5 pt-4">
            <p>DRG HARDWARE INTERNATIONAL INDUSTRIAL TESTING DIRECTIVE v4.0</p>
            <p className="text-gray-400 uppercase font-bold tracking-wider">System Status: Symmetrical Link Match</p>
          </div>
        </div>

        {/* --- FRONT LEAF COVERS --- */}
        <div className="relative w-full h-full flex items-center justify-between px-12 z-20 pointer-events-none">
          <div ref={leftDoorRef} className="hidden md:flex w-[12%] h-[65vh] bg-gradient-to-b from-[#22262F] to-[#16181E] border border-white/5 shadow-2xl items-center justify-center p-2 relative">
            <div className="absolute inset-1.5 border border-dashed border-white/5 pointer-events-none" />
            <span className="font-mono text-[8px] text-white/10 uppercase tracking-widest [writing-mode:vertical-lr]">DRG_FRAME_CHASSIS_L</span>
          </div>

          <div ref={masterHingeRef} className="w-full md:w-[65%] h-[70vh] relative max-w-4xl bg-transparent flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
            <div ref={leftCasingRef} className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden border-r border-neutral-900 shadow-2xl bg-white" style={{ backfaceVisibility: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80" alt="DRG Leaf L" className="absolute top-0 left-0 h-full w-[200%] object-cover max-w-none" />
            </div>
            <div ref={rightCasingRef} className="absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden border-l border-neutral-900 shadow-2xl bg-white" style={{ backfaceVisibility: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80" alt="DRG Leaf R" className="absolute top-0 right-0 h-full w-[200%] object-cover max-w-none" style={{ right: 0 }} />
            </div>
            <div ref={centerPinRef} className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-2 bg-gradient-to-r from-neutral-600 via-neutral-300 to-neutral-800 z-30 shadow-xl origin-center" />
          </div>

          <div ref={rightDoorRef} className="hidden md:flex w-[12%] h-[65vh] bg-gradient-to-b from-[#22262F] to-[#16181E] border border-white/5 shadow-2xl items-center justify-center p-2 relative">
            <div className="absolute inset-1.5 border border-dashed border-white/5 pointer-events-none" />
            <span className="font-mono text-[8px] text-white/10 uppercase tracking-widest [writing-mode:vertical-lr]">DRG_FRAME_CHASSIS_R</span>
          </div>
        </div>

        <div className="absolute bottom-8 flex flex-col items-center gap-1 font-mono text-[9px] text-gray-400 tracking-[0.25em] z-40 bg-[#16181D]/90 px-4 py-2 border border-white/5 rounded-full">
          <MoveDown className="w-3.5 h-3.5 text-gray-300 animate-bounce" />
          <span>SCROLL: SEPARATING LEAVES // KINETIC MATRIX ACTIVATED</span>
        </div>
      </div>
    </div>
  );
}