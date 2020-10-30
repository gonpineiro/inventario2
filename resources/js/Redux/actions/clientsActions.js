import axios from "axios";
import {
    BRING_ALL,
    BRING_ONE,
    TABLE_LOADING,
    FORM_LOADING,
    GENERAL_ERROR,
    FORM_ERROR,
    CHANGE_CLIENT_ID,
    CHANGE_CLIENT_NAME,
    CHANGE_CLIENT_EMAIL,
    CHANGE_CLIENT_PASS,
    CHANGE_STATE_FORM,
    SAVE,
    CANCEL,
    RECHARGE
} from "../types/clientTypes";

const URL = "http://192.168.200.2:8000/api/admin/";

export const bringAll = () => async dispatch => {
    dispatch({
        type: RECHARGE
    });
    try {
        const response = await axios.get(URL + "client");
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
        const response = await axios.get(URL + "client/" + id);

        dispatch({
            type: BRING_ONE,
            payload: response.data.data
        });
    } catch (error) {
        console.error(error);
    }
};

export const changeClientName = value => dispatch => {
    dispatch({
        type: CHANGE_CLIENT_NAME,
        payload: value
    });
};

export const add = data => async dispatch => {
    dispatch({
        type: FORM_LOADING
    });
    try {
        await axios.post(URL + "client", data);

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
        await axios.put(URL + "client/" + id, data);

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
        const response = await axios.get(URL + "client/" + id);

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
        await axios.delete(URL + "client/" + id);

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
