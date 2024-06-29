import React,{createContext, useReducer} from "react";
import AppReducer from './AppReducer'
//Initial state
const initialState = {
    transactions:[]
}
export const GlobalContext = createContext(initialState)
//provider Component
export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState)
    //action
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            pay:id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            pay:transaction
        })
    }
    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}