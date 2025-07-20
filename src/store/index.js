import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter-store";
import authReducer from "./auth-store";


// Old Way to create Reducer
// const counterReducer = (state = initialState, action) => {
//     if (action.type === "INCREMENT") {
//         return{
//             counter : state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === "INCREMENT_BY_5") {
//         return {
//             counter : state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === "DECREMENT") {
//         return {
//             counter : state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === "TOGGLE_COUNTER"){
//         return {
//             counter : state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
// }
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,

    }});


export default store;
