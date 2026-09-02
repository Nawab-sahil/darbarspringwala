import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check, ShieldCheck } from "lucide-react";
import { getProduct, products } from "../../../lib/products";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

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

  const title = `${product.name} Manufacturer in Jamnagar, Gujarat | Darbar Springwala`;
  const description = `Custom ${product.name} manufactured by Darbar Springwala in Jamnagar, Gujarat. ${product.shortDescription} ISO 9001:2015 certified. Fast delivery across India.`;

  return {
    title,
    description,
    keywords: [
      `${product.name} Manufacturer Jamnagar`,
      `${product.name} Factory Gujarat`,
      `${product.name} Supplier Jamnagar`,
      `Industrial ${product.name} India`,
      "Darbar Springwala Jamnagar",
    ],
    openGraph: {
      title,
      description,
      url: `https://www.darbarspringwala.com/products/${product.slug}`,
      siteName: "Darbar Springwala Jamnagar",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: product.images[0] || "/logo.png",
          alt: `${product.name} Manufacturer Jamnagar`,
        },
      ],
    },
    alternates: {
      canonical: `https://www.darbarspringwala.com/products/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const faqItems = [
    {
      q: `Can ${product.name} be manufactured to custom dimensions?`,
      a: "Yes. Custom wire diameters, inner/outer diameters, free length, and active coil counts are manufactured to your exact drawing or sample specifications.",
    },
    {
      q: "What materials and surface treatments are available?",
      a: `We supply ${product.name} in ${product.materials.slice(0, 3).join(", ")}, with finish options including ${product.finishes.slice(0, 3).join(", ")}.`,
    },
    {
      q: "How can I request a quotation for technical drawings?",
      a: "You can submit CAD drawings (STEP, PDF, DWG) or physical sample specifications directly to our engineering team for immediate technical review and quotation.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f9fa] py-10 lg:py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* 1. Breadcrumb Row */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-steel">
          <Link href="/" className="hover:text-bronze transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-bronze transition-colors">Products</Link>
          <span>/</span>
          <span className="text-navy font-bold">{product.name}</span>
        </nav>

        {/* 2. Eyebrow + H1 Product Name + 1-Sentence Description */}
        <header className="space-y-3">
          <span className="eyebrow block">
            Manufacturer & Supplier of
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy font-display tracking-tight">
            {product.name}
          </h1>
          <p className="text-sm sm:text-base text-steel max-w-3xl leading-relaxed">
            {product.shortDescription || product.description}
          </p>
        </header>

        {/* 3. Image Gallery */}
        <section className="grid gap-6 lg:grid-cols-12 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-line/70 bg-gradient-to-b from-[#fbf9f5] to-[#f4efe6] shadow-sm flex items-center justify-center p-6 sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0%,transparent_75%)] pointer-events-none" />
              <Image
                src={product.images[0] || "/placeholder.jpg"}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-contain p-4 drop-shadow-lg transition-transform duration-500 hover:scale-105"
                priority
              />
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#17324F] text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-xs">
                <ShieldCheck className="h-3.5 w-3.5 text-[#E5C158]" />
                ISO 9001:2015 Audited
              </span>
            </div>

            {/* Thumbnail row if multiple images */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <div key={img} className="relative h-20 w-24 shrink-0 rounded-xl border border-line bg-white p-2 overflow-hidden shadow-xs">
                    <Image src={img} alt={`${product.name} thumbnail ${idx + 1}`} fill className="object-contain p-1" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-line bg-white p-6 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-navy font-display">Technical Overview</h2>
            <p className="text-xs text-steel leading-relaxed">
              {product.description}
            </p>
            <div className="pt-2 border-t border-line/60">
              <Button href={`/contact?product=${product.slug}`} variant="primary" size="default" className="w-full">
                Request Specifications
              </Button>
            </div>
          </div>
        </section>

        {/* 4. Spec Block Grid (2x2 / 4-col) */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-navy font-display">Engineering Specifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl border border-line bg-white p-5 space-y-1.5 shadow-xs">
              <span className="font-mono text-[11px] uppercase tracking-wider text-steel font-semibold block">Material</span>
              <p className="text-sm font-bold text-navy">{product.materials.join(", ")}</p>
            </div>
            <div className="rounded-xl border border-line bg-white p-5 space-y-1.5 shadow-xs">
              <span className="font-mono text-[11px] uppercase tracking-wider text-steel font-semibold block">Finish</span>
              <p className="text-sm font-bold text-navy">{product.finishes.join(", ")}</p>
            </div>
            <div className="rounded-xl border border-line bg-white p-5 space-y-1.5 shadow-xs">
              <span className="font-mono text-[11px] uppercase tracking-wider text-steel font-semibold block">Manufacturing Process</span>
              <p className="text-sm font-bold text-navy">{product.process || "Automated CNC Spring Coiling & Tempering"}</p>
            </div>
            <div className="rounded-xl border border-line bg-white p-5 space-y-1.5 shadow-xs">
              <span className="font-mono text-[11px] uppercase tracking-wider text-steel font-semibold block">Application</span>
              <p className="text-sm font-bold text-navy">{product.applicationTag || "Application-Specific"}</p>
            </div>
          </div>
        </section>

        {/* 5. "Applications" Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-navy font-display">Target Applications & Industry Use-Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {product.applications.map((app) => (
              <div key={app} className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 text-xs font-semibold text-navy shadow-xs">
                <span className="p-1 rounded-full bg-bronze/10 text-bronze shrink-0">
                  <Check className="h-4 w-4" />
                </span>
                <span>{app}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. FAQ Mini-Accordion (Reusing <Card variant="faq">) */}
        <section className="space-y-4 pt-4 border-t border-line/60">
          <h2 className="text-xl font-extrabold text-navy font-display">Frequently Asked Questions</h2>
          <div className="space-y-1">
            {faqItems.map((item) => (
              <Card
                key={item.q}
                variant="faq"
                question={item.q}
                answer={item.a}
              />
            ))}
          </div>
        </section>

        {/* 7. CTA Band (Reusing <Button variant="primary">) */}
        <section className="rounded-2xl border border-line bg-[#081423] text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
              Need {product.name.toLowerCase()} for your application?
            </h2>
            <p className="text-xs sm:text-sm text-steel-2/90 max-w-xl">
              Connect with our Jamnagar engineering team to receive a blueprint quotation and technical feasibility assessment.
            </p>
          </div>
          <Button href={`/contact?product=${product.slug}`} variant="primary" size="default">
            Request a Quote
          </Button>
        </section>

      </div>
    </main>
  );
}
