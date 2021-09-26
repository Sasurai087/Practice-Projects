import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const handlePickedYear = (year) => {
    setFilteredYear(year);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        currentYear={filteredYear}
        pickedYear={handlePickedYear}
      />
      {props.expenses.map((element, index) => (
        <ExpenseItem
          name={element.title}
          date={element.date}
          price={element.amount}
          key={index}
        />
      ))}
    </div>
  );
}
