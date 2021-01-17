import React from "react";
import "firebase/firestore";
import { FirestoreCollection } from "@react-firebase/firestore";

export const OfficialsList = () => {

    return (
        <div>
            <FirestoreCollection path="/officials/" limitToFirst={20}>
                {d => {
                    return d.isLoading === true ? (
                        <>Loading</>
                    ) : (
                            <>
                                {/* <pre>{JSON.stringify(d.value, null, 2)}</pre> */}
                                {d.value.map(e => <button>{e.name} ()</button>)}
                            </>
                        );
                }}
            </FirestoreCollection>
        </div>
    );
};
