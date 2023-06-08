import { useSelector } from "react-redux";


export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_PRODUCE:
            const newState = {...state};
            const produceId = action.produceId
            newState[produceId] = {produceId: produceId, count: 1}
            
            return newState;
    
        default:
            return state;
    }
}

export const ADD_PRODUCE = "cart/ADD_PRODUCE";

export const addProduce = produceId => {
    return {
        type: ADD_PRODUCE,
        produceId
    }
}