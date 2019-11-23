import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

const withAuthRedirect = Components => {

    class RedirectComponent extends Component{
        //todo check is token valid and exists
        render() {
            const currentLocation = this.props.location.pathname;
            return (this.props.access_token)
                ?
                <Components {...this.props}/>
                :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: {
                            back: currentLocation
                        }
                    }}
                />
        }
    }

    return RedirectComponent
}

export default withAuthRedirect;