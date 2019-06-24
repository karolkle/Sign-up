import React from 'react';
import Navigation from './component/Navigation'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpPage from './component/SignUp';
import SignInPage from './component/SignIn';
import PasswordForgetPage from './component/PasswordForget';
import AccountPage from './component/Account';
import Admin from './component/Admin';
import * as ROUTES from './constants/routes';
//import * as ROLES from './constants/roles';
import { withAuthentication } from './component/Session';
import Home from './component/Home'


const App = () => (
  <Router>
    <div className="App">
    <Navigation />
     

      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.ADMIN} component={Admin} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
     
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      
    </div>
    
  </Router>
);

export default withAuthentication(App);
