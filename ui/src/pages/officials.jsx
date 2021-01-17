import React from "react";
import "firebase/firestore";
import {
    FirestoreCollection,
    FirestoreProvider
} from "@react-firebase/firestore";


export const Officials = () => {

    return (
        <FirestoreCollection path="/officials/" limitToFirst={2}>
            {d => {
                return d.isLoading === true ? (
                    <pre>{JSON.stringify(d, null, 2)}</pre>
                ) : (
                        <pre>{JSON.stringify(d, null, 2)}</pre>
                    );
            }}
        </FirestoreCollection>
    );
};
