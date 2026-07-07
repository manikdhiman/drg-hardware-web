"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveDown, Settings, ShieldCheck, Maximize2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Showroom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);
  
  // Core Hinge Wrapper Ref (Handles the 3D Spin)
  const masterHingeRef = useRef<HTMLDivElement>(null);
  
  // Casing Leaf Refs (Handle the physical split sliding away)
  const leftCasingRef = useRef<HTMLDivElement>(null);
  const rightCasingRef = useRef<HTMLDivElement>(null);
  
  // Full Screen Inside Gallery Ref
  const internalGalleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // We extend the scroll track to 300vh so the multi-stage animation feels smooth and unhurried
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: true, // Locks the viewport in place while the animation sequences execute
        }
      });

      // STAGE 1: Spin the complete hinge unit in 3D space as you start scrolling
      tl.to(masterHingeRef.current, {
        rotateY: 180,
        ease: "power1.inOut",
        duration: 1
      })
      // STAGE 2: Simultaneously swivel open the room portals and separate the hinge leaves
      .to(leftDoorRef.current, { rotateY: -90, transformOrigin: "left center", opacity: 0.05, ease: "power2.inOut" }, 1)
      .to(rightDoorRef.current, { rotateY: 90, transformOrigin: "right center", opacity: 0.05, ease: "power2.inOut" }, 1)
      
      // Casing splits and slides completely off-screen to the left and right edges
      .to(leftCasingRef.current, { x: "-100%", ease: "power2.inOut", duration: 1.5 }, 1)
      .to(rightCasingRef.current, { x: "100%", ease: "power2.inOut", duration: 1.5 }, 1)
      
      // STAGE 3: Bring forward the full-screen cinematic engineering blueprint matrix gallery
      .fromTo(internalGalleryRef.current, 
        { opacity: 0, scale: 0.95 }, 
        { opacity: 1, scale: 1, ease: "power3.out", duration: 1 }, 
        1.2
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#1A1A1A]">
      {/* Viewport Capture Frame */}
      <div className="h-screen w-full flex items-center justify-center overflow-hidden perspective-1000 relative">
        
        {/* Crisp Technical Grid Background Underlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* --- FULL SCREEN INTERNAL REVEAL LAYER --- */}
        <div 
          ref={internalGalleryRef} 
          className="absolute inset-0 w-full h-full z-10 opacity-0 pointer-events-none bg-gradient-to-b from-[#111827] to-[#0F172A] p-8 lg:p-16 flex flex-col justify-between"
        >
          {/* Internal Top Header Status */}
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-[#0044FF] tracking-widest uppercase block font-bold">DRG Manufacturing Blueprint Core</span>
              <h2 className="text-xl lg:text-3xl font-black text-white tracking-tight mt-0.5">X-Ray Structural Analysis</h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-3 py-1 rounded-xs">
              <ShieldCheck className="w-4 h-4" /> TEST LAB PASS // GRADE 4 VALIDATED
            </div>
          </div>

          {/* THE CINEMATIC MULTI-IMAGE GRID FRAME */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto h-[60vh] max-w-7xl mx-auto w-full">
            
            {/* View 01: Core Micro Bearing Mechanism */}
            <div className="relative h-full bg-slate-900 border border-white/10 rounded-xs overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=800&q=80" alt="Core Micro Bearings" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-[#0044FF] uppercase font-bold">Section A-A</span>
                <h4 className="text-sm font-bold text-white mt-0.5">Quad Anti-Friction Bearing Assembly</h4>
              </div>
            </div>

            {/* View 02: CNC Precision Cad Outlines */}
            <div className="relative h-full bg-slate-900 border border-white/10 rounded-xs overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80" alt="CNC Dimension Layout" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-[#0044FF] uppercase font-bold">Section B-C</span>
                <h4 className="text-sm font-bold text-white mt-0.5">±0.15mm CNC Machining Blueprint</h4>
              </div>
            </div>

            {/* View 03: Architectural Field Configuration */}
            <div className="relative h-full bg-slate-900 border border-white/10 rounded-xs overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80" alt="Architectural Application View" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-[#0044FF] uppercase font-bold">Section D-D</span>
                <h4 className="text-sm font-bold text-white mt-0.5">Heavy Load On-Site Structural Installation</h4>
              </div>
            </div>

          </div>

          {/* Inside Footer Data Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-gray-500 border-t border-white/10 pt-4">
            <p>DRG HARDWARE INTERNATIONAL SPECIFICATION ARCHIVE v4.0</p>
            <p className="text-[#0044FF] animate-pulse">SYSTEM STATUS: FULL KINEMATIC DISPLAY LINKED</p>
          </div>
        </div>


        {/* --- FRONT LAYER: SPINNING & SPLITTING MECHANICAL MASTER HINGE --- */}
        <div className="relative w-full h-full flex items-center justify-between px-12 z-20 pointer-events-none">
          
          {/* Ambient Left Portal Door Frame */}
          <div ref={leftDoorRef} className="hidden md:block w-[15%] h-[70vh] bg-gradient-to-br from-neutral-800 to-neutral-900 border-r border-neutral-700 shadow-2xl rounded-xs" />

          {/* THE COMBINED 3D ROTATION & SLIDE CARRIER */}
          <div 
            ref={masterHingeRef}
            className="w-full md:w-[60%] h-[75vh] relative max-w-4xl bg-transparent flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* MECHANICAL CONTAINER CASE LEAF A (Slides Left on split phase) */}
            <div 
              ref={leftCasingRef} 
              className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden border-r-2 border-neutral-900/40 shadow-2xl bg-white"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80" 
                alt="DRG Architectural Hardware Core" 
                className="absolute top-0 left-0 h-full w-[200%] object-cover max-w-none filter brightness-95"
              />
              {/* Outer Technical Frame Elements */}
              <div className="absolute top-6 left-6 text-[#1A1A1A] font-mono text-[10px] tracking-widest font-bold border border-black/20 px-2 py-0.5 bg-white/80 backdrop-blur-xs">
                DRG // AXIS_LEAF_L
              </div>
            </div>

            {/* MECHANICAL CONTAINER CASE LEAF B (Slides Right on split phase) */}
            <div 
              ref={rightCasingRef} 
              className="absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden border-l-2 border-neutral-900/40 shadow-2xl bg-white"
              style={{ backfaceVisibility: "hidden" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80" 
                alt="DRG Architectural Hardware Core" 
                className="absolute top-0 right-0 h-full w-[200%] object-cover max-w-none filter brightness-95"
                style={{ right: 0 }}
              />
              <div className="absolute bottom-6 right-6 text-[#1A1A1A] font-mono text-[10px] tracking-widest font-bold border border-black/20 px-2 py-0.5 bg-white/80 backdrop-blur-xs">
                DRG // AXIS_LEAF_R
              </div>
            </div>

            {/* High-Integrity Center Cylinder Axis Pin (Vanishes on separation) */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-2.5 bg-gradient-to-r from-neutral-600 via-neutral-300 to-neutral-800 z-30 shadow-xl" />
          </div>

          {/* Ambient Right Portal Door Frame */}
          <div ref={rightDoorRef} className="hidden md:block w-[15%] h-[70vh] bg-gradient-to-bl from-neutral-800 to-neutral-900 border-l border-neutral-700 shadow-2xl rounded-xs" />

        </div>

        {/* Cinematic Scrolling Directives Tracker */}
        <div className="absolute bottom-8 flex flex-col items-center gap-1 font-mono text-[9px] text-gray-400 tracking-[0.25em] z-40 bg-neutral-900/60 backdrop-blur-md px-4 py-2 border border-white/5 rounded-full">
          <MoveDown className="w-3.5 h-3.5 text-[#0044FF] animate-bounce" />
          <span>SCROLL SLOWLY: ENGAGING 3D AXIS SPIN & EXPANSION REVEAL</span>
        </div>

      </div>
    </div>
  );
}