"use client";

import { useState } from "react";
import Navbar from "@/components/shared/navbar";
import { Shield, Download, Settings, Sliders, Eye, RefreshCw } from "lucide-react";

const innovativeHingeCatalog = [
  {
    id: "DRG-316-BUTT",
    name: "Heavy Duty Ball Bearing Butt Hinge",
    material: "Grade 316 Marine Stainless Steel",
    capacity: "160 kg per Pair",
    finish: "Satin Brushed Architectural Silver",
    // Two distinct image layers to mimic the mechanical transformation
    exteriorPic: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80", 
    blueprintPic: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80",
    mechanism: "Quad Anti-Friction Bearing Unit",
    pinType: "Non-Rising Fixed Security Pin",
    cycleTest: "1,500,000 Open/Close Cycles Verified"
  },
  {
    id: "DRG-CONC-3D",
    name: "Concealed 180° Flush Architectural Hinge",
    material: "High-Tensile Zinc Structural Alloy",
    capacity: "120 kg per Pair",
    finish: "Anodized Matte Silver Coating",
    exteriorPic: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
    blueprintPic: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=600&q=80",
    mechanism: "Fluid 3D Structural Axis Pivot",
    pinType: "Internal Invisible Floating Mandrel",
    cycleTest: "1,000,000 Cycles Verified"
  }
];

export default function ProductsPage() {
  const [swiveledHinges, setSwiveledHinges] = useState<{ [key: string]: boolean }>({});

  const toggleHingeLeaf = (id: string) => {
    setSwiveledHinges((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="min-h-screen bg-industrial-base pt-32 pb-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Dynamic Section Header */}
        <div className="border-b border-gray-300 pb-8 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-industrial-accent font-bold flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 animate-pulse" /> Kinetic Architecture Matrix
          </span>
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-industrial-dark mt-2">
            Interactive Hinge Catalog
          </h1>
          <p className="text-sm text-gray-500 max-w-xl font-sans font-light mt-2">
            Click "Engage Hinge Leaf Mechanism" to visually swing open the outer product casting and evaluate the raw blueprint and internal specifications underneath.
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {innovativeHingeCatalog.map((hinge) => {
            const isOpened = swiveledHinges[hinge.id] || false;

            return (
              <div 
                key={hinge.id} 
                className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden p-6 flex flex-col justify-between space-y-6 hover:border-industrial-accent transition-colors duration-300"
              >
                {/* --- THE KINETIC SPLIT HINGE IMAGE FRAME --- */}
                <div className="h-72 bg-[#E5E7EB] relative overflow-hidden rounded-sm perspective-1000 border border-gray-200">
                  
                  {/* LAYER 1: Hidden Internal Factory Blueprint (Always sitting behind) */}
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-slate-900">
                    <img 
                      src={hinge.blueprintPic} 
                      alt="Mechanical Schematics Blueprint" 
                      className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-blue-900/20" /> {/* Engineering blue overlay tint */}
                    <div className="absolute top-4 right-4 bg-industrial-accent text-white text-[9px] font-mono px-2 py-0.5 tracking-widest uppercase">
                      CAD Reference Active
                    </div>
                  </div>

                  {/* LAYER 2: Left Leaf Picture Panel (Swings Left out of view) */}
                  <div 
                    className="absolute top-0 left-0 w-1/2 h-full overflow-hidden transition-all duration-700 ease-[0.16,1,0.3,1] border-r border-white/20 z-20"
                    style={{
                      transform: isOpened ? "rotateY(-90deg)" : "rotateY(0deg)",
                      transformOrigin: "left center"
                    }}
                  >
                    <img 
                      src={hinge.exteriorPic} 
                      alt={hinge.name} 
                      className="absolute top-0 left-0 w-[200%] h-full object-cover"
                    />
                  </div>

                  {/* LAYER 3: Right Leaf Picture Panel (Swings Right out of view) */}
                  <div 
                    className="absolute top-0 right-0 w-1/2 h-full overflow-hidden transition-all duration-700 ease-[0.16,1,0.3,1] border-l border-white/20 z-20"
                    style={{
                      transform: isOpened ? "rotateY(90deg)" : "rotateY(0deg)",
                      transformOrigin: "right center"
                    }}
                  >
                    <img 
                      src={hinge.exteriorPic} 
                      alt={hinge.name} 
                      className="absolute top-0 right-0 w-[200%] h-full object-cover right-0"
                      style={{ right: 0 }}
                    />
                  </div>

                  {/* The Central Hinge Axis Visual Pin Guide */}
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-r from-gray-400 via-white to-gray-500 shadow-md z-30 pointer-events-none" />
                </div>

                {/* Info Text Blocks */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[10px] font-mono font-bold bg-gray-100 text-industrial-dark px-2 py-0.5 rounded-sm uppercase tracking-wider">
                        {hinge.id}
                      </span>
                      <h3 className="text-xl font-bold text-industrial-dark mt-1.5 leading-tight">{hinge.name}</h3>
                    </div>
                  </div>

                  {/* Dynamic Technical Specifications Sheet Overlay */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans border-t border-b border-gray-150 py-4">
                    <p><span className="text-gray-500 block font-mono text-[10px] uppercase">Material Base</span> <strong className="text-industrial-dark font-medium">{hinge.material}</strong></p>
                    <p><span className="text-gray-500 block font-mono text-[10px] uppercase">Tested Load Limit</span> <strong className="text-industrial-dark font-medium">{hinge.capacity}</strong></p>
                    <p><span className="text-gray-500 block font-mono text-[10px] uppercase">Core Kinetic Joint</span> <strong className="text-industrial-dark font-medium">{hinge.mechanism}</strong></p>
                    <p><span className="text-gray-500 block font-mono text-[10px] uppercase">QA Lab Cycle Count</span> <strong className="text-emerald-600 font-medium">{hinge.cycleTest}</strong></p>
                  </div>
                </div>

                {/* Control Action Row */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button 
                    onClick={() => toggleHingeLeaf(hinge.id)}
                    className="flex-grow flex items-center justify-center gap-2 py-3 px-4 bg-industrial-dark hover:bg-industrial-accent text-white text-xs font-mono uppercase tracking-widest font-bold transition-all rounded-xs"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isOpened ? "rotate-180" : ""} transition-transform duration-500`} />
                    <span>{isOpened ? "Close Hardware Casting" : "Engage Hinge Leaf Mechanism"}</span>
                  </button>
                  
                  <button className="flex items-center justify-center gap-1.5 border border-gray-300 hover:border-industrial-dark py-3 px-6 text-xs font-mono text-industrial-dark uppercase tracking-wider transition-colors rounded-xs">
                    <Download className="w-3.5 h-3.5" />
                    <span>Get CAD Layout</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}