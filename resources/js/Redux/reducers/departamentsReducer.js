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

const INITIAL_STATE = {
    data: {
        departaments: [],
        departament: [],
        clients: []
    },
    loadings: {
        tableLoading: false,
        formLoading: false,
        clientsLoading: false
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
                    departaments: action.payload
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

        case BRING_ALL_CLIENTS:
            return {
                ...state,
                data: {
                    ...state.data,
                    clients: action.payload
                },
                loadings: {
                    ...state.loadings,
                    clientsLoading: false
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
                    departament: action.payload
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

        case CLIENT_LOADING:
            return {
                ...state,
                loadings: {
                    ...state.loadings,
                    clientsLoading: true
                }
            };

        case GENERAL_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    generalError: action.payload
                }
                /* loadings: {
                    formLoading: false,
                    tableLoading: false
                } */
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
                    formLoading: false,
                }
            };

        case CHANGE_DEPARTAMENT_ID:
            return {
                ...state,
                data: {
                    ...state.data,
                    departament: {
                        ...state.data.departament,
                        id: action.payload
                    }
                }
            };

        case CHANGE_DEPARTAMENT_NAME:
            return {
                ...state,
                data: {
                    ...state.data,
                    departament: {
                        ...state.data.departament,
                        name: action.payload
                    }
                }
            };

        case CHANGE_CLIENT_ID:
            return {
                ...state,
                data: {
                    ...state.data,
                    departament: {
                        ...state.data.departament,
                        client_id: action.payload
                    }
                }
            };

        case CHANGE_DEPARTAMENT_OBVERVATION:
            return {
                ...state,
                data: {
                    ...state.data,
                    departament: {
                        ...state.data.departament,
                        observation: action.payload
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
                    departament: []
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
                    departament: []
                },
                /* loadings: {
                    formLoading: false,
                    tableLoading: false
                }, */
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
