import axios from "axios";
import {
    BRING_ALL,
    BRING_ALL_CLIENTS,
    BRING_ONE,
    TABLE_LOADING,
    FORM_LOADING,
    CLIENT_LOADING,
    GENERAL_ERROR,
    FORM_ERROR,
    CHANGE_DEPARTAMENT_ID,
    CHANGE_DEPARTAMENT_NAME,
    CHANGE_CLIENT_ID,
    CHANGE_DEPARTAMENT_OBVERVATION,
    CHANGE_STATE_FORM,
    SAVE,
    CANCEL,
    RECHARGE
} from "../types/departamentTypes";

const URL = "http://192.168.200.2:8000/api/admin/";

export const bringAll = () => async dispatch => {
    dispatch({
        type: RECHARGE
    });
    try {
        const response = await axios.get(URL + "departament");
        dispatch({
            type: BRING_ALL,
            payload: response.data.data
        });
    } catch (error) {
        const errors = error.response.data.errors;
        console.error(error.response);
    }
};

export const bringAllClients = () => async dispatch => {
    dispatch({
        type: CLIENT_LOADING
    });
    try {
        const response = await axios.get(URL + "client");
        const data = response.data.data;
        const clients = [];
        for (let i in data) {
            clients.push({
                value: data[i].id,
                label: data[i].name
            });
        }

        dispatch({
            type: BRING_ALL_CLIENTS,
            payload: clients
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
        const response = await axios.get(URL + "departament/" + id);

        dispatch({
            type: BRING_ONE,
            payload: response.data.data
        });
    } catch (error) {
        console.error(error);
    }
};

export const changeDepartamentName = value => dispatch => {
    dispatch({
        type: CHANGE_DEPARTAMENT_NAME,
        payload: value
    });
};

export const changeClientId = value => dispatch => {
    dispatch({
        type: CHANGE_CLIENT_ID,
        payload: value
    });
};

export const changeDepartamentObservation = value => dispatch => {
    dispatch({
        type: CHANGE_DEPARTAMENT_OBVERVATION,
        payload: value
    });
};

export const add = data => async dispatch => {
    dispatch({
        type: FORM_LOADING
    });
    try {
        await axios.post(URL + "departament", data);

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
        await axios.put(URL + "departament/" + id, data);

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
        const response = await axios.get(URL + "departament/" + id);

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
        await axios.delete(URL + "departament/" + id);

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
