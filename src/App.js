import React from "react";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import { BrowserRouter as Router , Route, Switch, Redirect } from "react-router-dom";

function App () {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <PrivateRoute path="/admin" component={AdminLayout} />
                    <Route path="/auth" render={props => <AuthLayout {...props} />} />
                    <Redirect from="/" to="/auth" />
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;