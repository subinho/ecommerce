import { SanityDocument } from "@sanity/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import { Product } from "../../components";

const query = groq`*[_type == "products" && slug.current == $slug][0]{
  _id,
  name, 
  image,
  slug,
  price,
  desc,
  sale,
  discount
}`;

// Prepare Next.js to know which routes already exist
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "products" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`
  );

  return { paths, fallback: true };
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

export default function Page({ data }: { data: { product: SanityDocument } }) {
  return <Product product={data.product} />
}