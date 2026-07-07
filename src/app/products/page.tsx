"use client";

import { useState } from "react";
import Navbar from "@/components/shared/navbar";
import { Shield, Download, Sliders, Settings, CheckCircle2, Cpu, Wrench } from "lucide-react";

const massiveHingeCatalog = [
  {
    id: "DRG-316-BUTT",
    name: "Heavy Duty Ball Bearing Butt Hinge",
    material: "Grade 316 Marine Stainless Steel (SUS316)",
    capacity: "160 kg per Pair (Structural Load Tested)",
    finish: "Satin Brushed Ultra-Chromium",
    exteriorPic: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80", 
    mechanism: "Quad Anti-Friction Heavy Duty Bearing Unit",
    pinType: "Non-Rising Fixed Hardened Axis Pin",
    cycleTest: "1,500,000 Cycles Audited",
    thickness: "4.0 mm Heavy Gauge",
    clearance: "±0.15mm Micro Precision Tolerances",
    tensileStrength: "515 MPa Yield Limit"
  },
  {
    id: "DRG-CONC-3D",
    name: "Concealed 180° Invisible Architectural Hinge",
    material: "High-Tensile Zinc-Aluminum Structural Alloy",
    capacity: "120 kg per Pair (Reversible Application)",
    finish: "Anodized Matte Silver Plating",
    exteriorPic: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
    mechanism: "Fluid Seven-Axis Kinematic Pivot Linkage",
    pinType: "Internal Multi-Axis Floating Mandrel",
    cycleTest: "1,000,000 Cycles Audited",
    thickness: "28 mm Base Depth Insertion",
    clearance: "Zero-Gap Flush Structural Alignment",
    tensileStrength: "420 MPa Yield Limit"
  }
];

export default function ProductsPage() {
  const [openHinges, setOpenHinges] = useState<{ [key: string]: boolean }>({});

  const handleMechanismToggle = (id: string) => {
    setOpenHinges((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="min-h-screen bg-[#F4F5F6] pt-32 pb-24 font-sans">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Dynamic Section Header */}
        <div className="border-b border-gray-300 pb-8 mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0044FF] font-bold flex items-center gap-2">
              <Settings className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} /> 
              ENGINEERING DIVISION / SCHEMATIC ARCHIVE
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#1A1A1A] mt-2">
              Kinetic Hardware Catalog
            </h1>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded-sm max-w-sm">
            <p className="text-xs text-gray-600 font-mono leading-relaxed">
              <strong className="text-[#1A1A1A]">B2B INTERACTION NOTE:</strong> Click <span className="text-[#0044FF] font-bold">"ENGAGE MECHANICAL SPLIT"</span> below to slide open the heavy outer steel casings and access the laboratory stress parameters and blueprint spec layout matrices.
            </p>
          </div>
        </div>

        {/* Catalog Layout */}
        <div className="space-y-16">
          {massiveHingeCatalog.map((hinge) => {
            const isSplit = openHinges[hinge.id] || false;

            return (
              <div 
                key={hinge.id} 
                className="bg-white border-2 border-gray-200 rounded-sm p-6 lg:p-8 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-[#0044FF] transition-colors duration-300"
              >
                
                {/* --- LEFT HAND INTERACTIVE MECHANICS VIEWER (5-Cols) --- */}
                <div className="lg:col-span-5 flex flex-col space-y-4">
                  <div className="relative h-80 w-full bg-[#111827] rounded-sm overflow-hidden border border-gray-300 shadow-inner">
                    
                    {/* BLUEPRINT SUB-LAYER: Visible when outer casings slide outward */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between font-mono text-[10px] text-blue-400 select-none bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:16px_16px]">
                      <div className="flex justify-between border-b border-blue-900/50 pb-2">
                        <span>DRG / REF: {hinge.id}</span>
                        <span className="text-emerald-400">STATUS: VERIFIED</span>
                      </div>
                      
                      {/* Abstract technical CAD outline marks */}
                      <div className="flex-grow flex flex-col justify-center items-center space-y-1 my-4 border border-dashed border-blue-900/40 py-4 bg-blue-950/20">
                        <span className="text-xs font-bold text-white tracking-widest">[ TECHNICAL BLUEPRINT VIEW ]</span>
                        <span className="text-[9px] text-gray-400">SCALE: 1:1 CNC TOLERANCE OPTIMIZED</span>
                        <span className="text-[9px] text-gray-500">TENSIL MATRIX: {hinge.tensileStrength}</span>
                      </div>

                      <div className="flex justify-between text-[9px] text-blue-500/80">
                        <span>DIMENSIONS: MM ACCURATE</span>
                        <span>QA APPR: GLOBAL DISPATCH</span>
                      </div>
                    </div>

                    {/* MECHANICAL LEAF A (Slided Left) */}
                    <div 
                      className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden transition-transform duration-700 ease-[0.25,1,0.5,1] z-20 border-r border-black/30"
                      style={{ transform: isSplit ? "translateX(-90%)" : "translateX(0)" }}
                    >
                      <img 
                        src={hinge.exteriorPic} 
                        alt={hinge.name} 
                        className="absolute top-0 left-0 h-full w-[200%] object-cover object-left max-w-none filter contrast-105 contrast-95"
                      />
                    </div>

                    {/* MECHANICAL LEAF B (Slided Right) */}
                    <div 
                      className="absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden transition-transform duration-700 ease-[0.25,1,0.5,1] z-20 border-l border-white/10"
                      style={{ transform: isSplit ? "translateX(90%)" : "translateX(0)" }}
                    >
                      <img 
                        src={hinge.exteriorPic} 
                        alt={hinge.name} 
                        className="absolute top-0 right-0 h-full w-[200%] object-cover object-right max-w-none filter contrast-105 contrast-95"
                      />
                    </div>

                    {/* Central Structural Pin Axis Line Indicator */}
                    <div className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-r from-gray-400 via-white to-gray-600 z-30 shadow-md transition-opacity duration-300 ${isSplit ? 'opacity-20' : 'opacity-100'}`} />
                  </div>

                  {/* Operational Controls */}
                  <button 
                    onClick={() => handleMechanismToggle(hinge.id)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#1A1A1A] hover:bg-[#0044FF] text-white font-mono text-xs uppercase tracking-widest font-bold transition-all rounded-xs shadow-sm"
                  >
                    <Cpu className={`w-4 h-4 ${isSplit ? 'animate-pulse text-emerald-400' : ''}`} />
                    <span>{isSplit ? "Close Exterior Casing" : "Engage Mechanical Split"}</span>
                  </button>
                </div>

                {/* --- RIGHT HAND METADATA PARAMETERS ARCHITECTURE (7-Cols) --- */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#0044FF] bg-blue-50 px-2.5 py-1 tracking-wider border border-blue-200 rounded-xs">
                        {hinge.id}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 border border-emerald-200 rounded-xs">
                        <Shield className="w-3.5 h-3.5" /> GRADE 4 COMPLIANT
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-black text-[#1A1A1A] tracking-tight mt-3 leading-tight">
                      {hinge.name}
                    </h2>
                  </div>

                  {/* Massive Multi-Row Specification Matrix Table */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-gray-200 py-6 font-sans">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0044FF] mt-0.5 shrink-0" />
                      <p className="text-xs text-gray-600"><span className="text-gray-400 block font-mono text-[9px] uppercase tracking-wider">Material Grade</span><strong className="text-[#1A1A1A] font-bold text-sm">{hinge.material}</strong></p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0044FF] mt-0.5 shrink-0" />
                      <p className="text-xs text-gray-600"><span className="text-gray-400 block font-mono text-[9px] uppercase tracking-wider">Certified Load Capacity</span><strong className="text-[#1A1A1A] font-bold text-sm">{hinge.capacity}</strong></p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0044FF] mt-0.5 shrink-0" />
                      <p className="text-xs text-gray-600"><span className="text-gray-400 block font-mono text-[9px] uppercase tracking-wider">Kinetic Core Assembly</span><strong className="text-[#1A1A1A] font-bold text-sm">{hinge.mechanism}</strong></p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0044FF] mt-0.5 shrink-0" />
                      <p className="text-xs text-gray-600"><span className="text-gray-400 block font-mono text-[9px] uppercase tracking-wider">Cycle Operational Limit</span><strong className="text-emerald-600 font-bold text-sm">{hinge.cycleTest}</strong></p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0044FF] mt-0.5 shrink-0" />
                      <p className="text-xs text-gray-600"><span className="text-gray-400 block font-mono text-[9px] uppercase tracking-wider">Gauge Thickness</span><strong className="text-[#1A1A1A] font-bold text-sm">{hinge.thickness}</strong></p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0044FF] mt-0.5 shrink-0" />
                      <p className="text-xs text-gray-600"><span className="text-gray-400 block font-mono text-[9px] uppercase tracking-wider">CNC Tolerance Limit</span><strong className="text-[#0044FF] font-bold text-sm">{hinge.clearance}</strong></p>
                    </div>
                  </div>

                  {/* B2B Export Acquisition Actions */}
                  <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 bg-[#0044FF] hover:bg-[#1A1A1A] text-white font-mono text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-xs transition-colors shadow-sm">
                      <Download className="w-4 h-4" />
                      <span>Download CAD/BIM Layout (.DWG)</span>
                    </button>
                    <button className="flex items-center gap-2 border border-gray-300 hover:border-[#1A1A1A] text-[#1A1A1A] font-mono text-xs uppercase tracking-wider py-3 px-6 rounded-xs transition-colors bg-white">
                      <Wrench className="w-4 h-4" />
                      <span>Request Custom Blueprint Mod</span>
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}