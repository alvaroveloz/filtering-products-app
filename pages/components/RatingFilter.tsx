import React, { useMemo, useState } from 'react';
import { Filter } from '../types/Filter';

type Props = {
  onChange: (filter: Filter) => void;
};

const RatingFilter: React.FC<Props> = ({ onChange }) => {

  const [selected, setSelected] = useState<Set<number>>(() => new Set());

  const handleChange = (value: number, isChecked: boolean) => {

    const draft = structuredClone(selected);
    if (isChecked) {
      draft.add(value);
    } else {
      draft.delete(value);
    }

    onChange(draft.size ? (product) => draft.has(product.rating) : null);

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
      <h4>Filter by Rating</h4>
      <ul style={{ listStyle: 'none' }}>
        {[5,4,3,2,1].map((rating) => (
          <li key={rating}>
            <input
              type='checkbox'
              value={rating}
              onChange={(e) => handleChange(Number(e.target.value), e.target.checked)}
            />
            <label> {('★').repeat(rating).padEnd(5, '☆') } </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingFilter;
