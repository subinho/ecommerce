import type { SanityDocument } from "@sanity/client";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import { HeroBanner, Products } from '../components'

const query = groq`*[_type == "products" && defined(slug.current)]{
  _id,
  name, 
  image,
  slug,
  price,
  desc,
  sale,
  discount
}`;

export const getStaticProps = async () => {
  const data = await client.fetch(query);

  return { props: { data } };
};

export default function Home( { data }: { data: SanityDocument[] } ) {
  return (
    <div className="h-[calc(100vh-56px)] relative">
      <HeroBanner />
      <div>
        <h3 className="mt-4 font-bold text-xl">Most popular products</h3>
        <Products products={data}/>
      </div>
    </div>
  )
}