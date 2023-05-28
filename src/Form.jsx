import { useState } from "react";

export const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItem) return;

    addItem(newItem);

    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery buddy</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};
