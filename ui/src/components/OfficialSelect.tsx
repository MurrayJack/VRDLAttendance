import React from "react";
import "firebase/firestore";
import { useGet } from "./useQuery";
import { IOfficial } from "../typings";

interface IOfficialSelect {
    value: string;
    onChange: (val: string) => void;
}

export const OfficialSelect = ({ value, onChange }: IOfficialSelect) => {

    const { data, loading, ids } = useGet<IOfficial[]>("officials")

    return (
        <div>
            {loading
                ? <select><option>Loading ....</option></select>
                : <select value={value} onChange={e => onChange(e.target.value)}>
                    <option>- Select Official -</option>
                    {data!.map((e: any, i: any) => <option value={ids[i]}>{e.derbyName} ({e.name})</option>)}
                </select>

            }
        </div>
    );
};
