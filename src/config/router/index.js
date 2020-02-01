import React from 'react';
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from 'react-router-dom';
import { Login, Landing, SearchResults, Details, Notfound, Cart } from "../../components";
import { AuthRoute } from "../../comman"


export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <AuthRoute exact path="/" component={Landing} />
                <AuthRoute path="/searchResults" component={SearchResults} />
                <AuthRoute path="/details" component={Details} />
                <AuthRoute path="/cart" component={Cart} />
                <Route path="*" component={Notfound} />
            </Switch>
        </Router>
    )
}
