import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./AllExpenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
const AllExpenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const onFilterChangeHandler = (selectedFilterValue) => {
    setFilterYear(selectedFilterValue);
  };
  const filteredExpenses = props.items.filter((eachItem) => {
    return eachItem.date.getFullYear().toString() === filterYear;
  });

  let expensesContent = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((eachItem) => {
      return (
        <ExpenseItem
          title={eachItem.title}
          amount={eachItem.amount}
          date={eachItem.date}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filterYear}
        onFilterChange={onFilterChangeHandler}
      />
      {/* {filteredExpenses.map((eachItem) => {
        return (
          <ExpenseItem
            title={eachItem.title}
            amount={eachItem.amount}
            date={eachItem.date}
          />
        );
      })} */}
      {/* Conditional rendering type 1 
      {filteredExpenses.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        filteredExpenses.map((eachItem) => {
          return (
            <ExpenseItem
              title={eachItem.title}
              amount={eachItem.amount}
              date={eachItem.date}
            />
          );
        })
      )} */}

      {/* Conditional rendering type 2 
      {filteredExpenses.length === 0 && <p>No expenses found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((eachItem) => {
          return (
            <ExpenseItem
              title={eachItem.title}
              amount={eachItem.amount}
              date={eachItem.date}
            />
          );
        })} */}

      {/* Conditional rendering type 3
      {expensesContent}  */}
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList filteredItems={filteredExpenses} />
    </Card>
  );
};

export default AllExpenses;
