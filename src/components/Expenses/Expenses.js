import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const handlePickedYear = (year) => {
    setFilteredYear(year);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        currentYear={filteredYear}
        pickedYear={handlePickedYear}
      />
      {filteredExpenses.map((element) => (
        <ExpenseItem
          name={element.title}
          date={element.date}
          price={element.amount}
          key={element.id}
        />
      ))}
    </div>
  );
}
