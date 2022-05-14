import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //used when using multiple states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //used when using single state
  // const [userInput,setUserInput] = useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // });

  const submitHandler = (event) => {
    //The form on submit will not reload the webpage, hence by keeping track of old data.
    //preventDefault will not reload the page onSubmit
    // console.log(event);
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    //function called in NewExpenses.js
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });

    // setUserInput((prevState)=>{
    //   console.log({...prevState,enteredTitle:event.target.value})
    //   return {...prevState,enteredTitle:event.target.value}

    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value
    // });

    // setUserInput((prevState)=>{
    //   return {...prevState,enteredAmount:event.target.value}
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    /*used to set the desired value by using 1 state obj and has least priority scheduling*/
    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value
    // });
    /*used to set the desired value by using 1 state obj and has priority scheduling than the above process*/
    // setUserInput((prevState)=>{
    //   return {...prevState,enteredDate:event.target.value}
    // });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">
            Add Expense
          </button>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
