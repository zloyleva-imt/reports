import React from 'react';
import {Route,Redirect} from "react-router-dom";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom'

const PrivateRoute = ({component: Component, auth, ...rest}) => {
    return (
        <Route
            {...rest}
            render={ props => {
                return (auth.access_token)?
                    (<Component {...props}/>):
                    (<Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />)
            }}
        />
    )
};
const mapPropsToState = state => ({
    auth: state.auth
});
export default withRouter(connect(mapPropsToState)(PrivateRoute));