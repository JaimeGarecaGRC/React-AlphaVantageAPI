export const reducer = (state, action) => {
    switch(action.type){
        case "SET_STOCK":
            return{
                ...state,
                stock: action.payload,                
            };
        default:
            return state
            
    }
}