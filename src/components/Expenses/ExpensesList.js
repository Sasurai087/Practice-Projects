import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  //Render Logic
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((item) => (
        <ExpenseItem
          name={item.title}
          date={item.date}
          price={item.amount}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

// } else if (props.expenses.date.getFullYear().toString() === "All") {
//   return (
//     <ul className="expenses-list">
//       {props.expenses.map((element) => (
//         <ExpenseItem
//           name={element.title}
//           date={element.date}
//           price={element.amount}
//           key={element.id}
//         />
//       ))}
//     </ul>
//   );
// }
