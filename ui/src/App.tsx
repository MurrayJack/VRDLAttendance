import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { AllOfficials } from "./pages/AllOfficials"
import { config } from "./config";
import firebase from "firebase/app";
import { FirestoreProvider } from "@react-firebase/firestore";
import { AddOfficial } from "./pages/AddOfficial";
import { EditOfficial } from "./pages/EditOfficial";
import { pages } from "./pages/pages";
import { NewScrimPage } from "./pages/AddScrim";
import { TodaysScrimmages } from "./pages/TodaysScrims"
import { AllScrims } from "./pages/AllScrims";

function App() {
  return (
    <Router>
      <FirestoreProvider databaseURL="" firebase={firebase} {...config}>

        <Switch>

          <Route path="/edit-official/:id">
            <EditOfficial />
          </Route>

          <Route path={`${pages.AddScrimPage}/:id`}>
            <NewScrimPage />
          </Route>

          <Route path={pages.AddOfficial}>
            <AddOfficial />
          </Route>

          <Route path={pages.AllOfficials}>
            <AllOfficials />
          </Route>

          <Route path={pages.TodaysScrims}>
            <TodaysScrimmages />
          </Route>

          <Route path="all-scrims">
            <AllScrims />
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
