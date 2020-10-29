import axios from "axios";
import {
    BRING_ALL,
    BRING_ONE,
    TABLE_LOADING,
    FORM_LOADING,
    GENERAL_ERROR,
    FORM_ERROR,
    CHANGE_USER_ID,
    CHANGE_USER_NAME,
    CHANGE_USER_EMAIL,
    CHANGE_USER_PASS,
    CHANGE_STATE_FORM,
    SAVE,
    CANCEL,
    RECHARGE
} from "../types/userTypes";

const URL = "http://192.168.200.2:8000/api/admin/";

export const bringAll = () => async dispatch => {
    dispatch({
        type: RECHARGE
    });
    try {
        const response = await axios.get(URL + "user");
        dispatch({
            type: BRING_ALL,
            payload: response.data.data
        });
    } catch (error) {
        const errors = error.response.data.errors;
        console.error(error.response);
    }
};

export const bringOne = (id, stateForm = "edit") => async dispatch => {
    dispatch({
        type: FORM_LOADING
    });
    dispatch({
        type: CHANGE_STATE_FORM,
        payload: stateForm
    });

    try {
        const response = await axios.get(URL + "user/" + id);

        dispatch({
            type: BRING_ONE,
            payload: response.data.data
        });
    } catch (error) {
        console.error(error);
    }
};

export const changeUserName = value => dispatch => {
    dispatch({
        type: CHANGE_USER_NAME,
        payload: value
    });
};

export const changeUserEmail = value => dispatch => {
    dispatch({
        type: CHANGE_USER_EMAIL,
        payload: value
    });
};

export const changeUserPass = value => dispatch => {
    dispatch({
        type: CHANGE_USER_PASS,
        payload: value
    });
};

export const add = data => async dispatch => {
    dispatch({
        type: FORM_LOADING
    });
    try {
        await axios.post(URL + "user", data);

        dispatch({
            type: SAVE,
            payload: "create"
        });
    } catch (error) {
        const errors = error.response.data.errors;
        console.log(errors);
        dispatch({
            type: FORM_ERROR,
            payload: errors
        });
    }
};

export const edit = (data, id) => async dispatch => {
    dispatch({
        type: FORM_LOADING
    });

    try {
        await axios.put(URL + "user/" + id, data);

        dispatch({
            type: SAVE,
            payload: "table"
        });
    } catch (error) {
        const errors = error.response.data.errors;
        console.log(error.response);
        dispatch({
            type: FORM_ERROR,
            payload: errors
        });
    }
};

export const bringOneDelete = id => async dispatch => {
    dispatch({
        type: FORM_LOADING
    });

    dispatch({
        type: CHANGE_STATE_FORM,
        payload: "delete"
    });

    try {
        const response = await axios.get(URL + "user/" + id);

        dispatch({
            type: BRING_ONE,
            payload: response.data.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteOne = id => async dispatch => {
    dispatch({
        type: FORM_LOADING
    });

    try {
        await axios.delete(URL + "user/" + id);

        dispatch({
            type: SAVE,
            payload: 'table'
        });
    } catch (error) {
        const errors = error.response.data.message;
        dispatch({
            type: FORM_ERROR,
            payload: errors
        });
    }
};

export const cancel = stateForm => dispatch => {
    dispatch({
        type: CANCEL,
        payload: stateForm
    });
};
