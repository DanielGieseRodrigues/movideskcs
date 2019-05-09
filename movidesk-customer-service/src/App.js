import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ProtectedRoute } from "./protected.route";
import Login from "./master-screens/login";
import Main from "./master-screens/main";
import NotFound from "./master-screens/not-found";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/login" component={Login} />
        <ProtectedRoute exact path="/app" component={Main} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
