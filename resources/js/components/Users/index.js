import React, { Component } from "react";
import { connect } from "react-redux";

import { userColums } from "./columns";

import { Container } from "../Global/styles";
import SubLayout from "../Layout/SubLayout";

import Table from "../Global/Table";
import Form from "./Form";

import * as usersActions from "../../Redux/actions/usersActions";

class Users extends Component {
    async componentDidMount() {
        const {
            bringAll,
            data: { users }
        } = this.props;

        if (!users.lenght) bringAll();
    }

    content() {
        const {
            bringAll,
            bringOne,
            bringOneDelete,
            data: { users },
            loadings: { tableLoading },
            rechargeTable,
            stateForm
        } = this.props;

        if (rechargeTable) bringAll();

        if (tableLoading && !users.lenght) return "Loading";

        return (
            <Table
                rows={users}
                columns={userColums}
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
                <SubLayout title="Usuarios" changeForm={cancel}>
                    {stateForm === "table" && this.content()}
                    {stateForm !== "table" && <Form />}
                </SubLayout>
            </Container>
        );
    }
}

const mapStateToProps = reducers => reducers.usersReducer;

export default connect(mapStateToProps, usersActions)(Users);
