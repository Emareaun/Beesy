import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Dashboard from '../components/Dashboard';
import BlogPage from '../components/BlogPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/blogs" component={BlogPage} />
      </Switch>
    </Router>
  );
}

export default App;