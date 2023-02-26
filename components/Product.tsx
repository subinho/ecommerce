import type { SanityDocument } from "@sanity/client";
import Head from "next/head";
import Link from 'next/link'

export default function products({ products }: { products: SanityDocument[] }) {
    console.log(products)
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div className="">
        {products.map((product) => (
          <Link key={product._id} href='#' className="">
            <h2>{product.title}</h2>
          </Link>
        ))}
      </div>
    </>
  );
}