import React, { FC } from "react";
import Pizza from "./models/pizza";
import NewSinglePizza from "./NewSinglePizza";

interface DisplayPizzasProps {
  pizzasList: Pizza[];
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList }) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return <NewSinglePizza key={pizza.id} pizza={pizza} />;
      })}
    </div>
  );
};

export default DisplayPizzas;
