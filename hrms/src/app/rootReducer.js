import {combineReducers} from "redux"
import counterReducer from "../components/counter/counterSlice"
const rootReducer = combineReducers({
    counterReducer,
})

export default rootReducer;