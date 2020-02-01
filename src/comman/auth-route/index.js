import React from 'react';
import { LocalStorageHelper } from "../../utilities";
import { Route } from "react-router";
import { withRouter } from 'react-router-dom';
import { Layout } from ".."
import { Login } from "../../components"


const AppLayout = withRouter(Layout);
const AuthRoute = ({ component: Component, ...rest }) => {
    const localStorageManager = new LocalStorageHelper();
    const token = localStorageManager.getAccessToken();
    // const token = false;
    return (
        <Route {...rest} render={matchProps => (
            <>
                {/* {
                    (!("Authorization" in localStorage) || (token === "null"))
                    ?
                        <Login {...matchProps} />
                    :
                } */}
                <AppLayout history={matchProps.history} token={token}>
                    <Component {...matchProps} />
                </AppLayout>
            </>
        )} />
    );
}
export default AuthRoute;
