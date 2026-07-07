"use client";

import { useState } from "react";
import Navbar from "@/components/shared/navbar";
import { Shield, Download, Settings, Orbit, Eye, ChevronRight } from "lucide-react";

const hingeCatalog = [
  {
    id: "DRG-H316-BB",
    name: "Heavy Duty Ball Bearing Butt Hinge",
    material: "Grade 316 Stainless Steel (Marine Grade)",
    capacity: "160 kg per Pair",
    finish: "Satin Brushed Chromium Silver",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    // --- SPECIAL MECHANICAL HINGE FEATURES ---
    mechanism: "Quad Ball Bearing System",
    pinType: "Non-Rising Stainless Pin with Tamper-Proof Security Stud",
    cycleTest: "1,500,000 Cycles Verified",
    clearance: "0.25mm Tolerance Margin",
    knuckleDiameter: "14.0 mm"
  },
  {
    id: "DRG-AC3D-80",
    name: "Concealed 3D Adjustable Architectural Hinge",
    material: "High-Tensile Zinc Alloy & Reinforced Steel Core",
    capacity: "120 kg per Pair",
    finish: "Anodized Matte Silver Plated",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80",
    // --- SPECIAL MECHANICAL HINGE FEATURES ---
    mechanism: "Fluid 3D Dynamic Pivot Joint",
    pinType: "Internal Retractable Axis Pin",
    cycleTest: "800,000 Cycles Verified",
    clearance: "Zero-Gap Concealment Flush Fit",
    knuckleDiameter: "N/A (Invisible Axis)"
  },
  {
    id: "DRG-SLC-200",
    name: "Industrial Spring-Loaded Self-Closing Hinge",
    material: "Tempered Carbon Steel & High-Tension Alloys",
    capacity: "200 kg per Pair",
    finish: "Electro-Galvanized Anti-Corrosion Silver",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
    // --- SPECIAL MECHANICAL HINGE FEATURES ---
    mechanism: "Adjustable Torsion Spring Tension Core",
    pinType: "Removable Hardened Steel Pivot Pin",
    cycleTest: "2,000,000 Cycles Verified",
    clearance: "0.40mm Industrial Tolerance",
    knuckleDiameter: "18.5 mm"
  }
];

export default function ProductsPage() {
  const [activeSpec, setActiveSpec] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-industrial-base pt-32 pb-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Dynamic Industrial Section Header */}
        <div className="border-b border-gray-300 pb-8 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-industrial-accent font-bold flex items-center gap-1.5">
              <Settings className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} /> Factory Specification Blueprint Matrix
            </span>
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-industrial-dark mt-2">Hinge Product Catalog</h1>
          </div>
          <p className="text-sm text-gray-650 max-w-sm font-sans font-light leading-relaxed">
            All DRG hinges undergo structural validation testing to meet strict international standards for load limits and operations.
          </p>
        </div>

        {/* Dynamic Content Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hingeCatalog.map((hinge) => (
            <div 
              key={hinge.id} 
              className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden flex flex-col justify-between relative group hover:border-industrial-accent transition-all duration-300"
            >
              {/* Product Visual Area */}
              <div className="h-60 bg-gray-100 relative overflow-hidden border-b border-gray-100">
                <img 
                  src={hinge.image} 
                  alt={hinge.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Part Number Tag Overlay */}
                <div className="absolute top-4 left-4 bg-industrial-dark text-white font-mono text-[10px] px-2.5 py-1 uppercase tracking-widest rounded-xs">
                  SKU: {hinge.id}
                </div>
              </div>

              {/* Standard Attributes Panel */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-industrial-dark leading-tight">
                    {hinge.name}
                  </h3>
                  
                  {/* Basic Specifications Table Wrapper */}
                  <div className="pt-2 space-y-1.5 text-xs font-sans text-gray-600">
                    <p><strong className="text-industrial-dark font-medium">Material:</strong> {hinge.material}</p>
                    <p><strong className="text-industrial-dark font-medium">Load Limit:</strong> {hinge.capacity}</p>
                    <p><strong className="text-industrial-dark font-medium">Surface Finish:</strong> {hinge.finish}</p>
                  </div>
                </div>

                {/* --- KINETIC DROPDOWN ACCORDION MECHANISM FOR FACTORY BLUEPRINTS --- */}
                <div className="pt-2">
                  <button 
                    onClick={() => setActiveSpec(activeSpec === hinge.id ? null : hinge.id)}
                    className="w-full py-2 px-3 bg-[#F8F9FA] hover:bg-gray-100 border border-gray-200 flex items-center justify-between text-xs font-mono font-medium text-industrial-dark transition-all rounded-xs"
                  >
                    <span className="flex items-center gap-1.5">
                      <Orbit className="w-3.5 h-3.5 text-industrial-accent animate-pulse" /> 
                      {activeSpec === hinge.id ? "Conceal Blueprint Data" : "Expand Mechanical Specs"}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 transform transition-transform duration-300 ${activeSpec === hinge.id ? "rotate-90" : ""}`} />
                  </button>

                  {/* Dynamic Height Structural Feature Drawer */}
                  <div className={`transition-all duration-300 overflow-hidden ${activeSpec === hinge.id ? "max-h-60 opacity-100 pt-4" : "max-h-0 opacity-0"}`}>
                    <div className="bg-[#FAFBFB] p-4 border border-dashed border-gray-200 text-[11px] font-mono space-y-2 rounded-xs text-gray-750">
                      <div className="flex justify-between border-b border-gray-100 pb-1">
                        <span className="text-gray-500">KINETIC CORE:</span>
                        <span className="text-industrial-dark font-bold text-right">{hinge.mechanism}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-1">
                        <span className="text-gray-500">PIN ARCHITECTURE:</span>
                        <span className="text-industrial-dark font-bold text-right">{hinge.pinType}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-1">
                        <span className="text-gray-500">STRESS CYCLE TESTS:</span>
                        <span className="text-emerald-600 font-bold text-right">{hinge.cycleTest}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-1">
                        <span className="text-gray-500">KNUCKLE DIAMETER:</span>
                        <span className="text-industrial-dark font-bold text-right">{hinge.knuckleDiameter}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">CNC TOLERANCE:</span>
                        <span className="text-industrial-accent font-bold text-right">{hinge.clearance}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Certifications Action Row */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button className="flex items-center gap-1.5 text-xs font-mono font-bold text-industrial-accent uppercase tracking-wider hover:text-industrial-dark transition-colors">
                    <span>Get CAD Layout</span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                  <span className="flex items-center gap-1 text-[11px] font-sans font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">
                    <Shield className="w-3 h-3" /> Grade 4 Validated
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}