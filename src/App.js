import React from "react";
import Search from "./Search";
import Item from "./Item";
import {BrowserRouter, Route }from "react-router-dom";

function App() {
    return(
        <BrowserRouter>
            <Route to="/" component={Search} />
            <Route to="/to/item" component = {Item} />
        </BrowserRouter>
    )
}

export  default App;
