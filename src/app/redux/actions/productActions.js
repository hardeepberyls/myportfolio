import { actionTypes } from "../contants/actionTypes"

export const setIncrement=(products)=>{
    return{
        type:actionTypes.set_increment,
        payload:products,
    }
};

export const setDecrement=(products)=>{
    return{
        type:actionTypes.set_decrement,
        payload:products
    }
}