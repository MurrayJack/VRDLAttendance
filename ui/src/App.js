import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  {Scrim} from "./pages/scrim"

function App() {
  return (
    <Router>


      <ul>

        <li><Link to="/">Home</Link></li>

        <li><Link to="/scrim">Scrim</Link></li>


      </ul>

      <Switch>
        <Route path="/Scrim">
          <Scrim />
        </Route>

        <Route path="/users">
          <div>users</div>
        </Route>
        <Route path="/">
          <div>root</div>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
