import Link from "next/link";
import ProductCard from "../../components/ui/ProductCard";
import { products } from "../../lib/products";

export default function ProductsPage() {
  return (
    <main className="section-pad">
      <div className="container">
        <div className="max-w-4xl">
          <p className="eyebrow">Product Range</p>
          <h1 className="text-[clamp(34px,4.6vw,56px)] leading-[1.08] font-semibold text-navy mt-2">
            Spring Solutions Engineered for Industrial Application Requirements.
          </h1>
          <p className="mt-5 text-lg leading-8 text-steel">
            Explore Darbar Springwala spring categories for automotive, industrial, engineering, and OEM use-cases.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-line bg-navy text-white shadow-xl relative">
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: 'radial-gradient(circle at 80% 20%, #fff 2px, transparent 2px)',
            backgroundSize: '16px 16px'
          }} />
          <div className="relative z-10 px-8 py-12 md:px-16 md:py-16 grid md:grid-cols-[1.20fr_0.80fr] gap-8 items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-bronze-2 font-semibold">Custom Winding Request</span>
              <h3 className="mt-4 text-3xl font-bold">Need a Custom Spring Specification?</h3>
              <p className="mt-4 text-sm text-[#ccd5df] leading-relaxed max-w-xl">
                We design and manufacture springs according to client-supplied blueprints, operating loads, and operating environments. Get in touch with our design team.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link href="/contact" className="btn-primary border-transparent bg-white text-navy hover:bg-bronze hover:text-white px-8 py-4 text-sm font-bold shadow-lg">
                Submit Enquiry Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
