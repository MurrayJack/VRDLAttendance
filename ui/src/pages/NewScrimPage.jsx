import React, { useState } from "react";
import { PositionsList } from "../components/PositionsList";
import { Screen } from "../components/Screen";
import firebase from "firebase/app";
import "firebase/firestore";
import { FirestoreMutation } from "@react-firebase/firestore";
import { v4 as uuidv4 } from "uuid"
import { useHistory } from "react-router-dom";

export const NewScrimPage = () => {

    const history = useHistory();
    const [adding, showAdding] = useState(false)
    const [officials, setOfficials] = useState([{ official: "123", position: " 123" }])

    const handleSave = (e, mutation) => {
        e.preventDefault();
        const data = new FormData(e.target);

        var object = {
            date: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        data.forEach(function (value, key) {
            object[key] = value;
        });

        

        mutation(object).then(() => history.push("/"))
    }

    return (
        <FirestoreMutation type="set" path={`/scrims/${uuidv4()}`}>
            {({ runMutation }) => (
                <form onSubmit={e => handleSave(e, runMutation)}>
                    <Screen allowBack caption="Add Scrim">

                        <input required placeholder="Name" name="name" />

                        <button class="primary">Add Scrim</button>

                        <h3>Assign Positions</h3>

                        <button type="button" onClick={() => showAdding(true)}>Add Officials</button>

                        {adding && <>
                            <select required placeholder="Official" name="official" />

                            <select required placeholder="Position" name="position" />

                            <button>ok</button>

                            <button onClick={() => showAdding(false)} type="button">Cancel</button>
                        </>}

                        <h3>Current Positions</h3>

                        {JSON.stringify(officials)}

                    </Screen>
                </form>
            )}
        </FirestoreMutation >
    );
};
