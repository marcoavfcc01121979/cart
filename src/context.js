import { createContext, useContext, useReducer, useState } from "react";

import reducer from './reducer'

import cartItems from './data'
const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext = createContext();

const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART'
        })
    }

    const remove = (id) => {
        dispatch({
            type: 'REMOVE',
            payload: id
        })
    }

    const increase = (id) => {
        dispatch({ 
            type: 'INCREASE',
            payload: id 
        })
    }

    const decrease = (id) => {
        dispatch({ 
            type: 'DECREASE',
            payload: id 
        })
    }

    return(
        <AppContext.Provider
            value={{
                ...state,
                clearCart,
                remove,
                increase,
                decrease
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

// Make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }