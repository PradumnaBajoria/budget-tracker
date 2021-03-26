import React, {useState, useContext} from 'react'
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {

    const {dispatch} = useContext(AppContext)

    const [name, setName] = useState("")
    const [cost, setCost] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        const expenses = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        }
        dispatch({
            type: "ADD_EXPENSE",
            payload: expenses
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label for="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        required="required" 
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="col-sm">
                    <label for="cost">Cost</label>
                    <input
                        type="text"
                        className="form-control"
                        id="id"
                        required="required" 
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <button type="submit" className="btm btn-primary mt-3">
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm
