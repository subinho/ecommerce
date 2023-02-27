import Link from "next/link";
import type { SanityDocument } from "@sanity/client";

export default function Products({ products }: { products: SanityDocument[] }) {
  return (
    <>
      <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
        {products.map((product) => (
          <Link key={product._id} href={`product/${product.slug.current}`} className="p-4 hover:bg-blue-50">
            <h2>{product.name}</h2>
          </Link>
        ))}
      </main>
    </>
  );
}