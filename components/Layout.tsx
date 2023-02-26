import React from 'react'
import Head from 'next/head'

const Layout = ({children} : any) => {
  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <header>

        </header>
        <main className='px-4'>
            {children}
        </main>
        <footer>

        </footer>

    </>
  )
}

export default Layout