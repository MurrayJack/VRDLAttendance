import "firebase/firestore";
import { FirestoreCollection } from "@react-firebase/firestore";

interface IOfficialSelect {
    value: string;
    onChange: (val: string) => void;
}

export const OfficialSelect = ({ value, onChange }: IOfficialSelect) => {
    return (
        <FirestoreCollection path="officials" orderBy={[{ field: "name", type: "asc" }]}>
            {d => (
                d.isLoading
                    ? <select disabled><option>Loading ....</option></select>
                    : <select value={value} onChange={e => onChange(e.target.value)}>
                        <option>- Select Official -</option>
                        {d.value!.map((e: any, i: any) => <option value={d.ids[i]}>{e.derbyName} ({e.name})</option>)}
                    </select>
            )}
        </FirestoreCollection>
    );
};
