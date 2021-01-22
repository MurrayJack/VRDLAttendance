import React from "react";
import "firebase/firestore";
import { FirestoreMutation, FirestoreDocument } from "@react-firebase/firestore";
import { Screen, Stack, OfficialForm } from "../components";
import { useHistory, useParams } from "react-router-dom";

export const EditOfficial = () => {

    let { id } = useParams();
    const history = useHistory();

    return (
        <FirestoreDocument path={`/officials/${id}`}>
            {d => {
                return d.isLoading || !d.value
                    ? <>Loading</>
                    :
                    <Screen allowBack caption={`${d.value.derbyName}`}>
                        <FirestoreMutation type="set" path={`/officials/${id}`}>
                            {({ runMutation }) => (
                                <Stack gap="16px">
                                    <OfficialForm {...d.value} buttonCaption="Save" onClick={(e => runMutation(e).then(() => history.push("/")))} />
                                </Stack>

                            )}
                        </FirestoreMutation >
                    </Screen>;
            }}
        </FirestoreDocument>

    );
};
