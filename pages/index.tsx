import type { SanityDocument } from "@sanity/client";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

const query = groq`*[_type == "products" && defined(slug.current)]{
  _id,
  title, 
}`;

export const getStaticProps = async () => {
  const data = await client.fetch(query);

  return { props: { data } };
};

export default function Home( { data }: { data: SanityDocument[] } ) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      Populate me with Sanity Content

    </div>
  )
}