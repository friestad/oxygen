import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";

import "./index.scss";
import * as serviceWorker from "./serviceWorker";

import { Home } from "./pages/Home";
import { Communicate } from "./pages/Communicate";
import { ManageEvents } from "./pages/ManageEvents";
import { Causes } from "./pages/Causes";

import { NavMenu } from "./components/NavMenu";

ReactDOM.render(
	<div id="page">
		<Router>
			<div id="header">
				<NavMenu />
			</div>
			<Switch>
				<Route path="/home" component={Home}></Route>
				<Route path="/communicate" component={Communicate}></Route>
				<Route path="/manageEvents" component={ManageEvents}></Route>
				<Route path="/causes" component={Causes}></Route>
			</Switch>
		</Router>
	</div>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
