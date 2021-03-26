import { createContext, useReducer } from "react"

const initialState = {
    budget: 1000,
    expenses: [
        {id: 1, name: "food", cost: 30},
        {id: 2, name: "investment", cost: 200},
        {id: 3, name: "shopping", cost: 70},
    ]
}

export const AppContext = createContext()

export const AppProvider = (props) => {
    
}