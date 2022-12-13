import React, { useMemo, useState } from 'react';
import { Filter } from '../types/Filter';
import { Product } from '../types/Product';

type Props = {
  products: Product[];
  onChange: (filter: Filter) => void;
};

const ColorFilter: React.FC<Props> = ({ products, onChange }) => {

  const [selected, setSelected] = useState<Set<string>>(()=> new Set());

  const colors = useMemo(() => {
    const buffer: Set<string> = new Set();

    for (let product of products) {
      buffer.add(product.color);
    }
    return Array.from(buffer);
  }, [products]);

  const handleChange = (value: string, isChecked: boolean) => {
    
    const draft = structuredClone(selected);
    if (isChecked) {
      draft.add(value);
    } else{
      draft.delete(value);
    }

    onChange(draft.size ? (product)=> draft.has(product.color) : null );

    setSelected(draft);
  };
  
  console.log(selected);

  return (
    <div
      style={{
        border: '1px solid white',
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <h4>Filter by Colors</h4>
      <ul style={{ listStyle: 'none' }}>
        {colors.map((color) => (
          <li key={color}>
            <input
              type='checkbox'
              value={color}
              onChange={(e) => handleChange(e.target.value, e.target.checked)}
            />
            <label> {color} </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorFilter;
