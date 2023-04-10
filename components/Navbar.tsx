import React from 'react'
import Link from 'next/link'
import { MdOutlineShoppingBasket } from 'react-icons/md'
import { useCartContext } from '@/context/CartContext'

const Navbar = () => {
    const { displayCart } = useCartContext()
  return (
    <nav className='h-14 w-full flex items-center justify-between px-16 shadow-md bg-white font-bold'>
        <div>
            <Link href='#'>
                <h1 className='p-4'>LOGO</h1>
            </Link>
        </div>
        <div>
            <ul className='flex gap-4'>
                <li><Link href='#' className='px-4 py-2 hover:bg-gray-200 rounded-md'>OPTION 1</Link></li>
                <li><Link href='#' className='px-4 py-2 hover:bg-gray-200 rounded-md'>OPTION 2</Link></li>
                <li><Link href='#' className='px-4 py-2 hover:bg-gray-200 rounded-md'>OPTION 3</Link></li>
                <li><MdOutlineShoppingBasket className='w-[24px] h-[24px] cursor-pointer' onClick={displayCart}/></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar