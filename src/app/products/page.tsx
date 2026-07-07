import Navbar from "@/components/shared/navbar";
import { Shield, ArrowRight, Download } from "lucide-react";

const hardwareProducts = [
  {
    id: "DRG-H01",
    name: "Heavy Duty Ball Bearing Butt Hinge",
    material: "Stainless Steel 316 Marine Grade",
    capacity: "160 kg / Pair",
    finish: "Satin Brushed Silver",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "DRG-H02",
    name: "Concealed 3D Adjustable Pivot Hinge",
    material: "High-Strength Zinc Alloy / Steel",
    capacity: "120 kg / Pair",
    finish: "Anodized Matte Silver",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "DRG-H03",
    name: "Industrial Spring-Loaded Door Closer Hinge",
    material: "Hardened Carbon Steel",
    capacity: "200 kg / Pair",
    finish: "Galvanized Chrome Silver",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-industrial-base pt-32 pb-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Title Header */}
        <div className="border-b border-gray-300 pb-8 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-industrial-accent font-bold">DRG Production Blueprint Matrix</span>
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-industrial-dark mt-2">Architectural Hardware Catalog</h1>
        </div>

        {/* Grid Setup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hardwareProducts.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden flex flex-col justify-between group hover:border-industrial-accent transition-all duration-300">
              
              {/* Product Visual Area */}
              <div className="h-64 bg-gray-100 relative overflow-hidden border-b border-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-industrial-dark text-white font-mono text-[10px] px-2 py-1 uppercase tracking-wider">
                  {product.id}
                </div>
              </div>

              {/* Specification Metadata Card */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-industrial-dark leading-tight group-hover:text-industrial-accent transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Technical Spec Sheet Layout */}
                  <div className="pt-2 space-y-1 text-xs font-sans text-gray-600">
                    <p><strong className="text-industrial-dark font-medium">Material:</strong> {product.material}</p>
                    <p><strong className="text-industrial-dark font-medium">Load Capacity:</strong> {product.capacity}</p>
                    <p><strong className="text-industrial-dark font-medium">Finish Variant:</strong> {product.finish}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button className="flex items-center gap-1.5 text-xs font-mono font-bold text-industrial-accent uppercase tracking-wider">
                    <span>CAD Blueprints</span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                  <span className="flex items-center gap-1 text-[11px] font-sans text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    <Shield className="w-3 h-3" /> CE Certified
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