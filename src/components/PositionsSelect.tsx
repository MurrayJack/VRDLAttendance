import { FirestoreCollection } from "@react-firebase/firestore";
import "firebase/firestore";

interface IPositionsSelectProps {
    value: string;
    onChange: (val: string) => void;
}

export const PositionsSelect = ({ value, onChange }: IPositionsSelectProps) => {
    return (
        <FirestoreCollection path="positions" orderBy={[{ field: "order", type: "asc" }]}>
            {d => (
                d.isLoading
                    ? <select disabled><option>Loading ....</option></select>
                    : <select value={value} onChange={e => onChange(e.target.value)}>
                        <option>- Select Position -</option>
                        {d.value!.map((e: any, i: any) => <option value={d.ids[i]}>{e.name}</option>)}
                    </select>
            )}
        </FirestoreCollection>
    );
};
