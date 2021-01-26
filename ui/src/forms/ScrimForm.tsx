import React, { useEffect } from "react";
import { Label, VStack } from "../components";
import { AddPosition } from "../components/AddPosition";
import { IScrim } from "../typings";
import firebase from "firebase/app";
import "firebase/firestore";
import { CgTrash } from "react-icons/cg";

export interface IScrimForm {
    onSave: (data: IScrim) => void;
    scrim: IScrim;
}

export const ScrimForm = ({ scrim, onSave }: IScrimForm) => {

    const db = firebase.firestore();

    const [adding, showAdding] = React.useState(false)

    const [data, setData] = React.useState({
        officials: [],
        ...scrim
    })

    const handleAddPosition = (officialId: string, positionId: string) => {
        data.officials!.push({
            officialId: db.doc(`officials/${officialId}`),
            positionId: db.doc(`positions/${positionId}`)
        })

        setData(data)
        showAdding(false)
    }

    const handleRemovePosition = (i: number) => {
        const newData = { ...data }
        newData.officials?.splice(i, 1);
        setData(newData)
    }

    const handleOnSave = () => {
        onSave(data);
    }

    return (
        <VStack>
            <Label horizontal caption="Home Team">
                <p>{data.home}</p>
            </Label>

            <Label horizontal caption="Away Team">
                <p>{data.away}</p>
            </Label>

            <h3>Current Positions</h3>

            <table>
                {data.officials && data.officials.length > 0 && <thead>
                    <tr>
                        <th>Official</th>
                        <th>Position</th>
                        <th></th>
                    </tr>
                </thead>}
                <tbody>
                    {data.officials!.map((e, i) => <tr key={`${e.officialId.id}${e.positionId.id}`}>
                        <td width="50%"><Viewer name="derbyName" item={e.officialId} /></td>
                        <td width="50%"><Viewer name="name" item={e.positionId} /></td>
                        <td width="40px">
                            <button onClick={() => handleRemovePosition(i)}>
                                <CgTrash />
                            </button>
                        </td>
                    </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>
                            {!adding && <button className="primary" type="button" onClick={() => showAdding(true)}>Add Official</button>}

                            {adding && <AddPosition onCancel={() => showAdding(false)} onAccept={handleAddPosition} />}
                        </td>
                    </tr>
                </tfoot>
            </table>

            <div style={{ height: "40px" }}></div>

            <button onClick={handleOnSave}>Save Scrim</button>

        </VStack>
    );
};


const Viewer = ({ item, name }: { name: string, item: firebase.firestore.DocumentReference<firebase.firestore.DocumentData> }) => {

    const [data, setData] = React.useState("");

    useEffect(() => {
        item.get().then(e => setData(e.data()![name]))


    }, [])

    return <>{data}</>
}

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