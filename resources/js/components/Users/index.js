import React, { Component } from "react";
import { connect } from "react-redux";

import * as usersActions from "../../Redux/actions/usersActions";
import { Container } from "../GlobalStyles";

class Users extends Component {
    async componentDidMount() {
        const {
            bringAll,
            data: { users }
        } = this.props;

        if (!users.lenght) bringAll();
    }
    render() {
        return (
            <Container>
                <h1>
                    My First Bootstra class. lorem This part is inside a
                    .container class. lorem class. lorem This part is inside a
                    .container class. lorem class. lorem This part is inside a
                    .container class. lorem class. lorem This part is inside a
                    .container class. lorem class. lorem This part is inside a
                    .container class. lorem class. lorem This part is inside a
                    .container class. lorem class. lorem This part is inside a
                    .container class. lorem class. lorem This part is inside a
                    .container class. loremp Page
                </h1>
                <p>
                    This part is inside a .container class. loremThis part is
                    class. lorem This part is inside a .container class. lorem
                    inside a .container class. lorem This part is inside a
                    .container class. lorem This part is inside a .container
                    class. lorem This part is inside a .container class. lorem
                    class. lorem This part is inside a .container class. lorem
                    class. lorem This part is inside a .container class. lorem
                    class. lorem This part is inside a .container class. lorem
                    This part is inside a .container class. lorem This part is
                    inside a .container class. lorem
                </p>
                <p>
                    The .container class provides a responsive fixed width
                    container.
                </p>
                <p>
                    Resize the browser window to see that its width (max-width)
                    will change at different breakpoints.
                </p>
            </Container>
        );
    }
}

const mapStateToProps = reducers => reducers.usersReducer;

export default connect(mapStateToProps, usersActions)(Users);
