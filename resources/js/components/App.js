import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout";
import Users from "./Users";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/usuarios" component={Users}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
