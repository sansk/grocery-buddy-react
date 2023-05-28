import { useState } from "react";
import { nanoid } from "nanoid";
import { Form } from "./Form";
import { Items } from "./Items";
import { setLocalStorage, getLocalStorage } from "./LocalStorage";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [items, setItems] = useState(getLocalStorage("grocery-buddy"));

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };

    const storeItems = [...items, newItem];
    setItems(storeItems);
    setLocalStorage("grocery-buddy", storeItems);
    // toast.success("Item added to the List");
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => itemId !== item.id);
    setItems(newItems);
    setLocalStorage("grocery-buddy", newItems);
    // toast.success("Item deleted to the List");
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id !== itemId) return item;

      return { ...item, completed: !item.completed };
    });

    setItems(newItems);
    setLocalStorage("grocery-buddy", newItems);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position="top-center" />
    </section>
  );
};

export default App;
