export const cartReducer=(state,action)=>{
    switch(action.type){
        case 'set_products':
            return {...state,products:action.payload}
        default:
            return state
    }
}