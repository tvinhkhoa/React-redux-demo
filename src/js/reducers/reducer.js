import * as redux from 'redux';
import mangReducer from "./mang";
import isAddingReducer from "./isAdding";

const reducer = redux.combineReducers({
    mang: mangReducer,
    isAdding: isAddingReducer
})

export default reducer;