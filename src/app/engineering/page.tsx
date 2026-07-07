"use client";

import Navbar from "@/components/shared/navbar";
import { ShieldCheck, Flame, Scale, Timer, Layers, HardHat, FileText, CheckCircle2 } from "lucide-react";

const testingPhases = [
  {
    phase: "01",
    title: "Tensile Strength & Yield Validation",
    metric: "515 MPa Limit Verified",
    description: "Every batch of raw Grade 316 Stainless Steel is subjected to extreme hydraulic force testing to ensure the hinge leaves will never deform or shear under maximum structural structural load.",
    icon: Scale
  },
  {
    phase: "02",
    title: "Salt Spray Anti-Corrosion Auditing",
    metric: "480 Hours ASTM B117 Standard",
    description: "Hinges are placed inside a continuous chemical marine vapor chamber to validate that our satin brushed chromium surface treatment delivers absolute rust-resistance in global coastal environments.",
    icon: Flame
  },
  {
    phase: "03",
    title: "Continuous Cycle Longevity Counter",
    metric: "1,500,000 Open/Close Cycles",
    description: "Automated pneumatic arms operate our heavy-duty ball bearing structures constantly under full load parameters to check that knuckle configurations maintain zero-sag fluidity over decades of operation.",
    icon: Timer
  }
];

export default function EngineeringPage() {
  return (
    <main className="min-h-screen bg-[#F4F5F6] pt-32 pb-24 font-sans text-[#1A1A1A]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION HEADER: Enterprise Industrial Branding --- */}
        <div className="border-b border-gray-300 pb-8 mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0044FF] font-bold flex items-center gap-2">
              <HardHat className="w-4 h-4 text-[#0044FF]" /> DRG MANUFACTURING LABS // LEVEL 4
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#1A1A1A]">
              Testing & QA Metrics
            </h1>
          </div>
          <p className="text-sm text-gray-500 max-w-sm font-light leading-relaxed">
            Our hardware does not leave the factory floor without passing strict international compliance audits for material composition and fatigue resilience.
          </p>
        </div>

        {/* --- GRAPHICAL DATA CARDS: Material Integrity Overview --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm space-y-4">
            <div className="w-10 h-10 bg-gray-100 rounded-xs flex items-center justify-center border border-gray-200">
              <Layers className="w-5 h-5 text-[#1A1A1A]" />
            </div>
            <h3 className="text-lg font-bold">±0.15mm CNC Tolerance</h3>
            <p className="text-xs text-gray-600 leading-normal font-light">
              Automated high-speed milling lines ensure that hinge pins and leaf configurations snap together with absolute micrometer precision, completely removing vertical play or wiggle.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm space-y-4">
            <div className="w-10 h-10 bg-emerald-50 rounded-xs flex items-center justify-center border border-emerald-200">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold">CE Grade 4 Compliance</h3>
            <p className="text-xs text-gray-600 leading-normal font-light">
              Fully authorized and certified under global European building codes for installation into heavily trafficked commercial structures and high-security fire doors.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm space-y-4">
            <div className="w-10 h-10 bg-gray-100 rounded-xs flex items-center justify-center border border-gray-200">
              <FileText className="w-5 h-5 text-[#1A1A1A]" />
            </div>
            <h3 className="text-lg font-bold">MTR Traceability Sheets</h3>
            <p className="text-xs text-gray-600 leading-normal font-light">
              Every international export consignment is dispatched along with verified Mill Test Reports, detailing chemical steel makeup ratios down to the exact carbon fraction.
            </p>
          </div>
        </div>

        {/* --- CORE KINETIC TIMELINE: Testing Flow --- */}
        <div className="space-y-8 relative before:absolute before:top-0 before:bottom-0 before:left-4 md:before:left-1/2 before:w-[1px] before:bg-gray-300">
          <h2 className="text-2xl font-black text-center mb-12 uppercase font-mono tracking-wider text-gray-400">[ Sequential Stress Protocols ]</h2>
          
          {testingPhases.map((phase, idx) => {
            const IconComponent = phase.icon;
            const isEven = idx % 2 === 0;

            return (
              <div key={phase.phase} className={`flex flex-col md:flex-row items-start relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Visual Middle Center Anchor Pin Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-[#1A1A1A] border-4 border-white rounded-full z-10 flex items-center justify-center shadow-md">
                  <span className="text-[9px] font-mono font-bold text-white">{phase.phase}</span>
                </div>

                {/* Content Block Column */}
                <div className="w-full md:w-[46%] pl-12 md:pl-0">
                  <div className="bg-white border-2 border-gray-200 rounded-sm p-6 lg:p-8 shadow-md hover:border-[#0044FF] transition-colors duration-300 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-gray-50 border border-gray-150 rounded-xs">
                        <IconComponent className="w-5 h-5 text-[#0044FF]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black tracking-tight">{phase.title}</h3>
                        <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 border border-emerald-200 rounded-xs inline-block mt-1">
                          {phase.metric}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 font-light leading-relaxed">
                      {phase.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-400 border-t border-gray-100 pt-3">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> DRG INTERNAL STANDARDS COMPLIANT
                    </div>
                  </div>
                </div>

                {/* Empty Balancing Spacer Column for Desktop Symmetry */}
                <div className="hidden md:block w-[46%]" />

              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}