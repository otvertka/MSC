import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseDate from "./ExpenseDate.js";

const MyExpenses = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default MyExpenses;
