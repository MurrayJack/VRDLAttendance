import React from "react";
import "firebase/firestore";
import { FirestoreCollection } from "@react-firebase/firestore";

export const PositionsList = () => {

    return (
        <>
            <FirestoreCollection path="/positions/" limitToFirst={20}>
                {d => {
                    return d.isLoading === true ? (
                        <>Loading</>
                    ) : (
                            <>
                                <div>
                                    <select>
                                        <option>- Select Position -</option>
                                        {d.value.map((e, i) => <option value={d.ids[i]}>{e.name}</option>)}
                                    </select>
                                </div>
                            </>
                        );
                }}
            </FirestoreCollection>
        </>
    );
};
