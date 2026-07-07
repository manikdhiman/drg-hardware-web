"use client";

import { useState } from "react";
import Navbar from "@/components/shared/navbar";
import { Shield, Download, Settings, CheckCircle2, Cpu, Wrench, Layers } from "lucide-react";

const eliteHingeCatalog = [
  {
    id: "DRG-316-BUTT",
    name: "Heavy Duty Ball Bearing Butt Hinge",
    material: "Grade 316 Marine Stainless Steel (SUS316)",
    capacity: "160 kg per Pair (Structural Load Tested)",
    finish: "Satin Brushed Ultra-Chromium",
    exteriorPic: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80", 
    // --- MULTIPLE IMAGES SHOWN ONCE OPENED ---
    internalBearingPic: "https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&w=300&q=80", // Close up engineering
    dimensionBlueprintPic: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=300&q=80", // Schematic look
    installationPic: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=300&q=80", // Applied architectural view
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
    // --- MULTIPLE IMAGES SHOWN ONCE OPENED ---
    internalBearingPic: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=300&q=80",
    dimensionBlueprintPic: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=300&q=80",
    installationPic: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80",
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
        
        {/* Header Block */}
        <div className="border-b border-gray-300 pb-8 mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0044FF] font-bold flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0044FF]" /> 
              FACTORY INSPECTION PORTAL / MULTI-AXIS GALLERY
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#1A1A1A] mt-2">
              Kinetic Hardware Catalog
            </h1>
          </div>
        </div>

        {/* Catalog List */}
        <div className="space-y-16">
          {eliteHingeCatalog.map((hinge) => {
            const isSplit = openHinges[hinge.id] || false;

            return (
              <div 
                key={hinge.id} 
                className="bg-white border-2 border-gray-200 rounded-sm p-6 lg:p-8 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-[#0044FF] transition-colors duration-300"
              >
                
                {/* --- INTERACTIVE MECHANICAL VIEWER (5-Cols) --- */}
                <div className="lg:col-span-5 flex flex-col space-y-4">
                  <div className="relative h-80 w-full bg-[#111827] rounded-sm overflow-hidden border border-gray-300 shadow-inner">
                    
                    {/* INSIDE SUB-LAYER: The Multi-Image Showcase Matrix */}
                    <div className={`absolute inset-0 p-4 grid grid-cols-3 gap-2 transition-opacity duration-500 ${isSplit ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                      
                      {/* Image position 1: Internal Component Close-up */}
                      <div className="relative h-full border border-blue-900/40 rounded-xs overflow-hidden bg-slate-900 group/sub">
                        <img src={hinge.internalBearingPic} alt="Internal Bearing" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" />
                        <span className="absolute bottom-1 left-1 bg-black/70 text-[8px] font-mono text-blue-400 px-1 rounded-xs uppercase">Core Joint</span>
                      </div>

                      {/* Image position 2: Technical Dimension Line Blueprint */}
                      <div className="relative h-full border border-blue-900/40 rounded-xs overflow-hidden bg-slate-900 group/sub">
                        <img src={hinge.dimensionBlueprintPic} alt="Dimension Schematics" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" />
                        <span className="absolute bottom-1 left-1 bg-black/70 text-[8px] font-mono text-blue-400 px-1 rounded-xs uppercase">Schematics</span>
                      </div>

                      {/* Image position 3: Architectural On-Site Installation */}
                      <div className="relative h-full border border-blue-900/40 rounded-xs overflow-hidden bg-slate-900 group/sub">
                        <img src={hinge.installationPic} alt="Installation Architecture" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" />
                        <span className="absolute bottom-1 left-1 bg-black/70 text-[8px] font-mono text-blue-400 px-1 rounded-xs uppercase">Assembled</span>
                      </div>

                      {/* Technical Spec Tag Footer across the inside base */}
                      <div className="col-span-3 text-center border-t border-blue-900/40 pt-1.5 mt-1">
                        <p className="font-mono text-[9px] text-blue-400 tracking-wider">DRG CORE INSPECTION LAYER / {hinge.tensileStrength} VALIDATED</p>
                      </div>
                    </div>

                    {/* MECHANICAL LEAF A (Slides Left) */}
                    <div 
                      className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden transition-transform duration-700 ease-[0.25,1,0.5,1] z-20 border-r border-black/30"
                      style={{ transform: isSplit ? "translateX(-100%)" : "translateX(0)" }}
                    >
                      <img 
                        src={hinge.exteriorPic} 
                        alt={hinge.name} 
                        className="absolute top-0 left-0 h-full w-[200%] object-cover object-left max-w-none"
                      />
                    </div>

                    {/* MECHANICAL LEAF B (Slides Right) */}
                    <div 
                      className="absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden transition-transform duration-700 ease-[0.25,1,0.5,1] z-20 border-l border-white/10"
                      style={{ transform: isSplit ? "translateX(100%)" : "translateX(0)" }}
                    >
                      <img 
                        src={hinge.exteriorPic} 
                        alt={hinge.name} 
                        className="absolute top-0 right-0 h-full w-[200%] object-cover object-right max-w-none"
                      />
                    </div>

                    {/* Central Axis Alignment Marker */}
                    <div className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-r from-gray-400 via-white to-gray-600 z-30 transition-opacity duration-300 ${isSplit ? 'opacity-0' : 'opacity-100'}`} />
                  </div>

                  {/* Trigger Control */}
                  <button 
                    onClick={() => handleMechanismToggle(hinge.id)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#1A1A1A] hover:bg-[#0044FF] text-white font-mono text-xs uppercase tracking-widest font-bold transition-all rounded-xs shadow-sm"
                  >
                    <Cpu className="w-4 h-4" />
                    <span>{isSplit ? "Conceal Specification Matrix" : "Engage Mechanical Split"}</span>
                  </button>
                </div>

                {/* --- RIGHT HAND SPECIFICATION RATINGS PANEL (7-Cols) --- */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#0044FF] bg-blue-50 px-2.5 py-1 tracking-wider border border-blue-200 rounded-xs">
                        {hinge.id}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 border border-emerald-200 rounded-xs">
                        <Shield className="w-3.5 h-3.5" /> GRADE 4 METRICS VERIFIED
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-black text-[#1A1A1A] tracking-tight mt-3 leading-tight">
                      {hinge.name}
                    </h2>
                  </div>

                  {/* Specifications Matrix Table */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-gray-200 py-6 font-sans">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0044FF] mt-0.5 shrink-0" />
                      <p className="text-xs text-gray-600"><span className="text-gray-400 block font-mono text-[9px] uppercase tracking-wider">Material Base</span><strong className="text-[#1A1A1A] font-bold text-sm">{hinge.material}</strong></p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0044FF] mt-0.5 shrink-0" />
                      <p className="text-xs text-gray-600"><span className="text-gray-400 block font-mono text-[9px] uppercase tracking-wider">Load Rating</span><strong className="text-[#1A1A1A] font-bold text-sm">{hinge.capacity}</strong></p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0044FF] mt-0.5 shrink-0" />
                      <p className="text-xs text-gray-600"><span className="text-gray-400 block font-mono text-[9px] uppercase tracking-wider">Kinetic Core Assembly</span><strong className="text-[#1A1A1A] font-bold text-sm">{hinge.mechanism}</strong></p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0044FF] mt-0.5 shrink-0" />
                      <p className="text-xs text-gray-600"><span className="text-gray-400 block font-mono text-[9px] uppercase tracking-wider">Cycle Operational Limit</span><strong className="text-emerald-600 font-bold text-sm">{hinge.cycleTest}</strong></p>
                    </div>
                  </div>

                  {/* Acquisition Actions */}
                  <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 bg-[#0044FF] hover:bg-[#1A1A1A] text-white font-mono text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-xs transition-colors shadow-sm">
                      <Download className="w-4 h-4" />
                      <span>Download CAD Layout (.DWG)</span>
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