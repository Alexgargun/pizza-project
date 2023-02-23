import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import Pizza from "./models/pizza";
import "./App.css";

const initState = {
  title: "",
  price: "",
  img: "",
};

interface AddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

const AdPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setNewPizza({
      ...newPizza,
      [name]: value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = newPizza;

    if (title && price && img) {
      addPizza({
        title,
        img,
        price: Number(price),
        id: Date.now(),
      });
      setNewPizza(initState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="name"
        type="text"
        value={newPizza.title}
        onChange={handleChange}
      />
      <input
        name="price"
        placeholder="price"
        type="text"
        value={newPizza.price}
        onChange={handleChange}
      />
      <input
        name="img"
        placeholder="image"
        type="text"
        value={newPizza.img}
        onChange={handleChange}
      />
      <button type="submit">+ Add To Menu</button>
    </form>
  );
};

export default AdPizzaForm;
