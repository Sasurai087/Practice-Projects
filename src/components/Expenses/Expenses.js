import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

//Props: State with list of expenses from top level App component
export function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("All");

  //Filter Logic
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //Render Logic
  //Expenses are currently being rendered by ExpensesList component

  //Handler Logic
  const handlePickedYear = (year) => {
    setFilteredYear(year);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        currentYear={filteredYear}
        pickedYear={handlePickedYear}
      />
      <ExpensesList expenses={filteredExpenses} />
    </div>
  );
}
