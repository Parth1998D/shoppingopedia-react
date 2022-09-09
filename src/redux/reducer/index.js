import { combineReducers } from "redux";
import handleCart from "./handleCart";
import handleProduct from './handleProduct';


const rootReducer = combineReducers({
    handleCart,
    handleProduct
})

export default rootReducer;