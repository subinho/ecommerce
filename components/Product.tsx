import { PortableText } from "@portabletext/react";
import Image from "next/image";
// import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
// import { client } from "../lib/sanity.client";
import Head from "next/head";
import urlFor from "@/lib/urlFor";
import { TiShoppingCart, TiMinus, TiPlus } from 'react-icons/ti'
// Context
import { useCartContext } from "@/context/CartContext";

// const builder = imageUrlBuilder(client);

export default function Product({ product }: { product: SanityDocument }) {
  // console.log(product)
  const { qty, increaseQty, decreaseQty } = useCartContext()
  return (
    <>
      <Head>
        <title>E-Commerce - {product.name}</title>
      </Head>
      <div className="container mx-auto prose prose-lg p-4">
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg cursor-pointer border-r-4"
          src={urlFor(product.image[0]).url()}
          width={300}
          height={300}
          alt={product.name}
        />
        {/* DESCRIPTION */}
        <div className="flex flex-col">
          <h2 className="font-bold text-[35px]">{product.name}</h2>
          <span className="text-[#fcd53f] mt-0.5">4/5⭐</span>
          <span className="text-2xl mt-2">${product.price}</span>
          <p className="text-sm text-gray-400 mt-4 w-1/2">{product.desc}</p>
          <p className="text-green-400 font-bold text-xl mt-4">In stock</p>
          <div className="max-w-[450px]">
            <div className="border-2 w-[55px] px-2 flex justify-center items-center mt-4">
              <span 
              className="mr-1"
              onClick={decreaseQty}
              ><TiMinus /></span>
              <p className="font-bold">{qty}</p>
              <span 
              className="ml-1"
              onClick={increaseQty}
              ><TiPlus /></span>
            </div>
            <button 
            type='button'
            className="flex justify-center align-center px-4 py-2 bg-gray-200 w-full mt-8">
              ADD TO CART
            </button>
            <button 
            type='button'
            className="flex justify-center align-center px-4 py-2 bg-gray-200 w-full mt-2">
              BUY NOW
            </button>
          </div>

        </div>
        <div>
          <h2 className="mt-12 text-2xl">Alternatives</h2>
        </div>
        {/* <PortableText value={product.desc} /> */}
      </div>
    </>
  );
}