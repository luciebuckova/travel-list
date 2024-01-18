import { useState } from 'react';
import { Logo } from './components/Logo';
import { Form } from './components/Form';
import { List } from './components/List';
import { Stats } from './components/Stats';

export default function App() {
  const [itemsList, setItemsList] = useState([]);
  let numberOfItems = itemsList.length;
  let packedItems = itemsList.filter((item) => item.packed).length;
  let percentage = 0;

  if (Number(packedItems) !== 0) {
    percentage = Math.round(
      (Number(packedItems) / Number(numberOfItems)) * 100
    );
  }

  function addToList(newItem) {
    setItemsList([...itemsList, newItem]);
  }

  function deleteItem(id) {
    setItemsList(itemsList.filter((item) => item.id !== id));
  }

  function toggleItem(id) {
    setItemsList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );
    if (confirmed) setItemsList([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={addToList} />
      <List
        items={itemsList}
        onDeleteItem={deleteItem}
        onToggleItem={toggleItem}
        clearList={clearList}
      />
      <Stats
        number={numberOfItems}
        packed={packedItems}
        percentage={percentage}
      />
    </div>
  );
}
