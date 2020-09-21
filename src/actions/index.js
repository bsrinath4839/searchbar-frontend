import {
    DATA_LOAD_FAILED,
    DATA_LOAD_SUCCESS,
    DATA_LOAD_INITIATED,
    CLEAR_ITEMS_LIST,
} from '../types'

export const clearItemsList = () => async (dispatch,  getState) =>{
    //console.log(getState().data)
    dispatch({
        type : CLEAR_ITEMS_LIST,
    })
}


// const sleep = (milliseconds) => {
//     return new Promise(resolve => setTimeout(resolve, milliseconds))
// }


//getState is used to state of store should be used with dispatch only
//dispatch calles the reducer function ie dispatches an event with type
//reducer will catch the type of event emmited and task will be performed


export const search = (item) => (dispatch, getState) => {
    if (item && item.length > 3) {

        dispatch({
            type: DATA_LOAD_INITIATED
        })

        let url = "http://localhost:8888/"

        let header = {
            "Content-Type": "application/json"
        }

        let body = {
            keyword: item
        }

        fetch(url, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(body)
        }).then(async (response) => {
            if (response.ok) {
                // await sleep(1000)
                return response.json();
            } else {
                dispatch({
                    type: DATA_LOAD_FAILED,
                    error: "DATA_LOAD_FAILED"
                })
            }
        }).then((data) => {
            //console.log(data);
            if (data) {
                dispatch({
                    type: DATA_LOAD_SUCCESS,
                    payload: data.results
                })
            } else {
                dispatch({
                    type: DATA_LOAD_FAILED,
                    error: "DATA_LOAD_FAILED"
                })
            }

        }).catch((err) => {
            console.log("err", err)
            dispatch({
                type: DATA_LOAD_FAILED,
                error: "DATA_LOAD_FAILED"
            })
        })
    }   else if(item.length <= 3){
        dispatch({
            type: DATA_LOAD_INITIATED
        })
    }
}

