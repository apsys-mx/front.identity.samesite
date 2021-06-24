import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {OidcProvider, loadUser} from 'redux-oidc';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import CallbackPage from './views/login/CallbackPage';

import reducers from './store/RootReducer'
import userManager from './store/helpers/UserManager';

import reportWebVitals from './reportWebVitals';


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
loadUser(store, userManager);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <OidcProvider store={store} userManager={userManager}>
        <Router basename={`${process.env.REACT_APP_ROOT}`}>
          <Switch>
              <Route exact path='/callback' component={CallbackPage} />
              <Route path='/' component={App} />
          </Switch>
        </Router>
      </OidcProvider>
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
