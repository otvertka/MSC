import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseDate from "./ExpenseDate.js";

const MyExpenses = (props) => {
  return (
    <div>
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
};

export default MyExpenses;
