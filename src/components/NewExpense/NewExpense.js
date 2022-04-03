import React from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (props) => {
    /*used to send data to from the NewExpense to this file, to do this we will
    define a function here and call it on NewExpense file with the data to be passed*/
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
};
export default NewExpense;