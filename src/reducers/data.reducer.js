import {
    DATA_LOAD_FAILED,
    DATA_LOAD_SUCCESS,
    DATA_LOAD_INITIATED
} from '../types';


const initialState = {
    data: [],
    isDataLoading: false,
}

const dataReducer = (state = initialState, action) => {   
    switch (action.type) {
        case DATA_LOAD_INITIATED: {
            state = {
                ...state,
                isDataLoading: true,
                error: "",
                data: []
            }
            // console.log("init", state);
            return state;
        }
        case DATA_LOAD_FAILED: {
            state = {
                ...state,
                data: [],
                error: "",
                isDataLoading: false,
            }
            // console.log("fail", state);
            return state;
        }
        case DATA_LOAD_SUCCESS: {
            state = {
                ...state,
                data: action.payload,
                error: action.error,
                isDataLoading: false
            }
            // console.log("succ", state);
            return state;
        }
        default: {
            return state;
        }
    }
}

export default dataReducer;