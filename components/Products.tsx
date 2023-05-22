import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Image from 'next/image'
import urlFor from '@/lib/urlFor'
import { useState } from 'react'

export default function Products({ products }: { products: SanityDocument[] }) {
  const [render, setRender] = useState(products)
  const onFilter = (value: string) => {
    setRender(products)
    if(value !== '') {
      setRender(prev => prev.filter(item => item.category === value))
    }
  }
  return (
    <div className="container" id='products'>
      <div className="flex items-center gap-2 mb-6">
        <button 
        type='button' 
        onClick={() => onFilter('')}
        className="border-green-400 border-none rounded-xl py-1 px-4 font-medium bg-green-200 "
        >All</button>
        <button 
        type='button' 
        onClick={() => onFilter('headphones')}
        className="border-green-400 border-none rounded-xl py-1 px-4 font-medium bg-green-200 "
        >Headphones</button>
        <button 
        type='button' 
        onClick={() => onFilter('keyboards')}
        className="border-green-400 border-none rounded-xl py-1 px-4 font-medium bg-green-200 "
        >Keyboards</button>  
        <button 
        type='button' 
        onClick={() => onFilter('mouses')}
        className="border-green-400 border-none rounded-xl py-1 px-4 font-medium bg-green-200 "
        >Mouses</button>  
      </div>
      <div className="mx-auto grid grid-cols-5 gap-4 max-sm:grid-cols-1">

      {render.map((product) => (
        <Link key={product._id} href={`product/${product.slug.current}`} className="shadow-md hover:scale-105">
          <Image 
          src={urlFor(product?.image[0]).url()}
          alt=''
          width={400  }
          height={400 }
          className="bg-gray-50"
          />
          <div className="p-4 w-full flex flex-col">
              <h3 className="font-medium">{product.name}</h3>
              <p className="align-bottom">${product.price}</p>
          </div>
        </Link>


      ))}
      </div>
    </div>
  );
}