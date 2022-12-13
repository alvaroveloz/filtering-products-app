import React, { useMemo, useState } from 'react';
import { Filter } from '../types/Filter';


type Props = {
  onChange: (filter: Filter) => void;
};

const PriceRangeFilter: React.FC<Props> = ({ onChange }) => {

  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);

  const handleChangeMin = (value: number) => {
    setMin(value);   
    onChange(value ? (product) => product.price >= value && product.price <=max : null);    
  };

  const handleChangeMax = (value: number) => {
    setMax(value);
    onChange(value ? (product) => product.price <= value && product.price >= min : null);
  };

  

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
      <h4>Filter by Range</h4>
            <input
              type='number'
              value={min}
              onChange={(e) => handleChangeMin(Number(e.target.value))}
            />  
      <input
        type='number'
        value={max}
        onChange={(e) => handleChangeMax(Number(e.target.value))}
      />    
    </div>
  );
};

export default PriceRangeFilter;
