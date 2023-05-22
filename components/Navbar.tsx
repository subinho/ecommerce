import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { MdOutlineShoppingBasket, MdMenu } from 'react-icons/md'
import { useCartContext } from '@/context/CartContext'
import handler from '@/pages/api/hello'

const Navbar = () => {
    const { displayCart, setShowCart } = useCartContext()
    const [size, setSize] = useState(0)
    const [showMenu, setShowMenu] = useState(false)

    const openMenu = () => {
        setShowMenu(true)
    }

    const closeMenu = () => {
        setShowMenu(false)
    }
    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])
  return (
    <nav className='h-14 w-full flex items-center justify-between shadow-sm bg-white font-bold fixed z-20'>
        <div className='pl-4 lg:pl-8'>
            <Link href='/'>
                <h1 className='p-4'>LOGO</h1>
            </Link>
        </div>
        <div className='pr-4 lg:pr-8'>   
            {
                size <= 1024 ?
                <div className='flex gap-4 items-center'>
                    <MdOutlineShoppingBasket size={20} onClick={displayCart}/>
                    <MdMenu size={20} onClick={openMenu}/>
                </div>
                :
                <ul className='flex gap-4 max-sm:gap-0 max-sm:items-center '>
                    <li><Link href='/' className='px-4 py-2 max-sm:px-2 max-sm:py-1 max-sm:text-sm hover:bg-gray-200 rounded-md'>Home</Link></li>
                    <li><Link href='/#products' className='px-4 py-2 max-sm:px-2 max-sm:py-1 max-sm:text-sm hover:bg-gray-200 rounded-md'>Products</Link></li>
                    <li><MdOutlineShoppingBasket className='w-[24px] h-[24px] cursor-pointer click:animate-ping' onClick={displayCart}/></li>
                </ul>
            }
        </div>
        {
            showMenu &&
            <div className='absolute top-0 h-screen w-screen bg-white z-20'>
                <MdMenu size={20} onClick={closeMenu} className='absolute top-4 right-4'/>
                <ul className='flex flex-col justify-center items-center h-screen text-2xl gap-5  '>
                    <li><Link href='/' onClick={closeMenu}>Home</Link></li>
                    <li><Link href='/#products' onClick={closeMenu}>Products</Link></li>
                </ul>
            </div>
        }
    </nav>
  )
}

export default Navbar