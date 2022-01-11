import Head from 'next/head'
import Banner from '../components/Banner'

import Header from '../components/Header'
import ProductFeed from './components/ProductFeed'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Home({products}) {
  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='max-w-screen-xl mx-auto'>
        <Banner />
        <ProductFeed  products={products} />
        <bottom />
      </main>
      <Footer
    </div>
  )
}
export async function getServerSideProps(context) {
  const products= await fetch("https://fakestoreapi.com/products").then(
    (res)=>res.json()
  );

  return {
    props :{
      products,
    },
  };
}