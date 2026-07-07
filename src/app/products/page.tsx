"use client";

import { useState } from "react";
import Navbar from "@/components/shared/navbar";
import { Shield, Download, Settings, Sliders, Cpu, Wrench } from "lucide-react";

const massiveHingeCatalog = [
  {
    id: "DRG-316-BUTT",
    name: "Heavy Duty Ball Bearing Butt Hinge",
    material: "Grade 316 Marine Stainless Steel (SUS316)",
    capacity: "160 kg per Pair (Structural Load Tested)",
    finish: "Satin Brushed Ultra-Chromium",
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

  return (
    <main className="min-h-screen bg-[#F4F5F6] pt-32 pb-24 font-sans">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        
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
        </div>

        <div className="space-y-16">
          {massiveHingeCatalog.map((hinge) => {
            const isSplit = openHinges[hinge.id] || false;

            return (
              <div key={hinge.id} className="bg-white border-2 border-gray-200 rounded-sm p-6 lg:p-8 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-5 flex flex-col space-y-4">
                  <div className="relative h-80 w-full bg-[#111827] rounded-sm overflow-hidden border border-gray-300 flex flex-col justify-center items-center text-center p-6">
                    <div className="font-mono text-xs text-blue-400">
                      <p className="font-bold text-white tracking-widest mb-2">[ TECHNICAL SPECIFICATION ACTIVE ]</p>
                      <p>DRG / REF: {hinge.id}</p>
                      <p>KINETIC ASSEM: {hinge.mechanism}</p>
                      <p className="mt-4 text-gray-500">IMAGE REVEAL ENGINE LAYER ACTIVE</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => setOpenHinges(prev => ({ ...prev, [hinge.id]: !isSplit }))}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#1A1A1A] text-white font-mono text-xs uppercase tracking-widest font-bold"
                  >
                    <Cpu className="w-4 h-4" />
                    <span>{isSplit ? "Close Core Spec Casing" : "Engage Mechanical Review"}</span>
                  </button>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <h2 className="text-2xl lg:text-3xl font-black text-[#1A1A1A] tracking-tight">{hinge.name}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-gray-200 py-6 text-xs text-gray-600">
                    <p><strong>Material Base:</strong> {hinge.material}</p>
                    <p><strong>Tested Load Capacity:</strong> {hinge.capacity}</p>
                    <p><strong>CNC Gauge Thickness:</strong> {hinge.thickness}</p>
                    <p><strong>Operational Limit:</strong> {hinge.cycleTest}</p>
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