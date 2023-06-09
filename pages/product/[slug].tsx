import { SanityDocument } from "@sanity/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import { Product } from "../../components";
import { ProductInfo } from '../../interfaces/global_interfaces'

const query = groq`*[_type == "products" && slug.current == $slug][0]{
  _id,
  name, 
  image,
  slug,
  price,
  desc,
  sale,
  discount,
}`;

// Prepare Next.js to know which routes already exist
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "Products" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryParams = { slug: params?.slug ?? `` };

  const product = await client.fetch(query, queryParams);

  return {
    props: {
      data: { product },
    },
  };
};

export default function Page({ data }: { data: { product: ProductInfo} }) {
  return <Product product={data.product || null} />
}
