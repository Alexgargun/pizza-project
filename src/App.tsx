import React, { FC, useState, useEffect } from "react";
import AdPizzaForm from "./AdPizzaForm";
import Pizza from "./models/pizza";
//import logo from './logo.svg';
import "./App.css";
import DisplayPizzas from "./DIsplayPizzas";

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Array<Pizza>>(() => {
    const saved = localStorage.getItem("pizzaList");
    const initialValue: Array<Pizza> = JSON.parse(saved || "[]");
    return initialValue;
  });
  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };
  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(
      pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
    );
  };
  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter((pizza) => pizza.id !== id);
    setPizzasList(newPizzasList);
  };
  useEffect(() => {
    localStorage.setItem("pizzaList", JSON.stringify(pizzasList));
  }, [pizzasList]);

  console.log(pizzasList);
  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Our Pizzerie</span>
        <AdPizzaForm addPizza={addPizza} />
        <DisplayPizzas
          pizzasList={pizzasList}
          updatePizza={updatePizza}
          deletePizza={deletePizza}
        />
      </div>
    </div>
  );
};

export default App;
