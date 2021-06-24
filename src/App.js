import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AnonymousView from './views/home/Anonymous'
import AuthenticatedView from './views/home/Authorized'

function App() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.oidc.user);
  const isLoadingUser = useSelector((state) => state.oidc.isLoadingUser);
  //const isExecutingLogout = useSelector((state) => state.session.get('executingLogout'));

  const isAuthenticated = () => {
		if (!(isLoadingUser === false && loggedUser)) {
			return false;
		}
		return true;
	};

  useEffect(() => {
		if (loggedUser) {

		}
	}, [loggedUser, dispatch]);

  if (isAuthenticated() === false) {
		return <AnonymousView />;
	} else { 
	  return <AuthenticatedView />;
  }
  
}

export default App;
