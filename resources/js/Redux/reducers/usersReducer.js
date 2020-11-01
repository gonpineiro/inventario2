import {
    BRING_ALL,
    BRING_ONE,
    TABLE_LOADING,
    FORM_LOADING,
    GENERAL_ERROR,
    FORM_ERROR,
    CHANGE_USER_NAME,
    CHANGE_USER_EMAIL,
    CHANGE_USER_PASS,
    CHANGE_STATE_FORM,
    SAVE,
    CANCEL,
    RECHARGE
} from "../types/userTypes";

const INITIAL_STATE = {
    data: {
        users: [],
        user: []
    },
    loadings: {
        tableLoading: false,
        formLoading: false
    },
    errors: {
        generalError: "",
        formError: ""
    },
    dataTable: false,
    rechargeTable: false,
    stateForm: "table"
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BRING_ALL:
            return {
                ...state,
                data: {
                    ...state.data,
                    users: action.payload
                },
                loadings: {
                    ...state.loadings,
                    tableLoading: false
                },
                errors: {
                    ...state.errors,
                    formError: []
                },
                rechargeTable: false
            };

        case BRING_ONE:
            return {
                ...state,
                data: {
                    ...state.data,
                    user: action.payload
                },
                loadings: {
                    ...state.loadings,
                    formLoading: false
                },
                errors: {
                    ...state.errors,
                    formError: []
                },
                rechargeTable: false
            };

        case TABLE_LOADING:
            return {
                ...state,
                loadings: {
                    ...state.loadings,
                    tableLoading: true
                }
            };

        case FORM_LOADING:
            return {
                ...state,
                loadings: {
                    ...state.loadings,
                    formLoading: true
                }
            };

        case GENERAL_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    generalError: action.payload
                }
            };

        case FORM_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    formError: action.payload
                },
                loadings: {
                    ...state.loadings,
                    formLoading: false
                }
            };

        case CHANGE_USER_NAME:
            return {
                ...state,
                data: {
                    ...state.data,
                    user: {
                        ...state.data.user,
                        name: action.payload
                    }
                }
            };

        case CHANGE_USER_EMAIL:
            return {
                ...state,
                data: {
                    ...state.data,
                    user: {
                        ...state.data.user,
                        email: action.payload
                    }
                }
            };

        case CHANGE_USER_PASS:
            return {
                ...state,
                data: {
                    ...state.data,
                    user: {
                        ...state.data.user,
                        password: action.payload
                    }
                }
            };

        case CHANGE_STATE_FORM:
            return {
                ...state,
                errors: {
                    generalError: "",
                    formError: ""
                },
                stateForm: action.payload
            };

        case SAVE:
            return {
                ...state,
                data: {
                    ...state.data,
                    user: []
                },
                loadings: {
                    ...state.loadings,
                    formLoading: false
                },
                errors: {
                    generalError: "",
                    formError: ""
                },
                rechargeTable: true,
                stateForm: action.payload
            };

        case CANCEL:
            return {
                ...state,
                data: {
                    ...state.data,
                    user: []
                },
                errors: {
                    generalError: "",
                    formError: ""
                },
                stateForm: action.payload
            };

        case RECHARGE:
            return {
                ...state,
                loadings: {
                    ...state.loadings,
                    tableLoading: true
                },
                rechargeTable: false
            };

        default:
            return state;
    }
};
