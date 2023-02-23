import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import Pizza from "./models/pizza";
import "./App.css";

interface EditPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleTogleEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({
  data,
  updatePizza,
  handleTogleEdit,
}) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setEditPizza({
      ...editPizza,
      [name]: value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = editPizza;

    if (title && price && img) {
      updatePizza(editPizza);
      handleTogleEdit();
    }
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="name"
        type="text"
        value={editPizza.title}
        onChange={handleChange}
      />
      <input
        name="price"
        placeholder="price"
        type="text"
        value={editPizza.price}
        onChange={handleChange}
      />
      <input
        name="img"
        placeholder="image"
        type="text"
        value={editPizza.img}
        onChange={handleChange}
      />
      <button type="submit">I Agree</button>
    </form>
  );
};

export default EditPizzaForm;
