import React from 'react';
import { AuthProvider } from '../contexts/authContext.js';
import Login from "./login/login.js";
import Home from "./dashboard/home";
import ForgotPassword from "./login/forgotPassword.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "./routes/PrivateRoute"
import UpdateProfile from './login/UpdateProfile.js';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/update-profile" component={UpdateProfile}/>
          <Route path="/login" component={Login} />
          <Route path="/forgotpass" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
