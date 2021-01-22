import React from "react";
import "firebase/firestore";
import { FirestoreMutation } from "@react-firebase/firestore";
import { Label } from "../components/Label";
import { v4 as uuidv4 } from "uuid"
import { Screen, Stack } from "../components";
import { useHistory } from "react-router-dom";

export const AddOfficial = () => {

    const [name, setName] = React.useState("")
    const [derbyName, setDerbyName] = React.useState("")
    const [vrdl, setVrdl] = React.useState("no")
    const [waver, setWaver] = React.useState("no")
    const history = useHistory();

    const handleSave = (mutation) => {
        const data = {
            name,
            derbyName,
            vrdl,
            waver
        }

        mutation(data).then(() => history.push("/"))
    }

    return (
        <Screen allowBack caption="Add Official">
            <FirestoreMutation type="set" path={`/officials/${uuidv4()}`}>
                {({ runMutation }) => {
                    return (

                        <Stack gap="16px">
                            <Label caption="Name">
                                <input name="name" onChange={e => setName(e.target.value)} value={name} />
                            </Label>

                            <Label caption="Derby Name">
                                <input name="legalName" onChange={e => setDerbyName(e.target.value)} value={derbyName} />
                            </Label>

                            <Label caption="VRDL official ?">
                                <select value={vrdl} onChange={e => setVrdl(e.target.value)}>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                            </Label>

                            <Label caption="Waver Explained ?">
                                <select value={waver} onChange={e => setWaver(e.target.value)}>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                            </Label>

                            <div style={{ height: "40px" }}></div>

                            <button onClick={() => handleSave(runMutation)}>Add Official</button>
                        </Stack>

                    );
                }}
            </FirestoreMutation >
        </Screen>
    );
};
