import React, { useEffect } from "react";
import { HStack, Label, VStack } from "../components";
import { AddPosition } from "../components/AddPosition";
import { IScrim } from "../typings";
import firebase from "firebase/app";
import "firebase/firestore";
import { CgTrash } from "react-icons/cg";

export interface IScrimForm {
    id: string;
    onChange: (data: IScrim) => void;
    onComplete: () => void;
    onDelete: (id: string) => void;
    scrim: IScrim;
}

export const ScrimForm = ({ id, scrim, onChange, onComplete, onDelete }: IScrimForm) => {

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
        onChange(data)
    }

    const handleRemovePosition = (i: number) => {
        const newData = { ...data }
        newData.officials?.splice(i, 1);
        setData(newData)
        onChange(data)
    }

    const handleNoteChange = (value: string) => {
        data.notes = value;
        setData(data)
        onChange(data)
    }

    return (
        <VStack>
            <Label horizontal caption="Home Team">
                <p>{data.home}</p>
            </Label>

            <Label horizontal caption="Away Team">
                <p>{data.away}</p>
            </Label>

            <div style={{ height: "20px" }}></div>

            {data.officials && data.officials.length > 0 && <h3>Current Positions</h3>}

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
                        <td width="50%"><Viewer name="derbyName" subName="name" item={e.officialId} /></td>
                        <td width="50%"><Viewer name="name" item={e.positionId} /></td>
                        <td width="45px">
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

            <h3>Notes</h3>

            <textarea onChange={e => handleNoteChange(e.target.value)}>{data.notes}</textarea>

            <div style={{ height: "40px" }}></div>

            <button onClick={onComplete}>Done</button>

            <div style={{ height: "40px" }}></div>

            <button className="delete" onClick={() => onDelete(id)}>Delete</button>

        </VStack>
    );
};

interface IViewerProps {
    name: string;
    item: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
    subName?: string;
}

const Viewer = ({ item, name, subName }: IViewerProps) => {

    const [data, setData] = React.useState("");

    useEffect(() => {
        item.get().then(e => {
            if (subName) {
                setData(`${e.data()![name]} (${e.data()![subName]})`)
            } else {
                setData(e.data()![name])
            }
        })

    }, [item, name, subName])

    return <>{data}</>
}
