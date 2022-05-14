//import ExpenseItem from "./components/ExpenseItem";
import React,{useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Text Book",
    amount: 10.2,
    date: new Date(2020, 3, 26),
  },
  {
    id: "e2",
    title: "Honda Accord",
    amount: 25684,
    date: new Date(2021, 5, 15),
  },
  {
    id: "e3",
    title: "Toyota Camry",
    amount: 35689,
    date: new Date(2020, 11, 9),
  },
  {
    id: "e4",
    title: "BMW",
    amount: 58568,
    date: new Date(2022, 9, 16),
  },
];

const App = () => {
  
  const [expenses,setExpenses] = useState(Dummy_Expenses);
  const addExpenseHandler = (expense)=>{
    // console.log(expense);
    setExpenses((prevExpense)=>{
      return [expense,...prevExpense]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
