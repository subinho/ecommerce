import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components'
import CartContext from '../context/CartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext>
  )
}
