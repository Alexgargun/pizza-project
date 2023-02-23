import React, { FC, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditPizzaForm from "./EditPizzaForm";
import Pizza from "./models/pizza";
import "./App.css";

interface NewSinglePizzaProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const NewSinglePizza: FC<NewSinglePizzaProps> = ({
  pizza,
  updatePizza,
  deletePizza,
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const handleTogleEdit = () => {
    setEdit(!edit);
  };
  const handleDelete = () => {
    deletePizza(pizza.id);
  };
  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price}</span>
      <div className="pizza-controls">
        <AiFillEdit onClick={handleTogleEdit} />
        <AiFillDelete onClick={handleDelete} />
        {edit ? (
          <EditPizzaForm
            data={pizza}
            updatePizza={updatePizza}
            handleTogleEdit={handleTogleEdit}
          />
        ) : null}
      </div>
    </div>
  );
};

export default NewSinglePizza;
