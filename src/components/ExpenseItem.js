import React from 'react'
import {TiDelete} from "react-icons/ti"

const ExpenseItem = (props) => {
    return (
        <li className="list-group-item d-flex jutify-content-between align-items-center">
            {props.name}
            <div>
                <span className="badge badge-primary badge-pill mr-3">
                    {props.cost}Rs
                </span>
                <TiDelete size="1.5em"></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem
