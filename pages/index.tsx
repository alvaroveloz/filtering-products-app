import { GetStaticProps } from 'next'
import styles from '../styles/Home.module.css'
import { Product } from './types/Product';
import getProducts from './api/getProducts';
import ProductCard from './components/ProductCard';

type Props = {
  products: Product[];
}

const Home = ( { products }: Props ) => {
  
  return (
    <main>
      <aside><h1>Filtering Products App</h1></aside>
      <section>
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