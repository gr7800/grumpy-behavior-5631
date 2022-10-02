import {
    DETAILS,
    LOG_IN,
    SIGNIN_1,
    SIGN_OUT,
    DESCRIPTION_DATA,
    SORTED_DATA,
    MAINSTATE_TRUE,
    MAINSTATE_FALSE,
    REMOVE_CART_ITEM,
    ADD_TO_BAG,
    FORM_DATA,

} from "./ActionTypes"


export const signInFn = (dispatch, email) => {
    localStorage.setItem("email", JSON.stringify(email))
    dispatch({
        type: SIGNIN_1,
        payload: {
            email
        }
    })
}

export const detailsFn = (dispatch, first, last, password) => {
    localStorage.setItem("name", JSON.stringify(first))
    localStorage.setItem("password", JSON.stringify(password))

    dispatch({
        type: DETAILS,
        payload: {
            firstName: first,
            lastName: last,
            password: password,
            state: true
        }
    })
}

export const signout = (dispatch) => {
    // const empty = ""
    // localStorage.setItem("name", JSON.stringify(empty))
    localStorage.removeItem("name")
    dispatch({
        type: SIGN_OUT,
        payload: {
            state: false
        }
    })
}


export const login = (dispatch) => {
    dispatch({
        type: LOG_IN,
        payload: {
            state: true
        }
    })



}


export const description_data = (dispatch, payload) => {
    dispatch({
        type: DESCRIPTION_DATA,
        payload
    })
}




export const sorted_data = (dispatch, payload) => {
    dispatch({
        type: SORTED_DATA,
        payload
    })
}


export const mainState_true = (dispatch) => {
    dispatch({
        type: MAINSTATE_TRUE,
        payload: {
            state: true
        }
    })
}

export const mainState_false = (dispatch) => {
    dispatch({
        type: MAINSTATE_FALSE,
        payload: {
            state: false
        }
    })
}


export const remove_cart_item = (dispatch, payload) => {
    // console.log('payload:', payload)
    //payload --- only one object ---
    dispatch({
        type: REMOVE_CART_ITEM,
        payload
    })
}


export const add_to_bag = (dispatch, payload) => {
    dispatch({
        type: ADD_TO_BAG,
        payload
    })
}

export const form_data = (dispatch, payload) => {
    dispatch({
        type: FORM_DATA,
        payload
    })
}