import "firebase/firestore";
import { useGet } from "./useQuery";

export const PositionsSelect = ({ value, onChange }: any) => {

    const { data, loading, ids } = useGet<any[]>("positions")

    return (
        <div>
            {loading
                ? <select><option>Loading ....</option></select>
                : <select value={value} onChange={e => onChange(e.target.value)}>
                    <option>- Select Position -</option>
                    {data!.map((e: any, i: any) => <option value={ids[i]}>{e.name}</option>)}
                </select>

            }
        </div>
    );
};
