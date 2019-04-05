import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/authService";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Login from "./pages/login";
import Main from "./pages/main";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute exact path="/" component={SignIn} />
            <PrivateRoute path="/signup" component={SignUp} />
            <PrivateRoute path="/main" component={Main} />
            {/* <PrivateRoute path="/app" component={() => <h1>App</h1>} /> */}
            <Route path="/login" component={Login} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;