import { Product } from '../types/Product';
import Image from 'next/image';


type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        position: 'relative'
      }}
    >
          <Image src={product.image} alt={product.name} width={300} height= {300}
              />
      <h3>{ product.name }</h3>
      <p>Valoración {('★').repeat(product.rating).padEnd(5, '☆') }</p>
      <p>{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
    </div>
  );
};

export default ProductCard;
