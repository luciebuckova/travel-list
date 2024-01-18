export function Stats({ number, packed, percentage }) {
  if (!number)
    return <p className="stats">Start adding items on your list 🚀</p>;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go ✈️'
          : ` 💼 You have ${number} ${
              number === 1 ? 'item' : 'items'
            } on your list, and
        you already packed ${packed} (${percentage}%)`}
      </em>
    </footer>
  );
}
