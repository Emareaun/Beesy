import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage'; 
import Login from './components/login'; 
import Signup from './components/signup'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} /> {/* Login route */}
        <Route path="/signup" component={Signup} /> {/* Signup route */}
      </Switch>
    </Router>
  );
}

export default App;