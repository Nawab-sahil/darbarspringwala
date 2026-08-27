import Link from "next/link";
import Image from "next/image";
import type { Product } from "../../lib/products";

type ProductCardProps = {
  product: Product;
  index: number;
};

export default function ProductCard({ product, index }: ProductCardProps) {
  const mainImage = product.images[0] || "/placeholder.jpg";

  return (
    <article className="card-base group relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-navy hover:shadow-[0_20px_44px_rgba(23,50,79,0.14)] flex flex-col h-full bg-surface">
      <span className="absolute left-0 top-0 z-10 h-1 w-full bg-[linear-gradient(90deg,#9c724a_0%,#b98f5e_50%,#9c724a_100%)] opacity-70" />
      
      {/* Product Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2 border-b border-line/50">
        <Image
          src={mainImage}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-md bg-navy/90 backdrop-blur-md px-2.5 py-1 font-mono text-[11px] tracking-[0.1em] text-white z-10">
          {(index + 1).toString().padStart(2, "0")}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold leading-tight text-navy transition-colors duration-200 group-hover:text-bronze">
          {product.name}
        </h3>
        <p className="mt-3 text-steel leading-7 flex-grow">{product.shortDescription}</p>
        
        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="inline-flex rounded-full bg-surface-2 px-3 py-1 font-mono text-[11px] tracking-[0.08em] uppercase text-bronze">
            {product.applicationTag}
          </span>
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 border-b border-line pb-0.5 text-[14px] font-semibold transition-colors duration-200 group-hover:border-bronze group-hover:text-bronze"
          >
            Details
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
