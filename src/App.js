/** @format */

import React, { useState, useContext, useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavigationBar from "./components/NavigationBar";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import UserProfile from "./components/UserProfile";
import Pdfviewer from "./components/pdfviewer";
import AuthApi from "./AuthApi";
import Cookies from "js-cookie";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

function App() {
	const [auth, setAuth] = useState(false);
	const [loggedInUser, setLoggedInUser] = useState("");

	const readCookie = () => {
		const user = Cookies.get("user");
		if (user) {
			setAuth(true);
		}
	};

	useEffect(() => {
		readCookie();
	}, []);

	return (
		<div className="App">
			<AuthApi.Provider
				value={{ auth, setAuth, loggedInUser, setLoggedInUser }}
			>
				<Router>
					<Switch>
						<Routes />
					</Switch>
				</Router>
			</AuthApi.Provider>
		</div>
	);
}

const Routes = () => {
	const Auth = useContext(AuthApi);
	return (
		<div>
			<ProtectedLogin path="/" exact auth={Auth.auth} component={Login} />
			<ProtectedLogin path="/signup" auth={Auth.auth} component={Signup} />
			<ProtectedRoute
				path="/navigationbar"
				auth={Auth.auth}
				component={NavigationBar}
			/>
			<ProtectedRoute
				path="/navigationbar/homepage"
				auth={Auth.auth}
				component={Homepage}
			/>
			<ProtectedRoute
				path="/navigationbar/myprofile"
				auth={Auth.auth}
				component={UserProfile}
			/>
			<ProtectedRoute
				path="/navigationbar/aboutus"
				auth={Auth.auth}
				component={AboutUs}
			/>
			<ProtectedRoute
				path="/navigationbar/pdf"
				auth={Auth.auth}
				component={Pdfviewer}
			/>
		</div>
	);
};

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => (auth ? <Component /> : <Redirect to="/" />)}
		/>
	);
};

const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				!auth ? (
					<Component {...props} />
				) : (
					<Redirect to="/navigationbar/homepage" />
				)
			}
		/>
	);
};

export default App;
