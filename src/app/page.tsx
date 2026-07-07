import Navbar from "@/components/shared/navbar";
import Showroom from "@/components/animations/showroom";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F4F5F6]">
      <Navbar />
      
      {/* Dynamic Introduction Section */}
      <section className="h-[70vh] flex flex-col justify-end px-12 pb-24 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <div className="h-[2px] w-12 bg-[#0044FF]" />
          <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-[#1A1A1A]">
            The Silver Standard <br />of Engineering.
          </h1>
          <p className="text-gray-650 text-base md:text-lg max-w-xl font-light">
            DRG manufactures high-load capacity architectural hinges designed for structural integrity. Scroll to view our kinetic engineering mechanisms.
          </p>
        </div>
      </section>

      {/* The 3D Motion Interaction Section */}
      <Showroom />

      {/* Footer / Contact Spacers */}
      <section className="h-screen bg-[#1A1A1A] flex items-center justify-center text-white z-30 relative">
        <h2 className="text-2xl font-mono tracking-widest text-white/40">[ Premium Specifications Matrix Matrix Continues ]</h2>
      </section>
    </main>
  );
}