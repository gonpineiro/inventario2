import {
    BRING_ALL,
    BRING_ONE,
    TABLE_LOADING,
    FORM_LOADING,
    GENERAL_ERROR,
    FORM_ERROR,
    CHANGE_MARK_NAME,
    CHANGE_STATE_FORM,
    SAVE,
    CANCEL,
    RECHARGE
} from "../types/markTypes";

const INITIAL_STATE = {
    data: {
        marks: [],
        mark: []
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
                    marks: action.payload
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
                    mark: action.payload
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

        case CHANGE_MARK_NAME:
            return {
                ...state,
                data: {
                    ...state.data,
                    mark: {
                        ...state.data.mark,
                        name: action.payload
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
                    mark: []
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
                    mark: []
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
