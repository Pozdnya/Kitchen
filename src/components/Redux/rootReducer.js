import { combineReducers } from "redux";
import {productReducer} from '../Redux/productReducer'

export const rootReducer = combineReducers({productReducer})