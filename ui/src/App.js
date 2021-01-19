import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { AllOfficials } from "./pages/AllOfficials"
import { config } from "./config";
import firebase from "firebase/app";
import { FirestoreProvider } from "@react-firebase/firestore";
import { AddOfficial } from "./pages/AddOfficial";
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

          <Route path={pages.AddOfficial}>
            <AddOfficial />
          </Route>

          <Route path={pages.AllOfficials}>
            <AllOfficials />
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
