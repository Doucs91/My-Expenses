import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditng] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditng(false)
  };
  const startEditngHandler = () => {
    setIsEditng(true);
  };

  const stoptEditngHandler = () => {
    setIsEditng(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditngHandler}>Add New Expense</button>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stoptEditngHandler}/>}
    </div>
  );
};

export default NewExpense;
