import React, { FC, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditPizzaForm from "./EditPizzaForm";
import Pizza from "./models/pizza";

interface NewSinglePizzaProps {
  pizza: Pizza;
}

const NewSinglePizza: FC<NewSinglePizzaProps> = ({ pizza }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const handleTogleEdit = () => {
    setEdit(!edit);
  };
  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price}</span>
      <div className="pizza-controls">
        <AiFillEdit onClick={handleTogleEdit} />
        <AiFillDelete />
        {edit ? <EditPizzaForm data={pizza} /> : null}
      </div>
    </div>
  );
};

export default NewSinglePizza;
