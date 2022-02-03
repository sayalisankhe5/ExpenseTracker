import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.filteredItems.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredItems.map((eachItem) => {
        return (
          <ExpenseItem
            key={eachItem.id}
            title={eachItem.title}
            amount={eachItem.amount}
            date={eachItem.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
