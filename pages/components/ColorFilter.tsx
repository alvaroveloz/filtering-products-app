import React, { useMemo } from "react"
import { Product } from '../types/Product';

type Props = {
  products: Product[];
};

const ColorFilter: React.FC<Props> = ({ products }) => {
  const colors = useMemo(() => {
    const buffer: Set<string> = new Set();

    for (let product of products) {
      buffer.add(product.color);
      
    }
    return Array.from(buffer);

  }, [products]);

  const handleChange = (value: string, checked: boolean) => {
    console.log({ value, checked});
  }

  
  return (
    <ul style={{border: '1px solid white', padding: 12}}>
      { colors.map((color)=>(
        <li key={color}>
          <input type='checkbox' value={color} onChange={(e)=> handleChange(e.target.value, e.target.checked)} />
          <label> { color } </label>

        </li>
      ))}
    </ul>
  )
}

export default ColorFilter