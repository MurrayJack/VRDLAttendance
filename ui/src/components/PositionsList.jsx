import React from "react";
import "firebase/firestore";
import { FirestoreCollection } from "@react-firebase/firestore";
import { LinkButton } from "./LinkButton";

export const PositionsList = () => {

    return (
        <>
            <FirestoreCollection path="/positions/" limitToFirst={20}>
                {d => {
                    return d.isLoading === true ? (
                        <>Loading</>
                    ) : (
                            <>
                                {/* <pre>{JSON.stringify(d.value, null, 2)}</pre> */}
                                {d.value.map(e => <LinkButton>{e.name} () &gt;</LinkButton>)}
                            </>
                        );
                }}
            </FirestoreCollection>
        </>
    );
};
