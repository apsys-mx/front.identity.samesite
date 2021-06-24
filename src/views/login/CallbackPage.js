/** React import section */
import React from 'react';
import { withRouter } from 'react-router-dom'
import { CallbackComponent } from 'redux-oidc';

/** Helpers import section */
import userManager from '../../store/helpers/UserManager';

const CallbackPage = props => {

    const redirectToHome = (params) => {
        let homeUrl = "/";
        props.history.push(homeUrl);
    }

    return (
        <CallbackComponent
            userManager={userManager}
            successCallback={redirectToHome}
            errorCallback={error => {
                console.error(error);
            }}>
            <div>Loading...</div>
        </CallbackComponent>
    );
}

export default withRouter(CallbackPage);