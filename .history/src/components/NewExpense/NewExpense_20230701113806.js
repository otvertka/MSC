import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = (event) => {
    setIsEditing(!isEditing);
    event.target.className = "hide";
  };

  // if (isVisible === false) {
  //   return (
  //     <div>
  //       <button onClick={startEditingHandler}>Add new Expense</button>
  //     </div>
  //   );
  // }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <button className="" onClick={startEditingHandler}>
        Add new Expense
      </button>
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};
export default NewExpense;
