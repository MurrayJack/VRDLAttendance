import React from "react";
import "firebase/firestore";
import { FirestoreCollection } from "@react-firebase/firestore";
import { Screen, Loading, VStack, LinkButton } from "../components";
import { useHistory } from "react-router-dom";
import { pages } from "./pages";

export const AllScrims = () => {

    const history = useHistory();

    return (
        <Screen allowBack caption="All Scrims">
           
        </Screen>
    );
};
