import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'

export default function productsheet({products}) {
  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='max-w-screen-xl mx-auto'>
        
        <ProductFeed className="" products={products} />
      </main>
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
