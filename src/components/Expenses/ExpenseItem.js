import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  /* const expenseDate = new Date();
  const expenseAmount = 214.85;
  const expenseTitle = "Sara"; */

  const [title, setTitle] = useState(props.title);
  console.log("1" + title);

  const titleChangeHandler = () => {
    console.log("2" + title);
    //title[1]("Hello");
    setTitle("updated");
    console.log("3" + title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={titleChangeHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
