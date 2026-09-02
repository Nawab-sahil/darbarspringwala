import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, ShieldCheck, CheckCircle2, Cpu, Wrench, Layers } from "lucide-react";
import { getProduct, products } from "../../../lib/products";
import ProductCard from "../../../components/ui/ProductCard";

const faqItems = [
  {
    q: "Can this spring be manufactured in custom dimensions?",
    a: "Yes. Custom wire diameters (0.2mm to 16.0mm), inner/outer diameters, free lengths, and active coil counts are available to exact blueprint specifications.",
  },
  {
    q: "Can I share a drawing or sample for quotation?",
    a: "Yes. You can submit CAD drawings (PDF, STEP, DWG), technical specifications, or physical samples directly to our engineering team.",
  },
  {
    q: "Are custom heat treatments and surface finishes available?",
    a: "We offer stress-relieving tempering, shot peening, trivalent zinc plating, black oxiding, powder coating, and electro-polishing according to operating environment demands.",
  },
];

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} Manufacturer | Darbar Springwala`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  const mainImage = product.images[0] || "/placeholder.jpg";

  return (
    <main className="min-h-screen bg-[#f7f9fa] py-12 lg:py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 font-mono text-xs text-steel">
          <Link href="/" className="hover:text-bronze transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-bronze transition-colors">Products</Link>
          <span>/</span>
          <span className="text-navy font-bold">{product.name}</span>
        </div>

        {/* Hero Section */}
        <section className="mt-8 grid gap-10 lg:grid-cols-12 items-start border-b border-line pb-16">
          
          {/* Product Floating 3D Vector Asset Frame (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[32px] border border-line bg-gradient-to-b from-white to-[#f0f4f8] shadow-lg flex items-center justify-center p-8">
              {/* Technical Dot Matrix Grid Overlay */}
              <div 
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, #17324f 1.5px, transparent 1.5px)`,
                  backgroundSize: '24px 24px'
                }}
              />

              {/* Isolated Floating 3D Spring Asset */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={mainImage}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain drop-shadow-[0_20px_35px_rgba(23,50,79,0.25)] transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>

              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="h-3.5 w-3.5 text-bronze" />
                ISO 9001:2015 AUDITED
              </div>
            </div>
          </div>

          {/* Product Overview & Quick Action Sidebar (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 space-y-4">
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-bronze">
                Product Lineup
              </span>
              <h1 className="text-[clamp(32px,3.8vw,46px)] font-black leading-[1.08] text-navy font-display">
                {product.name}
              </h1>
              <p className="text-steel text-sm sm:text-base leading-relaxed">{product.description}</p>
            </div>

            {/* Application Focus Glass Card */}
            <div className="rounded-3xl border border-line bg-white p-7 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-line pb-3">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-bronze">
                  Primary Application Focus
                </span>
                <span className="h-2 w-2 rounded-full bg-bronze animate-pulse" />
              </div>
              <p className="text-xl font-bold text-navy font-display">{product.applicationTag}</p>
              <p className="text-xs text-steel leading-relaxed">
                Coiled to custom blueprint tolerances based on working loads, fatigue environment, and dimensional limits.
              </p>
              <Link 
                href={`/contact?product=${product.slug}`} 
                className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-navy text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-navy/20 transition-all duration-300 hover:bg-bronze hover:shadow-bronze/30"
              >
                <span>Request Custom Quote</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

        </section>

        {/* Key Applications */}
        <section className="mt-14 space-y-6">
          <div className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-bronze" />
            <h2 className="text-2xl font-black text-navy font-display">Key Applications & Use-Cases</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.applications.map((app) => (
              <div key={app} className="flex items-center gap-3 rounded-2xl border border-line/80 bg-white p-4 text-sm font-bold text-navy shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-bronze shrink-0" />
                <span>{app}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Characteristics & Materials Grid */}
        <section className="mt-14 grid gap-7 md:grid-cols-3">
          <article className="rounded-3xl border border-line bg-white p-7 shadow-sm space-y-4">
            <div className="inline-flex p-3 rounded-xl bg-bronze/10 text-bronze">
              <Cpu className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-navy font-display">Engineering Parameters</h3>
            <ul className="space-y-2.5 text-xs text-steel font-mono">
              <li className="flex items-center gap-2">• Fully customizable ID/OD & free length</li>
              <li className="flex items-center gap-2">• Optimized for high cycle fatigue limits</li>
              <li className="flex items-center gap-2">• Precision CNC multi-axis coiling</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-line bg-white p-7 shadow-sm space-y-4">
            <div className="inline-flex p-3 rounded-xl bg-bronze/10 text-bronze">
              <Layers className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-navy font-display">Material Options</h3>
            <ul className="space-y-2.5 text-xs text-steel font-mono">
              {product.materials.map((mat) => (
                <li key={mat} className="flex items-center gap-2">• {mat}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-line bg-white p-7 shadow-sm space-y-4">
            <div className="inline-flex p-3 rounded-xl bg-bronze/10 text-bronze">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-navy font-display">Surface Finishes</h3>
            <ul className="space-y-2.5 text-xs text-steel font-mono">
              {product.finishes.map((fin) => (
                <li key={fin} className="flex items-center gap-2">• {fin}</li>
              ))}
            </ul>
          </article>
        </section>

        {/* Manufacturing & QA Process */}
        <section className="mt-14 grid gap-7 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-3xl border border-line bg-white p-8 shadow-sm space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-bronze">Manufacturing Process</span>
            <h3 className="text-2xl font-bold text-navy font-display">CNC Coiling & Stress Relieving</h3>
            <p className="text-steel text-sm leading-relaxed">{product.process}</p>
          </div>

          <div className="lg:col-span-5 rounded-3xl border border-line bg-white p-8 shadow-sm space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-bronze">Quality Assurance</span>
            <h3 className="text-2xl font-bold text-navy font-display">100% Load Audits</h3>
            <ul className="space-y-3 text-xs text-steel font-mono">
              <li className="flex items-center gap-2">✓ In-line statistical process control checks</li>
              <li className="flex items-center gap-2">✓ Automated load-deflection verification</li>
              <li className="flex items-center gap-2">✓ Profile projection measurement before dispatch</li>
            </ul>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-black text-navy font-display">Frequently Asked Questions</h2>
          <div className="grid gap-4">
            {faqItems.map((item) => (
              <article key={item.q} className="rounded-2xl border border-line bg-white p-6 shadow-sm space-y-2">
                <h3 className="text-base font-bold text-navy">{item.q}</h3>
                <p className="text-xs text-steel leading-relaxed">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Related Products */}
        <section className="mt-20 space-y-8">
          <h2 className="text-2xl font-black text-navy font-display">Related Spring Categories</h2>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <ProductCard key={item.slug} product={item} index={index} />
            ))}
          </div>
        </section>

        {/* Final CTA Banner */}
        <div className="mt-20 overflow-hidden rounded-[32px] border border-line bg-gradient-to-r from-[#17324f] via-[#10243b] to-[#091728] text-white shadow-2xl relative">
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />
          <div className="relative z-10 px-8 py-12 md:px-14 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E5C158] font-bold">Request Quotation</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display">Need {product.name} for your application?</h2>
              <p className="text-sm text-[#ccd5df] max-w-xl">
                Share your CAD drawing, wire dimensions, operating environment, and batch quantity with our engineers.
              </p>
            </div>
            <Link 
              href={`/contact?product=${product.slug}`} 
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#9C724A] to-[#825B36] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#9C724A]/30 transition-all duration-300 hover:scale-105 shrink-0"
            >
              <span>Submit RFQ Specifications</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
