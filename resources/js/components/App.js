import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout";
import Users from "./Users";
import Clients from "./Clients";
import Departaments from "./Departaments";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/usuarios" component={Users}></Route>
                    <Route exact path="/clientes" component={Clients}></Route>
                    <Route
                        exact
                        path="/departamentos"
                        component={Departaments}
                    ></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
