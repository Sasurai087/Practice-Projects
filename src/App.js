import React from "react";
import { Expenses } from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "a1",
      date: new Date(2021, 7, 11),
      name: "Monster Hunter Rise",
      price: 43,
    },
    {
      id: "a2",
      date: new Date(2021, 8, 2),
      name: "Amazing Cultivation Simulator",
      price: 21,
    },
    {
      id: "a3",
      date: new Date(2020, 6, 15),
      name: "Gunfire Reborn",
      price: 13,
    },
    {
      id: "a1",
      date: new Date(2021, 6, 22),
      name: "Rimworld",
      price: 30,
    },
  ];

  return (
    <div className="App">
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
