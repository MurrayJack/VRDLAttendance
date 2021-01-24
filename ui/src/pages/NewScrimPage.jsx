import React, { useState } from "react";
import { Screen } from "../components/Screen";
import firebase from "firebase/app";
import "firebase/firestore";
import { FirestoreMutation } from "@react-firebase/firestore";
import { v4 as uuidv4 } from "uuid"
import { useHistory } from "react-router-dom";
import { AddPosition } from "../components/AddPosition";
import styled from "styled-components"

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
        <Screen allowBack caption="Add Scrim">
            <FirestoreMutation type="set" path={`/scrims/${uuidv4()}`}>
                {({ runMutation }) => (
                    <>

                        <input placeholder="Scrim Name" name="name" value={name} onChange={e => setName(e.target.value)} />


                        <h3>Current Positions</h3>

                        <table>
                            {officials.length > 0 && <thead>
                                <tr>
                                    <th>Official</th>
                                    <th>Position</th>
                                </tr>
                            </thead>}
                            <tbody>
                                {officials.map(e => <tr><td>{e.official}</td><td>{e.position}</td></tr>)}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={2}>
                                        {!adding && <button class="primary" type="button" onClick={() => showAdding(true)}>Add Official</button>}

                                        {adding && <AddPosition onCancel={() => showAdding(false)} onAccept={handleAddPosition} />}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>

                        <div style={{ height: "40px" }}></div>

                        <button onClick={() => handleSave(runMutation)} class="primary">Save Scrim</button>
                    </>
                )}
            </FirestoreMutation >
        </Screen>
    );
};
