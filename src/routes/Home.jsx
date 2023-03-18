import React from "react";
import Header from "../componets/Header";
import TodosLogic from "../componets/TodosLogic";

const Home = () => {
  return (
    <div className="todos">
      <Header />
      <TodosLogic />
    </div>
  );
};

export default Home;
