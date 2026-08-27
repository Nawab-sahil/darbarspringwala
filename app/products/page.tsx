import ProductCard from "../../components/ui/ProductCard";
import { products } from "../../lib/products";

export default function ProductsPage() {
  return (
    <main className="section-pad">
      <div className="container">
        <div className="max-w-4xl">
          <p className="eyebrow">Product Range</p>
          <h1 className="text-[clamp(34px,4.6vw,56px)] leading-[1.08] font-semibold">
            Spring Solutions Engineered for Industrial Application Requirements.
          </h1>
          <p className="mt-5 text-lg leading-8 text-steel">
            Explore Darbar Springwala spring categories for automotive, industrial, engineering, and OEM use-cases.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
