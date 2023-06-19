import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseDate from "./ExpenseDate.js";
import "./MyExpenses.css";

const MyExpenses = (props) => {
  return (
    <div className="expenses">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default MyExpenses;
