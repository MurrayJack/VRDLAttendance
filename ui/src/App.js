import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Scrim } from "./pages/scrim"
import { HomePage } from "./pages/HomePage"
import { Officials } from "./pages/officials"
import { config } from "./config";
import firebase from "firebase/app";
import { FirestoreProvider } from "@react-firebase/firestore";
import { AddOfficial } from "./components/AddOfficial";
import { pages } from "./pages/pages";
import { NewScrimPage } from "./pages/NewScrimPage";

function App() {
  return (
    <Router>
      <FirestoreProvider firebase={firebase} {...config}>
        <Switch>
          <Route path={pages.AddScrimPage}>
            <NewScrimPage />
          </Route>

          <Route path="/AddOfficial">
            <AddOfficial />
          </Route>

          <Route path="/Officials">
            <Officials />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>

        </Switch>
      </FirestoreProvider>
    </Router>
  );
}

export default App;
