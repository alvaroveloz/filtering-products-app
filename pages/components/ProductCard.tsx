import { Product } from '../types/Product';
import Image from 'next/image';
import React from 'react';

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
          <Image src={product.image} alt={product.name} width={200} height= {200}
              />
      <h3>{ product.name }</h3>
      <p>Valoración { product.rating }</p>
      <p>{ product.price}</p>
    </div>
  );
};

export default ProductCard;
