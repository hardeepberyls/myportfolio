import { actionTypes } from "../contants/actionTypes"

const initialState = {
    count:0
}

export const count_Reducer = (state = initialState,action)=>{
    switch(action.type){
        case "Increment":
            return {
                count:state.count+1
            }
        case "Decrement":
            return{
                count:state.count-1
            }
        default:
            return{
                state
            }

    }
}