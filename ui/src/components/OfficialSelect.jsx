import React from "react";
import "firebase/firestore";
import { FirestoreCollection } from "@react-firebase/firestore";

export const OfficialSelect = ({value, onChange}) => {

    return (
        <FirestoreCollection path="/officials/" limitToFirst={20}>
            {d => {
                return d.isLoading === true ? (
                    <>Loading</>
                ) : (
                        <div>
                            <select value={value} onChange={e => onChange(e.target.value)}>
                                <option>- Select Official -</option>
                                {d.value.map((e, i) => <option value={d.ids[i]}>{e.name}</option>)}
                            </select>
                        </div>
                    );
            }}
        </FirestoreCollection>
    );
};
