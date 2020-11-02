import React, { Component } from "react";
import { connect } from "react-redux";

import { markColums } from "./columns";

import { Container } from "../Global/styles";
import SubLayout from "../Layout/SubLayout";

import Table from "../Global/Table";
import Form from "./Form";

import * as marksActions from "../../Redux/actions/marksActions";

class Clients extends Component {
    async componentDidMount() {
        const {
            bringAll,
            data: { marks }
        } = this.props;

        if (!marks.lenght) bringAll();
    }

    content() {
        const {
            bringAll,
            bringOne,
            bringOneDelete,
            data: { marks },
            loadings: { tableLoading },
            rechargeTable,
            stateForm
        } = this.props;

        if (rechargeTable) bringAll();

        if (tableLoading && !marks.lenght) return "Loading";

        return (
            <Table
                rows={marks}
                columns={markColums}
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
                <SubLayout title="Marcas" changeForm={cancel}>
                    {stateForm === "table" && this.content()}
                    {stateForm !== "table" && <Form />}
                </SubLayout>
            </Container>
        );
    }
}

const mapStateToProps = reducers => reducers.marksReducer;

export default connect(mapStateToProps, marksActions)(Clients);
