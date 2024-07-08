import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDelete,
  onCheckBox,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input order");

  let sortedItems;
  if (sortBy === "input order") sortedItems = items;

  if (sortBy === "alphabets")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  let isDisbaled = sortedItems.length === 0;
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDelete}
            onCheckBoxItem={onCheckBox}
            key={item.id}
          />
        ))}
      </ul>
      <div className="action">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          disabled={isDisbaled}
          className={isDisbaled ? "disabled-btn" : ""}
        >
          <option value="input order">Sort by input order</option>
          <option value="alphabets">Sort by alphabets</option>
          <option value="packed">Sort by packed</option>
        </select>

        <button
          onClick={onClearList}
          disabled={isDisbaled}
          className={isDisbaled ? "disabled-btn" : ""}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
