import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addClick, setAddClick] = useState(false);

  const saveNewExpenseHandler = (enteredNewExpenseData) => {
    const newExpenseData = {
      ...enteredNewExpenseData,
      id: Math.random(),
    };
    props.onAddExpense(newExpenseData);
    ToggleAddClickHandler();
  };
  const ToggleAddClickHandler = () => {
    setAddClick(!addClick);
  };
  return (
    <div className="new-expense">
      {addClick ? (
        <ExpenseForm
          onSaveNewExpense={saveNewExpenseHandler}
          onButtonClicks={ToggleAddClickHandler}
        />
      ) : (
        <button onClick={ToggleAddClickHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
