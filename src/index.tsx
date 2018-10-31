import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

import './index.scss';

import { Navigation } from "./components/navigation/navigation";
import { Home } from "./components/home/home";

ReactDOM.render (
    <HashRouter>
        <div>
            <Navigation />
            <Route exact path="/" component={Home} />
        </div>
    </HashRouter>,
    document.getElementsByClassName ('container') [0]
);