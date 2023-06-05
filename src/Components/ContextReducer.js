import React, { useReducer, useContext, createContext } from 'react';

//Context humlog tab banate hai jab hum aisi value define krte hai jo sb jagah
//reflect ho rahi hai jaie parent to child and then grandchild ..
//ek bar ye jaha change hui sb jagah change ho jaaegi
const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD":
            console.log("ADD");
            return [...state, { id: action.id, name: action.name, qty: action.qty, span: action.span, price: action.price, img: action.img }]
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;

        case "DROP":
            let empArray = []
            return empArray
            
        case "UPDATE":
            return state.map((vechicle) => {
                if (vechicle.id === action.id) {
                    console.log(vechicle.qty, parseInt(action.qty), action.price + vechicle.price);
                    return {
                        ...vechicle,
                        qty: parseInt(action.qty) + vechicle.qty,
                        price: action.price + vechicle.price,
                    };
                }
                return vechicle;
            });
        default:
            console.log("Error in Reducer");
    }
};


export const CartProvider = ({ children }) => {
    // Use me jaise set krte the waie hi isme condition ke hisab se check karenge
    //dipatch :-  ye action hai ye bhai krna hai jaise add delete 
    //state : ye jo state hai usko change krna hai
    const [state, dispatch] = useReducer(reducer, []);

    return (

        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);