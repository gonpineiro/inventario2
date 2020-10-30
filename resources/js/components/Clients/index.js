import React, { Component } from "react";
import { connect } from "react-redux";

import { clientColums } from "./columns";

import { Container } from "../Global/styles";
import SubLayout from "../Layout/SubLayout";

import Table from "../Global/Table";
import Form from "./Form";

import * as clientsActions from "../../Redux/actions/clientsActions";

class Clients extends Component {
    async componentDidMount() {
        const {
            bringAll,
            data: { clients }
        } = this.props;

        if (!clients.lenght) bringAll();
    }

    content() {
        const {
            bringAll,
            bringOne,
            bringOneDelete,
            data: { clients },
            loadings: { tableLoading },
            rechargeTable,
            stateForm
        } = this.props;

        if (rechargeTable) bringAll();

        if (tableLoading && !clients.lenght) return "Loading";

        return (
            <Table
                rows={clients}
                columns={clientColums}
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
                <SubLayout title="Clientes" changeForm={cancel}>
                    {stateForm === "table" && this.content()}
                    {stateForm !== "table" && <Form />}
                </SubLayout>
            </Container>
        );
    }
}

const mapStateToProps = reducers => reducers.clientsReducer;

export default connect(mapStateToProps, clientsActions)(Clients);
