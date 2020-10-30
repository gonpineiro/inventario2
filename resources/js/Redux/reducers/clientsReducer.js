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

const INITIAL_STATE = {
    data: {
        clients: [],
        client: []
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
                    clients: action.payload
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
                    client: action.payload
                },
                loadings: {
                    tableLoading: false,
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
                    formLoading: true,
                }
            };

        case GENERAL_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    generalError: action.payload
                },
                loadings: {
                    formLoading: false,
                    tableLoading: false
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
                    formLoading: false,
                    tableLoading: false
                }
            };

        case CHANGE_CLIENT_ID:
            return {
                ...state,
                data: {
                    ...state.data,
                    client: {
                        ...state.data.client,
                        id: action.payload
                    }
                }
            };

        case CHANGE_CLIENT_NAME:
            return {
                ...state,
                data: {
                    ...state.data,
                    client: {
                        ...state.data.client,
                        name: action.payload
                    }
                }
            };

        case CHANGE_CLIENT_EMAIL:
            return {
                ...state,
                data: {
                    ...state.data,
                    client: {
                        ...state.data.client,
                        email: action.payload
                    }
                }
            };

        case CHANGE_CLIENT_PASS:
            return {
                ...state,
                data: {
                    ...state.data,
                    client: {
                        ...state.data.client,
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
                    client: []
                },
                loadings: {
                    formLoading: false,
                    tableLoading: false
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
                    client: []
                },
                loadings: {
                    formLoading: false,
                    tableLoading: false
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
