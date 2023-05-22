import React from 'react'
import Image from 'next/image'
import image from '../assets/images/hero-banner.png'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div>
        <Link href='#products' id='banner'>
            <Image src={image} alt='' height={550} width={1440}/>
        </Link>
    </div>
  )
}

export default HeroBanner