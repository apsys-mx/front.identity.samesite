/** Oidc section imports */
import { createUserManager } from 'redux-oidc';
import { getAbsoluteUrlAddress } from './UrlHelper'

/** Defines the user manager configuration */
const userManagerConfig = {
    client_id: 'apsys.repare.crm.invoice.web',
    redirect_uri: getAbsoluteUrlAddress('callback'),
    post_logout_redirect_uri: getAbsoluteUrlAddress(''),
    response_type: 'id_token token',
    scope: 'openid profile',
    authority: `${process.env.REACT_APP_IDENTITY_SERVER}`,
    filterProtocolClaims: true,
    loadUserInfo: true,
    clockSkew: 900
  };
  
  const userManager = createUserManager(userManagerConfig);
  export default userManager;