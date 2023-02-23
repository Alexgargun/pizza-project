import React, { FC, useState } from "react";
import AdPizzaForm from "./AdPizzaForm";
import Pizza from "./models/pizza";
//import logo from './logo.svg';
import "./App.css";
import DisplayPizzas from "./DIsplayPizzas";

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);
  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };
  console.log(pizzasList);
  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Our Pizzerie</span>
        <AdPizzaForm addPizza={addPizza} />
        <DisplayPizzas pizzasList={pizzasList} />
      </div>
    </div>
  );
};

export default App;
