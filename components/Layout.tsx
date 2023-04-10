import React from 'react'
import Head from 'next/head'
import { Navbar, Cart } from './'

const Layout = ({children} : any) => {
  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <header>
          <Navbar />
          <Cart />
        </header>
        <main className='px-4 max-w-[1440px] mx-auto'>
            {children}
        </main>
        <footer>

        </footer>

    </>
  )
}

export default Layout