import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

function Balance() {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(item=>item.amount)
    let total = amounts.reduce((acc,item)=>acc+=item,0)
    if(total!==undefined)
        total = total.toFixed(2);
    return (
        <>  
            <h4>Your Balance</h4>
            <h1>Rs {total}</h1>
        </>
    )
}

export default Balance