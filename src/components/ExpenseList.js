import React from 'react'
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {

    const expenses = [
        {id:1, name: 'food', cost:30},
        {id:2, name: 'investment', cost:200},
        {id:3, name: 'play', cost:50},
    ]

    return (
        <ul className="list-group">
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>
    )
}

export default ExpenseList
