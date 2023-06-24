import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  let title = props.title;
  const clickHandler = () => {
    title = "Updated";
    console.log(title);
  };
  return (
    //
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Изменить Title</button>
        <h2>{props.title}</h2>
      </div>
    </Card>
  );
};

export default ExpenseItem;
