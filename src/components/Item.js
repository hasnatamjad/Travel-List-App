export default function Item({ item, onDeleteItem, onCheckBoxItem }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onCheckBoxItem(item.id)}
        />
        <span className={item.packed ? "list-packed" : ""}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    </div>
  );
}
