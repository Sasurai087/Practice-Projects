import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formToggle, setFormToggle] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const toggleForm = () => {
    setFormToggle(!formToggle);
  };

  return (
    <div className="new-expense">
      {formToggle ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          toggleFormFunction={toggleForm}
        />
      ) : (
        <button onClick={toggleForm}>Toggle</button>
      )}
    </div>
  );
};

export default NewExpense;
