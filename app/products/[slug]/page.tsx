import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, products } from "../../../lib/products";
import ProductCard from "../../../components/ui/ProductCard";

const faqItems = [
  {
    q: "Can this spring be manufactured in custom dimensions?",
    a: "Yes. Custom dimensions are available to requirement based on application and design input.",
  },
  {
    q: "Can I share a drawing or sample for quotation?",
    a: "Yes. You can share a drawing, specification, or application details while submitting your enquiry.",
  },
  {
    q: "Are materials and finishes fixed?",
    a: "Material and finish options are available to requirement based on application and operating conditions.",
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
    <main className="section-pad">
      <div className="container">
        {/* Breadcrumbs */}
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-steel">
          <Link href="/" className="hover:text-bronze">Home</Link> /{" "}
          <Link href="/products" className="hover:text-bronze">Products</Link> / {product.name}
        </p>

        {/* Hero Section with Product Image and Info */}
        <section className="mt-8 grid gap-10 border-b border-line pb-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column: Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-surface-2 shadow-sm">
              <Image
                src={mainImage}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-surface-2 cursor-pointer hover:border-bronze transition-colors duration-200"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} gallery image ${i + 1}`}
                      fill
                      sizes="20vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Title, Overview and Quick Action Card */}
          <div className="flex flex-col justify-between gap-6">
            <div>
              <p className="eyebrow">Product Overview</p>
              <h1 className="text-[clamp(34px,4vw,48px)] leading-[1.1] font-semibold text-navy mt-2">
                {product.name}
              </h1>
              <p className="mt-6 text-lg leading-8 text-steel">{product.description}</p>
            </div>
            
            <div className="card-base p-6 bg-[linear-gradient(155deg,#fff_0%,#f2ede2_100%)]">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bronze">Application Focus</p>
              <p className="mt-3 text-xl font-semibold text-navy">{product.applicationTag}</p>
              <p className="mt-4 text-steel">
                Available to specification based on load requirements, dimensional boundaries, and operating environment.
              </p>
              <Link href={`/contact?product=${product.slug}`} className="btn-primary mt-6 w-full text-center">
                Request Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-navy">Key Applications</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {product.applications.map((application) => (
              <div key={application} className="rounded-md border border-line bg-surface px-4 py-3 text-steel font-medium shadow-sm">
                {application}
              </div>
            ))}
          </div>
        </section>

        {/* Specifications Grid */}
        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="card-base p-6 bg-surface">
            <h2 className="text-2xl font-semibold text-navy">Engineering Characteristics</h2>
            <ul className="mt-4 space-y-2.5 text-steel">
              <li>• Fully customizable outer/inner diameters and length</li>
              <li>• Designed to specification for optimal fatigue life</li>
              <li>• Manufactured from high-tensile wire options</li>
            </ul>
          </article>
          <article className="card-base p-6 bg-surface">
            <h2 className="text-2xl font-semibold text-navy">Materials</h2>
            <ul className="mt-4 space-y-2.5 text-steel">
              {product.materials.map((material) => (
                <li key={material}>• {material}</li>
              ))}
            </ul>
          </article>
          <article className="card-base p-6 bg-surface">
            <h2 className="text-2xl font-semibold text-navy">Finishes</h2>
            <ul className="mt-4 space-y-2.5 text-steel">
              {product.finishes.map((finish) => (
                <li key={finish}>• {finish}</li>
              ))}
            </ul>
          </article>
        </section>

        {/* Process and Quality */}
        <section className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <article className="card-base p-6 bg-surface">
            <h2 className="text-2xl font-semibold text-navy">Manufacturing Process</h2>
            <p className="mt-4 leading-8 text-steel">{product.process}</p>
          </article>
          <article className="card-base p-6 bg-surface">
            <h2 className="text-2xl font-semibold text-navy">Quality Assurance</h2>
            <ul className="mt-4 space-y-2.5 text-steel">
              <li>• In-line statistical process control checks</li>
              <li>• High precision load testing on sample batches</li>
              <li>• 100% dimensional and finish verification before dispatch</li>
            </ul>
          </article>
        </section>

        {/* FAQs */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-navy">Frequently Asked Questions</h2>
          <div className="mt-6 grid gap-4">
            {faqItems.map((item) => (
              <article key={item.q} className="card-base p-6 bg-surface">
                <h3 className="text-xl font-semibold text-navy">{item.q}</h3>
                <p className="mt-3 text-steel leading-7">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-navy">Related Products</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item, index) => (
              <ProductCard key={item.slug} product={item} index={index} />
            ))}
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="mt-16 rounded-2xl border border-line bg-navy px-8 py-10 text-white shadow-md">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bronze-2">Request Quote</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight">Need {product.name} for your application?</h2>
          <p className="mt-4 max-w-2xl text-[#c7cfd7]">
            Share your drawing, dimensions, quantity, and requirement details with our engineering team.
          </p>
          <Link href={`/contact?product=${product.slug}`} className="btn-primary mt-7 inline-block">
            Request a Quote
          </Link>
        </section>
      </div>
    </main>
  );
}
