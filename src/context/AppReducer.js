export default(state,action)=>
{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions:state.transactions.filter(item=>item.id!==action.pay)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions:[action.pay,...state.transactions]
            }
        default:
            return state
    }   
}