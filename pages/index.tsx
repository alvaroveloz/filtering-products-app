import { GetStaticProps, NextPage } from 'next'
import { Product } from './types/Product';
import getProducts from './api/getProducts';
import ProductCard from './components/ProductCard';
import PriceRangeFilter from './components/PriceRangeFilter';
import ColorFilter from './components/ColorFilter';
import RatingFilter from './components/RatingFilter';
import { useState } from 'react';

type Props = {
  products: Product[];
}

const Home: NextPage<Props> = ( { products }: Props ) => {
  
  const [filters, setFilters] = useState({
    price: null,
    color: null,
    rating: null,
  })

  return (
    <main style={{display: 'flex'}}>
      <aside>
        <h1>Filtering Products App</h1>
        <PriceRangeFilter />
        <ColorFilter products={ products } />
        <RatingFilter />
        </aside>
      <section style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 12 }}>
          { products.map((product)=> (
        <article key={product.id}>
            <ProductCard product={product}></ProductCard>
        </article>
          ) ) }

      </section>
    </main>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    }
  }
}

export default Home;