import React, { Component } from "react";
import { connect } from "react-redux";

import { departamentColums } from "./columns";

import { Container } from "../Global/styles";
import SubLayout from "../Layout/SubLayout";

import Table from "../Global/Table";
import Form from "./Form";

import * as departamentsActions from "../../Redux/actions/departamentsActions";

class Departaments extends Component {
    async componentDidMount() {
        const {
            bringAll,
            bringAllClients,
            data: { departaments }
        } = this.props;

        if (!departaments.lenght) bringAll();
        bringAllClients();
    }

    content() {
        const {
            bringAll,
            bringOne,
            bringOneDelete,
            data: { departaments },
            loadings: { tableLoading },
            rechargeTable,
            stateForm
        } = this.props;

        if (rechargeTable) bringAll();

        if (tableLoading && !departaments.lenght) return "Loading";

        return (
            <Table
                rows={departaments}
                columns={departamentColums}
                bringOne={bringOne}
                bringOneDelete={bringOneDelete}
                stateForm={stateForm}
            />
        );
    }

    render() {
        const { stateForm, cancel } = this.props;
        return (
            <Container>
                <SubLayout title="Departamentos" changeForm={cancel}>
                    {stateForm === "table" && this.content()}
                    {stateForm !== "table" && <Form />}
                </SubLayout>
            </Container>
        );
    }
}

const mapStateToProps = reducers => reducers.departamentsReducer;

export default connect(mapStateToProps, departamentsActions)(Departaments);
