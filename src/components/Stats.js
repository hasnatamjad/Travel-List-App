export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packPercent = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {packPercent === 100 ? (
        <em>Everything is packed 💼, ready to go ✈</em>
      ) : (
        <em>
          You have {numItems}
          <span> {numItems <= 1 ? "item" : "items"} </span>
          in list. Already packed {numPacked}. Packing:
          {!packPercent ? "0%" : packPercent + "%"}
        </em>
      )}
    </footer>
  );
}
