import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  /*useState is a function used to change the value of an obj in a component dynamically by running the component
  again by clicking a button(any action) on which it is used*/
  //useState always returns an array of two elements 1)old vlaue 2) function to update new value
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //This is used to show just the selected year's Expenses!
  const filteredExpensesArray = props.items.filter((ex) => {
    return (
      ex.date.toLocaleDateString("en-US", { year: "numeric" }) === filteredYear
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filteredYearHandler}
      />
      <ExpensesChart expenses={filteredExpensesArray} />
      <ExpensesList items={filteredExpensesArray}/>
      {/*
      //this way you can conditionally check and return
        {filteredExpensesArray.length === 0 ? (
        <p>No Expenses Found.</p>
      ) : (
        filteredExpensesArray.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}*/}

      {/* OR
      {filteredExpensesArray.length === 0 && <p>No Expenses Found.</p>}
      {filteredExpensesArray.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}*/}
    </Card>
  );
};
export default Expenses;
