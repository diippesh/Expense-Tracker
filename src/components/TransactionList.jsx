import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'
function TransactionList() {
    const {transactions} = useContext(GlobalContext)
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                 {transactions.map((item)=><Transaction item={item}  key={item.id}/>)}
            </ul>
        </ >
    )
}

export default TransactionList