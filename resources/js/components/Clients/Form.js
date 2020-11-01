import React from "react";
import { connect } from "react-redux";

import { DetailsDelete } from "../../Utils/validations";

import { ContainerDetail, FormRow, EmError, Input } from "../Global/styles";
import ContainerButton from "../Global/ContainerButton";
import Accordion from "../Global/Accordion";

import * as clientsActions from "../../Redux/actions/clientsActions";

const Form = props => {
    const {
        data: {
            client: { id, name, departaments }
        },
        loadings: { formLoading },
        errors: { formError },
        changeClientName,
        add,
        edit,
        deleteOne,
        cancel,
        stateForm
    } = props;

    const save = () => {
        const data = { id, name };
        if (stateForm === "create") add(data);
        if (stateForm === "edit") edit(data, id);
        if (stateForm === "delete") deleteOne(id);
    };

    const departamentsRender = () => {
        if (departaments)
            return (
                <FormRow>
                    <Accordion title="Departamentos" list={departaments} />
                </FormRow>
            );

        return "";
    };

    if (formLoading) return "Loading";

    return (
        <ContainerDetail>
            <FormRow>
                <label>Nombre</label>
                <EmError>{formError.name && formError.name}</EmError>
                <Input
                    readOnly={DetailsDelete(stateForm)}
                    onChange={ev => changeClientName(ev.target.value)}
                    value={name || ""}
                ></Input>
            </FormRow>
            {departamentsRender()}
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

const mapStateToProps = reducers => reducers.clientsReducer;

export default connect(mapStateToProps, clientsActions)(Form);
