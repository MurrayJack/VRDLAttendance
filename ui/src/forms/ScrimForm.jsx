import React from "react";
import { Label, Stack } from "../components";

export const ScrimForm = ({ home, away, officials = [], onSave }) => {

    const [data, setData] = React.useState({
        home, 
        away, 
        officials,
    })

    const handleOnSave = () => {
        onSave();
    }

    return (
        <Stack gap="16px">
            <Label caption="Home Team">
                <input value={home} />
            </Label>

            <Label caption="Away Team">
                <input value={away} />
            </Label>

            <h3>Current Positions</h3>

            <table>
                {officials && officials.length > 0 && <thead>
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
                            {/* {!adding && <button class="primary" type="button" onClick={() => showAdding(true)}>Add Official</button>} */}

                            {/* {adding && <AddPosition onCancel={() => showAdding(false)} onAccept={handleAddPosition} />} */}
                        </td>
                    </tr>
                </tfoot>
            </table>

            <div style={{ height: "40px" }}></div>

            <button onClick={handleOnSave} class="primary">Save Scrim</button>

        </Stack>
    );
};


{/* <FirestoreMutation type="set" path={`/scrims/${uuidv4()}`}>
                {({ runMutation }) => (
                    <>

                        <input placeholder="Scrim Name" name="name" value={name} onChange={e => setName(e.target.value)} />
                        
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
            </FirestoreMutation > */}


                // const history = useHistory();
    // const [adding, showAdding] = useState(false)
    // const [officials, setOfficials] = useState([])
    // const [name, setName] = useState("")

    // const handleSave = (mutation) => {

    //     const object = {
    //         positions: officials,
    //         name: name,
    //         date: firebase.firestore.FieldValue.serverTimestamp()
    //     }

    //     mutation(object).then(() => history.push("/"))
    // }

    // const handleAddPosition = (official, position) => {
    //     officials.push({ official, position });
    //     setOfficials(officials)
    //     showAdding(false)
    // }