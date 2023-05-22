import type { SanityDocument } from "@sanity/client";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import { HeroBanner, Products } from '../components'

const query = groq`*[_type == "products" && defined(slug.current)]{
  _id,
  category,
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
  // console.log(data)
  return (
    <div className="h-[calc(100vh-56px)] relative">
      <HeroBanner />
      <div>
        <h3 className="my-7 font-bold text-3xl text-center font-mono">Products</h3>
        <Products products={data}/>
      </div>
    </div>
  )
}