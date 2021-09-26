import React, { useState } from "react";
import { Expenses } from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "a1",
    date: new Date(2021, 7, 11),
    title: "Monster Hunter Rise",
    amount: 43,
  },
  {
    id: "a2",
    date: new Date(2021, 8, 2),
    title: "Amazing Cultivation Simulator",
    amount: 21,
  },
  {
    id: "a3",
    date: new Date(2020, 6, 15),
    title: "Gunfire Reborn",
    amount: 13,
  },
  {
    id: "a1",
    date: new Date(2021, 6, 22),
    title: "Rimworld",
    amount: 30,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    //setExpenses takes a function with previous Expenses state to ensure accuracy of data in the event of multiple simultaneous state changes
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
