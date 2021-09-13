import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((element, index) => (
        <ExpenseItem
          name={props.expenses[index].name}
          date={props.expenses[index].date}
          price={props.expenses[index].price}
        />
      ))}
    </div>
  );
}
