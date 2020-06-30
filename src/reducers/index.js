import { combineReducers } from "redux"

import dataReducer from "./data.reducer"

const reducers = combineReducers({
    data: dataReducer,
})

export default reducers;