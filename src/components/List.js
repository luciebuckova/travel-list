import { useState } from 'react';

export function List({ items, onDeleteItem, onToggleItem, clearList }) {
  const [order, setOrder] = useState('input');

  let sortedList;

  if (order === 'input') sortedList = items;

  if (order === 'description')
    sortedList = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (order === 'packed')
    sortedList = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              value={item.packed}
              onChange={() => onToggleItem(item.id)}
            />
            <span>{item.quantity}</span>
            <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
              {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <div>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );
}
