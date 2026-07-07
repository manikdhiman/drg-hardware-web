"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveDown, Shield, Award, Settings } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Showroom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);
  const centralHingeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. The Hinge Spin & Scaling Motion
      gsap.to(centralHingeRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
        rotateY: 360,
        scale: 1.15,
        ease: "none",
      });

      // 2. The Left Door Opening Transition (Perspective rotation)
      gsap.to(leftDoorRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
        },
        rotateY: -85,
        transformOrigin: "left center",
        opacity: 0.15,
        ease: "power2.out",
      });

      // 3. The Right Door Opening Transition (Perspective rotation)
      gsap.to(rightDoorRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
        },
        rotateY: 85,
        transformOrigin: "right center",
        opacity: 0.15,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-[#F4F5F6]">
      {/* Sticky Frame Wrapper */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-1000">
        
        {/* Architectural Grid Underlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:50px_50px] opacity-60" />

        {/* --- SCROLL INTERACTIVE SHOWROOM VIEW --- */}
        <div className="relative w-full max-w-6xl h-[70vh] flex items-center justify-between px-12 z-20">
          
          {/* Left Portal Door */}
          <div 
            ref={leftDoorRef}
            className="hidden md:block w-[28%] h-full bg-gradient-to-br from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] border-r-4 border-white/40 shadow-2xl rounded-l-sm relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-black/5" />
            <div className="absolute bottom-8 left-6 text-[#1A1A1A] font-mono text-[10px] tracking-widest uppercase">
              DRG / PORTAL_L
            </div>
          </div>

          {/* Core Central 3D Hinge Showcase Element */}
          <div 
            ref={centralHingeRef}
            className="w-full md:w-[38%] h-full flex flex-col items-center justify-center relative p-6 bg-white border border-gray-200 shadow-xl rounded-md"
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          >
            {/* Corner Tech Marks */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#0044FF]" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#0044FF]" />
            
            {/* The 3D Component Rendering Wrapper */}
            <div className="w-64 h-80 relative flex items-center justify-center">
              {/* Dummy High-End Hardware Image Layer */}
              <img 
                src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=600&q=80" 
                alt="DRG Heavy Duty Stainless Steel Hinge Blueprint" 
                className="w-full h-full object-contain filter drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)]"
              />
            </div>
            
            <div className="mt-4 text-center">
              <span className="font-mono text-[11px] font-bold text-[#0044FF] uppercase tracking-widest">
                DRG-X7 Heavy Duty
              </span>
              <h3 className="font-sans text-lg font-bold text-[#1A1A1A]">Concealed Bearing Hinge</h3>
            </div>
          </div>

          {/* Right Portal Door */}
          <div 
            ref={rightDoorRef}
            className="hidden md:block w-[28%] h-full bg-gradient-to-bl from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] border-l-4 border-white/40 shadow-2xl rounded-r-sm relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-black/5" />
            <div className="absolute bottom-8 right-6 text-[#1A1A1A] font-mono text-[10px] tracking-widest uppercase">
              DRG / PORTAL_R
            </div>
          </div>

        </div>

        {/* Informational Side Overlay Cards */}
        <div className="absolute bottom-12 left-12 max-w-xs z-30 font-sans">
          <p className="text-xs text-gray-500 font-mono uppercase tracking-wider flex items-center gap-2">
            <MoveDown className="w-3 h-3 text-[#0044FF] animate-bounce" /> Scroll down to operate showroom
          </p>
        </div>
      </div>
    </div>
  );
}