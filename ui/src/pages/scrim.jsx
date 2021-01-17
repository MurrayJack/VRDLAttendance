import React from "react";
import "firebase/firestore";
import { FirestoreMutation } from "@react-firebase/firestore";
import firebase from "firebase/app";
import { OfficialsList } from "../components/OfficialsList";

export const Scrim = () => {

    return (
        <FirestoreMutation type="set" path="/officials/G_K_5onxu">
            {({ runMutation }) => {
                return (
                    <div>
                        <h2>Add Scrim</h2>

                        <input />



                        <OfficialsList />

                        <button
                            onClick={() => {
                                runMutation({
                                    nowOnCli: Date.now(),
                                    nowOnServer: firebase.firestore.FieldValue.serverTimestamp()
                                }).then(res => {
                                    console.log("Ran mutation ", res);
                                });
                            }}
                        >
                            Add
                        </button>
                    </div>
                );
            }}
        </FirestoreMutation>
    );
};
