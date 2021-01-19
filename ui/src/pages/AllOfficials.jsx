import React from "react";
import "firebase/firestore";
import { FirestoreCollection } from "@react-firebase/firestore";
import { Screen } from "../components";

export const AllOfficials = () => {

    return (
        <Screen allowBack caption="All Officials">
            <FirestoreCollection path="/officials/" limitToFirst={2}>
                {d => {
                    return d.isLoading === true ? (
                        <pre>{JSON.stringify(d, null, 2)}</pre>
                    ) : (
                            <pre>{JSON.stringify(d, null, 2)}</pre>
                        );
                }}
            </FirestoreCollection>
        </Screen>
    );
};
