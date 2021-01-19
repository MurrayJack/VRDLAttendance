import React, { useState } from "react";
import { Screen } from "../components/Screen";
import firebase from "firebase/app";
import "firebase/firestore";
import { FirestoreMutation } from "@react-firebase/firestore";
import { v4 as uuidv4 } from "uuid"
import { useHistory } from "react-router-dom";
import { AddPosition } from "../components/AddPosition";

export const NewScrimPage = () => {

    const history = useHistory();
    const [adding, showAdding] = useState(false)
    const [officials, setOfficials] = useState([])
    const [name, setName] = useState("")

    const handleSave = (mutation) => {

        const object = {
            positions: officials,
            name: name,
            date: firebase.firestore.FieldValue.serverTimestamp()
        }

        mutation(object).then(() => history.push("/"))
    }

    const handleAddPosition = (official, position) => {
        officials.push({ official, position });
        setOfficials(officials)
        showAdding(false)
    }

    return (
        <FirestoreMutation type="set" path={`/scrims/${uuidv4()}`}>
            {({ runMutation }) => (
                <Screen allowBack caption="Add Scrim">

                    <input placeholder="Name" name="name" value={name} onChange={e => setName(e.target.value)} />

                    <h3>Assign Positions</h3>

                    <button type="button" onClick={() => showAdding(true)}>Add Position</button>

                    {adding && <AddPosition onCancel={() => showAdding(false)} onAccept={handleAddPosition} />}

                    <h3>Current Positions</h3>

                    <table>
                        <thead>
                            <td>Official</td>
                            <td>Position</td>
                        </thead>
                        <tbody>
                            {officials.map(e => <tr><td>{e.official}</td><td>{e.position}</td></tr>)}
                        </tbody>
                    </table>

                    <button onClick={() => handleSave(runMutation)} class="primary">Add Scrim</button>
                </Screen>
            )}
        </FirestoreMutation >
    );
};

