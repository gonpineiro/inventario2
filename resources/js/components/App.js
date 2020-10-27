import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Users from "./Users";

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/usuarios" component={Users}></Route>
        </BrowserRouter>
    );
};

export default App;
