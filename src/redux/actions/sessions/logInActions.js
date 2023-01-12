import {
    RESET_STATE,
    GET_ONE,
    GET_ONE_LOADING,
    GET_ONE_ERROR,
} from "../../actionTypes/sessions/index";
import configAxios from "../../configAxios";
const URL = {
    main : "/users/sign_in"
}

export const resetState = () => (dispatch) => {
    dispatch({
        type: RESET_STATE,
    });
}

export const getOne = (data) => async (dispatch) => {
    dispatch({
        type: GET_ONE_LOADING,
    });
    try {
        const response = await configAxios.post(URL.main, data);
        dispatch({
            type: GET_ONE,
            payload: response.data,
            headers: {
                token: response.headers.token,
            }
        });
    } catch (error) {
        dispatch({
            type: GET_ONE_ERROR,
            payload: error,
        });
    }
}