import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check, ShieldCheck, Cpu } from "lucide-react";
import { getProduct, products } from "../../../lib/products";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import SpringLoadSimulator from "../../../components/ui/SpringLoadSimulator";

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
  const description = `Custom ${product.name} manufactured by Darbar Springwala in Jamnagar, Gujarat. Famous spring manufacturer & supplier in Jamnagar GIDC. ISO 9001:2015 certified. Fast delivery across India.`;

  return {
    title,
    description,
    keywords: [
      `${product.name} Manufacturer Jamnagar`,
      `${product.name} Factory Gujarat`,
      `${product.name} Supplier Jamnagar`,
      `${product.name} in Jamnagar`,
      "Famous Spring Manufacturer Jamnagar",
      "Spring Wala in Jamnagar",
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

  const productIndex = products.findIndex((p) => p.slug === slug);
  const catNumber = `CAT #${(productIndex >= 0 ? productIndex + 1 : 1).toString().padStart(2, "0")}`;

  const faqItems = [
    {
      q: `Can ${product.name} be manufactured to custom dimensions in Jamnagar?`,
      a: "Yes. Custom wire diameters, inner/outer diameters, free length, and active coil counts are manufactured in our Jamnagar GIDC factory to your exact drawing or sample specifications.",
    },
    {
      q: "What materials and surface treatments are available?",
      a: `We supply ${product.name} in ${product.materials.slice(0, 3).join(", ")}, with finish options including ${product.finishes.slice(0, 3).join(", ")}.`,
    },
    {
      q: "How can I request a quotation for technical drawings?",
      a: "You can submit CAD drawings (STEP, PDF, DWG) or physical sample specifications directly to our Jamnagar engineering team for immediate technical review and quotation.",
    },
  ];

  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": `${product.name} in Jamnagar`,
    "image": product.images.map((img) => `https://www.darbarspringwala.com${img}`),
    "description": product.description,
    "sku": product.slug,
    "brand": {
      "@type": "Brand",
      "name": "Darbar Springwala",
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Darbar Springwala Jamnagar",
      "url": "https://www.darbarspringwala.com",
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "1",
      "highPrice": "1000",
      "offerCount": "10000",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Darbar Springwala Jamnagar",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.darbarspringwala.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://www.darbarspringwala.com/products",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": `https://www.darbarspringwala.com/products/${product.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f9fa] py-10 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* 1. Breadcrumb Row & Catalog Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#17324F]/10 pb-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-xs text-steel">
            <Link href="/" className="hover:text-[#9C724A] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#9C724A] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#17324F] font-semibold">{product.name}</span>
          </nav>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[2px] bg-[#9C724A]/10 text-[#825B36] border border-[#9C724A]/20 font-mono text-[10px] font-medium uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5 text-[#9C724A]" />
              ISO 9001:2015
            </span>
            <span className="font-mono text-xs text-[#9C724A] font-medium uppercase tracking-widest bg-white border border-[#17324F]/15 px-3 py-0.5 rounded-[2px]">
              {catNumber}
            </span>
          </div>
        </div>

        {/* 2. Eyebrow + H1 Product Name + Description */}
        <header className="space-y-3">
          <div className="eyebrow">
            № {catNumber} — FAMOUS SPRING MANUFACTURER IN JAMNAGAR
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold text-[#17324F] font-display tracking-tight">
            {product.name} <span className="text-[#9C724A]">in Jamnagar</span>
          </h1>
          <p className="text-sm sm:text-base text-steel max-w-3xl leading-relaxed">
            {product.shortDescription || product.description}
          </p>
        </header>

        {/* 3. Image Showcase & Mini Load Simulator */}
        <section className="grid gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-[#17324F]/15 bg-[#FBFAF7] p-6 flex items-center justify-center">
              <Image
                src={product.images[0] || "/placeholder.jpg"}
                alt={`${product.name} Manufacturer in Jamnagar`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-4 drop-shadow-md transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
            
            {/* Material Grade Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              {product.materials.map((mat) => (
                <span key={mat} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[2px] bg-white border border-[#17324F]/15 text-[#17324F] font-mono text-xs font-medium">
                  <Cpu className="h-3 w-3 text-[#9C724A]" />
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Mini Load Simulator Scoped to Product Class */}
          <div className="lg:col-span-6">
            <SpringLoadSimulator title={`${product.name.toUpperCase()} KINEMATICS`} />
          </div>
        </section>

        {/* 4. Spec Block Grid (2x2 / 4-col) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[1px] bg-[#9C724A]" />
            <h2 className="text-xl font-semibold text-[#17324F] font-display">Engineering Specifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-[2px] border border-[#17324F]/15 bg-white p-[22px] space-y-1.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-steel font-medium block">Material Grades</span>
              <p className="text-sm font-semibold text-[#17324F]">{product.materials.join(", ")}</p>
            </div>
            <div className="rounded-[2px] border border-[#17324F]/15 bg-white p-[22px] space-y-1.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-steel font-medium block">Surface Finishes</span>
              <p className="text-sm font-semibold text-[#17324F]">{product.finishes.join(", ")}</p>
            </div>
            <div className="rounded-[2px] border border-[#17324F]/15 bg-white p-[22px] space-y-1.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-steel font-medium block">Manufacturing Location</span>
              <p className="text-sm font-semibold text-[#17324F]">Jamnagar GIDC, Gujarat, India</p>
            </div>
            <div className="rounded-[2px] border border-[#17324F]/15 bg-white p-[22px] space-y-1.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-steel font-medium block">Application Sector</span>
              <p className="text-sm font-semibold text-[#17324F]">{product.applicationTag || "Application-Specific"}</p>
            </div>
          </div>
        </section>

        {/* 5. Target Applications */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[1px] bg-[#9C724A]" />
            <h2 className="text-xl font-semibold text-[#17324F] font-display">Target Applications & Use-Cases</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {product.applications.map((app) => (
              <div key={app} className="flex items-center gap-3 rounded-[2px] border border-[#17324F]/15 bg-white p-4 text-xs font-medium text-[#17324F]">
                <span className="p-1 rounded-[2px] bg-[#9C724A]/10 text-[#9C724A] shrink-0">
                  <Check className="h-4 w-4" />
                </span>
                <span>{app}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. FAQ Mini-Accordion */}
        <section className="space-y-4 pt-4 border-t border-[#17324F]/10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[1px] bg-[#9C724A]" />
            <h2 className="text-xl font-semibold text-[#17324F] font-display">Technical FAQs</h2>
          </div>
          <div className="space-y-2">
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

        {/* 7. CTA Band */}
        <section className="rounded-[2px] border border-[#17324F]/15 bg-[#17324F] text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold font-display">
              Need {product.name.toLowerCase()} in Jamnagar?
            </h2>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl">
              Connect with our Jamnagar GIDC engineering team to receive a blueprint quotation and technical feasibility assessment.
            </p>
          </div>
          <Button href={`/contact?product=${product.slug}`} variant="primary" size="default">
            Request Blueprint Quote
          </Button>
        </section>

      </div>
    </main>
  );
}
