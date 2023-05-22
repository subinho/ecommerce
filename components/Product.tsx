import { PortableText } from "@portabletext/react";
import Image from "next/image";
// import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
// import { client } from "../lib/sanity.client";
import Head from "next/head";
import urlFor from "@/lib/urlFor";
import { TiShoppingCart, TiMinus, TiPlus, TiArrowBackOutline } from 'react-icons/ti'
import { MdArrowBack } from 'react-icons/md'
// Context
import { useCartContext } from "@/context/CartContext";
import { ProductInfo } from '../interfaces/global_interfaces'
import { projectId } from "@/lib/sanity.client";
import { useRouter } from "next/router";
import { useState } from 'react'
// const builder = imageUrlBuilder(client);

export default function Product({ product }: { product: ProductInfo }) {
  // console.log(product)
  const { qty, increaseQty, decreaseQty, addToCart } = useCartContext()
  const [selectImage, setSelectImage] = useState(0)
  const router = useRouter()

  const onBuy = (product: ProductInfo, qty: number) => {
    addToCart(product, qty)
    router.push('/checkout')
  }

  const onBack = () => {
    router.back()
  }

  const handleImage = (index: number) => {
    setSelectImage(index)
  }
  return (
    <>
      <Head>
        <title>E-Commerce - {product?.name}</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen relative">
      <div className="grid grid-cols-2 py-10 px-3 shadow-lg max-sm:grid-cols-1 border-2 border-gray-50 relative">
        <div className="absolute top-4 left-4">
          <button
          type="button"
          onClick={onBack}
          ><MdArrowBack size={30}/></button>
        </div>
        {/* left */}
        <div className="mr-6" >
          {/* image */}
          <div className="relative">
            <Image
            src={urlFor(product.image[selectImage]).url()}
            alt=""
            width={800}
            height={800}
            style={{
              objectFit: 'contain',
              margin: '0 auto'
            }}
            />
          </div>
          {/* small images */}
          <div className='grid grid-cols-5'>
            {product.image.map((img, i) => {
              return (
                <div key={i} className={i === selectImage ? 'border-green-400 border-2 rounded-md' : 'hover:bg-gray-100'}>
                  <Image
                  src={urlFor(img).url()}
                  alt=''
                  width={200}
                  height={200}
                  onMouseEnter={() => handleImage(i)}
                  style={{
                    objectFit: 'contain'
                  }}
                  />
                </div>
              )
            })}
          </div>
        </div>
        
            {/* right */}
          <div>
            <h2 className='text-3xl font-bold tracking-wide mb-6'>{product.name}</h2>
            <span className="text-2xl font-semibold">$ {product.price}</span>
            <div className="mt-3">
              <span>4/5 ⭐</span>
            </div>
            <p className="mt-5 text-base font-light leading-6 text-gray-500  ">{product.desc}</p>
            {/* quantity */}
            <div className="flex gap-2 items-center w-fit mt-6">
              <button type="button" onClick={decreaseQty} className='bg-green-400 rounded-md pointer p-1 text-white'><TiMinus /></button>
              <span>{qty}</span>
              <button type="button" onClick={increaseQty} className='bg-green-400 rounded-md pointer p-1 text-white'><TiPlus /></button>
            </div>
            {/* buttons */}
            <div className="mt-4">
              <button
              type='button'
              className=" px-5 py-4 bg-black text-white rounded-md border-2 border-black mr-4"
              onClick={() => addToCart(product, qty)}
              >
                Add to cart
              </button>

              <button
              type="button"
              className="px-5 py-4 shadow-md   border-gray-50 border-2   rounded-md"
              onClick={() => onBuy(product, qty)}
              >
                Buy Now
              </button>
            </div>
          </div>
            
      </div>
      </div>
    </>
  )
}





{/* <div className="container mx-auto prose prose-lg p-4">
        <h2 className="font-bold text-[35px] sm:text-center">{product?.name}</h2>
        <Image
          className=" sm:float-left m-0 w-1/3 mr-4 rounded-lg cursor-pointer   sm:border-r-4 max-sm:border-2"
          src={urlFor(product?.image[0]).url()}
          width={500}
          height={500}
          alt={product?.name}
        />
        // {/* DESCRIPTION */} 
        // <div className="flex flex-col">
        //   <span className="text-[#fcd53f] mt-0.5">4/5⭐</span>
        //   <span className="text-2xl mt-2">${product?.price}</span>
        //   <p className="text-sm text-gray-400 mt-4 w-1/2">{product?.desc}</p>
        //   <p className="text-green-400 font-bold text-xl mt-4">In stock</p>
        //   <div className="max-w-[450px]">
        //     <div className="border-2 w-[55px] px-2 flex justify-center items-center mt-4">
        //       <span 
        //       className="mr-1"
        //       onClick={decreaseQty}
        //       ><TiMinus /></span>
        //       <p className="font-bold">{qty}</p>
        //       <span 
        //       className="ml-1"
        //       onClick={increaseQty}
        //       ><TiPlus /></span>
        //     </div>
        //     <button 
        //     type='button'
        //     onClick={() => addToCart(product, qty)}
        //     className="flex justify-center align-center px-4 py-2 bg-gray-200 w-full mt-8">
        //       ADD TO CART
        //     </button>
        //     <button 
        //     type='button'
        //     className="flex justify-center align-center px-4 py-2 bg-gray-200 w-full mt-2">
        //       BUY NOW
        //     </button>
        //   </div>

        // </div>
        // {/* <div>
        //   <h2 className="mt-12 text-2xl">Alternatives</h2>
        // </div> */}
        // {/* <PortableText value={product.desc} /> */}
        // </div> */}