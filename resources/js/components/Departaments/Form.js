import React from "react";
import { connect } from "react-redux";

import { DetailsDelete } from "../../Utils/validations";

import { ContainerDetail, FormRow, EmError, Input } from "../Global/styles";
import ContainerButton from "../Global/ContainerButton";

import * as usersActions from "../../Redux/actions/usersActions";

const Form = props => {
    const {
        data: {
            user: { id, name, email, password }
        },
        loadings: { formLoading },
        errors: { formError },
        changeUserName,
        changeUserEmail,
        changeUserPass,
        add,
        edit,
        deleteOne,
        cancel,
        stateForm
    } = props;

    const save = () => {
        const data = { id, name, email, password };
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
                    onChange={ev => changeUserName(ev.target.value)}
                    value={name || ""}
                ></Input>
                <label>Email</label>
                <EmError>{formError.email && formError.email}</EmError>
                <Input
                    readOnly={DetailsDelete(stateForm)}
                    onChange={ev => changeUserEmail(ev.target.value)}
                    value={email || ""}
                ></Input>
                <label>Contaseña</label>
                <EmError>{formError.password && formError.password}</EmError>
                <Input
                    readOnly={DetailsDelete(stateForm)}
                    onChange={ev => changeUserPass(ev.target.value)}
                    value={password || ""}
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

const mapStateToProps = reducers => reducers.usersReducer;

export default connect(mapStateToProps, usersActions)(Form);
