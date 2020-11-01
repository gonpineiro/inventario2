import React from "react";
import { connect } from "react-redux";

import { searchInObj } from "../../Utils/functions";
import { DetailsDelete } from "../../Utils/validations";

import {
    ContainerDetail,
    FormRow,
    EmError,
    Input,
    ReactSelect
} from "../Global/styles";
import ContainerButton from "../Global/ContainerButton";

import * as departamentsActions from "../../Redux/actions/departamentsActions";

const Form = props => {
    const {
        data: {
            departament: { id, name, client_id, observation },
            clients
        },
        loadings: { formLoading, clientsLoading },
        errors: { formError },
        changeDepartamentName,
        changeClientId,
        changeDepartamentObservation,
        add,
        edit,
        deleteOne,
        cancel,
        stateForm
    } = props;

    const save = () => {
        const data = { id, name, client_id, observation };
        if (stateForm === "create") add(data);
        if (stateForm === "edit") edit(data, id);
        if (stateForm === "delete") deleteOne(id);
    };

    if (formLoading) return "Loading";
    return (
        <ContainerDetail>
            <FormRow>
                <label>Nombre</label>
                <EmError>{formError.name && formError.name}</EmError>
                <Input
                    readOnly={DetailsDelete(stateForm)}
                    onChange={ev => changeDepartamentName(ev.target.value)}
                    value={name || ""}
                ></Input>
                <label>Cliente</label>
                <EmError>{formError.client_id && formError.client_id}</EmError>
                <ReactSelect
                    value={searchInObj(clients, client_id)}
                    isDisabled={DetailsDelete(stateForm) || clientsLoading}
                    onChange={ev => changeClientId(ev.value)}
                    options={clients}
                    isLoading={clientsLoading}
                />
                <label>Observación</label>
                <EmError>
                    {formError.observation && formError.observation}
                </EmError>
                <Input
                    readOnly={DetailsDelete(stateForm)}
                    onChange={ev =>
                        changeDepartamentObservation(ev.target.value)
                    }
                    value={observation || ""}
                    disabled={DetailsDelete(stateForm)}
                ></Input>
            </FormRow>
            <ContainerButton
                save={save}
                cancel={cancel}
                stateForm={stateForm}
                styleOk={"btn btn-outline-primary"}
                styleCancel={"btn btn-outline-danger"}
            />
        </ContainerDetail>
    );
};

const mapStateToProps = reducers => reducers.departamentsReducer;

export default connect(mapStateToProps, departamentsActions)(Form);
