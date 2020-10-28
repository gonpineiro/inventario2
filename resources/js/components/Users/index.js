import React, { Component } from "react";
import { connect } from "react-redux";

import * as usersActions from "../../Redux/actions/usersActions";

class Users extends Component {
    async componentDidMount() {
        const {
            bringAll,
            data: { users }
        } = this.props;

        if (!users.lenght) bringAll();
    }
    render() {
        return <div>User</div>;
    }
}

const mapStateToProps = reducers => reducers.usersReducer;

export default connect(mapStateToProps, usersActions)(Users);
