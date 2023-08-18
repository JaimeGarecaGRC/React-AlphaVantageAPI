import { createContext, useReducer } from "react";
import { reducer } from "./AppReducer";

export const Context = createContext({});

const initialState = {
    stock: []
}

function GlobalState({ children }) {

    const [state, dispatch] = useReducer(initialState, reducer)

    return(
        <Context.Provider value={{state, dispatch}}>
            { children }
        </Context.Provider>
    )

    
}

export default GlobalState;